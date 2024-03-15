import { Component } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true // This should be set to use the component as standalone
})
export class HeaderComponent {
  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen = false;
}