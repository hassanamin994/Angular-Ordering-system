import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../friends/friends.service';
import { GroupsService } from '../../groups/groups.service' ;
import { OrdersService } from '../orders.service' ;
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'], 
  providers: [FriendsService, GroupsService, OrdersService ]
})
export class AddOrderComponent implements OnInit {
	friend: boolean = false ;
	group: boolean = false ;

	friendsList: Array<any> = [] ;
	groupsList: Array<any> = [] ;

	order = {
		for: 'Lunch',
		resturantname: '',
		invite: '',
		members: ''		
	}
	errors: Array<any> = [] ;
	constructor(private friendsService: FriendsService, private groupsService: GroupsService, private ordersService: OrdersService) { }

	ngOnInit() {
	}
	
	loadFriends(){
		this.friendsService.getFriends().subscribe(
				(friends: any) => {
					console.log(friends);
					if(friends.status){
						this.friendsList = friends.friends.friends
					}
				}
			)	
	}

	loadGroups(){
		this.groupsService.getGroups().subscribe(
			(groups: any) => {
				console.log(groups);
				if(groups.status){
					// user can only invite people in groups he created 
					this.groupsList = groups.ownedGroups ; 
				}
			}
		)	

	}
	selectedType(type: string){
		switch(type){
			case 'user': 
				this.friend = true ;
				this.group = false ;
				this.loadFriends() ;
				this.order.members="";
			break ; 

			case 'group' :
				this.friend = false ;
				this.group = true; 
				this.loadGroups() ;
				this.order.members="";
			break ; 
		}
	}

	onSubmit(){
		// clear the errors array 
		this.errors = [] ;
 

		// form validation 
		for (var property in this.order) {
		    if (this.order.hasOwnProperty(property)) {
		    	if(this.order[property].trim() == ""){
		    		this.errors.push(property + " Cannot be Empty ") ;
		    	}
		    }
		}

		if(this.errors.length == 0 ){
			// get the selected id for group or friend/user
			let selectedId ; 
			if(this.order.invite == 'user'){
				for( let i = 0 ; i < this.friendsList.length; i++ ){
					if(this.order.members == this.friendsList[i].email)
						selectedId =  this.friendsList[i]._id ;
				}
			}else{
				for( let i = 0 ; i < this.groupsList.length; i++ ){
					if(this.order.members == this.groupsList[i].name)
						selectedId =  this.groupsList[i]._id ;
				}				
			}

			// submit the form 
			let orderObj = { 
				name: this.order.for,
				restaurant: this.order.resturantname,
				invited_type: this.order.invite ,
				invited_id: selectedId
			 }
			 		console.log('order obj', orderObj);
			this.ordersService.addOrder(JSON.stringify(orderObj)).subscribe(
				(response: any) =>{
					console.log(response);
				}

				);
		}

	}
}
