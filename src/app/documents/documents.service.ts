import { Injectable } from '@angular/core';
import { Document } from './document';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS'

@Injectable()
export class DocumentsService {

  private documents: Document[] = [];

  constructor() { }

  getDocuments() {
    return this.documents = MOCKDOCUMENTS;
  }

  getDocument(idx: number) {
    return this.documents[idx];
  }

  deleteDocument(document: Document) {
    this.documents.splice(this.documents.indexOf(document), 1);
  }

  addDocument(document: Document) {
    // push the document passed in as in input to the end of the Documents list.
    this.documents.push(document);
  }
  updateDocument(oldDoc: Document,
                 newDoc: Document) {
    this.documents[this.documents.indexOf(oldDoc)] = newDoc;
  }

}
