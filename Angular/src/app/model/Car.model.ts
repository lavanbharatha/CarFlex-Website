export interface Car {
  carId: number;
  carBrand: string;
  carPrice: string;
  carImages: string[];
  carFeatures: CarFeatures[];
  carPurpose: string;
}
export interface CarFeatures {
  transmissionType: string;
  engineType: string;
  airBags: number;
  fuelTankCapacity: number
}