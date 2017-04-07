import { Component, OnInit } from '@angular/core';
import { GroupsService } from './groups.service';
import { NewGroupUsersService } from '../new-group-users.service';
import { FriendsService } from '../friends/friends.service';
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  providers:[GroupsService, NewGroupUsersService, FriendsService]
})
export class GroupsComponent implements OnInit {
  usersGroupTitle: string = "Your Friend Name";
  usersGroupButton: string = "remove";
  groupName: string = "";
  validGroupName: boolean = true ; 
  validFriendList: boolean = true ;
  friendsList = []  ;
  constructor(private groupUsersService: NewGroupUsersService, private groupService: GroupsService, private friendsService: FriendsService) { }

  ngOnInit() {
    this.groupService.getGroups().subscribe(

      (data: any) => console.log(data)

      );
    this.friendsService.getFriends().subscribe(

        (friends: any) => this.friendsList = friends.friends.friends 

      );
  }
  addGroup(){
  	this.groupName = this.groupName.trim();

    	// check if users array has no members 
   	if(this.groupUsersService.users.length == 0 ){
   		console.log("Enter at least one friend");
   		this.validFriendList = false ;
   	}else{
   		this.validFriendList = true ;
   	}
   	
    	// check if group name is empty 
   	if(this.groupName.length == 0){
   		this.validGroupName = false ;
   	}else{
   		this.validGroupName = true ;
   	}
  	
  	if(this.validGroupName && this.validFriendList){
      let groupObj = {group_name: this.groupName, members: this.groupUsersService.getUsersIds()}
      console.log(groupObj);
  		this.groupService.addGroup(groupObj).subscribe(
         (response: any) => {
           console.log(response);
         }
        );
  	}
  }

}
