import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  // The parent must pass a product to this component.
  product = input.required<Product>();

  // This component can emit a Product to its parent.
  addToCart = output<Product>();

  handleAddToCart(): void {
    this.addToCart.emit(this.product());
  }
}