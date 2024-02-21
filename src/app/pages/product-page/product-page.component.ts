import { Component } from '@angular/core';
import { Availability } from 'src/app/shared/entities/availability';
import { Product } from 'src/app/shared/entities/product';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ecomerce-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  product: Partial<Product> = {
    id: '12324',
    mainImage: 'assets/mock/mock-3.jpeg',
    name: 'iPhone',
    price: 650,
    images: [
      'assets/mock/mock-3.jpeg',
      'assets/mock/mock-2.jpg',
      'assets/mock/mock-1.jpg',
    ],
    availability: Availability.IN_STOCK,
    description: `<h1 style="text-align: center; font-size:3rem; margin-bottom: 15px;">iPhone 10 Pro Max</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat lacus ut nulla rhoncus mollis. Vivamus ultricies, arcu nec varius convallis, justo diam fringilla odio, at sodales tellus dui eget mauris. Vivamus et eleifend lorem. Cras id elementum sapien, quis tristique dolor. Proin a hendrerit dolor. Proin sed neque interdum, aliquam diam ut, pulvinar sem. Aliquam nisl purus, ultricies sed quam id, efficitur porta leo. Curabitur ac malesuada felis. Morbi eget erat non enim tincidunt porta. Nam nec ornare leo, vel molestie nisi. Sed pharetra risus non augue aliquet venenatis. Duis sit amet sapien id leo maximus rutrum quis non tellus.</p>
    <p>Etiam malesuada mattis orci vitae elementum. Nulla sed urna velit. Sed ultrices accumsan dolor, a pulvinar ante ultricies at. Phasellus eget ligula eget turpis vulputate auctor. Maecenas porttitor a nunc eget posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed egestas molestie erat hendrerit mollis. Phasellus et risus maximus, tincidunt urna laoreet, finibus risus. Quisque sed tellus nisi. Sed consequat lectus tellus, ut maximus purus tempor vel. Vestibulum rhoncus tellus non vestibulum lobortis. Duis aliquet massa sed posuere vestibulum. Donec tincidunt ex et malesuada suscipit. Etiam pulvinar lectus at vehicula malesuada. Fusce suscipit diam sed nulla faucibus sagittis.</p>
    <p>Mauris urna augue, molestie vitae lectus dapibus, euismod condimentum sem. Donec tristique, lorem nec laoreet semper, ipsum felis mattis arcu, non ultrices eros magna ut urna. Quisque bibendum viverra euismod. Ut sodales faucibus turpis ac scelerisque. Vestibulum sed eleifend tortor, vitae facilisis massa. Sed lobortis enim quis urna rutrum laoreet. Mauris pulvinar faucibus dolor vitae eleifend. Suspendisse ullamcorper nisi eget vehicula vulputate. Integer volutpat turpis et libero dictum, eu suscipit massa auctor. In porta pellentesque bibendum.</p>
    <p>Nullam sed condimentum lectus. Phasellus eu fringilla dolor, at eleifend orci. Sed viverra sollicitudin est ac mollis. Integer in erat at urna tincidunt euismod. Donec eu quam feugiat, luctus orci et, volutpat purus. Aenean eu ipsum augue. Pellentesque eget nibh vitae urna sodales consequat at sed neque. Etiam sagittis, justo in lacinia pulvinar, leo lectus iaculis nunc, nec malesuada odio lorem non justo. Integer eget tellus magna. Vestibulum vel ullamcorper eros. Aenean nec dictum nibh.</p>
    <p>Suspendisse turpis magna, euismod a finibus in, fringilla et dolor. Maecenas volutpat cursus laoreet. Nulla sed mi velit. Aliquam vitae neque ut arcu tincidunt dignissim non in orci. Etiam vestibulum volutpat fringilla. Pellentesque sit amet arcu gravida, aliquam tellus eu, viverra arcu. Phasellus placerat et orci ac condimentum. In laoreet a purus et tempus. Duis eget nunc lacus. Vivamus sodales lacus ut nibh porttitor consequat. Donec feugiat a sapien eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ac ipsum quis nulla congue consectetur. Fusce iaculis aliquam dictum. Aliquam massa risus, laoreet ut leo vel, efficitur dictum ligula. In tincidunt mattis leo, a vehicula est malesuada quis.</p>
    <h1>&nbsp;</h1>`,
    shipping: 39,
    shippingDays: 14,
  };

  recommendedProducts = [
    {
      id: '1000',
      mainImage: 'assets/mock/mock-3.jpeg',
      name: 'iPhone Super Mega Ultra X Giga S Pro Max',
      price: 650,
      images: [
        'assets/mock/mock-3.jpeg',
        'assets/mock/mock-2.jpg',
        'assets/mock/mock-1.jpg',
      ],
      availability: Availability.IN_STOCK,
    },
    {
      id: '12111',
      mainImage: 'assets/mock/mock-3.jpeg',
      name: 'iPhone',
      price: 650,
      images: [
        'assets/mock/mock-3.jpeg',
        'assets/mock/mock-2.jpg',
        'assets/mock/mock-1.jpg',
      ],
      availability: Availability.IN_STOCK,
    },
    {
      id: '1234',
      mainImage: 'assets/mock/mock-3.jpeg',
      name: 'iPhone',
      price: 650,
      images: [
        'assets/mock/mock-3.jpeg',
        'assets/mock/mock-2.jpg',
        'assets/mock/mock-1.jpg',
      ],
      availability: Availability.IN_STOCK,
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  sanitized(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
