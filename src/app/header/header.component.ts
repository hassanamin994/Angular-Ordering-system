import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications/notifications.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NotificationsService]
})
export class HeaderComponent implements OnInit {
  username = "";
  noOfNotifications = 0;
  constructor(private notificationsService: NotificationsService) {
    // this.notificationsService.join()
    this.notificationsService.getNotification().subscribe((data)=>{
      this.noOfNotifications++;
      console.log('increase notifications')
    },(err)=>{
      console.log('error notification')
      console.log(err)
    })
    // this.username = "Hassan Mohammed";
  	// this.noOfNotifications = 2 ;
  }

  ngOnInit() {
  }
  showNotifications(){
  	this.noOfNotifications = 0 ;
  }

}
