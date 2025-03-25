package com.example.entity;

import jakarta.persistence.Table;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
@Entity
@Table(name = "Features")
public class FeaturesEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "Transmission")
	private String transmissionType;
	@Column(name = "Engine")
	private String engineType;
	@Column(name = "No of AirBags")
	private Integer airBags;
	@Column(name = "Fuel Tank capacity")
	private Integer fuelTankCapacity;
	@ManyToOne
	@JoinColumn(name = "car_id", nullable = false)
	@JsonBackReference
	private CarEntity car;

	public void setFuelTankCapacity(Integer fuelTankCapacity) {
		this.fuelTankCapacity = fuelTankCapacity;
	}

	public CarEntity getCar() {
		return car;
	}

	public void setCar(CarEntity car) {
		this.car = car;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTransmissionType() {
		return transmissionType;
	}

	public void setTransmissionType(String transmissionType) {
		this.transmissionType = transmissionType;
	}

	public String getEngineType() {
		return engineType;
	}

	public void setEngineType(String engineType) {
		this.engineType = engineType;
	}

	public Integer getAirBags() {
		return airBags;
	}

	public void setAirBags(Integer airBags) {
		this.airBags = airBags;
	}

	public Integer getFuelTankCapacity() {
		return fuelTankCapacity;
	}

}