// destructure torrna

var arr = [1,2,3,4,,5];
var [a,b,c,d,e] = arr;
console.log(a,b,c,d,e);

var bestFrnd = [`sidra`,`areeba`,`anaya`,`dushman`];
var [bestFrnd1, bestFrnd2, bestFrnd3] = bestFrnd;

console.log(`${bestFrnd1}

${bestFrnd2}

${bestFrnd3}`); 

var [day1 , day2, day3] = [`sun`,`mon`,`tue`];

// object literals and destructuring

let teacher = {
    name : "faiza aziz",
    age : "40",
    salary : "30000",
}
// agar hum is me assigning variables ka naam khud den tou yeh accept nahi karta is k liye key names ka hi variable declare karna parrta hai
var {name , age , salary} = teacher;
console.log(name, age, salary);

let myObj = {
    name1 : "Zunaira Ansari",
    qualification : "BA",
    salary2 : "20000",
}

var {name1 , qualification, salary2} = myObj;
console.log(`my education is ${qualification},
and my name is ${name1}
`);

// var h2 = document.createElementById("h2");
// var main = document.getElementById("main");
// h2.textContent = 

// main.appendChild(name1);


let nameMy = "zunaira";
let age2 = 24;
let  education = "graduate";

let myObj1 = {
    nameMy,
    age2,
    education
};

console.log(myObj1);
