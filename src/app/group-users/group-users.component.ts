import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { NewGroupUsersService } from '../new-group-users.service';
@Component({
  selector: 'app-group-users',
  templateUrl: './group-users.component.html',
  styleUrls: ['./group-users.component.css'],
})
export class GroupUsersComponent implements OnInit {
  @Input() title: string; 
  @Input() buttonName: string;
  @Input() usersSource =  [] ;
  constructor(private groupUserService: NewGroupUsersService) { }

  ngOnInit() {

    
  }
  addUser(user: any){

    let selectedId: string ;
    let selectedImg: string = ""; 
    for( let i = 0; i < this.usersSource.length ; i++ ){
      if(this.usersSource[i].email == user.value){
        selectedId = this.usersSource[i]._id ;
        console.log(selectedId)
        // add selected image when implemented in backend 
      }
    }
    let userObj = { name:user.value, image:selectedImg, _id:selectedId };
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
