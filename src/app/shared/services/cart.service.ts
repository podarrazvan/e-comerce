import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../entities/cart-item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private $cart: BehaviorSubject<CartItem[] | null> = new BehaviorSubject<CartItem[] | null>(null);

  setCart(cart: CartItem[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.$cart.next(cart);
  }

  getCart(): Observable<CartItem[] | null> {
    return this.$cart.asObservable();
  }

  getCartValue(): CartItem[] | null {
    return this.$cart.value;
  }
}
