import { Injectable } from '@angular/core';
import { Document } from './document';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS'

@Injectable()
export class DocumentsService {

  private documents: Document[] = [];
  private mockDocuments = MOCKDOCUMENTS;

  constructor() { }

  getDocuments() {

    this.documents = this.mockDocuments;
    return this.documents;

  }

  getDocument(idx: number) {

  }

}
