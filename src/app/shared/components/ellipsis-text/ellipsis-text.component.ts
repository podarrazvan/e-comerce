import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ecomerce-ellipsis-text',
  templateUrl: './ellipsis-text.component.html',
  styleUrls: ['./ellipsis-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EllipsisTextComponent implements OnInit {
  @Input({ required: true }) text: string = '';
  @Input() lineHeight: number = 22.01;
  @Input() numberOfRows: number = 1;
  @Input() readMore: boolean = false;

  showEllipsis = true;
  height: number = 22;
  textTruncated: boolean = false;

  constructor(private changeDetector: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  get sanitizedHtmlContent(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.text);

  }

  ngOnInit(): void {
    this.height = this.numberOfRows * this.lineHeight;
  }

  ellipsisChanged(ev: any): void {
    if (ev) {
      this.textTruncated = true;
      this.changeDetector.markForCheck();
      this.changeDetector.detectChanges();
    }
  }
}
