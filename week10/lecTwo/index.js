const faker = require('faker');
const entryPoint = document.getElementById('entry-point');
entryPoint.innerHTML = '<h2><i>Hello, from javascript</i></h2>';
const brands = Array.from(new Array(12)).map(e => faker.company.companyName());

class Brands {
    constructor(name) {
        this.brand = name;
    }
}

const bikes = brands.map(b => {
    return new Brands(b);
});
document.write('<div id="start"><ol id="bykes"> Brands');
bikes.map(b => {
    document.write(`<li>Brand: ${b.brand}</li>`);
});
document.write('</ol></div>');

window.onload = e => {
    const h = document.createElement('h2');
    h.innerHTML = 'Page BOM Loaded';
    document.body.appendChild(h);
};

document.addEventListener('click', e => {
    console.log('click captured');
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'lightgrey'
            ? 'white'
            : 'lightgrey';
});

document.addEventListener('DOMContentLoaded', () => {
    const h = document.createElement('h2');
    h.innerHTML = 'Page DOM Loaded';
    document.body.appendChild(h);
});

//});
