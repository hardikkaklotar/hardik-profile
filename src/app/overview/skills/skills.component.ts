import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { TranslateService } from 'src/app/service/translate.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsImage: string = '../../assets/image/skills.svg';
  altText: string = 'img';
  observer: any;

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

  skills = [
    { name: 'HTML', percentage: 0 },
    { name: 'CSS', percentage: 0 },
    { name: 'SCSS', percentage: 0 },
    { name: 'Tailwind CSS', percentage: 0 },
    { name: 'Bootstrap', percentage: 0 },
    { name: 'jQuery', percentage: 0 },
    { name: 'Javascript', percentage: 0 },
    { name: 'Angular', percentage: 0 },
    { name: 'Hubspot', percentage: 0 },
    { name: 'Laravel', percentage: 0 }
  ];

  constructor(private router: Router, public serviceService: ServiceService,
    public translateService: TranslateService,
  ) { }
  
  /*
  * this function is used for displaying the increasing counter company information
  */
  handleSectionIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateNumber(95, 0, 32);
        this.animateNumber(95, 1, 34);
        this.animateNumber(90, 2, 36);
        this.animateNumber(90, 3, 38);
        this.animateNumber(85, 4, 40);
        this.animateNumber(80, 5, 42);
        this.animateNumber(60, 6, 44);
        this.animateNumber(50, 7, 46);
        this.animateNumber(80, 8, 48);
        this.animateNumber(50, 9, 50);
        this.observer.disconnect();
      }
    });
  }

  animateNumber(targetNumber: number, skillIndex: number, stepInterval: number) {
    const step = targetNumber / 100;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += step;
      this.skills[skillIndex].percentage = Math.floor(currentStep);

      if (currentStep >= targetNumber) {
        clearInterval(interval);
        this.skills[skillIndex].percentage = targetNumber; // Ensure final percentage is exactly targetNumber
      }
    }, stepInterval);
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(this.handleSectionIntersection.bind(this), {
      threshold: 0.1
    });
    const skillsContent = document.querySelector('.skills_content');
    if (skillsContent) {
      this.observer.observe(skillsContent);
    }
  }

  ngOnInit(): void {
  }

}
