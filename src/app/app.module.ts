import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // import to appModule only

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { PortalModule } from '@angular/cdk/portal'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';
import { GoogleConfigurationToken } from './google/models';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    PortalModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: GoogleConfigurationToken,
      useValue: environment.googleConfiguration,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
