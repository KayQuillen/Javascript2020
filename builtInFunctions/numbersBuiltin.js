var x = 456;
var k = "678"
// created a number variable

console.log(x + " is our number variable");
// printing variable

console.log("x value to string " + x.toString());
console.log("x value exponential " + x.toExponential());
// Utilizing the built-in functions

var e = 2389;
// Adding another variable

console.log(e + " is another number");
console.log("e value to string " + e.toString());
console.log("e value exponential " + e.toExponential());
// Utilizing the built-in functions

var y = 2.7478;
// created another variable to utilize built-in's that apply to decimals

console.log(y.toFixed() + " toFixed");
console.log(y + " toPrecision = " + y.toPrecision(3));
// built-in functions that are for decimals. to Precision rounds a decimal to the place you tell it

console.log(x.valueOf() + " valueOf");

console.log(Number.parseFloat("4567.421"));
// parseFloat makes a string a number
console.log(Number.parseFloat("Hello"));

console.log(Number.parseInt("4567.421"));
console.log(Number.parseInt("Hello"))
// parseInt make a string a number with a decimal and rounds it to a number

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.isInteger(x));
console.log(Number.isInteger(k))
console.log(Math.max()) //returns greater number
