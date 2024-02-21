import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
];
@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    NgxPayPalModule,
  ],
})
export class CheckoutModule {}
