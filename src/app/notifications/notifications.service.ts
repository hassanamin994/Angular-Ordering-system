import { Injectable } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import { HeadersClass } from './../headers';
import { ApiRouterService } from './../api-router.service';
import { LocalstorageService } from './../localstorage.service';
import {Observable} from "rxjs";
import * as io from 'socket.io-client';

@Injectable()
export class NotificationsService extends HeadersClass{
  private url = 'http://localhost:8090';
  private socket;

  constructor(private http: Http, private apiRouter: ApiRouterService) {
  	super() ;
    this.socket = io(this.url);

  }
  notify(obj){ this.socket.emit('notify', obj) }
  disconnect(user_id){ this.socket.emit('disconnect', user_id) }
  join(user_id){ this.socket.emit('join', user_id) }
  respondeInvitation(obj){ this.socket.emit('respondeInvitation', obj) }

  sendInvitation(obj){
    this.notify(obj)
  }
  getNotification() {
     let observable = new Observable(observer => {
        this.socket.on('Invite_user', (data) => {
            console.log(data)
            observer.next(data);
          });
        return () => {
          this.socket.disconnect();
          };
      })
      return observable;
  }
  getAllNotifications(){
    return this.http.get(this.apiRouter.getNotificationsRoute() +'/viewall',this.options)
    .map((response: Response) => response.json());
  }
  getLatestNotifications(){
    return this.http.get(this.apiRouter.getNotificationsRoute(),this.options)
    .map((response: Response) => response.json());

  }
}
