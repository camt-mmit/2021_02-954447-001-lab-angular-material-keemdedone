import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleListNavigationPageComponent } from './example-list-navigation-page.component';

describe('ExampleListNavigationPageComponent', () => {
  let component: ExampleListNavigationPageComponent;
  let fixture: ComponentFixture<ExampleListNavigationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleListNavigationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleListNavigationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
