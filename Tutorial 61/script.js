/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

3. It performs wrong operation 10% of the times

*/

let random = Math.random();
console.log(random);
let a = prompt("Enter First Number");
let c = prompt("Enter Operation");
let b = prompt("Enter Second Number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random > 0.1) {
    // Perform Correcct Calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

} else {
   // Perform Wrong Calculation
   c = obj[c];
   alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}