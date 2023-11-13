import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBannerComponent } from './cta-banner.component';

describe('CtaBannerComponent', () => {
  let component: CtaBannerComponent;
  let fixture: ComponentFixture<CtaBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CtaBannerComponent]
    });
    fixture = TestBed.createComponent(CtaBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
