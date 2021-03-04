class Passenger {
  constructor(name) {
    this._name = name;
    this.flightNumbers = [];
  }

  // https://stackoverflow.com/questions/36553274/uncaught-typeerror-cannot-set-property-playerno-of-which-has-only-a-getter-on
  get name() {
    return this._name;
  }

  hasFlight(flightNumber) {
    return this.flightNumbers
      .map(flight => flight.toUpperCase())
      .includes(flightNumber.toUpperCase());
  }

  addFlight(flightNumber) {
    if (!this.hasFlight(flightNumber)) {
      this.flightNumbers.push(flightNumber.toUpperCase());
    }
  }
}

class Flight {
  constructor(flightNumber, capacity) {
    this.flightNumber = flightNumber;
    this.capacity = capacity;
    this.passengers = [];
  }

  isFull() {
    return this.passengers.length === this.capacity;
  }

  boardPassenger(passenger) {
    if (!this.isFull() && passenger.hasFlight(this.flightNumber)) {
      this.passengers.push(passenger);
      return true;
    }
    return false;
  }

  listPassengers() {
    return this.passengers.map(p => p.name);
  }
}

/*
const passenger = new Passenger('John');
console.log(JSON.stringify(passenger));
passenger.name = 'Jane';
console.log(JSON.stringify(passenger));
// passenger.flightNumbers = ['J512', 'AA128'];
console.log(JSON.stringify(passenger));
// console.log(passenger.hasFlight('J512'));
// console.log(passenger.hasFlight('AA128'));
// console.log(passenger.hasFlight('aa128'));
// console.log(passenger.hasFlight('MB512'));
// console.log(passenger.hasFlight('AA'));

passenger.addFlight('aa128');
console.log(JSON.stringify(passenger));
passenger.addFlight('AA128');
console.log(JSON.stringify(passenger));
*/

let flight = new Flight('AA128', 4);
console.log(JSON.stringify(flight));

let passenger_1 = new Passenger('Rose');
passenger_1.addFlight('AA128');

let passenger_2 = new Passenger('Jesse');
passenger_2.addFlight('XYZ32');

let passenger_3 = new Passenger('Trevor');
passenger_3.addFlight('AA128');

flight.boardPassenger(passenger_1);
flight.boardPassenger(passenger_1);
flight.boardPassenger(passenger_1);
flight.boardPassenger(passenger_1);
flight.boardPassenger(passenger_1);
flight.boardPassenger(passenger_2);
console.log(JSON.stringify(flight));

console.log(flight.listPassengers());
