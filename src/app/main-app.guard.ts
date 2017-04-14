import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Rx'
import { LocalstorageService } from './localstorage.service';
export class MainAppGuard implements CanActivate{
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | boolean{
		let locastorageService: LocalstorageService = new LocalstorageService() ;
		return locastorageService.isLoggedIn() ;
	}
}