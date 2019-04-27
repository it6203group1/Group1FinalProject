import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Ad } from './ad.model';
@Injectable({
  providedIn: 'root'
})
export class AdService {
  selectedAd : Ad;
  ads: Ad[];
  readonly baseURL = 'http://localhost:3000/ads';

  constructor(private http: HttpClient) { }

  postAd(ad: Ad) {
    return this.http.post(this.baseURL, ad);
  }

  getAdList() {
    return this.http.get(this.baseURL);
  }

  putAd(ad: Ad) {
    return this.http.put(this.baseURL + `/${ad._id}`, ad);
  }

  deleteAd(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
