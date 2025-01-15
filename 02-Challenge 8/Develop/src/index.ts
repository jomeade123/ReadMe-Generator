// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles = [];
class Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  start(): void {
    console.log(`${this.make} ${this.model} is starting.`);
  }

  stop(): void {
    console.log(`${this.make} ${this.model} is stopping.`);
  }
}

// TODO: uncomment once trucks are implemented
const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
class Motorbike extends Vehicle {
  constructor(make: string, model: string, year: number, public hasSideCar: boolean) {
    super(make, model, year);
  }

  popWheelie(): void {
    console.log(`${this.make} ${this.model} is popping a wheelie!`);
  }
}
// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// TODO: uncomment once motorbikes are implemented
 const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
 const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
// TODO: uncomment once trucks are implemented
// vehicles.push(truck1);
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented
// vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
