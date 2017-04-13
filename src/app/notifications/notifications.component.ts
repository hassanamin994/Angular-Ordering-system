import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [NotificationsService]
})
export class NotificationsComponent implements OnInit {
  notifications = []
  constructor(private notificationsService: NotificationsService) {

  }

  ngOnInit() {
    this.notificationsService.join("58e235e67a12b018feb4d862")
    this.notificationsService.getNotification();
  }
  invite(){
    this.notificationsService.sendInvitation({user_id:"58e235e67a12b018feb4d862",orderID:"58e4e4f348433e4958d2c38f",users:["58e235e67a12b018feb4d863","58e235e67a12b018feb4d864"]})
  }
}
