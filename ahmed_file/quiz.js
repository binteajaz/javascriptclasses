// chapter 1
// 1. Alert these following (individually): 
// I. First Name
// II. Last Name
// III. Email
// IV. Phone Number
// V. Password

var firstName = "abc";
alert(firstName);

var lastName = "xyz";
alert(lastName);

var email = "abc@gmail.com";
alert(email);

var phone = 12345678;
alert(phone);

var pass = "abcdef";
alert(pass);

// 2. Correct this statement: alert"You're learning JavaScript!";

alert("You're learning JavaScript!");

// 3.Code an alert statement displaying any message you like.

alert("I hate copy paste");

// Chapter 2 (Variables for string)

// 1. Declare any variable in the camelCase format.

var myName;
// 2. Declare a variable of your choice without defining it. Then, in a 

var myFavouriteName;

// second statement, assign it a string of your choice.

myFavouriteName = "Noorey-najaf";

// 3. Declare the variable teamName and Alert your Team name.

var teamName = "Buraqtech team";
alert(teamName);

// 4. This statement has already been coded. var bestMan = "Charlie";
// Assign the variable a new string

var bestMan = "jhon doe";

// Chapter 3 (Variables for numbers)

// 1. Declare a variable “caseQty”

var caseQty;

// 2. Assign to the variable caseQty, which has already been declared, 
// the value 144.

caseQty = 144;

// 3. Rewrite this statement so the variable can be used in a math 
// operation. var num = "9";

var num = 9;

// 4. In one statement declare a variable. In a second statement assign 
// it the sum of 2 numbers.

var total;

var num = 1;
var num2 = 2;
var total = num + num2;

// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.

var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;

console.log(orderTotal);

// 6. In the first statement declare a variable and assign it a number. In 
// the second statement, change the value of the variable by adding 
// it together with a number

var num1 = 10;
num1 = 12;

// Chapter 4 (Variable names Legal and 
//     Illegal)

//     1. Correct this statement.
//     var product cost = 3.45;

       var productCost = 3.45;

//     2. Rewrite this using camelCase.
//     var Nameofband;

       var NameOfBand;

//     3. In a single statement declare a legally-named variable and assign a 
//     number to it.

       var myNum = 7;

//     4. Declare a variable that is a combination of your first and last 
//     names. Use camelCase.
       
       var firstName = "ahmed";
       var lastName = "ali";

       var fullName = firstName+lastName;

//     5. List the legal and Illegal Variables.
    // legall
       var myVar;
       var _privateVar;
       var counter1;
       var userName;
       var numberOfApples;

    // illegal
       var 123var;    
       var my Var;    
       var if;         
       var for;        
       var while; 

    //    Chapter 5 (Math Expression I)
    //    1. What is the name and symbol of the arithmetic operator that 
    //    gives you the remainder when one number is divided by another?

          modulus

    //    2. What is the value of num?
    //    var num = 20 % 6;

          the value of num will be 2

    //           3. In a single statement, declare the variable largeNum and assign it 
    // the result of 1,000 multiplied by 2,000.

       var largeNum = 1000 * 2000;

    // 4. Assign to a variable the value represented by one variable 
    // subtracted from the value represented by another variable

       var num1 = 2;
       var num2 = 6;
       var numResult = num1 - num2;

    // 5. Assign to a variable the remainder when one number is divided by 
    // another. The variable hasn't been declared beforehand. Make up 
    // the variable name.

    var myRemainder = 15 % 7;
       
    // 6. Code an alert that displays the result of a multiplication on 2 
    // numbers.

    var oneMultiple = 2;
    var twoMultiple = 4;
    var numResult = oneMultiple * twoMultiple;
    alert(numResult);

//        Chapter 6 (Math Expression II)
// 1. Code a short form of x = x + 1; Use either of the two legal 
// expressions.

    x++;
    ++x;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 
// with a math expression?

   x = x - 1;
   x -= 1;

// 3. var x = 50;
// var y = x++;
// What is the value of y?

   y = 50;

// 4. var y = 50;
// var z = --y;
// What is the value of z?
   // 4. var y = 50;
