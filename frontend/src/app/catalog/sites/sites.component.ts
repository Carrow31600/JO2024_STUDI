import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-sites',
  imports: [CommonModule],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.css'
})
export class SitesComponent {
  private siteserv = inject(SiteService);
  sites = this.siteserv.getSitesSignal();

  ngOnInit(): void {
    this.siteserv.getSites().subscribe();
}
}
