 import { Injectable } from '@angular/core';
import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import { HeadersClass } from '../../headers';
import { ApiRouterService } from '../../api-router.service';

@Injectable()
export class OrdersDetailsService extends HeadersClass{

  constructor(private http: Http, private apiRouter: ApiRouterService) { 
  	super() ;
  }

  getOrder(id: number){
  	return this.http.get(this.apiRouter.getOrdersRoute()+"/"+id, this.options)
  		.map((response: Response) => response.json() );
  }
  deleteMeal(id: number){

  }
  addMeal(id: number, meal:any){
  	console.log(meal)
  	return this.http.post(this.apiRouter.getOrdersRoute()+"/"+id+"/meal", meal, this.options)
  		.map((response: Response) => response.json() );  	
  }
}
