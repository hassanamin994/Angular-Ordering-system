 import { Injectable } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import { HeadersClass } from './headers';
import { ApiRouterService } from './api-router.service';
import { LocalstorageService } from './localstorage.service';

@Injectable()
export class LatestService extends HeadersClass{

  constructor(private http: Http, private apiRouter: ApiRouterService, private localStorageService: LocalstorageService) {
  	super(localStorageService) ;

  }




}
