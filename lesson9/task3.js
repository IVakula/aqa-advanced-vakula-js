const car1 = {
    brand: 'Audi',
    model: 'TT',
    year: 2011
};

const car2 = {
    brand: 'BMW',
    model: 'X6',
    owner: 'Ivanov'
};

const car3 = { ...car1, ...car2 };

console.log(car3);