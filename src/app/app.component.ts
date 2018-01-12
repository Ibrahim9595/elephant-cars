import { Component } from '@angular/core';
import { UserAuthinticationService } from './user-authintication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(public loginService: UserAuthinticationService, private router: Router) { }

  logout() {
    if(this.loginService.logout()){
      this.router.navigate(['/login']);
    }
  }
}
