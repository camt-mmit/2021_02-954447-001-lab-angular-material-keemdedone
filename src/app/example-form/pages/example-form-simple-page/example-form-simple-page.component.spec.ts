import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormSimplePageComponent } from './example-form-simple-page.component';

describe('ExampleFormSimplePageComponent', () => {
  let component: ExampleFormSimplePageComponent;
  let fixture: ComponentFixture<ExampleFormSimplePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleFormSimplePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
