import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContactControlComponent } from './google-contact-control.component';

describe('GoogleContactControlComponent', () => {
  let component: GoogleContactControlComponent;
  let fixture: ComponentFixture<GoogleContactControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContactControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleContactControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
