import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Ioffer } from '../interfaces/Offer.interface';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private http = inject(HttpClient);
  private offers = signal<Ioffer[]>([])
  readonly apiUrl = environment.offerApiUrl;


  getOffers(): Observable<Ioffer[]> {
    return this.http.get<Ioffer[]>(this.apiUrl).pipe(
      tap(offers => this.offers.set(offers)),
      catchError(this.handleError)
    );
  }

  getOffersSignal() {
    return this.offers;
  }

// gestion des erreurs
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
  
}






