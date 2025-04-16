import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initialisation du formulaire avec les validations
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],  // Validation requise et longueur minimum
      email: ['', [Validators.required, Validators.email]],            // Validation requise et email valide
      password: ['', [Validators.required, Validators.minLength(6)]],  // Validation requise et longueur minimum
      confirmPassword: ['', [Validators.required]],                     // Validation requise
      first_name: ['', [Validators.required]],                          // Validation requise pour first_name
      last_name: ['', [Validators.required]]                            // Validation requise pour last_name
    }, {
      validators: this.passwordMatchValidator  // Validation personnalisée pour vérifier les mots de passe
    });
  }

  // Méthode pour la validation du mot de passe
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ match: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    console.log("Formulaire validité: ", this.registerForm.valid);
    console.log("Valeurs du formulaire: ", this.registerForm.value);
    console.log("Erreurs du formulaire: ", this.registerForm.errors);
    if (this.registerForm.valid) {
      const { username, email, password, first_name, last_name } = this.registerForm.value;
      // Envoie un objet avec les valeurs mises à jour
      this.authService.register({ username, email, password, first_name, last_name }).subscribe({
        next: (response) => {
          this.successMessage = 'Compte créé avec succès !';
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.errorMessage = 'Erreur lors de la création du compte. Veuillez réessayer.';
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir correctement le formulaire.';
    }
  }
}
