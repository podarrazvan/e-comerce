import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { Product } from 'src/app/shared/entities/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'ecomerce-product-page-info',
  templateUrl: './product-page-info.component.html',
  styleUrls: ['./product-page-info.component.scss'],
})
export class ProductPageInfoComponent {
  @Input() product?: Partial<Product>;

  formGroup: FormGroup = new FormGroup({
    quantity: new FormControl(1, [Validators.required, this.quantityValidator]),
  });

  constructor(private cartService: CartService) {}

  quantityValidator(control: AbstractControl): ValidationErrors | null {
    const value = +control.value;
    if (isNaN(value) || !Number.isInteger(value) || value < 1) {
      return { invalidQuantity: true };
    }

    return null;
  }

  addToCart(): void {
    if (!this.formGroup.valid || !this.product) {
      return;
    }
    const cart = this.cartService.getCartValue() || [];
    const index = cart.findIndex((item: any) => item.id === this.product?.id);
    if (index === -1) {
      cart.push({
        id: this.product?.id!,
        name: this.product?.name!,
        price: this.product?.price!,
        mainImage: this.product?.mainImage!,
        quantity: +this.formGroup.value.quantity,
      });
    } else {
      cart[index].quantity += +this.formGroup.value.quantity;
    }

    this.cartService.setCart(cart);
    alert('Product added to cart successfully!');
  }
}
