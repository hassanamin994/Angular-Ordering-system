import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService } from '../../localstorage.service';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {
  @Input() group : any ; 
  @Input() hiddenControls: boolean = true ;
  constructor(private groupService: GroupsService, private localStorageService: LocalstorageService) { }

  ngOnInit() {
  }

  viewGroup(g: number){
    console.log('edit/view',g)
  }
  deleteGroup(g: number){
  	this.groupService.deleteGroup(g).subscribe(
      (response:any )=> {
        console.log(response);
        if(response.status){
          this.groupService.refreshGroups.emit(1);
        }
      }
    );
  }

}
