import { FormControl, FormGroup } from '@angular/forms';
import Control from '../interfaces/Control.interface';
import { required } from 'src/helpers/validation-functions.helper';

export type SearchByDateForm = {
  start: string;
  end: string;
}

export class SearchByDateFormControl implements Control<SearchByDateForm> {
  private _formGroup!: FormGroup;
  get formGroup() { return this._formGroup }

  constructor(form?: SearchByDateForm) {
    this.initFormGroup(form);
  }

  private initFormGroup(form?: SearchByDateForm) {
    this._formGroup = new FormGroup({
      start: new FormControl(null, { validators: [required('Este campo es obligatiorio!')] }),
      end: new FormControl(null, { validators: [required('Este campo es obligatiorio!')] })
    }, { updateOn: 'change' })
  }

  loadFromModel(model: SearchByDateForm){
    this.formGroup.patchValue(model); 
  }

  toPayload(): SearchByDateForm {
    const { start, end } = this._formGroup.controls;
    return {
      start: new Date(start.value).toISOString(),
      end: new Date(end.value).toISOString(),
    }
  }
}
