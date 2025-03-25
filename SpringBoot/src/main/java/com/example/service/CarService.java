package com.example.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.Features;
import com.example.entity.CarRepository;
import com.example.dto.Car;
import com.example.entity.FeaturesRepository;

import com.example.entity.CarEntity;
import com.example.entity.FeaturesEntity;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private FeaturesRepository featuresRepository;

    public CarEntity saveCar(Car carRequest) {
        CarEntity carEntity = new CarEntity();
        carEntity.setCarBrand(carRequest.getCarBrand());
        carEntity.setCarPrice(carRequest.getCarPrice());
        carEntity.setCarPurpose(carRequest.getCarPurpose());
        carEntity.setCarImages(carRequest.getCarImages());

        List<FeaturesEntity> featuresEntities = new ArrayList<>();
        for (Features feature : carRequest.getCarFeatures()) {
            FeaturesEntity featureEntity = new FeaturesEntity();
            featureEntity.setTransmissionType(feature.getTransmissionType());
            featureEntity.setEngineType(feature.getEngineType());
            featureEntity.setAirBags(feature.getAirBags());
            featureEntity.setFuelTankCapacity(feature.getFuelTankCapacity());
            featureEntity.setCar(carEntity);
            featuresEntities.add(featureEntity);
        }

        carEntity.setCarFeatures(featuresEntities);
        carRepository.save(carEntity);
        featuresRepository.saveAll(featuresEntities);
        return carEntity;
    }

    public List<CarEntity> getAllCars() {
        return carRepository.findAll();
    }

    public Optional<CarEntity> getCarById(Long id) {
        return carRepository.findById(id);
    }

}