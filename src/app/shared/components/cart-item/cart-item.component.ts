import { Component, Input } from '@angular/core';
import { CartItem } from '../../entities/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'ecomerce-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item?: CartItem;

  constructor(private cartService: CartService){}
  removeItem(){
    const cart  = this.cartService.getCartValue();
    if(!cart) {
      return;
    }
    const index = cart.findIndex((item: CartItem) => item.id === this.item?.id);

    cart.splice(index, 1);
    this.cartService.setCart(cart);
  }
}
