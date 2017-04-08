import { Injectable } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import { HeadersClass } from '../headers';
import { ApiRouterService } from '../api-router.service';
import { LocalstorageService } from '../localstorage.service';

@Injectable()
export class OrdersService extends HeadersClass {

  constructor(private http: Http, private apiRouter: ApiRouterService, private localStorageService: LocalstorageService) {
  	super(localStorageService) ;
  }

	addOrder(order: any){
		return this.http.post(this.apiRouter.getOrdersRoute(),order,this.options)
			.map((response: Response) => response.json());
	}
}
