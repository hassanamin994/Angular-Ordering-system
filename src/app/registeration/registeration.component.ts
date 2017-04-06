import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { RegisterationService } from './registeration.service';
import { Response } from '@angular/http';
import { Router} from '@angular/router';
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
  errors = [] ;
  success_message : string = "" ;
  constructor(private registerationService: RegisterationService, private router: Router) {
   }

  ngOnInit() {
  }
  onSubmit(){
    if(this.user.name != "" && emailValidator(this.user.email) && this.user.password == this.user.confirm_password ){
      let userObj = {"name": this.user.name, "email": this.user.email, "password": this.user.password, 'repassword': this.user.confirm_password };
      this.registerationService.register(userObj).subscribe(
        (response: any) => {
          // if any errors occured view them to user
          if(!response.loggedIn){
            this.errors = response.errors;
          }else{
            // if successfully registere, redirect to login page 
            this.success_message = "Registered Successfully!\n Redirecting...";
            this.errors = [] ;
            setTimeout(() => this.router.navigate(['/login']) ,2000);
          }
        } 
        ) ; 
    }else{
      console.log('invalid')
    }
  }

}
function emailValidator(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
}
function validateEmail(email){
  if(!emailValidator(email.value)){
    email.valid = false ;
  }
}