// book 155
// let a = 10;
// let b = 20;
// const c = 30;

// if(true) {
//     let a = 12;
//     let d = 20;
//     var f = 50;

//     console.log(a);
//     console.log(b);
//     console.log(d);
//     console.log(c);
// }

// console.log(a);
// console.log(c);
// console.log(d);\

for (let i = 1; i <= 10; i++) {
    console.log("jaago");
    
}

// console.log(i);

// herarchi me har cheez nested element ki hoti hai
// child can access parent's properties but parents can't and it is called closure 

function elders() {
    const eidi = "yes you got the eidi";
    var check = 200;
    function youngers(){
        let abc = 123;
        console.log(eidi);
    }
    youngers();
    // console.log(abc);
}
elders();

// console.log(check); 
// function k bahar aap variable access nai kar saktey

if(true) {
    const user = "faiza";
    if(user === "faiza"){
        const employee = "saylani";
        console.log(user + employee);
    }
}

// expression function variable me store karte hain like this

const addTwo = function(num){
    return num + 2;
}

addTwo(2);

// agar hum function kahin b call kar len tou usko js file khud search kar eyga is ko hoisting kehtey hain
// classic function ko aap hoist kar saktey hain lekin expression function ko nahi




















