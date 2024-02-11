console.log("Let's Go -->");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red";

document.getElementById("orange-box").style.backgroundColor = "orange";

  
// It will select the first box with classname 'box'
// Here, we will be using CSS Class Selector.
// document.querySelector(".box") will return the first element. 
document.querySelector(".box").style.backgroundColor = "violet";

// document.querySelectorAll(".box") will return a NodeList
document.querySelectorAll(".box").forEach(e => {
    // console.log(e);
    e.style.color = "maroon";
    e.style.fontSize = "27px";
})