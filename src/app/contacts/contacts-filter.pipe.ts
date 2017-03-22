import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {

  transform(contacts: Contact[], [term]) {
    //create a new array to contain the filtered list of contacts
    let filteredArray: Contact[] = [];

    //add contact to the filtered array if it contains term
    if ( term !== undefined ) {
      filteredArray = contacts.filter(
        (contact: any) => contact.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    //if the filtered array is empty return the original list of contacts
    if ( filteredArray.length < 1 ) {
      return contacts;
    }
    //return the filtered array of contacts
    return filteredArray;

  }

}
