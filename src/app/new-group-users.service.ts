import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NewGroupUsersService {
  users: Array<any> = [] ;
  pushedUsers = new EventEmitter<Object>() ;
  removedUsers = new EventEmitter<Object>() ;
  searchUser = new EventEmitter<Object>() ;
  refreshUsers = new EventEmitter<any>();
  constructor() { }
  addUser(user: any){
  	for(let i = 0; i<this.users.length; i++){
      if(this.users[i].id == user.id){
        return
      }
    }

    this.users.push(user);
  	this.pushedUsers.emit(user);

    // console.log(this.users);
  }
  setUsers(users: any){
    this.users = users ;
    this.refreshUsers.emit(1);
  }
  removeUser(id: number){
  	for(var i = 0; i<this.users.length; i++ ){
  		if(this.users[i]._id == id ){
  			this.users.splice(i,1);
  		}
  	}
  	this.removedUsers.emit(id);
  }
  keyDown(user: any){
    this.searchUser.emit(user);
  }
  getUsersIds(){
    let usersArray = [] ;
    this.users.forEach(function(user){
      usersArray.push(user.id);
    });
    return usersArray;
  }
}
