import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface AnimatedProperties {
  number: number;
  number2: number;
  number3: number;
  number4: number;
}
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit{

  // informationBoxes = [
  //   { number: 100, label: 'Happy Clients' },
  //   { number2: 5000, label: 'Hours Of Support' },
  //   { number3: 200, label: 'Projects Completed' },
  //   { number4: 10, label: 'Years Of Experience' }
  // ];

  informationBoxes:any = {
    number: { value: 0, label: 'Happy Clients' },
    number2: { value: 0, label: 'Hours Of Support' },
    number3: { value: 0, label: 'Projects Completed' },
    number4: { value: 0, label: 'Years Of Experience' }
  };
  informatinBoxObject: any;

    @ViewChild('companyInformation', { static: true }) companyInformation!: ElementRef;
    submitted = false;
    observer: any;

     
  /*
  * this function is used for displaying the increasing counter company information
  */
  handleSectionIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.animateNumber(40, 'number', 22)
        this.animateNumber(560, 'number2', 24)
        this.animateNumber(15, 'number3', 26)
        this.animateNumber(2, 'number4', 28)
        this.observer.disconnect(); //disconnect after one time called
      }
    });
  }
  
  /*
  * this function is used for animate increasing counter
  */
  animateNumber(targetValue: number, property: string, delay: number): void {
    const step = targetValue / 100;
    let currentStep = 0;
    const updateInterval = setInterval(() => {
      currentStep += step;
      this.informationBoxes[property].value = Math.floor(currentStep);
      if (currentStep >= targetValue) {
        clearInterval(updateInterval);
      }
    }, delay);
  }
  

  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.5, //0.5 used for your 50% content shows
    };

    this.observer = new IntersectionObserver(entries => this.handleSectionIntersection(entries), options);

    // Start observing the target section
    if (this.companyInformation && this.companyInformation.nativeElement) {
      this.observer.observe(this.companyInformation.nativeElement);
    }
  }

  ngOnInit(): void {
    this.informatinBoxObject = Object.values(this.informationBoxes); //To Do: Need to change this and used into html file.
  }
}
