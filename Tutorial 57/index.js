console.log("Loops");

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   
// }

let a = 1; 

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Akash Aich",
    role: "Software Engineer",
    College: "DA-IICT"
}

for (const key in obj) {
     const element = obj[key];
        
    console.log(element);
}

for (const key in obj) {
    const element = obj[key];
       
   console.log(key, element);
}

for (const key in obj) {
    console.log(key);
}

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
        
//         console.log(element);
//     }
// } 

for (const ch of "Akash Aich") {
    console.log(ch);
}

let i = 0;
while(i < 6){
    console.log(i);
    i++;
}

let j = 10;
do {
    console.log(j);
    j++;
} while (j < 6);