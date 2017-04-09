import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../../friends/friends.service';
import { GroupsService } from '../../groups/groups.service' ;
import { OrdersService } from '../orders.service' ;
import { FileToBase64Service } from '../../file-to-base64.service';
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
		menu: '',
		invite: '',
		members: ''		
	}
	errors: Array<any> = [] ;
	constructor(private fileToBase64Service: FileToBase64Service, private friendsService: FriendsService, private groupsService: GroupsService, private ordersService: OrdersService) {
		this.fileToBase64Service.fileToBase64Event.subscribe(
				(base64Format: any) => {this.order.menu = base64Format ;console.log(this.order);}
			)
	}

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
	selectMenu(input: any){
		let allowed_extensions = ['image/jpeg','image/png','image/jpg'] ;
		let file = input.files[0]; 
		if(allowed_extensions.indexOf(file.type) != -1 ){
			this.fileToBase64Service.convert(file);
			this.errors = [] ;
		}
		else
			this.errors.push("Only images with png, jpeg, jpg extensions are allowed");
	}
	getSelectedID(){
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
		return selectedId ;
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
			let selectedId = this.getSelectedID();
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
				if(!response.status){
					this.errors = response.errors ;
				}
			});
		}

	}
}
