import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ecomerce-cta-banner',
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.scss'],
})
export class CtaBannerComponent {
  @Input({ required: true }) banner?: any;

  @Output() onClick: EventEmitter<void> = new EventEmitter();
}
