import { Component, OnInit } from '@angular/core';
import { MyserviceService } from "../service/myservice.service";
import { Hotel } from "../models/hotels";

@Component({
  selector: 'app-viewhotels',
  templateUrl: './viewhotels.component.html',
  styleUrls: ['./viewhotels.component.css']
})
export class ViewhotelsComponent implements OnInit {

  arrayNumbers: any = [1,2,3,4,5,6,7,8,9,10];
  selectedHotel: any = {};
  hotels: any = Array<Hotel>();

  constructor(public service: MyserviceService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels(){
    this.service.getHotels().subscribe(res => {
      this.hotels = res;
    })
  }

  getHotelData(id){
    this.service.getHotelData(id).subscribe(res => {
      this.selectedHotel = res
    })
  }

  deleteHotel(id){
    this.service.deleteHotel(id).subscribe(res => {
      console.log(res)
    })
  }

}