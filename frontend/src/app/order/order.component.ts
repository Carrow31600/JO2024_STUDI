import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iorder } from '../interfaces/order.interface';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  standalone: true, // Assurez-vous que c'est un composant standalone
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'], // Correction ici
})
export class OrderComponent implements OnInit {
  orders: Iorder[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getUserOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error fetching orders', err);
      },
    });
  }
}
