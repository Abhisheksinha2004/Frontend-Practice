//sorting in arrays

let arr=[11,62,3,4,25];
let sr=arr.sort(function(a,b){
    return a-b; //in acending order
});
console.log(sr);

arr=[11,62,3,4,25];
 sr=arr.sort(function(a,b){
    return b-a; //in decending order
});
console.log(sr);

//for each in arrays
arr.forEach(function(val)
{
    console.log(val+5);
});

//map->we use map if we have to make new array on the basis of previous array's data

let newarr=arr.map(function(val){
    return 12;
});
console.log(newarr);


 newarr=arr.map(function(val){
    if(val>10)
        return val;
});
console.log(newarr);

//use of filter

let arr1=[1,2,3,4,5,6,7,8];
let newarr1=arr1.filter(function(val){
    if(val>4)
        return true;
});
console.log(newarr1);

 arr2=[1,2,3,4,5,6,7,8];
 newarr2=arr2.filter(function(val){
    if(val>4)
        return false;
});
console.log(newarr2);

//use of reduce
let a=[1,2,3,4,5,6,7,8];
let ans=a.reduce(function(accumulator,val)
{
    return accumulator+val;
},0);
console.log(ans);

//use of some
let a1=[10,20,30,90];
let any=a1.some(function(val)
{
    return val>85;
});
console.log(any);

//Destructuring operator
let arr3=[1,2,3,4,5];
let [a5,b,,c]=arr3;
console.log(a5);
console.log(b);
console.log(c);

//spread operator->use to copy reference datatype array
let arr4=[...arr3];
console.log(arr3);
console.log(arr4);