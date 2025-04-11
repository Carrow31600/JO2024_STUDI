import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { OfferService } from '../../services/OfferService';
import { CartService } from '../../services/cart.service';
import { Ioffer } from '../../interfaces/Offer.interface';


@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
  standalone : true,
})
export class OffersComponent implements OnInit {
  private offerserv = inject(OfferService);
  private cartserv = inject(CartService);
  offers = this.offerserv.getOffersSignal();

  ngOnInit(): void {
    this.offerserv.getOffers().subscribe();
}

  // Méthode pour ajouter une offre au panier
  // addToCart(offer: Ioffer): void {
  //   this.cartserv.addToCart(offer);  // Ajouter l'offre au panier
  //   console.log('Offre ajoutée au panier:', offer);
  // }
}




