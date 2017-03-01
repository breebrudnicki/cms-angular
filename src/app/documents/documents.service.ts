import { Injectable } from '@angular/core';
import { Document } from './document';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS'

@Injectable()
export class DocumentsService {

  private documents: Document[] = [];

  constructor() { }

  getDocuments() {

    // In side this function,
    // assign the value of the MOCKDOCUMNETS variable in the
    // MOCKDOCUMNETS.ts file to the documents class variable in the
    // DocumentsService class.

    return this.documents = MOCKDOCUMENTS;

  }

  getDocument(idx: number) {

  }

}
