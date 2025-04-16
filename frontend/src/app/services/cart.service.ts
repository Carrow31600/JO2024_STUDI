
import { Injectable } from '@angular/core';
import { Ioffer } from '../interfaces/Offer.interface';
import { Icompetition } from '../interfaces/competition.interface';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iorder } from '../interfaces/order.interface';
import { CartItem } from '../interfaces/cart.interface';
import { IorderResponse } from '../interfaces/orderresponse.interface';




@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = []; // stockage des offres mises dans le panier dans "cart"
  readonly apiUrl = environment.orderApiUrl;

  constructor(private http: HttpClient) {}
  // ajout d'une offre au panier
  addToCart(item: CartItem) {
    this.cart.push(item);
  }
  // Récupère ce qui est dans le panier
  getCart(): CartItem[] {
    return this.cart;
  }

    // Met à jour le panier
    setCart(cartItems: CartItem[]): void {
      this.cart = cartItems;
    }

  // vider le panier
  clearCart(): void {
    this.cart = [];
  }


  // sendOrders(orders: Iorder[]) {
  //   return this.http.post(this.apiUrl, orders);
  // }

  sendSingleOrder(order: Iorder): Observable<IorderResponse> {
    return this.http.post<IorderResponse>(this.apiUrl, order);
  }
  







}
