import { Component } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SearchByDateFormControl } from 'src/typings/forms/SearchByDate.form';
import { Invoice } from 'src/typings/interfaces/invoice.interface';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  loading: boolean = false;
  formControl = new SearchByDateFormControl();
  items: Invoice[] = []

  constructor(
    private invoices: InvoiceService
  ) {}

  get start() {
    return <FormControl>this.formControl.formGroup.controls['start']
  }
  get end() {
    return <FormControl>this.formControl.formGroup.controls['end']
  }

  get formControlsToArray(): FormControl[] {
    const obj = this.formControl.formGroup.controls;
    return Object.keys(obj).map((key: string) => <FormControl>obj[key]);
  }

  invalid( control: FormControl ) { return control.touched && control.invalid; }
  errorsToString( errors: ValidationErrors | null ) { return Object.values(errors || {}).join("\n"); }

  search() {
    const body = this.formControl.toPayload();
    this.loading = true;
    this.invoices.find(body).subscribe( res => {
      this.items = res;
      this.loading = false;
    } );
  }

  reset() {
    this.loading = true;
    this.formControl.formGroup.setValue({
      start: null,
      end: null
    })
    this.items = [];
    this.loading = false;
  }
}
