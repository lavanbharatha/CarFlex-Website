package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.Car;
import com.example.entity.CarEntity;
import com.example.service.CarService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/cars")
public class CarController {

	@Autowired
	private CarService carService;

	@PostMapping("/add")
	public ResponseEntity<CarEntity> addCar(@RequestBody Car carRequest) {
		CarEntity savedCar = carService.saveCar(carRequest);
		return ResponseEntity.ok(savedCar);
	}

	@GetMapping("/getAll")
	public List<CarEntity> getCars() {
		return carService.getAllCars();
	}

	@GetMapping("/{id}")
	public Optional<CarEntity> getCarById(@PathVariable Long id) {
		return carService.getCarById(id);
	}
}