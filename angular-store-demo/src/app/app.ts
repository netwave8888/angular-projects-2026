import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from './product-card/product-card';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCard, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      description: 'An ergonomic Bluetooth mouse for office work.',
      price: 29.99,
      inStock: true,
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      description: 'A compact keyboard with tactile mechanical switches.',
      price: 89.99,
      inStock: true,
    },
    {
      id: 3,
      name: 'USB-C Dock',
      description: 'A multi-port dock for monitors and accessories.',
      price: 119.99,
      inStock: false,
    },
  ];

  cart = signal<Product[]>([]);

  cartTotal = computed(() =>
    this.cart().reduce(
      (total, product) => total + product.price,
      0,
    ),
  );

  addProductToCart(product: Product): void {
    this.cart.update((currentCart) => [
      ...currentCart,
      product,
    ]);
  }

  removeProductFromCart(indexToRemove: number): void {
    this.cart.update((currentCart) =>
      currentCart.filter(
        (_, index) => index !== indexToRemove,
      ),
    );
  }

  clearCart(): void {
    this.cart.set([]);
  }
}