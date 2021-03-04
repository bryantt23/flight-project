class Passenger {
  constructor(name) {
    this._name = name;
    this.flightNumbers = [];
  }

  // https://stackoverflow.com/questions/36553274/uncaught-typeerror-cannot-set-property-playerno-of-which-has-only-a-getter-on
  get name() {
    return this._name;
  }
}

const passenger = new Passenger('John');
console.log(JSON.stringify(passenger));
passenger.name = 'Jane';
console.log(JSON.stringify(passenger));
