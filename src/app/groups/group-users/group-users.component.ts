import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { NewGroupUsersService } from '../../new-group-users.service';
@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.component.html',
  styleUrls: ['./group-users.component.css'],
})
export class GroupUsersComponent implements OnInit {
  @Input() title: string; 
  @Input() buttonName: string;
  constructor(private groupUserService: NewGroupUsersService) { }

  ngOnInit() {
  }
  addUser(user: any){
    let userObj = { name:user.value, image:"", id:Math.random()*10 };
  	this.groupUserService.addUser(userObj);
  }

  keyDown(user: any){
    
    // search for friends on key down
    user = user.value.trim() ;
    if(user.length != 0 ){
      console.log(user);
      this.groupUserService.keyDown(user);
    }
  }
}
