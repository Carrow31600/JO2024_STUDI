import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IauthResponse } from '../interfaces/auth.interface';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.loginApiUrl; // URL API auth Django
  private userSubject = new BehaviorSubject<string | null>(null);
  user$ = this.userSubject.asObservable(); // Observable pour suivre l'état utilisateur

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: any) {
    // Vérifier si on est bien dans le navigateur avant d'utiliser localStorage
    if (isPlatformBrowser(this.platformId)) {
      const username = this.getUsername();
      this.userSubject.next(username);
    }
  }

  // Connexion de l'utilisateur
  login(username: string, password: string): Observable<IauthResponse> {
    return this.http.post<IauthResponse>(this.apiUrl, { username, password }).pipe(
      tap(response => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('access_token', response.access);
          localStorage.setItem('refresh_token', response.refresh);
          localStorage.setItem('username', response.username);
          localStorage.setItem('email', response.email);
        }
        this.userSubject.next(response.username); // Mise à jour du BehaviorSubject
        console.log(`Utilisateur connecté : ${response.username}`);
      })
    );
  }

  //Déconnexion de l'utilisateur
  logout(): Observable<void> {
    if (isPlatformBrowser(this.platformId)) {
      const refreshToken = localStorage.getItem('refresh_token');
      const accessToken = localStorage.getItem('access_token');
  
      if (refreshToken && accessToken) {
        const headers = {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };
  
        return this.http.post<void>(
          environment.loginApiUrl,
          { refresh: refreshToken },
          headers
        ).pipe(
          tap(() => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            this.userSubject.next(null);
          })
        );
      }
    }
  
    this.userSubject.next(null);
    return of();
  }
  

  //Récupérer le token d'accès
  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('access_token');
    }
    return null;
  }

  //Rafraîchir le token d'accès
  refreshAccessToken(): Observable<{ access: string }> {
    if (!isPlatformBrowser(this.platformId)) return throwError(() => new Error('localStorage non disponible'));

    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      console.error('Aucun refresh token trouvé');
      return throwError(() => new Error('Aucun refresh token trouvé'));
    }

    return this.http.post<{ access: string }>('http://127.0.0.1:8000/auth/token/refresh/', { refresh: refreshToken })
      .pipe(
        tap(response => {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('access_token', response.access);
          }
        })
      );
  }
  
  //Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('access_token');
    }
    return false;
  }

  //Récupérer le nom d'utilisateur
  getUsername(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('username');
    }
    return null;
  }

  //Vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return this.isLoggedIn();
  }
}

