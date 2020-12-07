// TODO: Explain providers!
import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {forbiddenEmailValidator} from "./function";

@Directive({
  selector: '[forbiddenEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenEmailDirective,
      multi: true
    }
  ]
})
export class ForbiddenEmailDirective implements Validator {

  @Input('forbiddenEmail') forbiddenEmail: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenEmail ?
      forbiddenEmailValidator(this.forbiddenEmail)(control) : null
  }
}
