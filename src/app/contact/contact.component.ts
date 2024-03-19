import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  
  messageForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor() {
    this.messageForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      message: new FormControl('',[Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit() {
    const isFormValid = this.messageForm.valid;
    this.isFormSubmitted = true;
    if (isFormValid) {
      alert('Your message has been sent successfully!');
    }
    this.messageForm.reset();
    this.isFormSubmitted = false;
  }

}
