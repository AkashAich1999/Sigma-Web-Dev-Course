/*
     Write a program to calculate factorial of a number using reduce and using for loops
    
     5! = 7 * 6 * 5 * 4 * 3 * 2 * 1
*/

// Method 1:
let a = 7;

function factorial(number){
    let arr = Array.from(Array(number + 1).keys());
    console.log(arr.slice(1,));

    let c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    });

    console.log(c);
}

factorial(a);

// Method 2:
function facFor(number){
    let f = 1;
    for (let index = 1; index <= number; index++) {
        f = f * index;
    }
    return f;
}

let fact = facFor(a);
console.log(fact);