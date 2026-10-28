let a=document.getElementById("nightmode")
let x=function(){
    a.classList.toggle("night");
    if(a.classList.contains("night")==true)
    {
        document.body.style.backgroundColor="gray";
        document.body.style.color="white";
    }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black"
    }
}

a.addEventListener("click",x)