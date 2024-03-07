import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

// function that validates if a given string is empty
export function isStringEmpty(str: string | undefined) {
  return !str || !str.trim();
}

export const mustBeTrue = ( { value }: AbstractControl ): ValidationErrors | null => {
  if (value !== true) return { terms: "You need to accept terms in order to sign up." }
  return null;
}
