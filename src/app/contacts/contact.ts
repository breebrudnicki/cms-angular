export class Contact {
  constructor(public contactID: number, public name: string, public email: string, public phone: string, public imageURL: string, public group: Contact[]) {}
}
