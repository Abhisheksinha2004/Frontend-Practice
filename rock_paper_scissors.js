// Rock-paper-scissors logic
function rps(user,computer)
{
    if(user=="rock"&&computer=="scissor") return "user";
    if(user=="scissor"&&computer=="paper") return "user";
    if(user=="paper"&&computer=="rock") return "user";
    if(user=="rock"&&computer=="paper") return "computer";
    if(user=="scissor"&&computer=="rock") return "computer";
}

console.log(rps("rock","scissor"));