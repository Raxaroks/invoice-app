import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { PageRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    PagesComponent,
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
