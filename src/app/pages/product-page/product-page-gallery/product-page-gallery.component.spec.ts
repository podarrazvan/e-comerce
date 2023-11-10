import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageGalleryComponent } from './product-page-gallery.component';

describe('ProductPageGalleryComponent', () => {
  let component: ProductPageGalleryComponent;
  let fixture: ComponentFixture<ProductPageGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPageGalleryComponent]
    });
    fixture = TestBed.createComponent(ProductPageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
