let months=["january","February","March","April","May","June","july","August","September","October","November","December"]
let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

let hours=document.getElementById("hrs"); 
let minutes=document.getElementById("mins");
let second=document.getElementById("sec");
let date=document.getElementById("dat");
let month=document.getElementById("mon");
let day=document.getElementById("day");
let year=document.getElementById("year");
let ampm=document.getElementById("am-pm");

setInterval(()=>
{
let time=new Date
hours.innerHTML=(time.getHours()<10?"0":"") + time.getHours();
minutes.innerHTML=(time.getMinutes()<10?"0":"")+time.getMinutes();
second.innerHTML=(time.getSeconds()<10?"0":"")+time.getSeconds();
date.innerHTML=time.getDate();
month.innerText=months[time.getMonth()];
year.innerHTML=time.getFullYear();
day.innerHtml=time.getHours()>=12?"PM":"AM"
},1000)
