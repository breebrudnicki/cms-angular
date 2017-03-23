import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { ContactsService } from '../../contacts/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../../contacts/contact';
import { Message } from '../message';

@Component({
  selector: 'cms-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {

  sender: Contact;

  constructor(private messagesService: MessagesService,
              private contactsService: ContactsService,
              private router: Router) {
    this.sender = contactsService.getCurrentContact();
  }

  ngOnInit() {
  }

  onSubmit(value) {
    const newMessage = new Message(15, "", this.sender.name, value.message);
    this.messagesService.addMessage(newMessage);
    this.router.navigate(['messages']);
  }

  onCancel() {
    this.router.navigate(['messages']);
  }
}
