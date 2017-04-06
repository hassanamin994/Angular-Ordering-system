import { Injectable } from '@angular/core';

@Injectable()
export class GroupsService {

  constructor() { }

  getGroups(){
  	return  ;
  }

  addGroup(name: string, members: Array<Object>){
  	console.log(name, members);
  }

  removeGroup(id: number){
  	return ;
  }

  updateGroup(id: number, name: string, members: Array<Object>){
  	return ;
  }


}
