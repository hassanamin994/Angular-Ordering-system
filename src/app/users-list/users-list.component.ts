import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users = []
  constructor() { }

  ngOnInit() {
  }

  removeUser(id: number){
  	for(var i = 0; i<this.users.length; i++ ){
  		if(this.users[i].id == id ){
  			this.users.splice(i,1);
  		}
  	}
  }

}
