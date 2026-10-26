let h1=document.querySelector("h1");
h1.addEventListener("click",function(){
    h1.style.color="red";
});

// Select the paragraph first
let p=document.querySelector("p");

p.addEventListener("click",function(){
    p.style.color="blue";

})

let p1=document.querySelector("#new");

p1.addEventListener("dblclick",function(){
    p1.style.color="green";
});


let h2=document.querySelector("h2");
function click(){
    h2.style.color="orange";
}
h2.addEventListener("click",click);
// h2.removeEventListener("click",click);