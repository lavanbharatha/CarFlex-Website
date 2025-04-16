import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:8080/api/cars'
  
  createUser(data:any){
    return this.http.post(`${this.url}/addUser`,data,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  })
}}
