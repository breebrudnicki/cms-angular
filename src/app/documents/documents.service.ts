import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DocumentsService {

  private documents: Document[] = [];
  getDocumentsEmitter = new EventEmitter<Document[]>();

  constructor(private http: Http) {
    this.initDocuments();
    // this.currentDocumentId = 1;
  }

  getDocuments() {
    return this.documents = MOCKDOCUMENTS;
  }

  getDocument(idx: number) {
    return this.documents[idx];
  }

  deleteDocument(document: Document) {
    this.documents.splice(this.documents.indexOf(document), 1);
    this.storeDocuments();
  }

  addDocument(document: Document) {
    // push the document passed in as in input to the end of the Documents list.
    if ( document === null ) {
      return;
    }
    this.documents.push(document);
    this.storeDocuments();
  }

  updateDocument(oldDoc: Document,
                 newDoc: Document) {
    this.documents[this.documents.indexOf(oldDoc)] = newDoc;
    this.storeDocuments();
  }

  storeDocuments() {
    const body = JSON.stringify(this.documents);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://briannacarrick-ng-cms.firebaseio.com/documents.json', body, {headers: headers}).toPromise;
  }

  initDocuments() {
    return this.http.get('https://briannacarrick-ng-cms.firebaseio.com/documents.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Document[]) => {
          this.documents = data;
          this.getDocumentsEmitter.emit(this.documents);
        }
      );
  }

}
