import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SportService } from 'src/app/services/sport.service';

@Component({
  selector: 'app-sports',
  imports: [CommonModule],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {
  private sportserv = inject(SportService);
  sports = this.sportserv.getSportsSignal();

  ngOnInit(): void {
    this.sportserv.getSports().subscribe();
}
}
