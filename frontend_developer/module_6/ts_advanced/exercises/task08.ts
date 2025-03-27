interface IVehicle {
    seats: number;
    colour: string;
    canHavePassengers: boolean;
    fuelPer100Kilometers: number;

    calcFuelNeeded(distance: number): number;
}

class Car implements IVehicle {
    seats: number;
    colour: string;
    canHavePassengers: boolean;
    fuelPer100Kilometers: number;

    constructor(seats: number, colour: string, canHavePassengers: boolean, fuelPer100Kilometers: number) {
        this.seats = seats;
        this.colour = colour;
        this.canHavePassengers = canHavePassengers;
        this.fuelPer100Kilometers = fuelPer100Kilometers;
    }

    calcFuelNeeded(distance: number): number {
        return distance / 100 * this.fuelPer100Kilometers;
    }
}

const porsche = new Car(4, 'red', true, 20);
console.log(porsche.calcFuelNeeded(200)); // 40
