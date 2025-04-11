import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icompetition } from '../interfaces/competition.interface';
import { IcompetitionFilter } from '../interfaces/competitionfiltersinterface';






@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private http = inject(HttpClient);
  private competitions = signal<Icompetition[]>([])
  readonly apiUrl = environment.competitionApiUrl;


  getCompetitions(filters: IcompetitionFilter = {}): Observable<Icompetition[]> {
    let params = new HttpParams();
  
    // Ajouter uniquement les filtres définis
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, value);
      }
    });
  
    return this.http.get<Icompetition[]>(this.apiUrl, { params }).pipe(
      tap(competitions => this.competitions.set(competitions)),
      catchError(this.handleError)
    );
  }

  getCompetitionsSignal() {
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






