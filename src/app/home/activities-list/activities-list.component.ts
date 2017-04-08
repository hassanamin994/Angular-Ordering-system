import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  activities: Array<any>;
  constructor() { }

  ngOnInit() {
    this.setActivities();
  }
  setActivities(){
    //get last 10 activities from database
    this.activities = [{restaurant:"Mac",owner:"Ahmed"},{restaurant:"Prego",owner:"Hassan"}]
  }
}
