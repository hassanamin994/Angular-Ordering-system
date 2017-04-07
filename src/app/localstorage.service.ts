import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
  
  constructor() { }
  public setAccessToken(token: string){
  	localStorage.setItem('access_token', token) ;
  }
  public getAccessToken(){
  	return localStorage.getItem('access_token') ;
  }
  public removeAccessToken(){
  	if(localStorage.getItem('access_token')){
  		localStorage.removeItem('access_token');
  	}
  }
  public setData(data: any){
  	localStorage.setItem('data',JSON.stringify(data));
  }
  public getData(){
  	return JSON.parse(localStorage.getItem('data')) ;
  }
  public isLoggedIn(){
    return localStorage.getItem('access_token') != null ;
  }
}
