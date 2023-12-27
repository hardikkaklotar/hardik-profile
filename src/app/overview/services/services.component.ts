import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { TranslateService } from 'src/app/service/translate.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private router: Router, public serviceService: ServiceService,
    public translateService: TranslateService,
  ) { }

  services = [
    {
      imageSrc: '../../assets/image/web-designing.png',
      title: this.translateService.content.websiteDesign,
      price: '₹99',
      description: this.translateService.content.websiteDesignDescription,
    },
    {
      imageSrc: '../../assets/image/development-skills.png',
      title: this.translateService.content.websiteDevelopment,
      price: '₹199',
      description: this.translateService.content.websiteDevelopmentDescription,
    },
    {
      imageSrc: '../../assets/image/digital-marketing.png',
      title: this.translateService.content.digitalMarketing,
      price: '₹399',
      description: this.translateService.content.digitalMarketingDescription,
    },
    {
      imageSrc: '../../assets/image/graphics-design.jpg',
      title: this.translateService.content.graphicsDesign,
      price: '₹299',
      description: this.translateService.content.graphicsDesignDescription,
    }
  ];
}
