import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';
import { ExampleFormRoutingModule } from './example-form-routing.module';
import { ExampleFormComponent } from './pages/example-form/example-form.component';
import { ExampleFormSimplePageComponent } from './pages/example-form-simple-page/example-form-simple-page.component';
import { ExampleFormComplexPageComponent } from './pages/example-form-complex-page/example-form-complex-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonModule } from '@angular/material/button'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExampleFormComponent,
    ExampleFormSimplePageComponent,
    ExampleFormComplexPageComponent
  ],
  imports: [
    CommonModule,
    ExampleFormRoutingModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class ExampleFormModule { }
