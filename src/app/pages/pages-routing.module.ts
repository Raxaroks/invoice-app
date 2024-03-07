import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';


export const pageRoutes: Routes = [
  {
    path: 'invoices',
    component: PagesComponent,
    title: 'Invoice App',
    loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(pageRoutes)],
  exports: [RouterModule],
  providers: []
})
export class PageRoutingModule {}
