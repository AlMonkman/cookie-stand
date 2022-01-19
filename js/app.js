'use strict';

let citySection = document.getElementById('city-sales');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function Cities(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSales = null;
}

Cities.prototype.calculateCustomers = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(randomCustomers(this.minCust, this.maxCust))

  };

};

Cities.prototype.calculateCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgSales))
    this.totalCookieSales += (this.cookiesPerHour[i])
  };

};

let Seattle = new Cities('Seattle', 23, 65, 6.3);
let Tokyo = new Cities('Tokyo', 3, 24, 1.2);
let Dubai = new Cities('Dubai', 11, 38, 3.7);
let Paris = new Cities('Paris', 20, 38, 2.3);
let Lima = new Cities('Lima', 2, 16, 4.6);


const city = [Seattle, Tokyo, Dubai, Paris, Lima];

Cities.prototype.renderCities = function () {
  const articleElem = document.createElement('article');
  citySection.appendChild(articleElem);

  const h3Elem = document.createElement('h3');
  h3Elem.textContent = this.name;
  articleElem.appendChild(h3Elem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for (let i = 0; i < hours.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  };

  const ulElem1 = document.createElement('ul');
  ulElem1.textContent = 'Total';
  articleElem.appendChild(ulElem1);

  const liElem1 = document.createElement('li');
  liElem1.textContent = `${this.totalCookieSales}`;
  ulElem1.appendChild(liElem1);

}

function callOut() {
  for (let i = 0; i < city.length; i++) {
    city[i].calculateCustomers();
    city[i].calculateCookies();
    city[i].renderCities();
  }

}
callOut();

function randomCustomers(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};