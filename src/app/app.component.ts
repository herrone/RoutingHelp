import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { StampsComponent } from './stamps/stamps.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'RoutingHelp';

  showContact = false;

  showLanding = true; 

  toggleContact() {
    this.showContact = true;
    this.showLanding = false; 
  }
  showHome = false;

  toggleHome() {
    this.showLanding = false; 
    this.showHome = true;
  }
  showSell = false;

  toggleSell() {
    this.showLanding = false; 
    this.showSell = true;
  }
  showStamps = false;

  toggleStamps() {
    this.showLanding = false; 
    this.showStamps = true;
  }
  showAbout = false;
  toggleAbout() {
    this.showLanding = false; 
    this.showAbout = true;
  }
  
}
