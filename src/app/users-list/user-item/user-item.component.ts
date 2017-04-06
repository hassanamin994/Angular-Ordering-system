import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { NewGroupUsersService } from '../../new-group-users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user ;
  @Input() buttonName: string ;
  constructor(private groupUserService: NewGroupUsersService) { }

  ngOnInit() {
  }

  removeUser(id: number){
  	this.groupUserService.removeUser(id);
  }

}
