let abcd=document.getElementById("abcd");
console.dir(abcd);

let efgh=document.getElementsByClassName("efgh");
console.dir(efgh);

let abcd1=document.querySelector("h1");
console.dir(abcd1);

// Manupulation
let h1=document.querySelector("h1");
console.dir(h1);
h1.innerHTML="<i>How are you</>";
console.dir(h1);

let a=document.querySelector("a");
console.log(a);

a.href="https://www.google.com";

// Other way to set attribute of a tab

// a.setAttribute("href","https://www.google.com");
console.log("javascript file is running!")
let img=document.querySelector("img");
img.setAttribute(
    "src","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000"
);
// get attribute
 let a1=document.querySelector("a1");
 console.log(a1.getAttribute("href"));
 //removing attribute
a1.removeAttribute("href");