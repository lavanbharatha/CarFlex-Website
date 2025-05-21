import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Car } from './model/Car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars: Car[] = []
  url: any = "http://localhost:8080/api/cars"
  carsFromSB: any
  public carsSubject = new BehaviorSubject<Car[]>([])
  cars$ = this.carsSubject.asObservable();
  purpose: any
  constructor(private http: HttpClient) {

  }
  getItems(): void {
    this.http.get<Car[]>(`${this.url}/getAll`).subscribe(
      data => this.carsSubject.next(data)
    )
  }
  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.url}/${id}`);
  }

  getCarsByPurpose(purpose: string): Observable<Car[]> {
    return this.cars$.pipe(
      map(cars => cars.filter(car => car.carPurpose === purpose))
    );
  }

  getCarFeatures(id: number) {
    const car = this.cars.find((resCar: any) => resCar.carId === id);
    return car ? car.carFeatures : [];
  }
}
