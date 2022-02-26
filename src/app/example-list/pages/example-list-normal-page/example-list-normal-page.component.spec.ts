import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleListNormalPageComponent } from './example-list-normal-page.component';

describe('ExampleListNormalPageComponent', () => {
  let component: ExampleListNormalPageComponent;
  let fixture: ComponentFixture<ExampleListNormalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleListNormalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleListNormalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
