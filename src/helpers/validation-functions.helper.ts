import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { isStringEmpty } from "./custom-validations.helper";



// validation function for reactive-forms: 
// -> check if a field is required given an specific predicate
export function required(control: AbstractControl): ValidationErrors | null;
export function required(predicate: (control: AbstractControl) => boolean): ValidatorFn; // Overloads signature
// Actual method
export function required(message: string, predicate?: () => boolean): ValidatorFn;
export function required(
  obj: AbstractControl | ((control: AbstractControl) => boolean) | string,
  predicate?: (control: AbstractControl) => boolean
) {
  // Function that generates validation function with different error message
  function validatorFn(message?: string): ValidatorFn {
    return ({ value }) => {
      if (
        !value ||
        (typeof value === "string" && isStringEmpty(value)) ||
        (Array.isArray(value) && value.length === 0)
      )
        return { required: message || "Field required!" };
      return null;
    };
  }

  /* Compare and fulfill the overloads */

  // (control: AbstractControl) => ValidationErrors | null
  if (obj instanceof AbstractControl) {
    const fun = validatorFn();
    return fun(obj);
    // (message: string, predicate?: () => boolean): ValidatorFn
  } else if (typeof obj === "string") {
    const fun = validatorFn(obj);
    if (predicate)
      return (control: AbstractControl) => {
        return predicate!(control) ? fun(control) : null;
      };
    else return fun;
    // (predicate: () => boolean ): ValidatorFn
  } else {
    predicate = obj;
    return (control: AbstractControl) => {
      return predicate!(control) ? required(control) : null;
    };
  }
}

// validation function for reactive-forms: 
// -> check if a string is an email or not
export function isEmail(control: AbstractControl): ValidationErrors | null;
export function isEmail(email: string): boolean;
export function isEmail(obj: string | AbstractControl) {
  const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (typeof obj === "string") return regexp.test(obj);

  const { value } = obj;
  if (!value) return null;
  return <ValidationErrors | null>(
    (typeof value == "string" && isEmail(<string>value)
      ? null
      : { notEmail: "Is not an email!" })
  );
}