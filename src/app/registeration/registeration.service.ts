import { Injectable } from '@angular/core';
import { User } from '../User';
@Injectable()
export class RegisterationService {

  constructor() { }

  register(user: User){
  	// to be implemented 


  	return {'status':true,'message':"Successfully Registered"}
  }
}
