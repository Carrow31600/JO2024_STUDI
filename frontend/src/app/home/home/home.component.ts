import { Component } from '@angular/core';
import { CoverComponent } from '../cover/cover.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { EventsComponent } from '../events/events.component';




@Component({
  selector: 'app-home',
  imports: [CoverComponent, PresentationComponent,EventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone : true,
})
export class HomeComponent {

}
