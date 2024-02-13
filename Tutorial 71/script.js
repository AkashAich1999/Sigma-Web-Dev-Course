/*
document.querySelector(".box");

document.querySelector(".box").innerHTML;
document.querySelector(".container").innerHTML;

document.querySelector(".container").outerHTML;

document.querySelector(".container").tagName;
document.querySelector(".container").nodeName;
document.querySelector(".container").textContent;

document.querySelector(".container").hidden;

document.querySelector(".container").hidden = true;

document.querySelector(".box").hasAttribute("style");
document.querySelector(".box").setAttribute("style", "display: flex");
document.querySelector(".box").hasAttribute("style");
document.querySelector(".box").getAttribute("style");
document.querySelector(".box").attributes;
document.querySelector(".box").removeAttribute("style");
document.querySelector(".box").hasAttribute("style");

document.designMode = "on";

*/

let d = document.createElement("div");
d.innerHTML = "<b>Akash Aich</b> has been <b>Inserted</b>";
d.setAttribute("class", "created");
document.querySelector(".container").append(d);

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<b>Hello, I am Akash Aich !!</b>");

/*
   document.querySelector(".container").classList;
   document.querySelector(".container").className;

   document.querySelector(".container").classList.add("Akash");
   document.querySelector(".container").classList
   document.querySelector(".container").classList.remove("Akash");
   document.querySelector(".container").classList

*/