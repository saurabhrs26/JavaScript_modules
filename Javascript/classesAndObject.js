// lets create a object

// const Student={
//     fullName:"Saurabh Ramesh Sakharkar",
//     marks:95,
//     printMark:function(){
//         console.log("Marks:"+ this.marks);
       
//     },
// };
// console.log(Student.printMark);
// const Student = {
//     fullName: "Saurabh Ramesh Sakharkar",
//     marks: 95,
//     printMark: function() {
//         console.log("Marks: " + this.marks);
//     },
// };

// Student.printMark();
// console.log(Student.fullName);
const Employee = {

    printMark: function() {
        console.log("Tax is 10%");
    },
};
//emp1.__proto__=Employee;
const emp1={
    fullName: "Saurabh Ramesh Sakharkar",
    Salary: 20000,
    printMark: function() {
        console.log("Tax is 20%");
    },
};
emp1.printMark();  //console.log("Tax is 20%"); will be printed because it has same function and prototype also have same function 
