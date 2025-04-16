import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  isTokenPresent(): boolean {
    return !!localStorage.getItem('jwtToken');
  }

  verifyToken() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      // If there's no token in local storage, return an observable with an error or handle it as needed
      throw new Error('Token not found');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    return this.http.post('http://localhost:8080/api/cars/validateToken', {}, { headers });
  }
  
}
