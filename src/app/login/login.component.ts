import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ;
  password: string ; 
  form: any;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any){
  	console.log('submitted',this.form);
  }
  loginFacebook(input: any){
    console.log('login facebook', );

  }
  loginGoogle(input: any){
    console.log('login facebook', );

  }
}
