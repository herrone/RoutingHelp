import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { StampService } from '../stamp.service';

export interface Stamp {
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
  pictureUrlLink: string;
  id:number; 
}
@Component({
  selector: 'app-stamps',
  templateUrl: './stamps.component.html',
  styleUrls: ['./stamps.component.css']
})

export class StampsComponent implements OnInit {

  constructor(private stampService: StampService) {
 }
yearNum : number = 0; 
valueNum : number = 0; 
yearLit : string = "";
valueLit: string = "";

  selectedName:string = "Name"; 
  selectedMonarch:string ="Monarch";
  selectedDesignName: string ="Design Name";
    selectedColour:string ="Colour";
    selectedYearOfRelease:string ="Year";
    selectedCountryOfProduction:string ="Country";
    selectedValue:string ="Value";
    selectedCondition:string ="Condition";
    selectedDescription:string ="Description";
    selectedWatermark:string ="Watermark";
    stampCounter: number = 0;
   filterMap = new Map<string, string>();
   stampCopy:Stamp[] = [];
   stampsInCart:Stamp[] = [];
  addIt : Boolean = true; 
    searchStamps(){
      console.log("stamps searched");
      console.log(this.selectedName);
      if(this.selectedName != "Name"){
        this.filterMap.set("Name", this.selectedName); 
        console.log("name added to map");
      }
      if(this.selectedColour  != "Colour"){
        this.filterMap.set("Colour", this.selectedColour); 
      }
      if(this.selectedMonarch  != "Monarch"){
        this.filterMap.set("Monarch", this.selectedMonarch); 
      }
      if(this.selectedDescription  != "Description"){
        this.filterMap.set("Description", this.selectedDescription); 
      }
      if(this.selectedYearOfRelease != "Year"){
        this.filterMap.set("Year", this.selectedYearOfRelease); 
      }
      if(this.selectedValue  != "Value"){
        this.filterMap.set("Value", this.selectedValue); 
      }
      if(this.selectedCondition  != "Condition"){
        this.filterMap.set("Condition", this.selectedCondition); 
      }
      if(this.selectedWatermark  != "Watermark"){
        this.filterMap.set("Watermark", this.selectedWatermark); 
      }
      if(this.selectedDesignName != "Design Name"){
        this.filterMap.set("Design Name", this.selectedDesignName); 
      }
      if(this.selectedCountryOfProduction  != "Country"){
        this.filterMap.set("Country", this.selectedCountryOfProduction); 
      }
      this.stampCopy = this.stamps;
      this.stamps = []; 

      for(let stamp of this.stampCopy){
        this.addIt = true;
if(this.filterMap.get("Name")){
  if(stamp.name != this.filterMap.get("Name")){
    console.log("got name  " + this.filterMap.get("Name"))
    this.addIt = false; 
  }
}
if(this.filterMap.get("Colour")){
  if(stamp.colour != this.filterMap.get("Colour")){
    this.addIt = false; 
  }
  
}
if(this.filterMap.get("Monarch")){
  if(stamp.monarch != this.filterMap.get("Monarch")){
    this.addIt = false; 
  }
  
}
if(this.filterMap.get("Description")){
  if(stamp.description != this.filterMap.get("Description")){
    this.addIt = false; 
  }
  
}
if(this.filterMap.get("Year")){
  
  this.yearNum = parseInt(this.filterMap.get("Year")!); 
  if(stamp.yearOfRelease != this.yearNum){
    this.addIt = false; 
  }
  
}
if(this.filterMap.get("Value")){
  this.valueNum = parseInt(this.filterMap.get("Value")!); 
  if(stamp.value != this.valueNum){
    this.addIt = false; 
  }
  
}
if(this.filterMap.get("Condition")){
  if(stamp.condition != this.filterMap.get("Condition")){
    this.addIt = false; 
  }
  
}
if(this.filterMap.get("Watermark")){
  if(stamp.watermark != this.filterMap.get("Watermark")){
    this.addIt = false; 
  }
  
}
if(this.filterMap.get("Design Name")){
  if(stamp.designName != this.filterMap.get("Design Name")){
    this.addIt = false; 
  }
  
}
if(this.filterMap.get("Country")){
  if(stamp.countryOfProduction != this.filterMap.get("Country")){
    this.addIt = false; 
  }
  
}
if(this.addIt){
  this.stamps.push(stamp);
}
      }
     
    }
addToCart(stamp:Stamp){
  console.log("stamp added ");

   //this.stampCounter += 1; 
  this.stampsInCart = this.stampService.getStampsInCart(); 
  this.stampsInCart.push(stamp);
  this.stampService.setStampsInCart(this.stampsInCart);
  

}
    showDescription: boolean[] = [];

