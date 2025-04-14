import { Component, inject, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  
  // validation du panier
  submitOrder(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login'], {
        queryParams: { redirectTo: '/cart' }
      });
      return;
    }
  

  
  }
}
