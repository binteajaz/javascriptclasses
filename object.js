let car1 = {
    name: "alto",
    color: "white",
    year: 2023,
    made: "suzuki"
}

let car2 = {
    name: "civic",
    color: "grey",
    year: 2020,
    made: "honda"
}

console.log(car1);

let student = {
    naam: "zunaira",
    displayname: function() {
      alert("good morning " + student.naam);
    },
    roll: 136005,
    batch: "WMA-10",
    sub: ["java","python","php"]
}

console.log(student.displayname());

console.log(student);
student.name = "maham"; //kisi value ko update karna ho
console.log(student["name"],student["roll"],student["batch"]);
document.write(student.sub);
console.log(Object.keys(student)); //kisi b object ki keys sirf dekhni ho tou yeh method use karen
console.log(Object.values(student)); //kisi b object ki values sirf dekhni ho tou yeh method use karen
console.log(Object.entries(student)); //kisi b object ki entries sirf dekhni ho tou yeh method use karen
delete student.sub; // agar koi key or value delete karni ho
console.log(student);

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(res => console.log(res));

}

// let val = 10;
// function tester(val) {
//     val += 10;
//     if(val < 100){
//         return tester(val);
//     }
//     return val;
// }

// tester(val);
// console.log(val);

// literal is the 1st method to make an object
// this type of object is called literal object
let student2 = {
    name: "zunaira",
    roll: 136005,
    batch: "WMA-10",
    sub:"javascript",
    education: "graduation",
    classDays: ['thu','sun']
}

// constructor function is the 2nd method to make an object
// to make a constructor function use the first letter capital must
function Student(name,roll,batch,sub,education) {
    this.name = name;
    this.roll = roll;
    this.batch = batch;
    this.sub = sub;
    this.education = education;
}

var stdOne = new Student('atrooba','123','wma','js','inter');
console.log("std one is :", stdOne);

var stdTwo = new Student('maham','145','wma','js','grdauate');
console.log("std two is :", stdTwo);

var stdThree = new Student('yumna','265','wma','js','ms');
console.log("std three is :", stdThree);

// class is the 3rd method to make an object
// we can do the same work trough class, is class ko obj instance b kehtey
class Teachers {
    constructor(name,empName,salary) {
        this.name = name;
        this.empName = empName;
        this.salary = salary;

    }
}

let t1 = new Teachers("faiza aziz","123","200000");
let t2 = new Teachers("iqra","123","50000");
let t3 = new Teachers("ghous","123","100000");

console.log(t1);



