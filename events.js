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

// let input=document.querySelector("input");

// input.addEventListener("input",function(){
//     console.log("typed");
// })
 //input listener
let inp=document.querySelector("input");

inp.addEventListener("input",function(dets)
{
    if(dets.data!=null)
    {
        console.log(dets.data);
    }
});

let sel=document.querySelector("select");

sel.addEventListener("change",function(dets)
{
    console.log(dets.target.value);

})

let device=document.querySelector("#device");

sel.addEventListener("change",function(dets)
{
    device.textContent="Device selected";
})

h1=document.querySelector("h1");
h1.insertAdjacentHTML("beforebegin","<h1>Abhishek</h1>");

setTimeout(function(){
    alert("virtual code")
},3000)

setTimeout(function() {
    console.log("Hello Abhishek!");
}, 3000);

let sci=()=>{
    alert("Wlecome back")
}
setInterval(sci,4000);

