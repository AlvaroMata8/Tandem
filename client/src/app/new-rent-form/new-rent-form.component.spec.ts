import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRentFormComponent } from './new-rent-form.component';

describe('NewRentFormComponent', () => {
  let component: NewRentFormComponent;
  let fixture: ComponentFixture<NewRentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
