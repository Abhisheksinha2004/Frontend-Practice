//create element
// append/prepend where we want element

let h1=document.createElement("h1");
// console.log(h1);

h1.textContent="Hello how are you";
document.querySelector("body").prepend(h1);

let h2=document.querySelector("h2");
h2.remove();

h2=document.createElement("h2");
h2.textContent="I am coming form outside";

document.querySelector("div").appendChild(h2);