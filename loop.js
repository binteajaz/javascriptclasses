//    loop is used for repeating work

//    for(var i = 0; i <= 10; i++){
//     console.log("i =",i);
// }

// let brands = ["al-karam","j.","morbagh","ideas","salitex","binsaeed"];
// let fvtBrand = prompt("enter your favourite brand");

// for(let i = 0; i <= brands.length - 1; i++){
//     if(fvtBrand === brands[i]){
//         console.log("selected the right one");
//     }
    
// }

// let nums = [1,2,3,4,5,6,7,8,9];
// for(let i = 0; i <= nums.length -1; i++){
//     nums[i] = nums[i] + 1;
// }

// console.log(nums);

// var cities = ["new york","schicago","los angeles","austria"];

// for(let i = 0; i <= cities.length-1; i++){
//     cities[i] = cities[i] + " city";
// }

// console.log(cities);

// // write a programme to print a table

// let tableNum = +prompt("write a number here");

// for (let i = 1; i <= 10; i++) {
//     const multiplier = tableNum;
//     const result = multiplier * i;

//     document.write(`
//         <tr>
//             <td>${multiplier} x ${i} = ${result}</td>
//             <br>
//         </tr>
//     `);}

// for an odd number

//     for (let i = 1; i <= 100; i = i + 2) {
//         const multiplier = tableNum;
//         const result = multiplier * i;
    
//         document.write(`
//             <tr>
//                 <td>${multiplier} x ${i} = ${result}</td>
//                 <br>
//             </tr>
//         `);}

//     for even num table
//     for (let i = 2; i <= 100; i = i + 2) {
//         const multiplier = tableNum;
//         const result = multiplier * i;
//         console.log(`${multiplier} x ${i} = ${result}`);
//     }

//     let num = [];

//     for(let i = 0; i<=28; i++){
//         num.push(i);
//     }

//     alert(num);

//     let myWork = [];
    
//     for(let i = 0; i<=10; i++){
        
//         myWork.push("lesson "+ i);
//     }

//     console.log(myWork);

//     const cities = [];
//     for(let i = 0; i <4; i++){
//         let city = prompt("enter a city name here");
        
//     }
    
//     var user = +prompt("enter a number here");
//     var arr = [2, 3, 4, 6, 8];
//     oddNum = 3;

//     for(let i = 0; i <= arr.length - 1; i++){
//         if(arr[i] === oddNum){
//             alert("odd num found")
//             break;
//         }
//     }

//         var cities = [] // 1, 2, 3, 4
//     for(let i = 1; i < 5; i++){
//         let city = prompt("enter clean city")
//         cities.push(city)
//     }
    
//     // cities[0]
//     var cityToSearch = "karachi";
//     var matchFound = false
//     for(let i = 0; i <= cities.length - 1; i++)
//     {
//         if(cities[i] === cityToSearch){
//             matchFound = true       
//             break;
//         }
//     }
//     if(matchFound === true) {
//         alert(cityToSearch + " is found")
//     } else {
//         alert(cityToSearch + " is not found")
//     }

//     1-10-2023

//     to find the length of an array
// const arrNew = [1,2,3,4,5,6,6,7,7,8,8,3];
// let count = 0;

// for(let i = 0; i<=arrNew.length; i++){
//     count++;
// }
// console.log("the length of an array is",count);

// // to find how many numbers and alphabets are here

// const arr1 = [1,2,3,"a","b","a"];
// let count1 = 0;
// for(let i = 1; i <=arr1.length; i++){
// if(arr1[i] === "a"){
//     count1 = count1 + 1;  
// }
// }
// console.log("numbers of a are found = ", count1);

// // to find there is a number in an array or not

// const checkNum = [1,2,3,"a","b","a"];
// let count2 = 0;
// for(let i = 0; i <= checkNum.length; i++){

// }

// // to greet students
// const std = ["maham","atrooba","kashaf"];

// for(let i = 0; i < std.length; i++){
//     console.log("good morning", std[i]);
// }

// // to add the number of all elements

// const num = [1,2,3,4,5];

// for (let i = 0; i < num.length; i++) {
    
    
// }


// const temp = prompt("enter a temperature value here");

// if(temp > 25){
//     alert("its too hot");
// }
// else if(temp < 15){
//     alert("its cold");
// }
// else if(temp < 0){
//     alert("freezing point");
// }

const array = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log("The sum of elements in the array is:", sum);

var price = [111,122,123];
var newPrice = [];

for (let i = 0; i < price.length; i++) {
    var percentage = price[i] * 10 / 100;
    newPrice = percentage + price[i];
    // newPrice.push(newPrice);    
}
console.log(newPrice);

for (let i = 0; i < 10; i++) {
  document.write("practice is necessary when you are learning </br></br>")
  
}

for (let i = 1; i <= 10; i++) {
  console.log([i]);
}

var tab = +prompt("enter a number here");
var lengthOfTable = +prompt("enter a valid length here");

for(let i = 1; i <= lengthOfTable; i++){
  const multiple = tab * i;
  const res = multiple;
  console.log(tab, "x" , i , "=" , res);
}