    toggleDescription(index: number): void {
      this.showDescription[index] = !this.showDescription[index];
    }
    clearFilters(){
      this.stamps=this.stampCopy;
      this.selectedName = "Name"; 
      this.selectedMonarch ="Monarch";
      this.selectedDesignName ="Design Name";
      this.selectedColour ="Colour";
      this.selectedYearOfRelease ="Year";
      this.selectedCountryOfProduction ="Country";
      this.selectedValue ="Value";
      this.selectedCondition ="Condition";
      this.selectedDescription ="Description";
      this.selectedWatermark ="Watermark";
    }

  stamps: Stamp[] = [
    {
      name: "Penny Black",
      monarch: "Queen Victoria",
      colour: "Black",
      designName: "Bust of Queen Victoria",
      yearOfRelease: 1840,
      countryOfProduction: "United Kingdom",
      value: 1000,
      condition: "Used",
      description: "The world's first adhesive postage stamp.",
      watermark: "None",
      pictureUrlLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Penny_black.jpg/440px-Penny_black.jpg",
    id  : 1, 
    },
    {
      name: "Inverted Jenny",
      monarch: "Queen Victoria",
      colour: "Blue and Red",
      designName: "Curtiss JN-4 airplane",
      yearOfRelease: 1918,
      countryOfProduction: "United States",
      value: 132,
      condition: "Mint",
      description: "One of the most famous error stamps.",
      watermark: "None",
      pictureUrlLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Penny_black.jpg/440px-Penny_black.jpg",
      id  : 2, 
    },
    {
      name: "Treskilling Yellow",
      monarch: "Oscar II",
      colour: "Yellow",
      designName: "Coat of arms",
      yearOfRelease: 1855,
      countryOfProduction: "Sweden",
      value: 323,
      condition: "Used",
      description: "One of the rarest stamps in the world.",
      watermark: "None",
      pictureUrlLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Penny_black.jpg/440px-Penny_black.jpg",
      id  : 3, 
    },
    {
      name: "Blue Mauritius",
      monarch: "Queen Victoria",
      colour: "Blue",
      designName: "Portrait of Queen Victoria",
      yearOfRelease: 1847,
      countryOfProduction: "Mauritius",
      value: 156,
      condition: "Used",
      description: "One of the most famous and valuable stamps in the world.",
      watermark: "Posthorn",
      pictureUrlLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Penny_black.jpg/440px-Penny_black.jpg",
      id  : 4, 
    },
    {
      name: "Basel Dove",
      monarch: "Queen Victoria",
      colour: "Red",
      designName: "Dove carrying a letter",
      yearOfRelease: 1845,
      countryOfProduction: "Switzerland",
      value: 256,
      condition: "Used",
      description: "One of the earliest stamps of Switzerland.",
      watermark: "None",
      pictureUrlLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Penny_black.jpg/440px-Penny_black.jpg",
      id  : 5, 
    },
    {
      name: "One-Cent Magenta",
      monarch: "Queen Victoria",
      colour: "Red",
      designName: "Portrait of George Washington",
      yearOfRelease: 1856,
      countryOfProduction: "British Guiana",
      value: 1,
      condition: "Used",
      description: "The world's rarest postage stamp.",
      watermark: "None", 
      pictureUrlLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Penny_black.jpg/440px-Penny_black.jpg",
      id  : 6, 
    },
  ];
  values:String[] = [this.selectedName,
  this.selectedMonarch,
  this.selectedDesignName,
  this.selectedColour,
  this.selectedYearOfRelease,
  this.selectedCountryOfProduction,
  this.selectedValue,
  this.selectedCondition,
  this.selectedDescription,
  this.selectedWatermark,
  ]



  ngOnInit(): void {
  }


}
