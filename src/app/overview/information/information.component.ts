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
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    @ViewChild('companyInformation', { static: true }) companyInformation!: ElementRef;
    submitted = false;
    number: number = 0;
    number2: number = 0;
    number3: number = 0;
    number4: number = 0;
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
    if (this.companyInformation && this.companyInformation.nativeElement) {
      this.observer.observe(this.companyInformation.nativeElement);
    }
  }
}
