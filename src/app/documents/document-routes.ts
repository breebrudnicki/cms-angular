// URL | Component
// :idx | DocumentViewComponent
// :idx/edit | DocumentEditComponent
// new | DocumentEditComponent

import { Routes, RouterModule } from "@angular/router";
import { DocumentViewComponent } from "./document-view/document-view.component";
import { DocumentEditComponent } from "./document-edit/document-edit.component";

export const DOCUMENT_ROUTES: Routes = [
  { path: 'new', component: DocumentEditComponent },
  { path: ':idx', component: DocumentViewComponent },
  { path: ':idx/edit', component: DocumentEditComponent }
];
