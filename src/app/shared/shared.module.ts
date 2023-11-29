import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { EllipsisTextComponent } from './components/ellipsis-text/ellipsis-text.component';
import { EllipsisModule } from 'ngx-ellipsis';
import { MainProductCardComponent } from './components/main-product-card/main-product-card.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './components/popup/popup.component';
import { SimpleProductCardComponent } from './components/simple-product-card/simple-product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

const COMPONENTS = [
  NavigationComponent,
  CtaBannerComponent,
  EllipsisTextComponent,
  MainProductCardComponent,
  CurrencyPipe,
  PopupComponent,
  SimpleProductCardComponent,
  FooterComponent,
  CartItemComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FontAwesomeModule, EllipsisModule, RouterModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
