import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navigationItems = [
    { id: 1, label: 'Home', link: '#home', active: true },
    { id: 2, label: 'About', link: '#about', active: false },
    { id: 3, label: 'Resume', link: '#skills', active: false },
    { id: 4, label: 'Services', link: '#services', active: false },
    { id: 5, label: 'Contact', link: '#contact', active: false }
  ];

  routerActiveManage(id: number){
    this.navigationItems.forEach(element => {
      element.active = element.id === id ? true : false;
    });
  }
}
