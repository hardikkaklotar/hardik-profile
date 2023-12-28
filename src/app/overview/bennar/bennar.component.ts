import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToMoveItem } from 'src/app/model/banner.model';
import { ServiceService } from 'src/app/service/service.service';
import { TranslateService } from 'src/app/service/translate.service';


@Component({
  selector: 'app-bennar',
  templateUrl: './bennar.component.html',
  styleUrls: ['./bennar.component.scss']
})
export class BennarComponent {

  constructor(private router: Router, public serviceService: ServiceService,
    public translateService: TranslateService,
  ) { }
  scrollToMove: ScrollToMoveItem[] = [
    { id: 'about', label: this.translateService.content.about, link: '/about', active: true},
    { id: 'skills', label: this.translateService.content.skills, link: '/skills', active: false },
    { id: 'services', label: this.translateService.content.services, link: '/services', active: false },
    { id: 'contact', label: this.translateService.content.contact, link: '/contact', active: false }
  ];

}
