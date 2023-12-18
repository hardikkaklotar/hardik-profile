import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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
  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      Message: ['', Validators.required],
    })
  }

}
