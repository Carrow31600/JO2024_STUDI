import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username: string | null = null;

  constructor(private authService: AuthService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Écoute les changements d'état de connexion
    this.authService.user$.subscribe(user => {
      this.username = user;
      console.log("Navbar: Utilisateur connecté :", this.username);
      this.cdRef.detectChanges();
    });
  }
  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Déconnexion réussie, redirection vers la page de login...');
        // Redirection ou autre action après logout
      },
      error: (error) => {
        console.error('Erreur lors de la déconnexion :', error);
      }
    });
  }
  
}