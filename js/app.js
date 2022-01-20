'use strict';

let citySection = document.getElementById('city-sales');

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
  tableRow1.textContent = 'Time:';
  tableHead.appendChild(tableRow1);

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

function renderFooter(){

  let table = document.querySelector('table');

  const footer = document.createElement('tfoot');
  footer.textContent = 'Total Cookies Sold';
  table.appendChild(footer);


}

function renderTable() {
  renderHeader();
  renderFooter();

  for (let i = 0; i < city.length; i++) {
    city[i].renderStores();
  }
}

renderTable();


// Cities.prototype.renderCities = function () {
//   const articleElem = document.createElement('article');
//   citySection.appendChild(articleElem);

//   const h3Elem = document.createElement('h3');
//   h3Elem.textContent = this.name;
//   articleElem.appendChild(h3Elem);

//   const ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);

//   for (let i = 0; i < hours.length; i++) {
//     const liElem = document.createElement('li');
//     liElem.textContent = `${hours[i]} : ${this.cookiesPerHour[i]} cookies`;
//     ulElem.appendChild(liElem);
//   };

//   const ulElem1 = document.createElement('ul');
//   ulElem1.textContent = 'Total';
//   articleElem.appendChild(ulElem1);

//   const liElem1 = document.createElement('li');
//   liElem1.textContent = `${this.totalCookieSales}`;
//   ulElem1.appendChild(liElem1);

// }







