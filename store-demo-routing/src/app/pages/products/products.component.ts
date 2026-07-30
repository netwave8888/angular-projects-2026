import { Component, inject } from '@angular/core';

import { ProductCardComponent } from '../../product-card/product-card.component';
import { Product } from '../../product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  private readonly cartService = inject(CartService);

  readonly products: Product[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      description:
        'An ergonomic Bluetooth mouse for office work.',
      price: 29.99,
      inStock: true,
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      description:
        'A compact keyboard with tactile mechanical switches.',
      price: 89.99,
      inStock: true,
    },
    {
      id: 3,
      name: 'USB-C Dock',
      description:
        'A multi-port dock for monitors and accessories.',
      price: 119.99,
      inStock: false,
    },
    {
      id: 4,
      name: 'Laptop Stand',
      description:
        'An adjustable aluminum stand for laptops.',
      price: 49.99,
      inStock: true,
    },
  ];

  addProductToCart(product: Product): void {
    this.cartService.addProduct(product);
  }
}