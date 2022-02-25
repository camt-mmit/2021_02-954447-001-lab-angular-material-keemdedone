import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example-form-simple-page',
  templateUrl: './example-form-simple-page.component.html',
  styleUrls: ['./example-form-simple-page.component.scss']
})
export class ExampleFormSimplePageComponent implements OnInit {
  formGroup! : FormGroup;
  value : any | null = null;

  constructor(
    private readonly fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      fname: [null,[Validators.required]],
      lname: [null,[Validators.required]],
      gender: [null,[Validators.required]],
      single: [null]
   });
  }

  onSubmit(): void{
    this.value = null;
    this.formGroup.updateValueAndValidity();

    if(this.formGroup.invalid){
      this.formGroup.markAllAsTouched();
    } else {
      this.value = this.formGroup.value
    }
  }
}
