import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';
import { Document } from '../document';
import { DocumentsService } from '../documents.service';

// You also need to get references to instances of the
// DocumentsService, Router and ActivatedRoute services.
// Modify the constructor() function and use dependency injection to
// get a references to these three services

@Component({
  selector: 'cms-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private documentIdx: number;
  document: Document;

  constructor( private documentsService: DocumentsService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.documentIdx = params['idx'];
        this.document = this.documentsService.getDocument(this.documentIdx);
      }
    );
  }

  onDelete() {
    this.documentsService.deleteDocument(this.document[this.documentIdx]);
    this.router.navigate(['/documents']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
