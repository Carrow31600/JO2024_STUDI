import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iticket } from '../interfaces/ticket.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = environment.ticketApiUrl;

  constructor(private http: HttpClient) {}

  getUserTickets(): Observable<Iticket[]> {
    return this.http.get<Iticket[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<Iticket> {
    return this.http.get<Iticket>(`${this.apiUrl}${id}/`);
  }
}
