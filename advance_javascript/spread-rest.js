// pg 151 js to professional

const num1 = [1,2,3,4];
const num2 = [5,6,7,8];

let res = num1 + num2;
console.log(typeof(res), res);

console.log(Math.max(...num1));
console.log(Math.min(...num1));

//  ... is the symbol of spread operator

let combineArray = [...num1 , ...num2];
console.log(combineArray);

const name1 = ['atrooba','kinza','maham'];
const greet = ['good morning'];

let combineArray2 = [...name1 , ...greet];
console.log(combineArray2);

console.log(name1.concat(greet));

// for (let i = 0; i < name1.length; i++) {
//     const name1 = name1[i];
//     for (let j = 0; j < greet.length; j++) {
//         const greet = greet[j];
//     }
//     console.log(i + j)
    
// }

// refernce and value
const student = ['atrooba','maham','kinza'];
const newStd = [...student]; //value assignment
const newStdWrong = student; //refernce assignment its the wrong method
newStd.push("zunaira");
console.log(newStd);
console.log(student);
console.log(newStdWrong); // this is the wrong one method


const numbers = [12222,232323]
function sum(x,y) {
    return x + y;
}
let result = sum(...numbers);
console.log(result);