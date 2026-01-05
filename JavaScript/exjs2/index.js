/* Create a business name generator by combining list of adjectives and shop name and another word 
adjective:
Crazy
Amazing
fire

shop name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

*/



let rand1= Math.random();
let rand2= Math.random();
let rand3= Math.random();
let first, second, third;
if (rand1 < 0.33) {
    first="Crazy";
}
else if (rand1 < 0.66 && rand1 >= 0.33) {
    first="Amazing";
}
else {
    first="Fire";
}   

if (rand2 < 0.33) {
    second="Engine";
}
else if (rand2 < 0.66 && rand2 >= 0.33) {
    second="Foods";
}
else {
    second="Garments";
}   

if (rand3 < 0.33) {
    third="Bros";
}
else if (rand3 < 0.66 && rand3 >= 0.33) {
    third="Limited";
}
else {
    third="Hub";
}   

let businessName = first + " " + second + " " + third;
console.log("Your business name is: " + businessName);

