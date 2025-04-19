import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iorder } from '../interfaces/order.interface';
import { OrderService } from '../services/order.service';
import { RouterModule } from '@angular/router';
import { Iticket } from '../interfaces/ticket.interface';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, RouterModule], // Ajoute RouterModule pour routerLink
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: Iorder[] = [];
  tickets: Iticket[] = [];

  constructor(
    private orderService: OrderService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadTickets();
  }

  loadOrders(): void {
    this.orderService.getUserOrders().subscribe({
      next: (data) => (this.orders = data),
      error: (err) => console.error('Error fetching orders', err),
    });
  }

  loadTickets(): void {
    this.ticketService.getUserTickets().subscribe({
      next: (data) => (this.tickets = data),
      error: (err) => console.error('Error fetching tickets', err),
    });
  }

  getTicketForOrder(orderId: number): Iticket | undefined {
    const ticket = this.tickets.find(ticket => +ticket.order === +orderId);
    console.log('getTicketForOrder:', { orderId, ticket });
    return ticket;
  }
}
