import { Injectable } from '@angular/core';
import { Message } from './message';
import { MOCKMESSAGES } from './MOCKMESSAGES'

@Injectable()
export class MessagesService {

  private messages: Message[] = [];
  private mockMessages = MOCKMESSAGES;

  constructor() { }

  getMessages() {
    this.messages = this.mockMessages;
    return this.messages;
  }

  getMessage(idx: number) {
    // This function is to return the Message object stored in the position specified in the idx variable
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

}
