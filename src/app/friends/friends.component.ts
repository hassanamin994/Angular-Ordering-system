import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends.service';
import { UsersService } from '../users.service';
import { NewGroupUsersService } from '../new-group-users.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [FriendsService, UsersService]
})
export class FriendsComponent implements OnInit {
  usersGroupTitle: string = "Your Friend Name";
  usersGroupButton: string = "unfriend";
  allUsers = [] 
  myFriends = [] ; 
  constructor(private friendsService: FriendsService, private usersService: UsersService,private groupUsersService: NewGroupUsersService) { }

  ngOnInit() {
  	this.friendsService.getFriends().subscribe(
  		(friends: any) => {
  			console.log(friends);
  		}

  		);
  	this.usersService.getUsers().subscribe(
  		(users: any) => {
      	this.allUsers=users;
        // console.log(users);
  		}

  		);

      // this.groupUsersService.removedUsers.subscribe(
      //     (id: any) => {
      //       console.log(id); 
      //       this.friendsService.removeFriend(id).subscribe(
      //           (response: any)=>{
      //             console.log(response);
      //           }
      //         );           
      //     }
      //   );
      this.groupUsersService.pushedUsers.subscribe(
          (user: any) => {
            // add to friends by id 
            this.friendsService.addFriend(user.id).subscribe(
                (response: any) =>{
                  console.log(response);
                }

              );
          }
        );



  }


}
