import { Component } from '@angular/core';
import {
  faSearch,
  faShoppingCart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'ecomerce-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  faSearch = faSearch;
  cart = faShoppingCart;
  faBars = faBars;
  showCart = false;
  constructor(public cartService: CartService) {}

  removeItem(index: number): void {
    const currentCart = this.cartService.getCartValue();
  const cart = [...currentCart];
  cart.splice(index, 1);
  this.cartService.setCart(cart);
  this.showCart = cart.length !== 0;
  }
}
