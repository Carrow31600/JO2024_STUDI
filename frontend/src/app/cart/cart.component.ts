import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iorder } from '../interfaces/order.interface';
import { forkJoin, Observable } from 'rxjs';
import { IorderResponse } from '../interfaces/orderResponse.interface';

declare var bootstrap: any;

@Component({
  selector: 'app-cart',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartserv = inject(CartService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  cartItems = this.cartserv.getCart();  // Récupère les articles du panier
  orderSuccess = false;
  createdOrders: IorderResponse[] = [];
  cardForms: FormGroup[] = [];  // Pour stocker les formulaires associés au panier

  ngOnInit() {
    this.initializeForms();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartItems']) {
      this.initializeForms(); // Réinitialiser les formulaires si cartItems change
    }
  }

  // Initialisation des formulaires pour chaque élément du panier
  initializeForms() {
    this.cardForms = []; // Réinitialiser les formulaires
    this.cartItems.forEach((item, index) => {
      const form = this.fb.group({
        prixUnitaire: [{ value: item.offer.unitprice, disabled: true }, Validators.required],
        quantite: [this.getValidQuantities(item.offer.name)[0], Validators.required],
        montantTotal: [{ value: item.offer.unitprice, disabled: true }, Validators.required]
      });

      form.get('quantite')?.valueChanges.subscribe((quantite) => {
        const prixUnitaire = form.get('prixUnitaire')?.value;
        const montantTotal = (Number(prixUnitaire) || 0) * (Number(quantite) || 0);
        form.get('montantTotal')?.setValue(montantTotal);
      });

      this.cardForms.push(form);
    });
  }

  // Déterminer les quantités valides en fonction de l'offre
  getValidQuantities(offerName: string): number[] {
    if (offerName.toLowerCase().includes('solo')) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    } else if (offerName.toLowerCase().includes('duo')) {
      return [2, 4, 6, 8, 10];
    } else if (offerName.toLowerCase().includes('family')) {
      return [4, 8, 12];
    }
    return [];
  }

  // Calcul total des billets
  get totalBillets(): number {
    return this.cardForms.reduce((total, form) => {
      const quantite = form.get('quantite')?.value;
      return total + (Number(quantite) || 0);
    }, 0);
  }

  // Calcul du montant total de la commande
  get totalMontant(): number {
    return this.cardForms.reduce((total, form) => {
      const montant = form.get('montantTotal')?.value;
      return total + (Number(montant) || 0);
    }, 0);
  }

  // Affichage du nombre d'articles dans le panier
  get cartCount(): number {
    return this.cartItems.length;
  }

  // Suppression d'un item du panier
  removeItem(i: number): void {
    this.cartItems.splice(i, 1);
    this.cardForms.splice(i, 1);
    this.cartserv.setCart(this.cartItems);
  }

  // Soumission du panier : affichage de la première modale
  submitOrder(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }
    this.openModal('confirmationModal');
  }

  // Étape 1 : Création des commandes après validation
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
        paid: false
      };
      orderRequests.push(this.cartserv.sendSingleOrder(order));
    });

    forkJoin(orderRequests).subscribe({
      next: (responses) => {
        console.log('✅ Toutes les commandes ont été créées :', responses);
        this.createdOrders = responses;
        this.openModal('paymentChoiceModal'); // Affiche la modale pour payer
      },
      error: (err) => {
        console.error('❌ Erreur lors de la création des commandes :', err);
        alert('Erreur lors de la création des commandes');
      }
    });
  }

  // Étape 2 : Simulation de paiement (si l'utilisateur clique "payer")
  processPayment(): void {
    if (!this.createdOrders || this.createdOrders.length === 0) return;

    const paymentRequests = this.createdOrders.map((order, index) => {
      const amount = this.cardForms[index].get('montantTotal')?.value;
      return this.cartserv.mockPayment(order.id, amount);
    });

    forkJoin(paymentRequests).subscribe({
      next: () => {
        const updateRequests = this.createdOrders.map(order => {
          return this.cartserv.updateOrder(order.id, { paid: true });
        });

        forkJoin(updateRequests).subscribe({
          next: () => {
            this.cartserv.clearCart();
            this.orderSuccess = true;
            this.closeAllModals();  // Fermer toutes les modales
            alert('✅ Paiement effectué avec succès !');
          },
          error: () => {
            alert('❌ Erreur lors de la mise à jour du paiement');
          }
        });
      },
      error: () => {
        alert('❌ Échec du paiement');
      }
    });
  }

  // Utilitaires modales
  openModal(id: string): void {
    const modalElement = document.getElementById(id);
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  closeAllModals(): void {
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach((modalEl) => {
      bootstrap.Modal.getInstance(modalEl as HTMLElement)?.hide();
    });
  }
}
