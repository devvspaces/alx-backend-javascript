import Car from './10-car';

Car.prototype.cloneCar = function cloneCar() {
  const newCar = new Car();
  return newCar;
};

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }
}
