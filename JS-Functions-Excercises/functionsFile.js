// #JS Fundamental Assignments
function age(ageInYears){
    var ageInDays = ageInYears * 365;
    return ageInDays;
}

var inputAge = +prompt("Enter your age here");
var ageInDays = age(inputAge);
console.log(ageInDays + " days");

// ## Create a function that takes a number as an argument, increments the number by +1 and returns the result. (take number as an input)

function increaseNum(num){
    return num + 1;
}

var originalNum = 5;
var newNum = increaseNum(originalNum);
console.log(newNum);

// ## Create a function that takes a number as an argument, decrements the number by -1 and returns the result.

function decreaseNum(num){
    return num - 1;
}

var originalNum2 = 5;
var newNum2 = decreaseNum(originalNum2);
console.log(newNum2);

// ## Create a function that takes a number and return square of a number

function squareNum(number){
    return number * number;
}

var squareOf = +prompt("enter a number here");
var result = squareNum(squareOf);
console.log("the square of the number is " + result);

// ## Create a function that tells current time in Y-m-d format.

function displayDateTime() {
    let date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var myDateTime = year + '-' + month + '-' + day;

    console.log(myDateTime);
}
displayDateTime();

// ## Create a function  that tells current time from Date object in H:i:s format

function dateInHis() {
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var dateInHoursMinSec = hours + ':' + minutes + ':' + seconds;

    console.log(dateInHoursMinSec);
}

dateInHis();

