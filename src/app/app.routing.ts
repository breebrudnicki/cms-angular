import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { MessagesComponent } from "./messages/messages.component";
import { DocumentsComponent } from "./documents/documents.component";

import { MESSAGE_ROUTES } from "./messages/message-routes";
import { DOCUMENT_ROUTES } from "./documents/document-routes";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'messages', component: MessagesComponent, children: MESSAGE_ROUTES },
  { path: 'documents', component: DocumentsComponent, children: DOCUMENT_ROUTES }
];

export const routing= RouterModule.forRoot(APP_ROUTES);
