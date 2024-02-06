// arrow functions are same as function 
// book 149

const arrow = () => {
    console.log("its my first arrow ")
}
arrow();

const addOne = (num) =>{
    return num + 2;
}
const a = addOne(2);
console.log(a);

// implicit return and you can write a code in a single line

const add2 = (num) => (num + 2 / 2 * 12);
const b = add2(3);
console.log(b);

// make a square of the num
// const square = (num) => num * num ;
// const c = square(4);
// console.log(c);

// const square = (num) => Math.pow(num , 2) ;
// const c = square(4);
// console.log(c);

let evenOrOdd = +prompt("enter a number");
const guess = (num) => num % 2;
const result = guess(evenOrOdd);

if(result === 0){
    console.log("its an even num");
}
else{
    console.log("its an odd");
}
