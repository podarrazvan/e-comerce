import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageInfoComponent } from './product-page-info.component';

describe('ProductPageInfoComponent', () => {
  let component: ProductPageInfoComponent;
  let fixture: ComponentFixture<ProductPageInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPageInfoComponent]
    });
    fixture = TestBed.createComponent(ProductPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
