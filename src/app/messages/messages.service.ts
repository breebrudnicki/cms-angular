import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MessagesService {

  private messages: Message[] = [];
  private mockMessages = MOCKMESSAGES;
  getMessagesEmitter = new EventEmitter<Message[]>();

  constructor(private http: Http) {
    this.initMessages();
  }

  getMessages() {
    this.messages = this.mockMessages;
    return this.messages;
  }

  getMessage(idx: number) {
    // This function is to return the Message object stored in the position specified in the idx variable
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.storeMessages();
  }

  storeMessages() {
    const body = JSON.stringify(this.messages);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://briannacarrick-ng-cms.firebaseio.com/messages.json', body, {headers: headers}).subscribe((content)=>console.log(content), (err)=>console.log(err));
  }

  initMessages() {
    return this.http.get('https://briannacarrick-ng-cms.firebaseio.com/messages.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Message[]) => {
          this.messages = data;
          this.getMessagesEmitter.emit(this.messages);
        }
      );
  }

}
