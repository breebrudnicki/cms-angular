import { Component, OnInit } from '@angular/core';
import { ContactListComponent } from './contact-list';
import { ContactItemComponent } from './contact-list';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { Contact } from './contact';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }

}
