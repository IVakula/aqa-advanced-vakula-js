let width = 5;
let height = 10;

//funciotn declaration
function calculateSquare(width, height) {
    return width * height;
}

console.log(`The square of a rectangle with sides ${width} and ${height} is ${calculateSquare(width, height)}.`);


//function expression
const square = function (width, height) {
    return width * height;
}

console.log(`The square of a rectangle with sides ${width} and ${height} is ${square(width, height)}.`);


//arrow function
const square2 = (width, height) => {
    return width * height;
}

console.log(`The square of a rectangle with sides ${width} and ${height} is ${square(width, height)}.`);

