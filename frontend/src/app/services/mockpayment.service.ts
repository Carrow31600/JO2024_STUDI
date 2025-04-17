import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
   readonly apiUrl = environment.mockpaymentApiUrl;

  constructor(private http: HttpClient) {}

  createPayment(amount: number, currency = 'eur') {
    return this.http.post<any>(this.apiUrl, { amount, currency });
  }

  checkPaymentStatus(paymentId: string) {
    return this.http.get<any>(`${this.apiUrl}${paymentId}/`);
  }
}
