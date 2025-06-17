import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { Product } from '../../services/products';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', 
          style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class Header {
  cartVisible = false;
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getItems();
  }

  toggleCart() {
    this.cartVisible = !this.cartVisible;
    if (this.cartVisible) {
      this.cartItems = this.cartService.getItems();
    }
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getItems();
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}