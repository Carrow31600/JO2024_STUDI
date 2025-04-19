import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../services/ticket.service'; // Le service pour récupérer le ticket
import { Observable, of } from 'rxjs'; // Ajout de `of` pour initialiser une observable vide
import { Iticket } from '../interfaces/ticket.interface'; // Interface du ticket
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket-qr',
  templateUrl: './ticket.component.html',
  standalone: true, // Assurez-vous que c'est un composant standalone
  imports: [CommonModule], // Ajout de CommonModule ici
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  ticket$: Observable<Iticket | null> = of(null); // Initialisation de ticket$ avec une valeur par défaut

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService // Service pour récupérer le ticket
  ) {}

  ngOnInit(): void {
    const ticketId = this.route.snapshot.paramMap.get('id'); // Récupère l'id du ticket depuis l'URL
    if (ticketId) {
      const idAsNumber = parseInt(ticketId, 10); // Convertir `ticketId` de string à number
      if (!isNaN(idAsNumber)) {
        this.ticket$ = this.ticketService.getTicketById(idAsNumber); // Appelle le service pour obtenir le ticket
      } else {
        console.error('Invalid ticket ID');
      }
    }
  }
}
