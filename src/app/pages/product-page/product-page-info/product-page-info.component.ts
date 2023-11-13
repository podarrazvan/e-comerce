import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { Product } from 'src/app/shared/entities/product';

@Component({
  selector: 'ecomerce-product-page-info',
  templateUrl: './product-page-info.component.html',
  styleUrls: ['./product-page-info.component.scss'],
})
export class ProductPageInfoComponent {
  @Input() product?: Partial<Product>;

  formGroup: FormGroup = new FormGroup({
    productId: new FormControl(''),
    quantity: new FormControl(1, [Validators.required, this.quantityValidator]),
  });

  quantityValidator(control: AbstractControl): ValidationErrors | null {
    const value = +control.value;
    if (isNaN(value) || !Number.isInteger(value) || value < 1) {
      return { invalidQuantity: true };
    }

    return null;
  }
}
