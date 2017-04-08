import { Injectable } from '@angular/core';

@Injectable()
export class ApiRouterService {
  private auth = { 
		registeration: "http://localhost:8090/auth/register",
		login: "http://localhost:8090/auth/login"
	} 
  private users = "http://localhost:8090/user"
  private groups = "http://localhost:8090/group";
  private orders = "http://localhost:8090/order";
  constructor() { }

  private friends = "http://localhost:8090/friends"
	public getRegisterationRoute(){
		return this.auth.registeration ;
	}
	public getLoginRoute(){
		return this.auth.login;
	}
	
	public getGroupsRoute(){
		return this.groups;
	}

	public getFriendsRoute(){
		return this.friends;
	}
	public getUsersRoute(){
		return this.users;
	}
	public getOrdersRoute(){
		return this.orders;
	}
}
