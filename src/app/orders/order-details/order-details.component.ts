import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router'
import { OrdersDetailsService } from './orders-details.service';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  providers:[OrdersDetailsService]
})
export class OrderDetailsComponent implements OnInit {
	item = {
		item:"",
		amount: 0,
		price: 0,
		comment:""
	}
	mealsList = [] ;
	errors = [] ;
	groupId ; 
  order = {}; 
  constructor(private ordersDetailsService: OrdersDetailsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	// get group id from route 
  	this.activatedRoute.params.subscribe((params: any ) => {
  		this.groupId = params['id'];
  	})
	// get meals list and assign it 
	this.ordersDetailsService.getOrder(this.groupId).subscribe(
			(response: any) => {
			console.log(response)
			if(response.status){
				// do logic 
				this.setOrderInfo(response.order);
			}else{
				this.router.navigate(['/orders'])
			}
		})

  }
  validateItem(): Array<string>{
		let errors = [] ;
		if(this.item.item.trim() == "")
			errors.push("Name cannot be empty");
		if(this.item.price == 0 )
			errors.push("Price cannot be equal to zero");
		if(this.item.amount == 0 )
			errors.push("Amount cannot be equal to zero");

		return errors; 
	}

  
  addItem(form: any){
  	this.errors = this.validateItem() ;

  	if(this.errors.length == 0 )
  		this.sendItem(this.item);
  }
  setOrderInfo(order: any){
  	this.mealsList = order.meals;
    this.order = order;
    console.log(order)
  }
  sendItem(item: any){
  	item = {item: item.item, amount: item.amount.toString(), price: item.price.toString(), comment: item.comment }
  	this.ordersDetailsService.addMeal(this.groupId, item).subscribe(
  		(response: any) => {
  			console.log(response)
  			if(response.status){
  				this.setOrderInfo(response.order);
  			}	
  		}
  		);
  }  
}
