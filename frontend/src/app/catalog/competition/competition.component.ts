import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Ioffer } from 'src/app/interfaces/Offer.interface';
import { CartService } from 'src/app/services/cart.service';
import { CompetitionService } from 'src/app/services/competition.service';
import { OfferService } from 'src/app/services/OfferService';


@Component({
  selector: 'app-competition',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  private competitionserv = inject(CompetitionService);
  private offerService = inject(OfferService);
  private fb = inject(FormBuilder);
  private cartService = inject(CartService);

  competitions = this.competitionserv.getCompetitionsSignal();
  offers: Ioffer[] = [];
  competitionForm: FormGroup = this.fb.group({
    competitions: this.fb.array([])
  });

  ngOnInit(): void {
    this.competitionserv.getCompetitions().subscribe(() => {
      console.log('Competitions loaded:', this.competitions());
      this.initCompetitionForm();
    });
    this.loadOffers();

    this.filterForm.valueChanges
    .pipe(
      debounceTime(500), // attend 500ms après saisie
      distinctUntilChanged() // évite les appels si la valeur ne change pas
    )
    .subscribe(() => {
      this.applyFilters();
    });
  }

  loadOffers(): void {
    this.offerService.getOffers().subscribe(offers => {
      console.log('Offers loaded:', offers);
      this.offers = offers;
    });
  }

  initCompetitionForm(): void {
    this.competitions().forEach(competition => {
      this.competitionsFormArray.push(this.fb.group({
        competitionId: [competition.id],
        selectedOffer: ['']
      }));
    });
  }

  get competitionsFormArray(): FormArray {
    return this.competitionForm.get('competitions') as FormArray;
  }

  addToCart(index: number): void {
    const competitionControl = this.competitionsFormArray.at(index);
    const selectedOfferId = Number(competitionControl.get('selectedOffer')?.value);
    const competition = this.competitions()[index];
    const offer = this.offers.find(o => o.id === selectedOfferId);

    if (offer && competition) {
      this.cartService.addToCart({
        offer, competition,
        quantity: 0
      });
      console.log('Ajouté au panier :', { offer, competition });
    } else {
      console.log('Veuillez sélectionner une offre.');
    }
  }

// GESTION DES FILTRES
  filterForm: FormGroup = this.fb.group({
    sport: [''],
    site: [''],
    date: ['']
  });

  applyFilters(): void {
    const { sport, site, date } = this.filterForm.value;
    const params: any = {};
  
    if (sport) params['sport__name'] = sport;
    if (site) params['site__name'] = site;
    if (date) params['date'] = date;
  
    this.competitionserv.getCompetitions(params).subscribe(() => {
      this.resetCompetitionForm();
    });
  }
  
  resetCompetitionForm(): void {
    this.competitionsFormArray.clear();
    this.initCompetitionForm();
  }
  
  resetFilters(): void {
    this.filterForm.reset();
  }
  
}
