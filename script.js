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
