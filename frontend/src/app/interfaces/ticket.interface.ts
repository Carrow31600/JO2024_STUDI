export interface Iticket {
    id: number;
    status: string;
    qr_code: string; // URL de l'image du QR code
    order: number;   // ID de la commande liée
  }
  