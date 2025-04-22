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

  fetchTicketByStatus(status: boolean) {
    this.controleticketService.getTicketByStatus(status).subscribe(
      data => {
        console.log('Ticket data:', data);
        this.ticket = data;
      },
      error => {
        console.error('Error fetching ticket', error);
      }
    );
  }

  fetchNonexistentTicket() {
    this.controleticketService.getNonexistentTicket().subscribe(
      data => {
        this.ticket = data;
      },
      error => {
        console.error('No ticket found', error);
        this.ticket = null;
        alert('Aucun ticket correspondant trouvé.');
      }
    );
  }
}
