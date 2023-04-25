import { Component, OnInit } from '@angular/core';
import { MatColumnDef } from '@angular/material';
import { StampService } from '../stamp.service';
import { Stamp } from '../stamps/stamps.component';

export interface Row{

  stamps:Stamp[];
}



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  rowCopy:Stamp[] = []; 
  row:Stamp[] = []; 
  table : Stamp[][] = []; 
  stampsInCart:Stamp[] = this.stampService.getStampsInCart();
  stampsInCartCopy:Stamp[] = []; 
  counter = 0 ;

  

  constructor(private stampService : StampService) { 
console.log("making cart map");
 // this.makeCartMap(); 

  }

  ngOnInit(): void {
  }

  removeStampFromCart(stamp:Stamp){
    this.stampsInCart = this.stampsInCart.filter(stampy => stampy.id !== stamp.id);
    this.stampService.setStampsInCart(this.stampsInCart);
  }
  makeCartMap(){
    this.stampsInCartCopy = this.stampsInCart; 
console.log("Stamps in cart : " + this.stampsInCart.length);
    while(this.stampsInCartCopy.length > 0){

      this.row = []; 
      console.log("emptied row");
      this.row.push(this.stampsInCart[0]); 
      console.log("added " +this.stampsInCart[0] + "to row as the first template");

    for(let j = 1; j<this.stampsInCart.length; j++){
      if(this.stampsInCart[0].yearOfRelease == this.stampsInCart[j].yearOfRelease &&this.stampsInCart[0].name == this.stampsInCart[j].name && this.stampsInCart[0].value == this.stampsInCart[j].value && this.stampsInCart[0].colour == this.stampsInCart[j].colour && this.stampsInCart[0].condition == this.stampsInCart[j].condition && this.stampsInCart[0].watermark == this.stampsInCart[j].watermark&& this.stampsInCart[0].monarch == this.stampsInCart[j].monarch){
        this.row.push(this.stampsInCart[j]); 
        console.log("added " +this.stampsInCart[j] + "to row as a copiers");
        this.stampsInCart.splice(j,1);
        console.log("removed stamp from cart");
        console.log("Stamps in cart : " + this.stampsInCart.length);
        ""
      }  
    }

    
    console.log("finished one to row");
    console.log("Stamps in cart : " + this.stampsInCart.length);
    this.stampsInCart.splice(0,1);
    console.log("removed stamp from cart");
    console.log("Stamps in cart : " + this.stampsInCart.length);
    this.rowCopy = this.row; 
    this.table.push(this.rowCopy);
    console.log( " table length: " + this.table.length);
  }
  this.stampsInCart = this.stampsInCartCopy;
  }
   


}
