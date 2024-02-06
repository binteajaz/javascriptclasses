var str = "my journey is journey";

console.log(str.indexOf('y'));
console.log(str.lastIndexOf('Journey'));
console.log(str.charAt(0));
console.log(str.slice(-13));
console.log(str.slice(3));
console.log(str.replace("journey","beautiful"));
console.log(str.replaceAll("journey","beautiful"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
// yahan g global ko show karta hai
console.log(str.replace(/journey/g,"beautiful"));

var myName = "zunaira ansari";
var newName = myName[0].toUpperCase() + myName.slice(1,8) + myName[8].toUpperCase() + myName.slice(9);
console.log(newName);
console.log(newName.indexOf(' '));

// how to find spaces is a given name by user

// string to array change use split()
//  array to string use join()

var name2 = prompt("enter your name");

var titlecase = [];

// var name = "miss faiza aziz khan";
// var newName = name[0].toUpperCase() + name.slice(1, 6)
// + name[6].toUpperCase() + name.slice(7, 11) + name[11].toUpperCase()
//  + name.slice(12)
// console.log(newName);
// console.log(name.indexOf(' ')); //4
// var name = "miss faiza aziz khan";
// console.log(name.split(" "))
// var arrName = name.split(" ");
// var titlecase =[]
// for(let i = 0; i < arrName.length; i++) { // miss faiza
// var cap = arrName[i].charAt(0).toUpperCase() //M F
// var fullname = cap + arrName[i].slice(1)
// titlecase.push(fullname)
// }
// console.log("🚀 ~ file: quiz2.js:32 ~ titlecase:", titlecase)
// var newName = titlecase.join(' ')
// console.log("🚀 ~ file: quiz2.js:35 ~ newName:", newName)

var date =  new Date();
console.log(date);
console.log(Date.now()); // ms
console.log(date.getTime()); //ms
console.log(date.setDate(1));
console.log(date);


// 1. Create a function that takes two parameters, adds the parameters together, 
// and returns the result.

function tea(a,b){
     return a + b;
}

var res = tea(2,3);
console.log(res);
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using 
// console.log. 

var val1 = "aaa";
var val2 = "bbb";

function result(c,d){
   return c + d;
}

var res2 = result(val1,val2);
console.log(res2)

// 4. Create a second call to the function using two more numbers as arguments 
// sent to the function



