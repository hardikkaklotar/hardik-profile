import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  logoImage: string = '../../../assets/image/logo.png';
  
  constructor() { }

  isScrolled = false;
  
  // only section scroll
  scrollTo(section?: string): void {
    if(section){
      const element = document.getElementById(section);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
  this.isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
}
}
