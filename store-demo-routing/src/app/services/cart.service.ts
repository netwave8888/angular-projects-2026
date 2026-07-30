import {
  computed,
  Injectable,
  signal,
} from '@angular/core';

import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Private writable signal.
  private readonly cartItems = signal<Product[]>([]);

  // Public read-only version for components.
  readonly items = this.cartItems.asReadonly();

  // Automatically recalculates when cartItems changes.
  readonly itemCount = computed(
    () => this.cartItems().length,
  );

  // Automatically adds all product prices.
  readonly total = computed(() =>
    this.cartItems().reduce(
      (runningTotal, product) =>
        runningTotal + product.price,
      0,
    ),
  );

  addProduct(product: Product): void {
    this.cartItems.update((currentItems) => [
      ...currentItems,
      product,
    ]);
  }

  removeProduct(indexToRemove: number): void {
    this.cartItems.update((currentItems) =>
      currentItems.filter(
        (_, index) => index !== indexToRemove,
      ),
    );
  }

  clearCart(): void {
    this.cartItems.set([]);
  }
}