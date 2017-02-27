import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  // Add a function to the MessageListComponent class in the
  // message-list.component.ts file to get messages from messages
  // service.

  private messages: Message[] = [];
  private messagesService: MessagesService;
  constructor() {
  }

  ngOnInit() {
    this.messages = this.messagesService.getMessages();
//     In this function call
// the getMessages() function in the MessagesService class and
// assign the list returned to the messages class variable in the
// MessageListComponent class.
  }

}
