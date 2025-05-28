const { e } = require("../04_mathEquations/mathEquations");

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let res = 0;
  for(e of a){
    res += e;
  }
  return res;
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	if(b === 0) return 1;
  return a * power(a, b-1);
};

const factorial = function(n) {
	if(n < 1) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