// var z = --y;

   z = 49;

// 5. In a single statement, decrement num and assign its original value 
// to newNum.

   newNum = num--;

// 6. In a single statement add 1 to a variable and assign its original 
// value to another variable.

   var newVar = oldVar++;

// 7. Assign a number value to a variable.
// Increment the variable.
// Display the new value in an alert

   var myVariable = 5;
   
   myVariable++;
   
   
   alert("The new value is: " + myVariable);

//    Chapter 7 (Math Expression III)
   // 1. var calculatedNum = 2 + (2 * 6);
   // What is the value of calculatedNum?

      calculatedNum = 14;

   // 2. var calculatedNum = (2 + 2) * 6;
   // What is the value of calculatedNum?

      calculatedNum = 24;

   // 3. var calculatedNum = (2 + 2) * (4 + 2);
   // What is the value of calculatedNum?

      calculatedNum = 24;

   // 4. var calculatedNum = ((2 + 2) * 4) + 2;
   // What is the value of calculatedNum?
     
      calculatedNum = 18;

   // Note: Try all the above equations yourself.
   // 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, 
   // clarified with parentheses, producing 56.

      var calculatedNum = (2 + 2) * (4 + 10);

   // 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, 
   // clarified with parentheses, producing 20.
      var calculatedNum = 2 + (2 * 4)+ 10;
   // 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, 
   // clarified with parentheses, producing 5.


   // Chapter 8 (Concatenating Text 
   // Strings)

   // 1. var num = "2" + "2";
   // What is the value of num? Include quotation marks.

     num = "22";
   // 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement
   
   alert(message);

// 3. alert("33" + 3);
// What message displays in the alert box?

   //333

// 4. Write an alert that displays the concatenation of the two parts of 
// "Pakistan Zindabad".
    var country = "pakistan";
    var feel = "zindabhag";
    alert(country + " " + feel);

// 5. Write a statement that assigns to a variable the concatenation of 
// a string with a number

   var myString = "Hello, ";
   var myNumber = 42;
   var concatenated = myString + myNumber;

// 6. Assign strings to two variables. Then concatenate them and assign 
// the result to a third variable.

   var firstString = "Hello, ";
   var secondString = "world!";
   var concatenated = firstString + secondString;
   
// Chapter 9 (Prompts)
// 1. Code a prompt with the message "Enter first name". The user's 
// response is assigned to firstName.

    var firstName = prompt("Enter first Name");

// 2. Code a prompt with the message "Country?" and the default 
// answer "China". The user's response is assigned to country.
   
   var country = prompt("","china");

// 3. Correct this statement
// var yourName = prompt(Enter Your Name");
   var yourName = prompt("Enter Your Name");
// 4. Code a prompt that specifies a string as the message Include a 
// default input.
    var codeDefault = prompt("","abc");

// 5. Assign strings to two variables. Code a prompt specifying the first 
// variable as the message and the second variable as the default 
// response. Assign the user's response to a third variable.

var message = "Please enter your name:";
var defaultResponse = "John Doe"; 

var userResponse = prompt(message, defaultResponse);

// 6. Display a prompt, including both a message and a default 
// response.   
// Display the user's response in an alert.

   var country = prompt("enter your country name","china");
   alert(country);

// Chapter 10 (if statments)
// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself

   var city = "Karachi";
if (city === "Karachi") {
console.log("The City OF Lights")}

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box 
// that asks the user value of z? and assign it to another variable.

   if (x === y) {
     var z = prompt("Please enter the value of z:");
   }

// 3. Code an if statement that tests if ZipCode is "10010" so, Alert 
// that "Karachi". if not then alert ("Please write correct city")

   var ZipCode = +prompt("enter your city's zip");

   if(ZipCode === 10010){
      alert("karachi");
   }

   else{
      alert ("Please write correct city");
   }

// 4. Code an if statement. Test whether a variable has a particular 
// numerical value. If so, assign a new value to that variable, as in 
// x = 1;

   var x = 1;
   
   if (x === 1) {
     x = 2;
   }




