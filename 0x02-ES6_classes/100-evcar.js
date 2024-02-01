import Car from "./10-car";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const newCar = new Car();
    const keys = Object.keys(newCar);
    for (const key of keys) {
      newCar[key] = newCar[key];
    }
    return newCar;
  }
} 
