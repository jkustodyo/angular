import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Contact } from './contact.model';

@Injectable()
export class ContactService {
    contactList: AngularFireList<any>;
    selectedContact: Contact = new Contact();
    constructor(private firebase: AngularFireDatabase) { }

    // Getting data from firebase db
    getData() {
        this.contactList = this.firebase.list('contacts');
        return this.contactList;
    }

    // Inserting data into firebase db
    insertContact(contact: Contact) {
        this.contactList.push({
            cpf:contact.cpf,
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
            email: contact.email,
            created:Date(),
//            modifield:null
        });
    }

    // Updating data in firebase db
    updateContact(contact: Contact) {
        this.contactList.update(contact.$key, {
            cpf:contact.cpf,
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
            email: contact.email,
//            created:contact.created,
            modifield:Date()
        });
    }

    // Removing an item in firebase db
    removeContact($key: string) {
        this.contactList.remove($key);
    }

}
