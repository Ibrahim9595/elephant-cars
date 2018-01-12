import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { UserAuthinticationService } from './user-authintication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private loginService: UserAuthinticationService,  private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    if(this.loginService.isLoggedIn()){
      if(url != "/login"){
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
    } else {
      if(url == "/login"){
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
    
  }
}
