import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { MessagesComponent } from "./messages/messages.component";
import { DocumentsComponent } from "./documents/documents.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'documents', component: DocumentsComponent }
];

export const routing= RouterModule.forRoot(APP_ROUTES);
