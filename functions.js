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


//example of fat arrow function
let multiply=(a,b)=>{
    return a*b;
};
   


function sayHi(name="Guest")
{
    console.log("Hi",name);
}
sayHi();



//example of rest operator

function abcd(a,b,c,...val)
{
    console.log(a,b,c,val);
}
abcd(1,2,3,4,5,6)
