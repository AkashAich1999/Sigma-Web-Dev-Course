function nice(name) {
    console.log("Hey, " + name + " is a Good Boy !");
    console.log("Hey, " + name + " is a JavaScript Developer !");
    console.log("Hey, " + name + " is a React JS Developer !");
    console.log("Hey, " + name + " is a MERN Stack Developer !");
}

nice("Akash");
nice("Aich");

function sum(a, b){
    console.log(a + b);
}

sum(3, 5);

function prod(a, b, c = 3){  // c has default value.
    console.log(a, b, c);
    return a * b * c;
}

result1 = prod(3,5);
result2 = prod(3, 13, 1);
wrongResult = prod(3);  // NaN
console.log("The Product of this Numbers is : ", result1);
console.log("The Product of this Numbers is : ", result2);
console.log("The Product of this Numbers is : ", wrongResult);

// Arrow Function : Arrow Fn's can also be passed as arguements to other functions.
const func1 = (x) => {
    console.log(" Arrow Function : ", x);
}

func1(77);
func1(88);