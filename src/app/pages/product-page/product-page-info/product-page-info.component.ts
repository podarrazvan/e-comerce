import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/entities/product';

@Component({
  selector: 'ecomerce-product-page-info',
  templateUrl: './product-page-info.component.html',
  styleUrls: ['./product-page-info.component.scss']
})
export class ProductPageInfoComponent {
  @Input() product?: Partial<Product>;
}
