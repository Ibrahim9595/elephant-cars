import { Injectable } from '@angular/core';
import { LoginInterface } from './interfaces/login-interface';

@Injectable()
export class UserAuthinticationService {

  user: any;

  constructor() { }

  isLoggedIn() {
    this.user = localStorage.getItem("loggedin");
    return this.user? true : false;
  }

  login(user: LoginInterface) {
    this.user = user;
    localStorage.setItem("loggedin", "1");
    return true;
  }

  logout() {
    localStorage.removeItem("loggedin");
    this.user = null;
    return true;
  }

}
