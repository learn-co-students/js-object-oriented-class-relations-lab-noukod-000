let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
  constructor(name, passenger) {
    this.id = driverId++;
    this.name = name;
    if (passenger) {
      this.passengerId = passenger.id;
    }

    store.drivers.push(this);
  }

  trips () {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this));
    }

  passengers() {
      return this.trips().map(trip => {
        return trip.passenger();
    });
    }
}

let passengerId = 0;
class Passenger {
  constructor(name, driver) {
    this.id = ++passengerId;
    this.name = name;
        if (driver) {
      this.driverId = driver.id;
    }

    store.passengers.push(this);
  }

  trips () {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this));
  }

  drivers () {
      return this.trips().map(trip => {
        return trip.driver();
    });
    }
}

let tripId = 0;

class Trip {
  constructor (driver, passenger){
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        store.trips.push(this);
  }

  driver () {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this));
  }

  passenger () {
    return store.passengers.find(
      function(passenger){
        return passenger.id === this.passengerId;
      }.bind(this));
  }
}
