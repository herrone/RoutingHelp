import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SellComponent } from './sell/sell.component';
import { StampsComponent } from './stamps/stamps.component';
import { ContactComponent } from './contact/contact.component';
import { MatAutocomplete, MatMenuModule } from '@angular/material';
import { SignInComponent } from './sign-in/sign-in.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CartComponent } from './cart/cart.component';
import { BuyItComponent } from './buy-it/buy-it.component';
import { PlaceOfferComponent } from './place-offer/place-offer.component';
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SellComponent,
    StampsComponent,
    ContactComponent,
    SignInComponent,
    CartComponent,
    BuyItComponent,
    PlaceOfferComponent,
    PayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    A11yModule, 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
