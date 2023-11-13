import { Component, Input } from '@angular/core';
import { Product } from '../../entities/product';

@Component({
  selector: 'ecomerce-main-product-card',
  templateUrl: './main-product-card.component.html',
  styleUrls: ['./main-product-card.component.scss'],
})
export class MainProductCardComponent {
  @Input({required: true}) product?: Partial<Product>;
}
