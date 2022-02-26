import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormComplexPageComponent } from './example-form-complex-page.component';

describe('ExampleFormComplexPageComponent', () => {
  let component: ExampleFormComplexPageComponent;
  let fixture: ComponentFixture<ExampleFormComplexPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFormComplexPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormComplexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
