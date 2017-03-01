import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';
import { Document } from '../document';
import { DocumentsService } from '../documents.service';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private documentIdx: number;
  document: Document;
  nativeWindow: any;

  constructor( private documentsService: DocumentsService,
               private route: ActivatedRoute,
               private router: Router,
               private windRef: WindRefService) {
    this.nativeWindow = windRef.getNativeWindow();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.documentIdx = params['idx'];
        this.document = this.documentsService.getDocument(this.documentIdx);
      }
    );
  }

  onView() {
    var url = this.document.url;
    var docName = this.document.name;
    this.nativeWindow.open(url, docName);
  }

  onDelete() {
    this.documentsService.deleteDocument(this.document[this.documentIdx]);
    this.router.navigate(['/documents']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
