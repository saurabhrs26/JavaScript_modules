// var a=document.getElementById("heading1");
// console.log(a);
// var b=document.querySelectorAll("h2");
// console.log(b); 
// var name2=document.getElementsByClassName("name");
// console.log(name2);
// var name2=document.querySelector("heading");
// console.log(name2);
// var name3=document.querySelectorAll("#heading");
// console.log(name3);
// let btnName=document.querySelector(".mainTxt");
// console.log(btnName);
// let heading=document.querySelector("h1");
// console.log("heading");

// let heading=document.querySelector("h2");
// console.log(heading.innerText);
// heading.innerText=heading.innerText+" from Apla college";

let divs=document.querySelectorAll(".box");
console.log(divs);

let ind=1;
for(div of divs)
{
    div.innerText=`New div of ${ind}`;
    ind++;
}