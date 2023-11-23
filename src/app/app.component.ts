import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'e-comerce';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart')!);
      this.cartService.setCart(cart);
    }
  }
}
