import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'cms-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  // Open the message-item.component.ts file and add class input
  // variable called message to the MessageItemComponent class.
  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
