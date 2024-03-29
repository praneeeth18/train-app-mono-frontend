import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltrainsComponent } from './alltrains.component';

describe('AlltrainsComponent', () => {
  let component: AlltrainsComponent;
  let fixture: ComponentFixture<AlltrainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltrainsComponent]
    });
    fixture = TestBed.createComponent(AlltrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
