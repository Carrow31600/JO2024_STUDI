import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iorder } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.orderApiUrl; // Assurez-vous que cette URL est définie dans votre fichier environment

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer les commandes de l'utilisateur
  getUserOrders(): Observable<Iorder[]> {
  
    return this.http.get<Iorder[]>(this.apiUrl);
  }
}
