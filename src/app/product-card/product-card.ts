import { Component,inject,input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<any>();
  router=inject(Router)

  view(id:number){
    this.router.navigate([`/product/${id}`])
  }
}
