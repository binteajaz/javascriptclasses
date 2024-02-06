console.log(this);
console.log(this.window.location.pathname);

// hum window ki property direct b likh saktey hain jese

console.log(location.pathname); //yeh b line 2 wala work kareyga

let obj = {
    name: "atrooba",
    displayName: function(){
        return this.name;
    }
}
console.log(obj.displayName());

// arrow function is also called a lemda function

setTimeout(() => {console.log("we are printing the value in 3 sec")} , 3000);

setTimeout( function(){console.log("we are printing the value in 3 sec by writing a function without naming it")} , 3000);

// let objNew = {
//     name1: 1234,
//     foo: function(){
//         console.log(this.name);
//     }()
// }