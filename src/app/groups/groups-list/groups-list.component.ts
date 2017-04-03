import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
  groups = [
  	{name:"group 1",id:"1"},
  	{name:"group 2",id:"2"},
  	{name:"group 3",id:"3"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
