package com.example.entity;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.dto.Car;
import com.example.dto.Purpose;

public interface CarRepository extends JpaRepository<CarEntity, Long> {
	List<Car> findByCarPurpose(Purpose carPurpose);
}