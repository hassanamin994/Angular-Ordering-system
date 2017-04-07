import { Injectable, EventEmitter} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { ApiRouterService } from '../api-router.service';
import 'rxjs/Rx';

@Injectable()
export class GroupsService {
  headers: Headers ;
  refreshGroups = new EventEmitter<number>(); 
  constructor(private http: Http, private apiRouter: ApiRouterService) { 
    this.headers = new Headers() ;
    this.headers.append('Content-Type','application/json');

  }

  getGroups(){
  	return this.http.get(this.apiRouter.getGroupsRoute())
            .map(
                (response: Response) => response.json() 

              ) ;
  }

  addGroup(group: any){
    let groupObj = JSON.stringify(group) ;
    console.log(groupObj)
    return this.http.post(this.apiRouter.getGroupsRoute(),groupObj, { headers: this.headers })
            .map(
                (response: Response) => response.json()
              );
  }

  deleteGroup(id: number){
  	return this.http.delete(this.apiRouter.getGroupsRoute()+"/"+id, { headers: this.headers })
            .map(
                (response: Response) => response.json() 
              );
  }

  updateGroup(id: number, name: string, members: Array<Object>){
  	return ;
  }
}
