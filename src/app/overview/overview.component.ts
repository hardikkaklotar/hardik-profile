import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationManageService } from '../service/navigation-manage.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  constructor(public navigationManageService: NavigationManageService) { }
  navigationItems = [
      { label: 'Home', route: '#header' },
      { label: 'About', route: '#about' },
      { label: 'Skills', route: '#skills' },
      { label: 'Services', route: '#services' },
      { label: 'Contact', route: '#contact' }
  ];
  socialLinks = [
      { icon: 'fa-twitter', url: 'https://twitter.com' },
      { icon: 'fa-facebook-f', url: 'https://facebook.com' },
      { icon: 'fa-instagram', url: 'https://instagram.com' },
      { icon: 'fa-linkedin-in', url: 'https://linkedin.com' },
      { icon: 'fa-whatsapp', url: 'https://whatsapp.com' }
  ];
}
