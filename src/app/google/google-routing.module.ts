import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAuthorizationComponent } from './pages/google-authorization/google-authorization.component';
import { GoogleContactsCreatePageComponent } from './pages/google-contacts/google-contacts-create-page/google-contacts-create-page.component';
import { GoogleContactsListPageComponent } from './pages/google-contacts/google-contacts-list-page/google-contacts-list-page.component';
import { GoogleComponent } from './pages/google/google.component';

const routes: Routes = [
  {
    path:'authorization',
    component: GoogleAuthorizationComponent,
  },
  {
    path:'',
    component: GoogleComponent,
    children: [
      {
        path:'',
        redirectTo:'contact',
        pathMatch:'full',
      },
      {
        path:'contact',
        component: GoogleContactsListPageComponent,
      },
      {
        path:'contact/create',
        component: GoogleContactsCreatePageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleRoutingModule { }
