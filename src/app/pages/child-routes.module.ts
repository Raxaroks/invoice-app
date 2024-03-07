import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';


const childRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'invoices',
    pathMatch: 'full'
  },
  {
    path: '',
    component: InvoiceListComponent,
    title: `Historial de facturas`
  },
  {
    path: '**',
    redirectTo: 'invoices'
  }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule {}

