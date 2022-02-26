import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleContactsListComponent } from './google-contacts/google-contacts-list/google-contacts-list.component';
import { GoogleContactControlComponent } from './google-contacts/google-contact-control/google-contact-control.component';
import { GoogleContactFormComponent } from './google-contacts/google-contact-form/google-contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PortalModule } from '@angular/cdk/portal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    GoogleContactsListComponent,
    GoogleContactControlComponent,
    GoogleContactFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  exports: [
    GoogleContactsListComponent,
    GoogleContactControlComponent,
    GoogleContactFormComponent
  ]
})
export class GoogleUiModule { }
