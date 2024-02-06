// // function using names
// function greet(call){    
//     console.log(call);
// }

// var str = "hello";
// var str1 = "assalam o alaikum";
// var str2 = "hey";

// greet(str);
// greet(str1);
// greet(str2);
 
// function myName(greeting, newName){
//     // console.log(greeting,"My name is",newName);
//     console.log(`${greeting}
//     My name is ${newName}`);

// }
// var str1 = "assalam o alaikum";
// var naming = prompt("enter your name");

// myName(str1,naming);

// var sub = function(a,b){
//     console.log(`${a} * ${b} = ${a * b}`);
// }

// sub(10,6);

// function inputAdd(){
//     var x = +prompt("enter a number here");
//     var y = +prompt("enter a number here");
//     document.write(`${x} + ${y} = ${x + y}`);
// }

// inputAdd();

function subtract(){
    var f = +prompt("enter 1st number here");
    var g = +prompt("enter 2nd number here");
    if(f < g){
        alert("enter a greater number in the 1st prompt");

    }
    else{
        document.write(`${f} - ${g} = ${f - g}`);
    }
}

subtract();

function tryYourLuck(){
    let win = ["dollar","deenar","dirham","euro","spouse","better luck next time","gold","diamond"];
    let len = win.length; 
    var random = Math.ceil(math.random() * (len - 1));
    console.log()
    console.log(`you won ${win[random]}`);

}

win();

var a = 10;
var b = 11;
// add(3,9)
// add(a, b)// arguments
// anonymous unnamed
var sub = function (a, b){
    var name = "faiza"
    console.log(a + "-" + b + "=", a - b)
    //template literal ${} multi line
    console.log(`${a} - ${b} = ${a - b}`)
    console.log(`my name is ${name}
i am in smit`)
}
// sub(10, 6);

function inputAdd() {
    var a = +prompt()
    var b = +prompt()
    console.log(a + b)

}
// inputAdd()
/// write a funtion which substract two numbers a and b. if a value is less than b then print to user to give larger value
// try your luck: give random number to know what you win value
// from the given array 
function tryYourLuck() {
    var wins = ["car", "house", "gold", "job", "money", "visa", "try next time", "spouse"];
    var len = wins.length;
    var random = Math.ceil(Math.random()*(len -1)) // 0.0 - 0.9
    console.log("🚀 ~ file: function.js:49 ~ tryYourLuck ~ random:", random)
    console.log(`you won ${wins[random]}`)
}
tryYourLuck()


