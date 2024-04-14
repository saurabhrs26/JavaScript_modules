// Functions

// function myCall()
// {
//     console.log("Hello Saurabh Here!");
// }
// myCall();
// let a,b;
// function addNo(a,b){
//    console.log("Addition:", a+b);
// }
// addNo(10,30);

// function multiplyNo(a,b){
//     let prod=a*b;
//     return prod;
// }
// let result=multiplyNo(10,29);
// console.log("Multiplication is:"+result);

 // prime number program
//  let num=8;
//  if(num==0 || num==1 || num<0)
//  {
//     console.log("Given number is incorrect");
//  }
//  else{
//     let count=0;
//     for(let i=2;i<num;i++)
//     {
//         if(num%i==0)
//         {
//             count++;
//         }
//     }
//     if(count>0)
//     {
//         console.log("The given number is not prime number");
//     }
//     else{
//         console.log("The given number is a prime number");
//     }

//  }

//Arrow function
//  let subtractNo=(a,b)=>{
//     let dif=a-b;
//     return dif;
//  }
//  console.log(subtractNo(29,2));

//create a function to calculate the no of vowels in the string
// let string="Saurabh";
// function noOfVowel(string){
//     let count=0;
// for(let i of string)
// {
//     if(i==='a'||i=='A'||
//     i==='e'||i=='E'||
//     i==='i'|| i=='I'||
//     i==='o'||i=='O'||
//     i==='u'||i=='U')
//     {
//         count++;
//     }
// }
// return count;
// }
// let result=noOfVowel("Saurabh");
// console.log("The number of vowel are:",result);

//by using arrow function
// let vowelNo=(str)=>{
//     let count=0;
//     for(let i of str)
//     {
//         if(i==='a'||i=='A'||
//     i==='e'||i=='E'||
//     i==='i'||i=='I'||
//     i==='o'||i=='O'||
//     i==='u'||i=='U')
//     {
//         count++;
//     }
       
//     }
//     return count;
// }
// console.log(vowelNo("SAurabh"));

// Call back function
// function hello()
// {
//     console.log("Hello");
// }
// function greet(hello){
//    return hello;
// }
// greet(hello)();

//forEach loop on Array
//let arr=[1,2,3,4,5];
// arr.forEach((itr)=>{
    
//         if(itr%2==0)
//         {
//             console.log(itr," is even");
//         }
//         else{
//             console.log(itr," is odd");
//         }
    
// })
// arr.forEach(function printVal(itr){
//    console.log(itr);
// })
// arr.forEach((itr,index,array)=>{
//     console.log(itr,index,array);
// })

//square of number in array using for each loop

// let arr1=[];
// for(let i=0;i<3;i++)
// {
//     let num=window.prompt("Enter the number");
//     arr1.push(num);
// }

// arr1.forEach((val)=>{
//     console.log(val*val);
// })
// console.log(arr1);


// let nums=[12,34,32,123];
// let calSq=(nums)=>{
//    return console.log( nums*nums);
// }
//nums.forEach(calSq);

//Map method in arrays

// let arr=[3,5,23,53];
// arr.map((val)=>{
//     console.log(val);
// })


//Just for practice can we store array through forEach 

// let num=[1,2,3,4];
// let arr=num.map((val)=>{
//     return val;
// })
// console.log(arr);

//Filter method 
// let arr=[12,343,234,123];
// let ar2=arr.filter((val)=>{
//     return val%2==0;
// })
// console.log(ar2);

//Reduce method
// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// })
// console .log(sum);


//largest element using reduce method
// let arr=[1,2,4,5,6,7,9];
// let maxNo=arr.reduce((prev,next)=>{
//     return prev>next?prev:next;
// })
// console.log(maxNo); 

//filter out marks more than 90
// let marks=[80,50,94,43,93,92];
// let gradeA=marks.filter((val)=>{
//     return val>90;
// })
// console.log(gradeA);


let size=window.prompt("Enter the size of array");
window.alert("Number is "+size);
let arr=[]
for(let i=0;i<size;i++)
{ 
   arr[i]=i+1;
}
window.alert(arr);

let sum=arr.reduce((prev,curr)=>{
    return prev+curr;
})
window.alert("The Sum is:"+sum);
let prod=arr.reduce((a,b)=>{
    return a*b;
})
window.alert("Product is:"+prod);