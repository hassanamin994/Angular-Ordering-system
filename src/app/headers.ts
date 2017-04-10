import { Http, Response ,Headers, RequestOptions} from '@angular/http';
import { LocalstorageService } from './localstorage.service';

export class HeadersClass{

		access_token: string;
		options: RequestOptions ;

		constructor(localStorageService: LocalstorageService){
		  	this.access_token = localStorageService.getAccessToken();
		    const headers = new Headers() ;
		    headers.append('Content-Type','application/json');
		    headers.append('authorization',this.access_token);
				console.log(this.access_token);
		    this.options = new RequestOptions({headers: headers});
		}
}
