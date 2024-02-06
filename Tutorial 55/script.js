console.log("Hello, My name is Akash Aich !");

var a = 5;
var b = 6;
console.log(a + b + 8);

var c = "Akash Aich";
console.log(typeof a, typeof b, typeof c);

var _a = "Akash";
// var 55a = "Rohan"; // Not Allowed

const a1 = 6;
// a1 = a1 + 1;  // Not Allowed

let k = 7;
k = k + 1;
var h = 8;
h = h + 1;

console.log(k);
console.log(h);

{
    let k = 777;  
    console.log(k); // Block Scoped. 

    var h = 888;
    console.log(h); // Global Scoped.
}

console.log(k);
console.log(h);

let x = "Akash Aich";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x,typeof  y,typeof  z,typeof  p,typeof  q,typeof  r);

let o = {
    "name": "Akash Aich",
    "job role": "Software Developer Engineer",
    "is_handsome": true
}

console.log(o);

o.salary = "10 Crores";
console.log(o);
o.salary = "70 Crores";
console.log(o);
