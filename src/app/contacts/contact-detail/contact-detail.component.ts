import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { Subscription } from 'rxjs/RX';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit, OnDestroy {
  @Input() selectedContact: Contact;
  private subscription: Subscription;
  private contactIdx: number;
  contact: Contact;
  contactGroup: Contact[];

  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.contactIdx = params['idx'];
        this.contact = this.contactsService.getContact(this.contactIdx);
        this.contactGroup = this.contact.group;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
