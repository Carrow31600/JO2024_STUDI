
import { Injectable } from '@angular/core';
import { Ioffer } from '../interfaces/Offer.interface';
import { Icompetition } from '../interfaces/competition.interface';

export interface CartItem {
  offer: Ioffer;
  competition: Icompetition;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = []; // stockage des offres mises dans le panier dans "cart"

  constructor() {}
  // ajout d'une offre au panier
  addToCart(item: CartItem) {
    this.cart.push(item);
  }
  // Récupère ce qui est dans le panier
  getCart(): CartItem[] {
    return this.cart;
  }
  // compte le nombre d'offres dans le panier
  getCartCount(): number {
    return this.cart.length;
  }
  // vider le panier
  clearCart(): void {
    this.cart = [];
  }
}
