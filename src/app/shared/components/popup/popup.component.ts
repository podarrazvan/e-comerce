import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ecomerce-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Output() closePopup = new EventEmitter();
}
