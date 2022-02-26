import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../../models';

@Component({
  selector: 'app-google-contact-form',
  templateUrl: './google-contact-form.component.html',
  styleUrls: ['./google-contact-form.component.scss']
})
export class GoogleContactFormComponent implements OnInit {
  @Input() data: Person | null = null;

  @Output() dataChange = new EventEmitter<Person>();
  @Output() cancel = new EventEmitter<void>();

  errorMsg: string | null = null;
  formGroup! : FormGroup

  constructor(
    private readonly fb:FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      person : [this.data, [Validators.required]],
    });
  }

  onSubmit(): void{
    this.errorMsg = null;
    if(this.formGroup.invalid){
      this.errorMsg = 'Invalid form data!!!'
    } else {
      const control = this.formGroup.get('person')!;
      this.dataChange.emit(control.value)
    }
  }

  onCancel(): void{
    this.cancel.emit();
  }

}
