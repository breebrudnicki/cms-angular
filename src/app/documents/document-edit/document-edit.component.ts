import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../documents.service';
import { Subscription } from 'rxjs/RX';
import { Document } from '../document';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
   private documentIndex: number; //to get the index later
   subscription: Subscription; // route subscription
   oldDocument: Document; // ref. to old document
   editMode: boolean = false; // in edit mode flag?

  constructor(private documentsService: DocumentsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('idx')) {
          this.documentIndex = +params['idx'];
          this.oldDocument = this.documentsService.getDocument(this.documentIndex);
          this.editMode = true;
        } else {
          this.oldDocument = null;
          this.editMode = false;
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(value) {
    let newDocument = new Document(null,
                                   value.name,
                                   value.description,
                                   value.url, null);
    if (this.editMode) {
      newDocument.id = this.oldDocument.id;
      this.documentsService.updateDocument(this.oldDocument, newDocument);
    } else {
      this.documentsService.addDocument(newDocument)
    }
    this.router.navigate(['documents']);
  }

  onCancel() {
    this.router.navigate(['documents']);
  }

}
