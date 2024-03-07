import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FunButtonComponent } from './fun-button/fun-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    SidebarComponent,
    DatepickerComponent,
    FunButtonComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    DatepickerComponent,
    FunButtonComponent,
    SpinnerComponent
  ],
})
export class ComponentsModule { }
