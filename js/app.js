'use strict';

let citySection = document.getElementById('city-sales');

console.log(citySection);

let Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  calculateCookies: function () {
    this.calculateCustomers()
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales))
    }
  },
  calculateCustomers: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(randomCustomers(23, 65))
    }
  }
};

let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  calculateCookies: function () {
    this.calculateCustomers()
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales))
    }
  },
  calculateCustomers: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(randomCustomers(3, 24))
    }
  }
};

let Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  calculateCookies: function () {
    this.calculateCustomers()
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales))
    }
  },
  calculateCustomers: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(randomCustomers(11, 38))
    }
  }
};

let Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  calculateCookies: function () {
    this.calculateCustomers()
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales))
    }
  },
  calculateCustomers: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(randomCustomers(20, 38))
    }
  }
};

let Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  calculateCookies: function () {
    this.calculateCustomers()
    for (let i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales))
    }
  },
  calculateCustomers: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(randomCustomers(this.minCust, this.maxCust))
    }
  }
};

function randomCustomers(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

const cities = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima']

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// function cookieCallout(){
//   for(let i = 0; i < cities.length; i++){
//     calculateCookies()[i]
//   }
// };

Seattle.calculateCookies();
Tokyo.calculateCookies();
Dubai.calculateCookies();
Paris.calculateCookies();
Lima.calculateCookies();

// console.log(Seattle);

// function renderCities(){
//   const headingElem = document.createElement('h3');
//    citySection.appendChild(headingElem);
// }

// renderCities();



