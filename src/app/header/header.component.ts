import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent {
  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const element = this.el.nativeElement.querySelector('nav');
    if (window.scrollY > 100) {
      this.renderer.addClass(element, 'scrolled-navbar');
    } else {
      this.renderer.removeClass(element, 'scrolled-navbar');
    }
  }
}
