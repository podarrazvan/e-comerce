import { Component, Input } from '@angular/core';
import { Product } from '../../entities/product';

@Component({
  selector: 'ecomerce-simple-product-card',
  templateUrl: './simple-product-card.component.html',
  styleUrls: ['./simple-product-card.component.scss'],
})
export class SimpleProductCardComponent {
  @Input({ required: true }) product?: Partial<Product>;
}
