import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CompetitionService } from 'src/app/services/competition.service';

@Component({
  selector: 'app-competition',
  imports: [CommonModule],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.css'
})
export class CompetitionComponent {
  private competitionserv = inject(CompetitionService);
  competition = this.competitionserv.getCompetitionSignal();

  ngOnInit(): void {
    this.competitionserv.getCompetition().subscribe();
}
}

