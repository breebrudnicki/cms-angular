export class Contact {
  constructor(public contactID: string, public name: string, public email: string, public phone: string, public imageURL: string, public group: Contact[]) {}
}
