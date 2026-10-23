let obj={
    name:"Abhishek",
    age:21,
    roll:402,
};
console.log(obj.name);
console.log(obj["name"]);

let aa="roll";
console.log(obj[aa]);

//Nesting and deep access
const user={
    name:"Abhishek",
    address:{
        city:"Ranchi",
        pin:83001,
        location:{
            lat:23.2,
            lng:77.4,
        },
    },
};

console.log(user.address.location.lat);
console.log(user.address.city); 
//Object destructing
 let {lat,lng}=user.address.location;
 console.log(lat);
 console.log(lng);

 //looping in objects
 let obj1={
    name:"Abhishek",
    age:21,
    email:"abhics.com",
 };
 for(let key in obj1)
 {
    console.log(key);
 }

  for(let key in obj1)
 {
    console.log(key,obj1[key]);
 }

 //Copying objects
 let obj2={...obj1};
 console.log(obj2);

 //deep clone->used when we make nested objects and want to access them but the nested one will behave like refernce,that is any change in copied object will change the nested object entries
 //for this we use JSON to first convert it into string

 let obj3=JSON.parse(JSON.stringify(user));
 console.log("Object 3 will be",obj3);
obj3.address.city="Indore";
 console.log("printing the object 3 and user");

 console.log(obj3);
 console.log(user);