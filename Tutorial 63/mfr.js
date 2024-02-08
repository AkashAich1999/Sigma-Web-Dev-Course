let arr = [1, 13, 5, 7, 11];
let newArr = [];

console.log(arr);

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    
    newArr.push(element ** 2);  // Square
}

console.log(newArr);

let newArr2 = arr.map((e) => {
    return e ** 2;
})

console.log(newArr);

let newArr3 = arr.map((e, index, array) => {
    return e ** 2;
})

console.log(newArr);

console.log(arr);
const greaterThanSeven = (e) => {
    if(e > 7){
        return true;
    }
    return false;
}

console.log(arr.filter(greaterThanSeven));  // It will return a New Array.

let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
    return a * b;
}

console.log(arr2.reduce(red));

console.log(Array.from("Akash"));


// Array.keys()
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();  // returns an Object Iterator Array containing the Keys of an Array.

for (const key of iterator) {
  console.log(key);
}
