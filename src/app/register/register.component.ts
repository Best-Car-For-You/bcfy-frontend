import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, CognitoService } from '../cognito.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  public signUp(): void {
    this.loading = true;
    this.cognitoService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
    }).catch(() => {
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.user)
    .then(() => {
      this.router.navigate(['/signIn']);
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

  // register() {
  //   // Perform register logic here
  //   console.log('Username:', this.username);
  //   console.log('Password:', this.password);
  // }
}
