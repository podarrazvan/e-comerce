import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/entities/product';

@Component({
  selector: 'ecomerce-product-page-gallery',
  templateUrl: './product-page-gallery.component.html',
  styleUrls: ['./product-page-gallery.component.scss'],
})
export class ProductPageGalleryComponent {
  @Input() product?: Partial<Product>;

  selectedImageIndex = 0;
  showImgPopup = false;
}
