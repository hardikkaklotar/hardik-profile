import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from 'src/app/service/translate.service';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [MessageService]
})
export class ContactComponent implements OnInit {
    userForm!: FormGroup;
    isSubmitting = false;
    topicHasError = false;
    submitted = false;
    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        public translateService: TranslateService,
        private messageService: MessageService
    ) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            to_name: ['admin'],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
            message: ['', Validators.required],
        });
    }

    socialLinks = [
        { icon: 'fa-twitter', url: 'https://twitter.com' },
        { icon: 'fa-facebook-f', url: 'https://facebook.com' },
        { icon: 'fa-instagram', url: 'https://instagram.com' },
        { icon: 'fa-linkedin-in', url: 'https://linkedin.com' },
        { icon: 'fa-whatsapp', url: 'https://whatsapp.com' },
    ];

    myInformation = [
        { icon: 'fa-solid fa-lg fa-phone-volume', link: 'tel:+919714514703', text: '(+91) 971-451-4703' },
        { icon: 'fa-solid fa-lg fa-envelope', link: 'mailto:hardikkaklotar61@gmail.com', text: 'hardikkaklotar61@gmail.com' },
        { icon: 'fa-solid fa-lg fa-location-dot', text: '123 Main St, City, Country' },
    ];
    
/* FORM VALIDATION AFTER SUBMIT SEND EMAIL */ 
    async send() {
        this.submitted = true;
        this.userForm.markAllAsTouched();        
        if (this.userForm.invalid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Enter Your Valid Information' });
        } else {
            emailjs.init('quGx09KTSLnH8HrZ3');
            try {
                let response = await emailjs.send("service_8isz2p4", "template_fc7fcbn", {
                    firstName: this.userForm.value.firstName,
                    to_name: this.userForm.value.to_name,
                    lastName: this.userForm.value.lastName,
                    email: this.userForm.value.email,
                    phone: this.userForm.value.phone,
                    message: this.userForm.value.message,
                });
                this.userForm.reset();
                Object.keys(this.userForm.controls).forEach(key => {
                    this.userForm.get(key)?.setErrors(null);
                });
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted' });
            } catch (error) {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to submit form. Please try again.' });
            }
        }
    }
}