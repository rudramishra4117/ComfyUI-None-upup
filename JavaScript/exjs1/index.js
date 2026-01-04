console.log("Hello, World!");


/*
Create a faulty calculator using js

This Faulty Calculator should have the following methods:

+ ---> -
* ---> +
- ---> /
/ ---> **

It perform wrong operation 10% of the times
*/
let random = Math.random();
let a=prompt("Enter first number: ");
let b=prompt("Enter second number: ");
let c=prompt("Enter choice: ");
 
let obj = {
    "+": "-",
    "-": "/", 
    "*": "+",
    "/": "**"
};

if (random < 0.1) {
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else {
    c=obj[c];
    alert(`The result is ` + eval(`${a} ${c} ${b}`));
}