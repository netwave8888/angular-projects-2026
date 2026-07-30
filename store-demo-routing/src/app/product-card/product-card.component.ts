import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  // The parent must provide one Product.
  readonly product = input.required<Product>();

  // The child can emit one Product to its parent.
  readonly addToCart = output<Product>();

  handleAddToCart(): void {
    this.addToCart.emit(this.product());
  }
}