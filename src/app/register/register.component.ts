import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }

  register() {
    // Perform register logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
