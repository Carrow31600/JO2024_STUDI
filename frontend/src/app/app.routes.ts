import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { OffersComponent} from './offers/offers.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'offers', component : OffersComponent},
    {path: 'login', component: LoginComponent },
    {path: 'cart', component: CartComponent },
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full' },
];




