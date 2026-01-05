console.log("tut on loops");

let a=1;

for (let i = 0; i < 100; i++) {
    console.log(a+i);
    
}

 let obj={
    name: "John",
    role: "Developer",
    age: 30
 };

 for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key);
    }
 }

 for (const c of "King") {
    console.log(c);
 };

 let j=0;
 while (j < 10) {
    console.log(j+2);
    j++;
 }
let k=10;
do {
    console.log(k);
    k++;    
} while (k < 10);