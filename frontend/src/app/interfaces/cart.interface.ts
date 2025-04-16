import { Icompetition } from "./competition.interface";
import { Ioffer } from "./Offer.interface";

export interface CartItem {
    offer: Ioffer;
    competition: Icompetition;
    quantity: number; // on garde juste la quantité choisie
  }