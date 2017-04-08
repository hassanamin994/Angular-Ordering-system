import { Component, OnInit } from '@angular/core';
//import orders service
@Component({
  selector: 'app-last-orders-list',
  templateUrl: './last-orders-list.component.html',
  styleUrls: ['./last-orders-list.component.css']
})
export class LastOrdersListComponent implements OnInit {
  lastOrders: Array<any>  ;
  constructor() { }

  ngOnInit() {
    this.setLastOrders();
  }
  setLastOrders(){
    //get last 5 orders from database using ordersService
    this.lastOrders = [{name:"breakfast",restaurant:"Hamza",date:Date.now()},{name:"lunch",restaurant:"Mac"}];
  }
}
