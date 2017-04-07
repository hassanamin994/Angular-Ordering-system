import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { ApiRouterService } from '../api-router.service';
import 'rxjs/Rx';

@Injectable()
export class GroupsService {

  constructor(private http: Http, private apiRouter: ApiRouterService) { }

  getGroups(){
  	return this.http.get(this.apiRouter.getGroupsRoute())
            .map(
                (response: Response) => response.json() 

              ) ;
  }

  addGroup(group: any){
    let groupObj = JSON.stringify(group) ;
    console.log(groupObj)
    const headers = new Headers() ;
    headers.append('Content-Type','application/json');
    return this.http.post(this.apiRouter.getGroupsRoute(),groupObj, { headers: headers })
            .map(
                (response: Response) => response.json()
              );
  }

  removeGroup(id: number){
  	return ;
  }

  updateGroup(id: number, name: string, members: Array<Object>){
  	return ;
  }
}
