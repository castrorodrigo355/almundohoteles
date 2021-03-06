import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public URI: string = "http://localhost:3000/";
  public URINAME: string = "http://localhost:3000/api/";

  constructor(private httpClient: HttpClient) { }

  getHotels(){
    return this.httpClient.get(this.URI)
  }

  getHotelData(id){
    return this.httpClient.get(this.URI + id)
  }

  deleteHotel(id){
    return this.httpClient.get(this.URI + id)
  }

  getHotelByName(name){
    return this.httpClient.get(this.URINAME + name)
  }

}