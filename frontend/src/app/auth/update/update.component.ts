import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update.component.html',

})
export class UpdateComponent {
  updateForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
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
}
