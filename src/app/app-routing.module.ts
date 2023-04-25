import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuyItComponent } from './buy-it/buy-it.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PayComponent } from './pay/pay.component';
import { PlaceOfferComponent } from './place-offer/place-offer.component';
import { SellComponent } from './sell/sell.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { StampsComponent } from './stamps/stamps.component';

const routes: Routes = [
  {path: 'home-component', component: HomeComponent},
  {path: 'about-component', component: AboutComponent},
  {path: 'sell-component', component: SellComponent},
  {path: 'stamps-component', component: StampsComponent},
  {path: 'contact-component', component: ContactComponent},
  {path: 'signin-component', component: SignInComponent},
  {path: 'cart-component', component: CartComponent},
  {path: 'buyIt-component', component: BuyItComponent},
  {path: 'placeOffer-component', component:PlaceOfferComponent},
  {path: 'pay-component', component:PayComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 






}