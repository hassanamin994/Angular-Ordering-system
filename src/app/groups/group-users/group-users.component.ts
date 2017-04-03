import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.component.html',
  styleUrls: ['./group-users.component.css']
})
export class GroupUsersComponent implements OnInit {
  users = [
  	{name:"user 1 ", image:"", id: 1},
   	{name:"user 2 ", image:"", id: 2},
   	{name:"user 3 ", image:"", id: 3},
   	{name:"user 4 ", image:"", id: 4}
  ]
  constructor() { }

  ngOnInit() {
  }
  addUser(user: any){
  	this.users.push({ name:user.value, image:"", id:5 })
  }
}
