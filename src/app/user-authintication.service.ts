import { Injectable } from '@angular/core';
import { LoginInterface } from './interfaces/login-interface';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserAuthinticationService {

  constructor(private auth: AngularFireAuth) { }

  isLoggedIn() {
    return localStorage.getItem("loggedin")? true : false;
  }

  getUser() {
    return this.auth.authState;
  }

  login(user: LoginInterface) {
    return this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then(user=>{
      localStorage.setItem("loggedin", "1");
    });
  }

  logout() {
    return this.auth.auth.signOut()
    .then(user=>{
      localStorage.removeItem("loggedin");
    });
  }

}
