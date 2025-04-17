import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpClientSetupService {
  constructor() {
    this.registerHttpInterceptor();
  }

  // Cette fonction s'assure que l'intercepteur est correctement lié au système de HTTP
  private registerHttpInterceptor() {
    // Si tu utilises un module ou une configuration de bootstrap, tu pourrais
    // enregistrer l'intercepteur directement ici.
    // Mais avec les composants standalone, Angular le gère automatiquement.
  }
}
