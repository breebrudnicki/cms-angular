import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Subscription } from 'rxjs/RX';
import { Contact } from '../contact';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  private subscription: Subscription;
  private editMode: boolean = false;
  private hasGroup: boolean = false;
  private contactIdx: number;
  private contact: Contact;
  private groupContacts: Contact[] = [];
  private invalidGroupContact: boolean = true;

  constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.editMode = false;
    this.hasGroup = false;
    this.invalidGroupContact = false;
    this.subscription = this.route.params.subscribe(
      (params: any) => {

        if (params.hasOwnProperty('idx')) {
          this.contactIdx = +params['idx'];
          this.contact = this.contactsService.getContact(this.contactIdx);
          this.editMode = true;
          if (this.contact.group != null && this.contact.group.length > 0) {
            this.hasGroup = true;
            this.groupContacts = this.contact.group.slice();
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(value) {
    let newContact = new Contact(null,
                                 value.name,
                                 value.email,
                                 value.phone,
                                 value.imageURL,
                                 this.groupContacts);
    if (this.editMode) {
      newContact.contactID = this.contact.contactID;
      this.contactsService.updateContact(this.contact, newContact);
    } else {
      this.contactsService.addContact(newContact)
    }
    this.router.navigate(['contacts']);
  }

  onCancel() {
    this.router.navigate(['contacts']);
  }

}
