import { Injectable } from '@angular/core';
import { ApiRouterService } from './api-router.service';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';

@Injectable()
export class UsersService {

  constructor(private http: Http, private apiRouter: ApiRouterService) { }
  getUsers(){
  	return this.http.get(this.apiRouter.getUsersRoute()+"/search/email/@")
  			.map(
  				(users: Response) => users.json()
  				);
  }
}
