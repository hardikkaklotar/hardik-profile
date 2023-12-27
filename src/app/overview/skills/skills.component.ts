import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { TranslateService } from 'src/app/service/translate.service';

interface AnimatedProperties {
  percentage: number;
  percentage2: number;
  percentage3: number;
  percentage4: number;
  percentage5: number;
  percentage6: number;
  percentage7: number;
  percentage8: number;
  percentage9: number;
  percentage10: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsImage: string = '../../assets/image/skills.svg';
  altText: string = 'img';

  // technologies image
  technologies = [
    { name: 'Angular', url: '', imageSrc: '../../assets/image/Techno/angular.png' },
    { name: 'jQuery', url: '', imageSrc: '../../assets/image/Techno/jquery.png' },
    { name: 'sass', url: '', imageSrc: '../../assets/image/Techno/sass.webp' },
    { name: 'javascript', url: '', imageSrc: '../../assets/image/Techno/javascript.png' },
    { name: 'html', url: '', imageSrc: '../../assets/image/Techno/html-5.png' },
    { name: 'typescript', url: '', imageSrc: '../../assets/image/Techno/typescript.png' },
    { name: 'Hubspot', url: '', imageSrc: '../../assets/image/Techno/Hubspot.png' },
    { name: 'bootstrap', url: '', imageSrc: '../../assets/image/Techno/bootstrap.png' },
    { name: 'tailwind', url: '', imageSrc: '../../assets/image/Techno/tailwind.png' },
    { name: 'css', url: '', imageSrc: '../../assets/image/Techno/css-3.png' }
  ];

  @ViewChild('skillsSection', { static: true }) skillsSection!: ElementRef;
  submitted = false;
  percentage: number = 0;
  percentage2: number = 0;
  percentage3: number = 0;
  percentage4: number = 0;
  percentage5: number = 0;
  percentage6: number = 0;
  percentage7: number = 0;
  percentage8: number = 0;
  percentage9: number = 0;
  percentage10: number = 0;
  observer: any;

  constructor(private router: Router, public serviceService: ServiceService,
    public translateService: TranslateService,
  ) { }
  
  /*
  * this function is used for displaying the increasing counter company information
  */
  handleSectionIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateNumber(95, 'percentage', 32)
        this.animateNumber(95, 'percentage2', 34)
        this.animateNumber(90, 'percentage3', 36)
        this.animateNumber(90, 'percentage4', 38)
        this.animateNumber(85, 'percentage5', 40)
        this.animateNumber(80, 'percentage6', 42)
        this.animateNumber(60, 'percentage7', 44)
        this.animateNumber(50, 'percentage8', 46)
        this.animateNumber(80, 'percentage9', 48)
        this.animateNumber(50, 'percentage10', 50)
        this.observer.disconnect(); //disconnect after one time called
      }
    });
  }

  /*
  * this function is used for animate increasing counter
  */
  animateNumber(targetNumber: number, propertyName: keyof AnimatedProperties, stepInterval: number) {
    const step = targetNumber / 100;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += step;
      this[propertyName] = Math.floor(currentStep);

      if (currentStep >= targetNumber) {
        clearInterval(interval);
      }
    }, stepInterval);
  }


  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.5, //0.5 used for your 50% content shows
    };

    this.observer = new IntersectionObserver(entries => this.handleSectionIntersection(entries), options);

    // Start observing the target section
    if (this.skillsSection && this.skillsSection.nativeElement) {
      this.observer.observe(this.skillsSection.nativeElement);
    }
  }

  ngOnInit(): void {
  }
}
