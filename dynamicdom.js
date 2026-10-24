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

//convert css through js
h1=document.querySelector("h1");
h1.style.color="red";
h1.style.backgroundColor="yellow";
h1.style.fontFamily="Gilroy";
h1.style.textTransform="capitalize"