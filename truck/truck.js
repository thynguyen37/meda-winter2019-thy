const Vehicle = require("./vehicle");

const Truck = class Truck extends Vehicle {
    constructor(owner, make, model, year, color, license, mileage, MPG, tankSize, engineType, topSpeed) {
        super(make, model, year, color, owner, engineType, topSpeed, transportTons, towCapacity);
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.MPG = MPG;
        this.transportTons = transportTons;
        this.towCapacity = towCapacity;
    }

}

    module.exports = Truck;