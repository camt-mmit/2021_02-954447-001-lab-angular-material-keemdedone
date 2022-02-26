import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleContactsListPageComponent } from './pages/google-contacts/google-contacts-list-page/google-contacts-list-page.component';
import { GoogleContactsCreatePageComponent } from './pages/google-contacts/google-contacts-create-page/google-contacts-create-page.component';
import { GoogleUiModule } from './google-ui.module';
import { GoogleAuthorizationComponent } from './pages/google-authorization/google-authorization.component';
import { GoogleComponent } from './pages/google/google.component';
import { GoogleRoutingModule } from './google-routing.module';

import { PortalModule } from '@angular/cdk/portal';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    GoogleComponent,
    GoogleContactsListPageComponent,
    GoogleContactsCreatePageComponent,
    GoogleAuthorizationComponent,
  ],
  imports: [
    CommonModule,
    GoogleUiModule,
    GoogleRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    PortalModule,
  ]
})
export class GoogleModule { }
