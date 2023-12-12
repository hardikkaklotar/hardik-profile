import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  socialLinks = [
    { icon: 'fa-twitter', url: 'https://twitter.com' },
    { icon: 'fa-facebook-f', url: 'https://facebook.com' },
    { icon: 'fa-instagram', url: 'https://instagram.com' },
    { icon: 'fa-linkedin-in', url: 'https://linkedin.com' },
    { icon: 'fa-whatsapp', url: 'https://whatsapp.com' }
  ];
  contactForm!: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            Email: ['', [Validators.required, Validators.email]],
            Number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            Message: ['', Validators.required],
        })
    }
    get f() { return this.contactForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.contactForm.invalid) {
            console.log('Enter Your Valid');
        } else {
            console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
        }

    }
}
