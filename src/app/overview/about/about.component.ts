import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { TranslateService } from 'src/app/service/translate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutMeImage: string = '../../../assets/image/about-me.svg';
  dotImage: string = '../../../assets/image/dot.svg';
  altText: string = 'img';
  
  constructor(private router: Router, public serviceService: ServiceService,
    public translateService: TranslateService,
  ) { }

}
