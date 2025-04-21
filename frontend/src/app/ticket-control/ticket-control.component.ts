import { Component } from '@angular/core';
import { ControleTicketService } from '../services/controleticket.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-ticket-control',
  templateUrl: './ticket-control.component.html',
  styleUrls: ['./ticket-control.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TicketControlComponent {
  ticket: any;

  constructor(private controleticketService: ControleTicketService) {}

  fetchTicket() {
    this.controleticketService.getTicket().subscribe(
      data => {
        console.log('Ticket data:', data); // Vérifiez la réponse de l'API
        this.ticket = data;

        console.log('QR Code URL:', this.ticket.qr_code); // Vérifiez l'URL du QR code
      },
      error => {
        console.error('Error fetching ticket', error);
      }
    );
  }
}
