import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icompetition } from '../interfaces/competition.interface';






@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private http = inject(HttpClient);
  private competitions = signal<Icompetition[]>([])
  readonly apiUrl = environment.competitionApiUrl;


  getCompetition(): Observable<Icompetition[]> {
    return this.http.get<Icompetition[]>(this.apiUrl).pipe(
      tap(competitions => this.competitions.set(competitions)),
      catchError(this.handleError)
    );
  }

  getCompetitionSignal() {
    return this.competitions;
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






