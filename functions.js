//function statements declaration
function abcd(){

}

//function expression
let fnc=function(){

}

//fat arrow function
let fnc1=()=>{
    console.log("javascript");
}
fnc1();

function add(v1,v2)
{
    console.log(v1+v2)
}
add(1,2);
add(9,82);
add(12,24);
add(13,22);
//default parameters

function add1(v1=5,v2=6)
{
     console.log(v1+v2);
}
add1(1,2);


//rest operator
function abcd(...val)
{
   console.log(val);
}

abcd(1,2,3,4,5,6);