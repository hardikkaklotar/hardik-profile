import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from 'src/app/service/translate.service';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    userForm!: FormGroup;
    topics = ['one', 'two', 'three']
    topicHaseError = true;
    isSubmitting = false;
    topicHasError = false;

    userModel: {
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        message?: string;
    } = {};

    submitForm(userForm: NgForm) {
        Object.keys(userForm.controls).forEach((controlName) => {
            const control = userForm.controls[controlName];
            control.markAsTouched();
        });
        if (userForm.valid) {
            console.log('Form submitted:', this.userModel);
            this.isSubmitting = false;
        } else {
            this.topicHasError = true;
        }
    }

    constructor(private formBuilder: FormBuilder, private dialog: MatDialog,
        public translateService: TranslateService,) { }
    ngOnInit() {
    }

    socialLinks = [
        { icon: 'fa-twitter', url: 'https://twitter.com' },
        { icon: 'fa-facebook-f', url: 'https://facebook.com' },
        { icon: 'fa-instagram', url: 'https://instagram.com' },
        { icon: 'fa-linkedin-in', url: 'https://linkedin.com' },
        { icon: 'fa-whatsapp', url: 'https://whatsapp.com' }
    ];

    myInformation = [
        { icon: 'fa-solid fa-lg fa-phone-volume', link: 'tel:+919714514703', text: '(+91) 971-451-4703' },
        { icon: 'fa-solid fa-lg fa-envelope', link: 'mailto:hardikkaklotar61@gmail.com', text: 'hardikkaklotar61@gmail.com' },
        { icon: 'fa-solid fa-lg fa-location-dot', text: '123 Main St, City, Country' }
    ];
}
