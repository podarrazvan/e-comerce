import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private $cart: BehaviorSubject<any> = new BehaviorSubject(null);

  setCart(cart: any): void {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.$cart.next(cart);
  }

  getCart(): Observable<any[]> {
    return this.$cart.asObservable();
  }

  getCartValue(): any {
    return this.$cart.value;
  }
}
