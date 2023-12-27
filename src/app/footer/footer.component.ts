import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { TranslateService } from '../service/translate.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  constructor(private router: Router, public serviceService: ServiceService,
    public translateService: TranslateService,
  ) { }

}
