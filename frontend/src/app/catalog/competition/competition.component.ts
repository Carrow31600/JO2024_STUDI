import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Ioffer } from 'src/app/interfaces/Offer.interface';
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
    const selectedOfferId = competitionControl.get('selectedOffer')?.value;
    const competitionId = competitionControl.get('competitionId')?.value;

    if (selectedOfferId && competitionId) {
      console.log('Ajout au panier:', { competitionId, selectedOfferId });
    } else {
      console.log('Veuillez sélectionner une offre.');
    }
  }
}
