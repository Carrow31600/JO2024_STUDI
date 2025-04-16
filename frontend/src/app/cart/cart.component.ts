import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iorder } from '../interfaces/order.interface';
import { forkJoin, Observable } from 'rxjs';
import { IorderResponse } from '../interfaces/orderresponse.interface';


declare var bootstrap: any;

@Component({
  selector: 'app-cart',
  imports: [CommonModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  private cartserv = inject(CartService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  cartItems = this.cartserv.getCart();  // Récupére les articles du panier
  orderSuccess = false;

  ngOnInit() {
    this.initializeForms();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Quand cartItems change, on réinitialise les formulaires
    if (changes['cartItems']) {
      this.initializeForms();
    }
  }

  cardForms: FormGroup[] = [];

  initializeForms() {
    console.log("Initialisation des formulaires");
    this.cardForms = []; // Réinitialiser avant de remplir à nouveau
  
    this.cartItems.forEach((item, index) => {
      console.log("Form pour :", item.offer.name, item.offer.unitprice);
      
      const form = this.fb.group({
        prixUnitaire: [{ value: item.offer.unitprice, disabled: true }, Validators.required],  // On s'assure que c'est un nombre
        quantite: [this.getValidQuantities(item.offer.name)[0], Validators.required],
        montantTotal: [{ value: item.offer.unitprice, disabled: true }, Validators.required]
      });
  
      // Écouter les changements de la quantité
      form.get('quantite')?.valueChanges.subscribe((quantite) => {
        const prixUnitaire = form.get('prixUnitaire')?.value;
  
        // Assurer que les valeurs sont des nombres et éviter les erreurs
        const montantTotal = (Number(prixUnitaire) || 0) * (Number(quantite) || 0);
  
        // Mettre à jour le montant total
        form.get('montantTotal')?.setValue(montantTotal);

        form.get('montantTotal')?.setValue(montantTotal, { emitEvent: false });
      });
  
      this.cardForms.push(form);
    });
  }

  getValidQuantities(offerName: string): number[] {
    if (offerName.toLowerCase().includes('solo')) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // Offres Solo : 1 à 10
    } else if (offerName.toLowerCase().includes('duo')) {
      return [2, 4, 6, 8, 10];  // Offres Duo : 2, 4, 6, 8, 10
    } else if (offerName.toLowerCase().includes('family')) {
      return [4, 8, 12];  // Offres Family : 4, 8, 12
    }
    return [];  // Par défaut (si nécessaire)
  }
  

  // affiche du nombre d'article dans le panier
  get cartCount(): number {
    return this.cartItems.length;
  }


  removeItem(i: number): void {
    this.cartItems.splice(i, 1);
    this.cardForms.splice(i, 1);
    this.cartserv.setCart(this.cartItems);  // met à jour le panier dans le service
  }
  
 

  // Total des quantités de billets (toutes offres confondues)
get totalBillets(): number {
  return this.cardForms.reduce((total, form) => {
    const quantite = form.get('quantite')?.value;
    return total + (Number(quantite) || 0);
  }, 0);
}

// Total du montant de la commande
get totalMontant(): number {
  return this.cardForms.reduce((total, form) => {
    const montant = form.get('montantTotal')?.value;
    return total + (Number(montant) || 0);
  }, 0);
}

// Nombre d'épreuves distinctes dans le panier
get totalEpreuves(): number {
  const epreuves = this.cartItems.map(item =>
    `${item.competition.sport_name}-${item.competition.site_name}-${item.competition.date}-${item.competition.hour}`
  );

  const uniqueEpreuves = new Set(epreuves);
  return uniqueEpreuves.size;
}

// ENVOI DU PANIER AU BACKEND
submitOrder(): void {
  if (!this.authService.isAuthenticated()) {
    this.router.navigate(['/login']);
    return;
  }

  // Afficher la modale
  const modalElement = document.getElementById('confirmationModal');
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}


confirmOrder(): void {
  const userId = Number(this.authService.getUserId());
  const orderRequests: Observable<IorderResponse>[] = [];

  this.cartItems.forEach((item, index) => {
    const quantity = this.cardForms[index].get('quantite')?.value;

    const order: Iorder = {
      user: userId,
      competition: item.competition.id!,
      offer: item.offer.id!,
      quantity: quantity,
    };

    orderRequests.push(this.cartserv.sendSingleOrder(order));
  });

  forkJoin(orderRequests).subscribe({
    next: (responses) => {
      console.log('Toutes les commandes ont été envoyées avec succès:', responses);
      this.cartserv.clearCart();
      this.orderSuccess = true;
      // this.router.navigate(['/confirmation']);
    },
    error: (err) => {
      console.error('Erreur lors de l\'envoi des commandes:', err);
    }
  });

  // Fermer la modale
  const modalElement = document.getElementById('confirmationModal');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal?.hide();
  }
}


}
