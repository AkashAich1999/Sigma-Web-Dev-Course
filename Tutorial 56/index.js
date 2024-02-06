console.log("Conditionals");

let age = 57;
let new_age = 17;
let grace = 2;

if(age > 18){
    console.log("Driving Permission Granted !");
} else {
    console.log("Driving Permission Denied !");
}

if((new_age + grace) > 18){
    console.log("Driving Permission Granted !");
} else if(new_age === 0) {
    console.log("Are you kidding !");
} else {
    console.log("Driving Permission Denied !");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/* This translates to :

    if (a > b){
        c = a - b;
    } else {
        c = b - a;
    }
*/    
