import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.css']
})
export class MealsListComponent implements OnInit {
  @Input() mealsList = [] ; 

  constructor() { }

  ngOnInit() {
  	console.log(this.mealsList);
  }

}
