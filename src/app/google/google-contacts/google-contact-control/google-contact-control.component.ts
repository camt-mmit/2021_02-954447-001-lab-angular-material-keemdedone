import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { map, Observable, Subscription } from 'rxjs';
import { Person } from '../../models';

@Component({
  selector: 'app-google-contact-control',
  templateUrl: './google-contact-control.component.html',
  styleUrls: ['./google-contact-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: GoogleContactControlComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: GoogleContactControlComponent,
      multi: true,
    },
  ],
})
export class GoogleContactControlComponent implements OnInit, OnDestroy, ControlValueAccessor, Validators {

  formGroup!: FormGroup;

  onTouched = () => {};

  private valueChanges$! : Observable<Person>;
  private readonly subscriptions: Subscription[] = [];

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      givenName: [null, Validators.required],
      familyName: [null, Validators.required],
      emailAddresses: this.fb.array([]),
      phoneNumbers: this.fb.array([]),
    });

    this.valueChanges$ = this.formGroup.valueChanges.pipe(
      map((data) => {
        return data;
      }),
    ); /* IMPOTANT!!! if no this line, back-button(effect to registerOnChange(), ngOnDestroy() ) can't use */

  }

  get emailAddresses(): FormArray {
    return this.formGroup.get('emailAddresses') as FormArray;
  }

  get phoneNumbers(): FormArray {
    return this.formGroup.get('phoneNumbers') as FormArray;
  }

  /* UI function */

  addEmailAddress(event: any): void {
    event.preventDefault();
    this.emailAddresses.push(this.fb.group({value:''}));
  }

  addPhoneNumber(event: any): void {
    event.preventDefault();
    this.phoneNumbers.push(this.fb.group({value:''}));
  }

  deletePhoneNumber(index: number): void{
    this.phoneNumbers.removeAt(index);
  }

  deleteEmailAddress(index: number): void {
    this.emailAddresses.removeAt(index);
  }

  /* End UI function */

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  writeValue(value: any): void {
    if(value){
      this.formGroup.setValue(value, { emitEvent: false });
    };
  }

  registerOnChange(onChange: any): void {
    const sub = this.valueChanges$.subscribe(onChange);
    this.subscriptions.push(sub);
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void{
    if(isDisabled){
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  validate(parentControl: AbstractControl): ValidationErrors | null {
    if(!this.formGroup.invalid){
      return null;
    }

    let errors: ValidationErrors = {...this.formGroup.errors};

    ['givenName', 'familyName', 'emailAddresses','phoneNumbers'].forEach((key)=>{
      const control = this.formGroup.get(key)!;
      if(control.errors) errors[key] = control.errors;
    });
    return errors;
  }

}
