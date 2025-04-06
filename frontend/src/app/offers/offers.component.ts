import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { OfferService } from '../services/OfferService';

@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
  standalone : true,
})
export class OffersComponent implements OnInit {
  private offerserv = inject(OfferService);
  offers = this.offerserv.getOffersSignal();

  ngOnInit(): void {
    this.offerserv.getOffers().subscribe();
}
}
