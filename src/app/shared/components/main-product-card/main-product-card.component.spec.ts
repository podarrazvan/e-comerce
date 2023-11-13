import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProductCardComponent } from './main-product-card.component';

describe('MainProductCardComponent', () => {
  let component: MainProductCardComponent;
  let fixture: ComponentFixture<MainProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainProductCardComponent]
    });
    fixture = TestBed.createComponent(MainProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
