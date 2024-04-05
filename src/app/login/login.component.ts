import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IUser, CognitoService } from '../cognito.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loading: boolean;
  user: IUser;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public signIn(): void {
    this.loading = true;
    this.cognitoService.signIn(this.user)
    .then(() => {
      this.router.navigate(['/home']);
    }).catch(() => {
      this.loading = false;
    });
  }

  // username: string;
  // password: string;

  // constructor() {
  //   this.username = '';
  //   this.password = '';
  // }

  // login() {
  //   // Perform login logic here
  //   console.log('Username:', this.username);
  //   console.log('Password:', this.password);
  // }
}
