var price = 0;
var menu = prompt("enter menu");

// if(menu === "fish"){
//     price = 1000;
// }
// else if(menu === "biryani"){
//     price = 300;
// }
// else if(menu === "pasta"){
//     price = 500;
// }
// else if(menu === "pizza"){
//     price = 700;
// }
// document.write("your bill is " , price);

// now we make the above programme with switch

switch(menu){
    case "fish":
    price = 1000;
    break;

    case "pasta":
    price = 500;
    break;

    case "chowmien":
    price = 700;
    break;

    case "pizza":
    price = 1500;
    break;

    default:
        price = 100;
}

document.write("your price is ", price);

// make a programme which is generating 5 randon no. tii 0 to 5

var random = Math.random() * 5;

// console.log(random)
// console.log(017 - 018);

var age = +prompt("enter your age here");

switch(true){
    case age < 18:
    console.log("under age");
    break; 

    case age == 18:
    console.log("too young");
    break;

    case age > 18:
    console.log("old enough");
    break;

    default:
    break;

}




