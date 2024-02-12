console.log("Hello, Akash !");

// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);

    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
});


/*  Array.from(boxes) means create a Array from the HTMLCollection (boxes).
    The creation of the Array is done so that we can apply the forEach method to all the boxes as HTMLCollection does not have forEach() method.  */