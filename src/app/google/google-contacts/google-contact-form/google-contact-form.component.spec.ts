import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactFormComponent } from './google-contact-form.component';

describe('GoogleContactFormComponent', () => {
  let component: GoogleContactFormComponent;
  let fixture: ComponentFixture<GoogleContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
