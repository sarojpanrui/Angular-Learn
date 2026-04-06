import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card-view',
  imports: [],
  templateUrl: './product-card-view.html',
  styleUrl: './product-card-view.css',
})
export class ProductCardView {
  productId = signal('0');
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.productId.set(params.get('id') || '0');
      console.log(this.productId())
    });
  }
}
