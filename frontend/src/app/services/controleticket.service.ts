import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ControleTicketService {
  private apiUrl = environment.controlTicketApiUrl;

  constructor(private http: HttpClient) {}

  getTicket(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
