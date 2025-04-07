import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { OffersComponent} from './offers/offers.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'offers', component : OffersComponent},
    {path: 'login', component: LoginComponent },
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full' },
];




