import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface AnimatedProperties {
  number: number;
  number2: number;
  number3: number;
  number4: number;
}
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit {
  @ViewChild('companyInformation', { static: true }) companyInformation!: ElementRef;

  socialLinks = [
    { icon: 'fa-twitter', url: 'https://twitter.com' },
    { icon: 'fa-facebook-f', url: 'https://facebook.com' },
    { icon: 'fa-instagram', url: 'https://instagram.com' },
    { icon: 'fa-linkedin-in', url: 'https://linkedin.com' },
    { icon: 'fa-whatsapp', url: 'https://whatsapp.com' }
  ];
  contactForm!: FormGroup;
  submitted = false;
  number: number = 0;
  number2: number = 0;
  number3: number = 0;
  number4: number = 0;
  observer: any;
  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      console.log('Enter Your Valid');
    } else {
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
    }

  }

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

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      Message: ['', Validators.required],
    })
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
