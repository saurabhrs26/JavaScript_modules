// let marks=[45,34,23,12,43];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[7]);

// let things=[250,645,300,900,50];
// // for(let i of things)
// // {
// //     i=i+(i/0.10);
// //     console.log(i);
// // }
// for(let i=0;i<things.length;i++){
//     things[i]=things[i]-things[i]*0.1;
// }
// console.log(things);
// things.push(10);
// console.log(things);
// things.pop(810);
// console.log(things);

 let boys=["Saurabh","Shubham","Raj","Virat"];
// console.log(boys);
// boys.push("Manav");
// console.log(boys);
// let deleted=boys.pop();
// console.log(boys);
// console.log(deleted);
// deleted=boys.pop();
// console.log(boys);
// console.log(deleted);   

// let name=["Diksha","Sakshi"];
// let marks=[32,23,43,23,12];
// console.log(marks);
// console.log(marks.toString());
// console.log("Concat arrays:", marks.concat(name,boys));

// console.log("new array of marks:", marks.unshift(23));
// console.log(marks);
// console.log(marks.shift());
//console.log(marks.slice(0,2));
// console.log(marks.splice(2,1,90,30,99));
// console.log(marks.toString());

let companies=["Bloomberg","Microsoft","uber","Google","IBM","Netflix"];

//removing first element;
console.log(companies.shift());

//removing uber & adding ola at that place
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies)

//Adding "Amazon" at the end of the array
companies.push("Amazon");
console.log(companies);

console.log([1,2,3].push(4));










