import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { OffersComponent} from './catalog/offers/offers.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { SitesComponent } from './catalog/sites/sites.component';
import { SportsComponent } from './catalog/sports/sports.component';
import { CompetitionComponent } from './catalog/competition/competition.component';
import { RegisterComponent } from './auth/register/register.component';
import { UpdateComponent } from './auth/update/update.component';
import { OrderComponent } from './order/order.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketControlComponent } from './ticket-control/ticket-control.component'; 

export const routes: Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'offers', component : OffersComponent},
    {path: 'site', component: SitesComponent },
    {path: 'sport', component: SportsComponent },
    {path: 'competition', component: CompetitionComponent },
    {path: 'login', component: LoginComponent },
    {path: 'update', component: UpdateComponent },
    {path: 'cart', component: CartComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'order', component: OrderComponent },
    {path: 'ticket/:id', component: TicketComponent }, 
    {path: 'control-ticket', component: TicketControlComponent },
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full' },
];




