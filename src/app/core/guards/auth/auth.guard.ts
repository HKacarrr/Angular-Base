import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable()
export class authGuard {
  constructor(private router:Router) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLoggedIn = localStorage.getItem("token");
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']).then(r => console.log("login")).catch(e => console.log("Error : ", e)); // Redirect to login
      return false;
    }
  }
}
