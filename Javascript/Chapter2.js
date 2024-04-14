// let a=2;
// let b=3;
// console.log(a**b);
// let a=8; 
// let b=9;
// console.log(a++);
// console.log(++b);
// let a=8; 
// for(a=1;a<5;a++)
// {
//     console.log(a);
// }
// let a=0; 
// while(a<5)
// {
//     console.log(a);
//     a++;
// }
// let a=0
// do{
//     console.log(a);
//     a++;

// }while(a<5);

// let a=5; let b=3;
// console.log("a==b",a==b);

// program to find number is prime or not

// let num=7;
// if (num===0 || num===1)
// {
//     console.log("choose other value");
// }
// else{
//     //method 1
//     let count=0
//     for(let i=2;i<num;i++)
//     {
//         if(num%i==0)
//         {
//             count++;
//         }

//     }
//     if(count>0)
//     {
//         console.log(num+" is not a prime number");
//     }
//     else{
//         console.log(num+" is a prime number");
//     }
// }

//ternary operator

// let a=3;
// let result=a>4?"number greater than four":"number less than four";
// console.log(result);

// let a=3;
// let result=a>4? console.log("number greater than four"):console.log("number less than four");
// let a=window.prompt("will you marry me");
// if(a=='yes'|| a=='Yes')
// {
//     window.alert("ok good choice")
// }
// else{
//     window.alert("Call me now");
// }
// console.log(a);

let a= window.prompt("Give a number");
if(a%5===0)
{
    window.alert("It is a divisor of 5");
}
else{
    window.alert("It is not a divisor of 5");
}