import { Component, OnInit } from '@angular/core';
import { MyserviceService } from "../service/myservice.service";
import { Hotel } from "../models/hotels";

@Component({
  selector: 'app-formfilter',
  templateUrl: './formfilter.component.html',
  styleUrls: ['./formfilter.component.css']
})
export class FormfilterComponent implements OnInit {

  hotels: any = Array<Hotel>();
  filteredHotel: any = Array<Hotel>();

  constructor(public service: MyserviceService) { }

  ngOnInit() {
    this.getHotels()
  }

  getHotels(){
    this.service.getHotels().subscribe(res => {
      this.hotels = res;
    })
  }

  eventoSelector(e){
    const id = e.target.value
    const filteredHotel = this.hotels.find(p => 
                {
                  return p.id == id
                })
    this.searchHotelByName(filteredHotel.id)
  }

  searchHotelByName(id) {
    this.service.getHotelData(id).subscribe(res => {
      this.filteredHotel= res
    })
  }

}