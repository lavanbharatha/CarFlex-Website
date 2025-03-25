package com.example.dto;

public class Features {
	private Long carId;
	private String transmissionType;
	private String engineType;
	private Integer airBags;
	private Integer fuelTankCapacity;

	public Long getCarId() {
		return carId;
	}

	public void setCarId(Long carId) {
		this.carId = carId;
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

	public void setFuelTankCapacity(Integer fuelTankCapacity) {
		this.fuelTankCapacity = fuelTankCapacity;
	}
}