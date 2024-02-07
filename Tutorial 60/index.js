console.log("Strings :");

let a = "Akash";
console.log(a);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);   // undefined

console.log(a.length);

let FirstName = "Akash";
let LastName = "Aich";
console.log("My First Name is: " + FirstName + " and Last Name is: " + LastName);

// Template Literal
console.log(`My First Name is: ${FirstName} and Last Name is: ${LastName}`);

let b = "Akash";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

console.log(b.slice(1, 4));  // slice from index 1 (index 1  is included) & index 4 is not included.
console.log(b.slice(1));  // slice from index 1 to all.

let s = "Shivam";
console.log(s.replace("Sh", 77));

s = "ShivamSh";
console.log(s.replace("Sh", 77));  // replaced with only the first 'Sh'

console.log(s.concat(a, "Mimi", "Dev", "JoyS"));

let initialName = "     Akash Aich";
console.log(initialName);
let newName = initialName.trim();
console.log(newName);

let r = "Rohan";
console.log(r.charAt(0));
console.log(r.charAt(110));

console.log(r.indexOf("ha"));
console.log(r.indexOf("n"));
console.log(r.indexOf("zz"));  // -1

console.log(r.startsWith("Ro"));  // true
console.log(r.startsWith("zz"));  // false

console.log(r.endsWith("an"));  // true
console.log(r.endsWith("zz"));  // false







