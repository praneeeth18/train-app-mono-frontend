import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbookComponent } from './cardbook.component';

describe('CardbookComponent', () => {
  let component: CardbookComponent;
  let fixture: ComponentFixture<CardbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardbookComponent]
    });
    fixture = TestBed.createComponent(CardbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
