import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WifiRequestService {

  private readonly baseUrl: string = "http://localhost:3000";

  constructor(private readonly http: HttpClient) { }

  getAllWifiRequests(){
    return this.http.get(`${this.baseUrl}/wifi-request`);
  }

  getWifiRequestById(id: number){
    return this.http.get(`${this.baseUrl}/wifi-request/${id}`);
  }

  addWifiRequest(newRequestDto: any){
    return this.http.post(`${this.baseUrl}/wifi-request`, newRequestDto);
  }
}
