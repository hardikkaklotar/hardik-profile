import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "../service/translate.service";

interface Language {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  navigationItems = [
    { id: 'home', label: 'Home', link: '/', active: true },
    { id: 'about', label: 'About', link: '/about', active: false },
    { id: 'skills', label: 'Skills', link: '/skills', active: false },
    { id: 'services', label: 'Services', link: '/services', active: false },
    { id: 'contact', label: 'Contact', link: '/contact', active: false }
  ];

  Languages: Language[] = [
    { value: 'english', viewValue: 'English' },
    { value: 'spanish', viewValue: 'Spanish' },
  ];
  isScrolled = false;

  constructor(private router: Router, public translateService: TranslateService,) { }

  // only section scroll
  scrollTo(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveMenuItem();
    this.isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
  }

  private updateActiveMenuItem(): void {
    // Iterate through menu items and set isActive based on scroll position
    this.navigationItems.forEach(item => {
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const threshold = viewportHeight * 0.2; // 80% of viewport height

        if (rect.top <= threshold && rect.bottom >= threshold) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
    });
  }
}
