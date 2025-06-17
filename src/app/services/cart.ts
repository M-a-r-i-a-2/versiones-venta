import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.precio, 0);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}