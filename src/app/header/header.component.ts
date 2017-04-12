import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = "";
  noOfNotifications = 0;
  constructor() {
  	this.username = "Hassan Mohammed";
  	this.noOfNotifications = 2 ;
   }

  ngOnInit() {
  }
  showNotifications(){
  	this.noOfNotifications = 0 ;
  }

}
