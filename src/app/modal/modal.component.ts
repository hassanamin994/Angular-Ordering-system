import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title:string = "" ;
  @Input() modalLinkTitle:string = "" ;
  @Input() membersSource = [] ; 
  @Input() buttonName = "";
  @Output() removeUserEmitter: EventEmitter<any> = new EventEmitter(); 
  
  constructor() { }

  ngOnInit() {
  }

  removeUser(id: any){
  	this.removeUserEmitter.emit(id);
  }
}
