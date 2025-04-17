
import { Injectable } from '@angular/core';
import { Ioffer } from '../interfaces/Offer.interface';
import { Icompetition } from '../interfaces/competition.interface';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iorder } from '../interfaces/order.interface';
import { CartItem } from '../interfaces/cart.interface';
import { IorderResponse } from '../interfaces/orderResponse.interface';






@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = []; // stockage des offres mises dans le panier dans "cart"
  readonly apiUrl = environment.orderApiUrl;
  readonly mockapiUrl = environment.mockpaymentApiUrl;

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
  
// Paiement
mockPayment(orderId: number, amount: number) {
  return this.http.post(this.mockapiUrl, {
    order_id: orderId,
    amount: amount
  });
}

// Mise à jour commande
updateOrder(orderId: number, data: any) {
  return this.http.patch(`${this.apiUrl}${orderId}/`, data);
}

}
