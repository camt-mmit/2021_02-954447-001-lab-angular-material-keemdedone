import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleListNavigationPageComponent } from './pages/example-list-navigation-page/example-list-navigation-page.component';
import { ExampleListNormalPageComponent } from './pages/example-list-normal-page/example-list-normal-page.component';
import { ExampleListComponent } from './pages/example-list/example-list.component';

const routes: Routes = [
  {
    path:'',
    component: ExampleListComponent,
    children: [
      {
        path:'',
        redirectTo: 'normal',
        pathMatch: 'full'
      },
      {
        path:'normal',
        component: ExampleListNormalPageComponent,
      },
      {
        path:'navigation',
        component: ExampleListNavigationPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleListRoutingModule { }
