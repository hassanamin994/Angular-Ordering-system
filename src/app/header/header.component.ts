import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LocalstorageService } from '../localstorage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = "";
  noOfNotifications = 0;
  constructor(private router: Router, private localStorageService: LocalstorageService) {
  	this.username = "Hassan Mohammed";
  	this.noOfNotifications = 2 ;
   }

  ngOnInit() {
  }
  showNotifications(){
  	this.noOfNotifications = 0 ;
  }
  logout(){
    console.log('logout');
    console.log(this.localStorageService.isLoggedIn());
    this.localStorageService.removeStoredData() ;
    this.router.navigate(['/login'])
     
  }
}
