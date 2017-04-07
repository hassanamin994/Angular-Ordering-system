import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { ApiRouterService } from '../api-router.service';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  constructor(private http: Http,private apiRouter: ApiRouterService ) { }

  login(email: string, password: string){
	let registerURL =  this.apiRouter.getLoginRoute();
	let user = {email: email, password: password};
	const userStringified = JSON.stringify(user); 
	const headers = new Headers() ;
	headers.append('Content-Type','application/json');
  	console.log(userStringified);
  	return this.http.post(registerURL, userStringified, { headers: headers })
  			.map((data: Response) => data.json());
  }
  
}
