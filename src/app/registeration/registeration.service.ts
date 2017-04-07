import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { User } from '../User';
import 'rxjs/Rx';

import { ApiRouterService } from '../api-router.service';
@Injectable()
export class RegisterationService {

  constructor(private http: Http, private apiRouter: ApiRouterService) { }

  register(user: any){
  let registerURL =  this.apiRouter.getRegisterationRoute();

	const userStringified = JSON.stringify(user); 
	const headers = new Headers() ;
	headers.append('Content-Type','application/json');
  	console.log(userStringified);
  	return this.http.post(registerURL, userStringified, { headers: headers })
  			.map((data: Response) => data.json());
  }
}
