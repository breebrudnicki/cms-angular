import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'cms-contact-group',
  templateUrl: './contact-group.component.html',
  styleUrls: ['./contact-group.component.css']
})
export class ContactGroupComponent implements OnInit {
  @Input() selectedContact: Contact;
  // @Input() contact: Contact;
  contactGroups: Contact[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.contactGroups = this.selectedContact.group;
  }

}
