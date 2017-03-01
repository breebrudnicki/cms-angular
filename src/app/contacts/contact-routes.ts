// new ContactEditComponent
// :idx/detail ContactDetailComponent
// :idx/edit ContactEditComponent
import { Routes, RouterModule } from "@angular/router";
import { ContactEditComponent } from "./contact-edit/contact-edit.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";

export const CONTACT_ROUTES: Routes = [
  { path: 'new', component: ContactEditComponent },
  { path: ':idx/detail', component: ContactDetailComponent },
  { path: ':idx/edit', component: ContactEditComponent }
];
