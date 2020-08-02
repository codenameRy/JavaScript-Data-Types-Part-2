//August 1 
//Challenge 1 - Sum the properties
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

//Solution 1- Addition operator

function sumSalaries(salaries) {
  
  let sum = 0
  for (let value of Object.values(salaries)) {
    sum += value;
  }
  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

//Solution 2 - Reduce method
function sumSalaries2(salaries) {
  return Object.values(salaries).reduce ( (a,b) => a + b, 0)
}

let salaries2 = {
  "John": 400,
  "Pete": 125,
  "Mary": 275
};

alert( sumSalaries2(salaries2) ); // 800

//Challenge 2 - Count properties
// Write a function count(obj) that returns the number of properties in the object:

function count(obj) {
  return Object.keys(obj).length
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

