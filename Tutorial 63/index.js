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