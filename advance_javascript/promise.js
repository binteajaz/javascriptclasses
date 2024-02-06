let gender = "khatoon";
const myPrime = new Promise((resolve, reject) => {
    if (gender === "khatoon") {
        resolve("succcess");
    }
    else if (gender === "male") {
        reject("rejected");
    }
});

try {
    myPrime
    .then((data) => console.log(data, 1))
    .catch((data) => console.log(data , 2))
}
catch (err) {
   console.log(err);
}
finally {
   console.log("approached");
}