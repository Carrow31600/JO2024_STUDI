import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private cartserv = inject(CartService);
  cartItems = this.cartserv.getCart();  // Récupére les articles du panier

  // affiche du nombre d'article dans le panier
  get cartCount(): number {
    return this.cartItems.length;
  }
}
