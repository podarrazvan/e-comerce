import { Component } from '@angular/core';
import { Product } from 'src/app/shared/entities/product';

@Component({
  selector: 'ecomerce-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  banners = [
    {
      image: 'assets/mock/mock-2.jpg',
      text: '<p class="text-white p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum orci. Nullam eget risus quis arcu congue ultrices. Pellentesque ac neque sagittis, dictum dolor id, aliquet justo. Aliquam libero est, placerat non malesuada auctor, ultricies laoreet lacus. Donec vel fringilla nisi. Phasellus eget consequat orci. Sed et facilisis lorem. Vestibulum malesuada feugiat convallis. Proin dictum vestibulum augue, vel facilisis erat tempus a. Aenean ut gravida mauris.</p>',
      btnText: 'Learn More',
    },
  ];

  products: Partial<Product>[] = [
    {
      id: '1234',
      mainImage: 'assets/mock/mock-3.jpeg',
      name: 'iPhone',
      price: 650,
    },
    {
      id: '1234',
      mainImage: 'assets/mock/mock-2.jpg',
      name: 'iPhone',
      price: 650,
    },
    {
      id: '1234',
      mainImage: 'assets/mock/mock-3.jpeg',
      name: 'iPhone',
      price: 650,
    },
    {
      id: '1234',
      mainImage: 'assets/mock/mock-1.jpg',
      name: 'iPhone',
      price: 650,
    },
    {
      id: '1234',
      mainImage: 'assets/mock/mock-3.jpeg',
      name: 'iPhone',
      price: 650,
    },
  ];
}
