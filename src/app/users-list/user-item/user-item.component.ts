import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user ;
  @Output() userRemove = new EventEmitter<number>() ;
  constructor() { }

  ngOnInit() {
  }
  removeUser(id: number){
  	this.userRemove.emit(id);
  }

}
