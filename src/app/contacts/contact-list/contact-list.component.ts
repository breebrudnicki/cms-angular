import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Contact } from '../contact';
import { ContactItemComponent } from './contact-item.component';
import { ContactsService } from '../contacts.service';

import { ContactsFilterPipe } from '../contacts-filter.pipe';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contact: Contact = null;
  contacts: Contact[] = [];
  term: string;

  constructor(private contactService: ContactsService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactService.getContactsEmitter.subscribe(
      (contacts: Contact[]) => this.contacts = contacts
    );
  }

  onSelected(contact: Contact) {
  }

  onKeyPress( value: string ) {
    this.term = value;
  }

  search( value: string ) {
    this.term = value;
  }

}
