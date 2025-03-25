package com.example.dto;

import java.util.List;

public class Car {
	private Long carId;

	public Long getCarId() {
		return carId;
	}

	public void setCarId(Long carId) {
		this.carId = carId;
	}

	private String carBrand;
	private String carPrice;
	private Purpose carPurpose;
	private List<String> carImages;
	private List<Features> carFeatures;

	public String getCarBrand() {
		return carBrand;
	}

	public void setCarBrand(String carBrand) {
		this.carBrand = carBrand;
	}

	public String getCarPrice() {
		return carPrice;
	}

	public void setCarPrice(String carPrice) {
		this.carPrice = carPrice;
	}

	public Purpose getCarPurpose() {
		return carPurpose;
	}

	public void setCarPurpose(Purpose carPurpose) {
		this.carPurpose = carPurpose;
	}

	public List<String> getCarImages() {
		return carImages;
	}

	public void setCarImages(List<String> carImages) {
		this.carImages = carImages;
	}

	public List<Features> getCarFeatures() {
		return carFeatures;
	}

	public void setCarFeatures(List<Features> carFeatures) {
		this.carFeatures = carFeatures;
	}
}