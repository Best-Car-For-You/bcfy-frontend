import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { HeaderComponent } from '../header/header.component';
import { FeaturesComponent } from '../features/features.component';
import { HelpComponent } from '../help/help.component';
import { ContactComponent } from '../contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, RouterModule, HeaderComponent, FeaturesComponent, HelpComponent, ContactComponent, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'bcfy-frontend';
}
