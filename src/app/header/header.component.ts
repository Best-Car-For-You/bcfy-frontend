import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class HeaderComponent {
  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen = false;
  routeClass$: any;

  constructor(private el: ElementRef, private renderer: Renderer2, private activatedRoute: ActivatedRoute) {
    this.routeClass$ = this.activatedRoute.url.pipe(map(segments => {
      return segments.length > 0  ? 'bg-white' : '';
    }));
  }

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

