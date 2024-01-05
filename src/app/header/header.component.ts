import { Component, HostListener} from "@angular/core";
import { TranslateService } from "../service/translate.service";
import { MatDialog } from "@angular/material/dialog";
import { ResumeComponent } from "../dialog-template/resume/resume.component";
import { Router } from "@angular/router";
import { ServiceService } from "../service/service.service";

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
    { id: 'home', label: this.translateService.content.home, link: '/', active: true },
    { id: 'about', label: this.translateService.content.about, link: '/about', active: false },
    { id: 'skills', label: this.translateService.content.skills, link: '/skills', active: false },
    { id: 'services', label: this.translateService.content.services, link: '/services', active: false },
    { id: 'contact', label: this.translateService.content.contact, link: '/contact', active: false }
  ];

  isScrolled = false;

  constructor(private router: Router, public serviceService: ServiceService,
    public translateService: TranslateService, public dialog: MatDialog
  ) { }

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

  openDialog() {
    const dialogRef = this.dialog.open(ResumeComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }



}
