import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContactService } from '../common/contact.service';

import { ToastrService } from 'ngx-toastr';
import { dashCaseToCamelCase } from '@angular/animations/browser/src/util';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor(
        public contactService: ContactService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        this.contactService.getData();
        this.resetForm();
    }

    onSubmit(contactForm: NgForm) {
console.log('testrewt');

        if (contactForm.value.$key == null) {
            this.contactService.insertContact(contactForm.value);
           // contactForm.created.value=Date();
            this.toastr.success('Saved successfully', 'Contact added');
        } else {
            this.contactService.updateContact(contactForm.value);
            this.toastr.success('Saved successfully', 'Contact updated');
        }
        this.resetForm(contactForm);
    }

    resetForm(contactForm?: NgForm) {
        if (contactForm != null) {
            contactForm.reset();
        }
        this.contactService.selectedContact = {
            $key: null,
            cpf: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            created: null,
            modifield: null
        };
    }
}
