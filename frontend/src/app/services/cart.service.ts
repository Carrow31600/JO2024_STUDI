
import { Injectable } from '@angular/core';
import { Ioffer } from '../interfaces/Offer.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Ioffer[] = []; // stockage des offres mises dans le panier dans "cart"

  constructor() {}
  // ajout d'une offre au panier
  addToCart(offer: Ioffer) {   
    this.cart.push(offer);
  }
  // Récupère ce qui est dans le panier
  getCart(): Ioffer[] {
    return this.cart;
  }
  // compte le nombre d'offres dans le panier
  getCartCount(): number {
    return this.cart.length;
  }
}
