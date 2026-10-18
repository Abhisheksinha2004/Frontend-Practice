console.log("JavaScript is running!");
let i=1;
while(i<16){
    if(i%2!=0)
    {
    console.log(i);
    
    }
    i++;
}

//multiplication table of 5

for(let i=1;i<11;i++)
{
    console.log(`5*${i}=${5*i}`);
}

// input  from user and check whethear the number is even 

// let val=prompt("give a number");
// for(let i=1;i<val;i++)
// {
//     if(i%2==0)
//     {
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
// }

//skip multiples of 3
for(let i=1;i<21;i++)
{
    if(i%3==0)
    {
        continue;

    }
    console.log(i);
}