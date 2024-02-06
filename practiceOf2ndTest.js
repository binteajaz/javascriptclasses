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

