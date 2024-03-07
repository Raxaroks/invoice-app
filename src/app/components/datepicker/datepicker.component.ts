import { Component, Input } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  @Input() name: string = 'date';
  @Input() label: string = 'Input label';
  @Input() required: boolean = false;
  @Input() formControl?: FormControl;

  // form helpers
  invalid( control: FormControl ) { return control.touched && control.invalid; }
  errorsToString( errors: ValidationErrors | null ) { return Object.values(errors || {}).join("\n"); }
}
