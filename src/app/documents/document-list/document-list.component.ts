import { Component, OnInit } from '@angular/core';
import { Document } from '../document';
import { DocumentsService } from '../documents.service';

import { DocumentItemComponent } from './document-item.component';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  document: Document = null;
  documents: Document[] = [];

  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
    this.documentService.getDocumentsEmitter.subscribe(
      (documents: Document[]) => this.documents = documents
    );
  }

}
