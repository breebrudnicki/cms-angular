import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Contact } from '../contact';
import { ContactItemComponent } from './contact-item.component';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  @Output() contactSelected = new EventEmitter<Contact>();
  contact = new Contact(1, 'Bree Carrick', 'breecarrick@live.com', '503-270-1860', 'https://pbs.twimg.com/profile_images/782070665776025600/iLfW8qDq.jpg', 'none');


  constructor() { }

  ngOnInit() {
  }

  onSelected(contact: Contact) {
    this.contactSelected.emit(contact);
  }

}
