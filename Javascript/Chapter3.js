// let i;
// for( i=0;i<5;i++)
// {
//    console.log(i);
// }
// console.log("After end of loop",i);

//fibonacci program
// let a=0;
// let b=1;
// let temp;
// console.log(a,b);
// for (let i=0;i<5;i++)
// {
//     temp=a+b;
//     console.log(temp);
//     a=b;
//     b=temp;
// }


// Arrays in js
// var a=[1,2,3,4,5];
// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i]);
// }


// for of loop
// let name1="Saurabh is my name";
// for(i of name1)
// {
//     console.log("i",i);
// }

//for in loop
// let a={
//     name1:"Saurabh",
//     rollNo:2010,
//     age:22,
//     isEmployed:false
// }

// for(let i in a)
// {
//     console.log("Key:"+i+" Value:", a[i]);
// }

//random number guess
// let randNo=20;
// let usernum= window.prompt("Guess the number");
// while(usernum!=randNo)
// {
//     usernum= window.prompt("Wrong ans, guess the number again");
// }
//   window.alert("you guessed it right");

//String
// namw="Saurabh";
// console.log(namw.length);

// Accessing individual characters
// console.log("CHar at 1:",namw[1]);

//Template literals
// let str=`this is special type of string`;
// console.log(str);
// console.log(typeof(str));

// let obj={
//     item:"pen",
//     price:20
// }
// let statement=`The cost of ${obj.item} is ${obj.price}`;
// console.log(statement);

//String methods

//toUpperCase
// let myName="Saurabh";
// let surname="Sakharkar"
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());
// console.log(myName.trim());
// console.log(myName.slice(0,9));
// console.log(myName.concat(surname));
// console.log(myName.replace("Sa","yx"));
// console.log(myName.charAt(4));

//saurabhsakharkar ----->@saurabhsakharkar16
let fullName=prompt("Enter your fullname");
let usrName=`@${fullName}${fullName.length}`;
window.alert("Your username is:"+usrName);





