//use of symbol
//symbol->immutable value
let obj={
    uid:1,
    name:"Abhishek",
    age:12,
    email:"abhisheksinha27112004@gmail.com",
}
let u1=Symbol("uid");
    obj[u1]="001";
    console.log(obj);

//use of bigint
    let a=23244253436566434224445433n;
    a=a+2n;
    console.log(a);
