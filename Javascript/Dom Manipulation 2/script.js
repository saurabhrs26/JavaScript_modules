// let mainDiv=document.querySelector("div");
// console.dir(mainDiv);


// let btn1=document.createElement("button");
// btn1.innerText="button1";
// //placing button at the end of the div
// mainDiv.append(btn1);


// let btn2=document.createElement("button");
// btn2.innerText="button2";
// //placing button at the start of div
// mainDiv.prepend(btn2);


// let btn3=document.createElement("button");
// btn3.innerText="button3";
// //placing button before div
// mainDiv.before(btn3);


// let btn4=document.createElement("button");
// btn4.innerText="button4";
// //placing button after div
// mainDiv.after(btn4);

// // adding new heading at the start of the body
// let newHeading=document.createElement("h1");
// newHeading.innerText="Dom Manipulation";
// document.querySelector("body").before(newHeading);

// // removing the paragraph
// let para=document.querySelector("p");
// para.remove();

let btn=document.createElement("button");
btn.innerText="Click";
btn.style.backgroundColor="red";
btn.style.color="white";
document.querySelector("body").prepend(btn);


//question 2

let oldClass=document.querySelector(".para");
console.log(oldClass);
//oldClass.setAttribute("class","newClass");