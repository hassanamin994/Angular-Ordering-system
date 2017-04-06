import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewGroupUsersService } from '../new-group-users.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<any> = [];
  @Input() buttonName: string ; 
  constructor(private groupUserService: NewGroupUsersService) { }

  ngOnInit() {
    this.groupUserService.pushedUsers.subscribe(
        (user) => {
          this.users = this.groupUserService.users;
        }
      );
    this.groupUserService.removedUsers.subscribe(
        (id: number) => {
          this.users = this.groupUserService.users;
        }
      );
  }

}
