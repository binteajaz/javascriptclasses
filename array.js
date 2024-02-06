// //check the user response is flower or not
// var flowers = ["rose", "lily", "orchid", "marigold"];

// alert("i love " + flowers[0]);

// //array values are called elements / items, values are in index which always start with
// //total no of elements is length

// const age = 24;

// const data = ["zunaira","graduate",age];

// console.log(data);
// alert(data);

// //array declarations and length findings

// var ten = new Array(10);
// console.log(ten);

// var ten1 = [10,12,13];
// console.log(ten1);

// //functions to add or delete an array element

// var students = ["maham","sawera","qareena"];

// students.pop();
// console.log(students);

// students.push("binish");
// console.log(students);


// var list = ["milk","bread","apples"];
// console.log(list.length);

// list[1] = "bananas"; //updating or modify
// console.log(list);

// var shopping = ['jewellry','bangles','makeup','handbag','gogglez','clothes','jewellry','bangles','makeup'];

// console.log(shopping.length);

// var lastElement = shopping[shopping.length - 1];
// var someOtherElement = shopping[shopping.length - 6];
// var someElement = [1+1];

// // splice method 
// var maggie = ['water','noodles','masala'];

// maggie.splice(1,0,'veges');
// console.log(maggie);

// maggie.splice()

// //17-9-2023

// var city = prompt("enter your city here");
// var gender = prompt("enter your gender");
// var appliedfor = prompt("enter your desired city");

// var allowedcity = ["islamabad","karachi","lahore"];

// if((city.toLowerCase() === allowedcity[0] || city.toLowerCase() === allowedcity[1] || city.toLowerCase() === allowedcity[2]) && gender.toLowerCase() === "male" && appliedfor.toLowerCase() === "dubai"){
//     document.write("allowed");
// }
// else{
//     document.write("not allowed");
// }

// var maths = +prompt("enter your maths marks here");
// var science = +prompt("enter your science marks here");
// var english = +prompt("enter your english marks here");

// var obt = maths + science + english ;
// var total = 300;
// var per = obt / total * 100 ;

// if(per >= 80){
//     console.log("you got A-1 garde");
// }
// else if(per >= 70){
//     console.log("you got A garde");
// }
// else if(per >= 60){
//     console.log("you got B garde");
// }
// else{
//     alert("failed");
// }

// var num = +prompt("enter a number");

// if(num < 0){
//     alert("negative");
// }
// else{
//     alert("positive");
// }

// user input is / by 5 or 11 or not
//  var num2 = +prompt("enter a number");

//  if(num2 % 5 === 0 || num2 % 11 === 0){
//     console.log("correct");
//  }

//  else{
//     console.log("incorrect");
//  }

//  if("a" < "b"){
//     console.log("sai hai")
//  }

//  else{
//     console.log("nahi bhai")
//  }
//  if(1 >= "1"){
//     console.log("sai hai")
//  }

//  else{
//     console.log("nahi bhai")
//  }

// //  slice use to pick specific elements

// var animals = ["lion","chicken","cow","goat","bat","dog"];

// var halalAnimals = animals.slice(1,4);

// alert(halalAnimals);

// var fruits = ["apple","mango","banana","strawberry","kiwi","cherry"];

// var likeFruits = fruits.slice(3);

// alert(likeFruits);

// nested array with a nested loop

// var nesArr = [[1,2,3,4,5],[3,4,5],[3,6]];

// for (let i = 0; i < nesArr.length; i++) {
//    const element = nesArr[i];
//    for (let j = 0; j < nesArr.length; j++) {
//       document.write(nesArr[i][j]); 
//    }
   
// }

/* Write a program that takes two user inputs for first and last
name using prompt and merge them in a new variable titled
fullName. Greet the user using his full name. */

// var firstName = prompt("enter your first name here");
// var lastName = prompt("enter your last Name here");
// var fullName2 = firstName + " " + lastName;

// document.write("good morning ", fullName2);

/*Write a program to take a user input about his favorite mobile
phone model. Find and display the length of user input in your
browser.*/

var favMobile = prompt("enter your desired phone");

var modelLength = favMobile.length;

console.log(modelLength);

// var favoritePhoneModel = prompt("Please enter your favorite mobile phone model:");

// if (favoritePhoneModel !== null) {
//     var modelLength = favoritePhoneModel.length;
//     document.write("The length of your favorite mobile phone model is: " + modelLength);
// } else {
//     document.write("You didn't provide a favorite mobile phone model.");
// }

/*Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser*/