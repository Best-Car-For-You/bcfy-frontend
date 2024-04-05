import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser, CognitoService } from '../cognito.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  loading: boolean;
  isConfirm: boolean = false;
  user: IUser;

  constructor(
    private router: Router,
    private cognitoService: CognitoService
  ) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  public signUp(): void {
    this.loading = true;
    this.cognitoService.signUp(this.user).then(() => {
      this.loading = false;
      this.isConfirm = true; // This line toggles the view to show the confirmation input
    }).catch((error) => {
      console.error('Sign up error:', error);
      this.loading = false;
    });
  }  

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.user)
      .then(() => {
        this.router.navigate(['/signIn']);
      })
      .catch(() => {
        this.loading = false;
      });
  }
}
