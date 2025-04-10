import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Isport } from '../interfaces/sport.interface';





@Injectable({
  providedIn: 'root'
})
export class SportService {
  private http = inject(HttpClient);
  private sports = signal<Isport[]>([])
  readonly apiUrl = environment.sportApiUrl;


  getSports(): Observable<Isport[]> {
    return this.http.get<Isport[]>(this.apiUrl).pipe(
      tap(sports => this.sports.set(sports)),
      catchError(this.handleError)
    );
  }

  getSportsSignal() {
    return this.sports;
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






