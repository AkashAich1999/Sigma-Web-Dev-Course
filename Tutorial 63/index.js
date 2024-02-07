let arr = [1, 3, 4, 5, 7, 8];
// Index : 0, 1, 2, 3, 4, 5.

console.log(arr);
console.log(arr.length);

console.log("Index: " + arr.indexOf(arr[0]) + " " + arr.indexOf(arr[2]) + " " + arr.indexOf(arr[4]));
console.log("Value: " + arr[0] + " " + arr[2] + " " + arr[4]);

arr[4] = 777;   // Possible in Arrays (Unlike Strings) because Arrays are Mutable
console.log("Index: " + arr.indexOf(arr[0]) + " " + arr.indexOf(arr[2]) + " " + arr.indexOf(arr[4]));
console.log("Value: " + arr[0] + " " + arr[2] + " " + arr[4]);

console.log(typeof arr);

console.log(arr.toString());

console.log(arr.join(" and "));

console.log(arr.pop());   // 8

console.log(arr.push(57));
console.log(arr);

console.log(arr.push("Akash"));
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("HERO"));
console.log(arr);


console.log(arr.length);
console.log(arr);
console.log(arr[3]);
delete arr[3];
console.log(arr);
console.log(arr[3]);
console.log(arr.length);

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
let a4 = a1.concat(a2, a3);
console.log(a4);

let so = [9,7,8];
console.log(so.sort());  // [7, 8, 9]

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 3);  // i.e., Delete 3 Elements Starting From index 1. 
console.log(numbers);  // [ 1, 5 ]

let num = [1, 2, 3, 4, 5];
num.splice(1, 3, 444, 777);  // i.e., Delete 3 Elements Starting from index 1. Then, add 444, 777 Starting from index 1.
console.log(num);  // [ 1, 444, 777, 5 ]

let nu = [1, 2, 3, 4];
console.log(nu);
let array1 = nu.slice(2);  // This will return a new Array Starting from index 2 to end index.
console.log(array1);    // [ 3, 4 ]

nu = [1, 2, 3, 4];
console.log(nu);
let array2 = nu.slice(1,3);  // This will return a new Array Starting from index 1 to (end-1)th index. i.e., it will not include the last indexed element.
console.log(array2);    // [ 2, 3 ]

nu = [1, 2, 3, 4];
console.log(nu.reverse());  // [ 4, 3, 2, 1 ]