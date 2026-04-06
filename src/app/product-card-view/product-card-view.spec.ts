import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardView } from './product-card-view';

describe('ProductCardView', () => {
  let component: ProductCardView;
  let fixture: ComponentFixture<ProductCardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardView],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
