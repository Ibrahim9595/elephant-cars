import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginInterface } from '../../interfaces/login-interface';
import { UserAuthinticationService } from '../../user-authintication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern(/[0-9]{8,50}/)]);
  user: LoginInterface = 
  {
    email: "",
    password: ""
  };

  constructor(private loginService: UserAuthinticationService, private router: Router) { }

  login(){
    if(this.loginService.login(this.user)){
      this.router.navigate(['']);
    }
  }
  
}
