import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { User } from '../User';
import 'rxjs/Rx';

@Injectable()
export class RegisterationService {

  constructor(private http: Http ) { }

  register(user: any){
  	// to be implemented 
  	let registerURL = "http://localhost:8090/auth/register" ;
	const userStringified = JSON.stringify(user); 
	const headers = new Headers() ;
	headers.append('Content-Type','application/json');
  	console.log(userStringified);
  	return this.http.post(registerURL, userStringified, { headers: headers })
  			.map((data: Response) => data.json());
  }
}
