import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisTextComponent } from './ellipsis-text.component';

describe('EllipsisTextComponent', () => {
  let component: EllipsisTextComponent;
  let fixture: ComponentFixture<EllipsisTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EllipsisTextComponent]
    });
    fixture = TestBed.createComponent(EllipsisTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
