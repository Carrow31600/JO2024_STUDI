import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private cartserv = inject(CartService);
  private authService = inject(AuthService);
  private router = inject(Router);
  cartItems = this.cartserv.getCart();  // Récupére les articles du panier

  // affiche du nombre d'article dans le panier
  get cartCount(): number {
    return this.cartItems.length;
  }

  submitOrder(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login'], {
        queryParams: { redirectTo: '/cart' }
      });
      return;
    }
  
    // Exemple d'envoi (a adapter suivent l'api)
    // const payload = this.cartItems.map(item => ({
    //   competitionId: item.competition.id,
    //   offerId: item.offer.id,
    //   paid: false
    // }));
  
    // console.log('Commande envoyée au backend :', payload);
    // ici : appel HttpClient POST si prêt
  
    this.cartserv.clearCart();
  }
}
