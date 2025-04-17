import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterModule],
  templateUrl: './update.component.html',

})
export class UpdateComponent {
  updateForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.updateForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.loadUserData();
  }

  loadUserData() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.updateForm.patchValue({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.authService.updateProfile(this.updateForm.value).subscribe({
        next: () => {
          this.successMessage = 'Profil mis à jour avec succès !';
        },
        error: () => {
          this.errorMessage = 'Erreur lors de la mise à jour du profil.';
        }
      });
    }
  }

  onDeleteAccount() {
    if (confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
      this.authService.deleteAccount().subscribe({
        next: () => {
          // ✅ 1. Suppression des infos de session
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          localStorage.removeItem('user');
  
          // ✅ 2. Message de confirmation
          alert('Votre compte a bien été supprimé.');
  
          // ✅ 3. Redirection vers la page de login
          this.router.navigate(['/login']);
        },
        error: () => {
          this.errorMessage = 'Erreur lors de la suppression du compte.';
        }
      });
    }
  }
}
