import { Injectable } from '@angular/core';
import { ApiRouterService } from './api-router.service';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class UsersService {
  access_token: string; 
  options: RequestOptions ;

  constructor(private http: Http, private apiRouter: ApiRouterService,  private localStorageService: LocalstorageService) {
  	this.access_token = this.localStorageService.getAccessToken();
    const headers = new Headers() ;
    headers.append('Content-Type','application/json');
    headers.append('Authorization',this.access_token);
    this.options = new RequestOptions({headers: headers});

   }
  getUsers(){
  	return this.http.get(this.apiRouter.getUsersRoute()+"/search/email/@")
  			.map(
  				(users: Response) => users.json()
  				);
  }
}
