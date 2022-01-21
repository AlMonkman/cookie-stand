'use strict';

let citySection = document.getElementById('city-sales');

const cityForm = document.getElementById('addCity');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const city = [];

console.log(city);

function Cities(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSales = null;
  city.push(this);
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

function randomCustomers(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

const Seattle = new Cities('Seattle', 23, 65, 6.3);
const Tokyo = new Cities('Tokyo', 3, 24, 1.2);
const Dubai = new Cities('Dubai', 11, 38, 3.7);
const Paris = new Cities('Paris', 20, 38, 2.3);
const Lima = new Cities('Lima', 2, 16, 4.6);

function callOut() {
  for (let i = 0; i < city.length; i++) {
    city[i].calculateCustomers();
    city[i].calculateCookies();
  }
}
callOut();



function renderHeader() {

  const tableElem = document.createElement('table');
  citySection.appendChild(tableElem);

  const tableHead = document.createElement('thead');
  tableElem.appendChild(tableHead);

  const tableRow1 = document.createElement('tr');
  tableHead.appendChild(tableRow1);

  const headingTime = document.createElement('th');
  headingTime.textContent = 'Time:';
  tableRow1.appendChild(headingTime);

  for (let i = 0; i < hours.length; i++) {
    const tableHeader = document.createElement('th');
    tableHeader.textContent = `${hours[i]}`;
    tableRow1.appendChild(tableHeader);
  }

  const tableHeader2 = document.createElement('th');
  tableHeader2.textContent = 'Daily Location Total';
  tableRow1.appendChild(tableHeader2);

}


Cities.prototype.renderStores = function () {

  let table = document.querySelector('table');

  const tableRow2 = document.createElement('tr');
  table.appendChild(tableRow2);

  const tableHeader3 = document.createElement('th');
  tableHeader3.textContent = this.name;
  tableRow2.appendChild(tableHeader3);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const tableData = document.createElement('td');
    tableData.textContent = `${this.cookiesPerHour[i]} cookies`;
    tableRow2.appendChild(tableData);
  }

  const tableData2 = document.createElement('td');
  tableData2.textContent = `${this.totalCookieSales}`;
  tableRow2.appendChild(tableData2);
}

const footer = document.createElement('tfoot');

function renderFooter() {

  let table = document.querySelector('table');

  // const footer = document.createElement('tfoot');
  table.appendChild(footer);

  const lastRow = document.createElement('tr');
  lastRow.textContent = 'Total Cookies Sold';
  footer.appendChild(lastRow);

  let grandTotal = 0

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0

    for (let j = 0; j < city.length; j++) {
      hourlyTotal += city[j].cookiesPerHour[i];

    }
    const totalHourlySales = document.createElement('td');
    totalHourlySales.textContent = `${hourlyTotal}`;
    lastRow.appendChild(totalHourlySales);
    grandTotal += hourlyTotal;
  }
  const grandTotal1 = document.createElement('td');
  grandTotal1.textContent = `${grandTotal}`;
  lastRow.appendChild(grandTotal1);

}

function renderTable() {
  renderHeader();
  renderFooter();

  for (let i = 0; i < city.length; i++) {
    city[i].renderStores();
  }
}

renderTable();

function handleSubmit(event){
event.preventDefault();

let name = event.target.cityName.value;
let minimum = +event.target.minimum.value;
let maximum = +event.target.maximum.value;
let average = +event.target.average.value;

let newCity = new Cities(name, minimum, maximum, average);
footer.innerHTML = '';
newCity.calculateCustomers();
newCity.calculateCookies();
newCity.renderStores();
renderFooter();

}

cityForm.addEventListener('submit', handleSubmit);
