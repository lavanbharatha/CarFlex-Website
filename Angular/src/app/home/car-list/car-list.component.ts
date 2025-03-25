import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../car.service';
import { data } from 'jquery';
import { Car } from '../../model/Car.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, NgStyle, FormsModule, ReactiveFormsModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {

  carObs!: Car[]
  showEditModal: boolean = false;
  selectedCar: any = null;
  editModal: boolean = false
  showDeleteModal: boolean = false
  carIdFromTS!: number
  newCar: any = {}
  
  constructor(
    private carService: CarService,
    private actRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.carService.getItems()
    this.carService.cars$.subscribe(data => this.carObs = data)
  }

  deleteCar(): void {
    const updatedCars = this.carService.carsSubject.getValue().filter(car => car.carId !== this.carIdFromTS);
    this.carService.carsSubject.next(updatedCars);
    this.closeDeleteModal()
  }

  deleteModal(id: number) {
    this.showDeleteModal = !this.showDeleteModal
    this.carIdFromTS = id
  }

  closeDeleteModal() {
    this.showDeleteModal = false
  }

  openEditModal() {
    this.editModal = !this.editModal
  }

  editCar(selectedCar: any) {
    this.editModal = !this.editModal
    this.newCar = {
      ...selectedCar,
      carFeatures: selectedCar.carFeatures?.length ? [...selectedCar.carFeatures] : [{ transmissionType: '', engineType: '', airBags: 0, fuelTankCapacity: 0 }]
    };
 }


  confirmEditCar(editedCar: any) {
    const cars = this.carService.carsSubject.getValue()
    this.newCar = cars.map(car => car.carId === editedCar.carId ? editedCar : car)
    this.carService.carsSubject.next(this.newCar)
    editedCar = null
    this.editModal = false
  }
}



