
// let a=null;
// let b=undefined;
// console.log(a);
// console.log(b);
// a=2;
// console.log(a+'2');
// console.log(a*'2');
// console.log(5=='5');
// console.log(5==='5');



// function fub1()
// {
//     let a=23
//     return a;
// }
// function fun2() {
//     let a=30;
//      return a;
// }
// console.log(fub1());
// console.log(fun2());


//block scope and global scope 
// var a=10;
// console.log(a);
//  var a=30;
// console.log(a);
// var a=40;
// console.log(a);
// This represent that variable declared using var can be modified and can be redeclared




// const b=10;
// console.log(b);  // code will work fine upto this line 
// b=30;  // code will throw error in this line as we have declared variable b with const keyword
// console.log(b);

// var a;
// a=10;
// console.log(a);


// var a;
// a=undefined;
// console.log(a);

// console.log(typeof(a));



const student={
    name:"Saurabh",
    rollNo:4221,
    age:22,
    isEmployed:false
} 
console.log(student);
console.log("Name is "+student.name);
console.log(student["age"]+1);
