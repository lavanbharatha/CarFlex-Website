package com.example.entity;

import java.util.List;

import com.example.dto.Purpose;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "car")

public class CarEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Car Id")
	private Long carId;
	@Column(name = "Brand Name")
	private String carBrand;
	@Column(name = "Price")
	private String carPrice;
	@Column(name = "Purpose")
	@Enumerated(EnumType.STRING)
	private Purpose carPurpose;
	@ElementCollection
	@CollectionTable(name = "Images", joinColumns = @JoinColumn(name = "Car Id"))
	private List<String> carImages;

	@OneToMany(mappedBy = "car", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
	private List<FeaturesEntity> carFeatures;

	public Long getCarId() {
		return carId;
	}

	public void setCarId(Long carId) {
		this.carId = carId;
	}

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

	public List<FeaturesEntity> getCarFeatures() {
		return carFeatures;
	}

	public void setCarFeatures(List<FeaturesEntity> carFeatures) {
		this.carFeatures = carFeatures;
	}
}




