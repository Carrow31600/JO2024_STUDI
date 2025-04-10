import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Isite } from '../interfaces/site.interface';




@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private http = inject(HttpClient);
  private sites = signal<Isite[]>([])
  readonly apiUrl = environment.siteApiUrl;


  getSites(): Observable<Isite[]> {
    return this.http.get<Isite[]>(this.apiUrl).pipe(
      tap(sites => this.sites.set(sites)),
      catchError(this.handleError)
    );
  }

  getSitesSignal() {
    return this.sites;
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






