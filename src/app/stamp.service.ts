import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

interface Stamp {
  name: string;
  monarch: string;
  colour: string;
  designName: string;
  yearOfRelease: number;
  countryOfProduction: string;
  value: number;
  condition: string; 
  description: string;
  watermark: string;
  id:number;
}


@Injectable({
  providedIn: 'root'
})

export class StampService {

private stampsInCart:Stamp[] = [];

  setStampsInCart(value: any) {
    this.stampsInCart = value;
  }

  getStampsInCart(): any {
    return this.stampsInCart;
  }

}