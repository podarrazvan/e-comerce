import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { CartItem } from 'src/app/shared/entities/cart-item';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'ecomerce-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    zipCode: new FormControl(null, Validators.required),
    country: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
    phoneNumber: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  public payPalConfig?: IPayPalConfig;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.initConfig();
  }

  cartTotal(cart: CartItem[]): number {
    return cart.reduce(
      (sum, item) => sum + item.price * item.quantity + item.shipping,
      0
    );
  }
  shippingTotal(cart: CartItem[]): number {
    return cart.reduce((sum, item) => sum + item.shipping, 0);
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'EUR',
                value: '9.99',
                breakdown: {
                  item_total: {
                    currency_code: 'EUR',
                    value: '9.99',
                  },
                },
              },
              items: [
                {
                  name: 'Enterprise Subscription',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        // this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
