import { Component } from '@angular/core';
import { Availability } from 'src/app/shared/entities/availability';
import { Product } from 'src/app/shared/entities/product';

@Component({
  selector: 'ecomerce-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {

  product: Partial<Product> = {
    id: '1234',
    mainImage: 'assets/mock/mock-3.jpeg',
    name: 'iPhone',
    price: 650,
    images: [
      'assets/mock/mock-3.jpeg',
      'assets/mock/mock-2.jpg',
      'assets/mock/mock-1.jpg',
    ],
    availability: Availability.IN_STOCK
  };
}
