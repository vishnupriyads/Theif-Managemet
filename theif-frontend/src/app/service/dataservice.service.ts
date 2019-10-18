import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  url = "http://localhost:8500/";
  constructor(private http: HttpClient) { }

  //to initate post method
  create(endpoint, formData) {
    let api = this.url + endpoint
    return new Promise((resolve, reject) => {
      this.http.post(api, formData).subscribe(res => {
        return resolve(res);
      }, err => {
        return reject(err);
      })
    })
  }

  //to innitiate get method
  read(endpoint) {
    let api = this.url + endpoint
    return new Promise((resolve, reject) => {
      this.http.get(api).subscribe(res => {
        return resolve(res);
      }, err => {
        return reject(err);
      })
    })
  }

  //to initiate put method
  update(endpoint, formData) {
    let api = this.url + endpoint
    return new Promise((resolve, reject) => {
      this.http.put(api, formData).subscribe(res => {
        return resolve(res);
      }, err => {
        return reject(err);
      })
    })
  }

  //to initiate delete method
  delete(endpoint) {
    let api = this.url + endpoint
    return new Promise((resolve, reject) => {
      this.http.delete(api).subscribe(res => {
        return resolve(res);
      }, err => {
        return reject(err);
      })
    });
  }
}
