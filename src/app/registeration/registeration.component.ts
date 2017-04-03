import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegisterationService } from './registeration.service';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css'],
  providers:[ RegisterationService ]
})
export class RegisterationComponent implements OnInit {
  submitted = false ; 
  user = {
    name:"",
    email:"",
    password:"",
    confirm_password:"" 
  };
  constructor(private registerationService: RegisterationService) {
   }

  ngOnInit() {
  }
  onSubmit(){
    if(this.user.name != "" && validateEmail(this.user.email) && this.user.password == this.user.confirm_password ){
       let userObj = new User(this.user.name,this.user.email,this.user.password,[]); 
      let req = this.registerationService.register(userObj).status ; 
      // if(req.status){
          // execute login service 
      // }
    }else{
      console.log('invalid')
    }
  }

}
function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
}