// make a car objrct and find the values by destructuring

var myobj ={
    model: "toyota" ,
    year: 2023,
    color:"black"
}

var {model,year,color} = myobj;

console.log(model);
console.log(year);
console.log(color);

const arr = () => [1,2,3,4,5];
let array = arr();

let [a,b,c,d] = array;

console.log(a);

const fruits = () => ["mango","apple","cherry","kiwi","papaya"];

let fruitsNaming = fruits();

let [fruit1, fruit2, fruit3] = fruitsNaming;

console.log(fruit2);

var a1 = "aliya";
var a2 = "zunaira";
var a3 = "atroob";


function greet(a,b,c) {
    document.write(`"good morning" ${a}
    ${b}
    ${c}
`);;
}
greet(a1,a2,a3);

var speed = +prompt("enter a speed testing num");

// switch(true){
//     case speed < 80:
//     console.log("speed is slow");
//     break;

//     case speed <= 120:
//     console.log("speed is average");
//     break;

//     case speed > 120:
//     console.log("speed is fast");
//     break;
// }

if (speed < 80) {
    console.log("car speed is slow");
} else if (speed >= 80 && speed <= 120) {
    console.log("car speed is moderate");
} else if (speed > 120) {
    console.log("car speed is high");
}

const num = 2;
const checkEven = (num) => {
    if (num % 2 === 0) {
        console.log(true);
    }
    else{
        console.log(false);
    }
}
