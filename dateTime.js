var date = new Date();
// alert(date);
// date.getFullYear();

// to find a actual month we add +1
// console.log(date.getMonth() +1);
// console.log(date.getTime());

var daysOFTheWeek = ["اتوار","پیر","منگل","بدھ","جمعرات","جمعه","ہفتہ"];
console.log(daysOFTheWeek[date.getDay()]);

// create a function in which displays date in format

function displayDate(){
    let date = new Date();
    var newDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    document.write(newDate,"</br>");
}
displayDate();

// function 1.always do a one thing 2. takes parameters 3.takes argues and return a new value

function sum(a,b){
    var result = a + b;
    console.log(result);
    return result;
}

var res = sum(12,45);

// write a func that tske args value in farenheit and return in celcius (32°F - 32) * 5/9 ;

// function temp(){
//     var far = +prompt("enter a farenheit temp");
//     var changeTemp = (far - 32) * 5/9;
//     console.log(changeTemp);
//     return changeTemp;

// }
// temp();

// miss k method sey temperature findind

// function changeInCelcius(){
//     var celcius = 
// }

// changeInCelcius();

// how to make  a date like 1-oct-2023
function formatDate(){
    let date = new Date();
    let months = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"];

    return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
}

var formatedDate = formatDate();
console.log(formatedDate);

    let date1 = new Date();
    let days = ["sun","sat","mon","tue","wed","thu","fri","sat"];

    console.log(days[date1.getDay()]);


// var num = parseInt(89.12233);
// console.log(num);

var num2 = parseFloat(89.12233);
console.log(num2);

// is tarhan now wali calling me hum koi or function jese getdate getday waghera nahi chala saktey
// var date2 = Date.now();
// console.log(date2);

// var myBirthDay = new Date("january 7, 1997");
// console.log(myBirthDay);

// var myBirthDay = new Date(1997 , 0 , 7);
let daysName = ["sun","sat","mon","tue","wed","thu","fri","sat"];
// console.log("my birthday is on", daysName[myBirthDay.getDay()]);

var nextbirthDay = new Date(2027, 0 , 7);
console.log("my next birthday is on", daysName[nextbirthDay.getDay()]);

function allElements(){
    let elements = [1,2,3,4,5];
       for(var i = 0; i < elements.length; i++){
           document.write("</br>",elements[i],"</br>");
    }
}

allElements();

function daysLeft(date){
    var today = new Date();
    var diff = (date.getTime() - today.getTime()) / (1000*60*60*24);
    console.log(Math.round(diff));
}

daysLeft(new Date("january 7, 2024"));

// function showConsole(){
//     document.write("</br>","huff i got tired","</br>");
// }

// showConsole();
// // setInterval(showConsole, 1000);

// setTimeout(showConsole, 2000);

function showConsole(str){
    console.log("</br>",str,"</br>");
}
setTimeout( () => showConsole("1st"), 2000);

setInterval( () => showConsole("second"), 1000);

var format;
function displayClock(){
    var date = new Date();
    var hour = date.getHours();
    var min =  date.getMinutes();
    var sec = date.getSeconds();
    format = `${hour} : ${min} : ${sec}`;
    document.getElementById('clock').innerHTML = format;
    // return format;
}
displayClock();
setInterval(displayClock, 1000);




