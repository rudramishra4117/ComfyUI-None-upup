/*
Write a program t calculate factorial of a number using reduce and using for loops
example: 5! = 5 * 4 * 3 * 2 * 1 = 120
*/
let a = prompt("Enter a number to calculate its factorial:");

for (let i = 1; i <= a; i++) {
  if (i === 1) {
    var fact = i;
  } else {
    fact *= i;
  }
}
console.log(`Factorial of ${a} is ${fact}`);
// Using reduce
let arr = Array.from({ length: a }, (_, i) => i + 1);
let fact2 = arr.reduce((acc, curr) => acc * curr, 1);
console.log(`Factorial of ${a} using reduce is ${fact2}`);