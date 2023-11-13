import { Component } from '@angular/core';
import { faSearch, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ecomerce-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faSearch = faSearch;
  cart = faShoppingCart;
  faBars = faBars;
}
