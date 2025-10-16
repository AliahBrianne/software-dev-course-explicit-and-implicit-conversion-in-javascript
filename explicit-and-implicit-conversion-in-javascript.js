/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
let result = Number('5')-2; //Convert string "5" to number for clairty 
console.log("The result is: " + result);

let isValid = ("false" === "true"); //Convert string to boolean explicitly
if (isValid) {
    console.log("This is valid!");
} else {
  console.log("This is NOT valid!") //added for clairity
}

let age = "25";
let totalAge = Number(age) + 5; //Convert string to number to perform addition
console.log("Total Age: " + totalAge);


//Implicit conversion example
let resultImplicit= null + 10;
console.log("Testing null + 10🤔"); //checking how null behaves with addition
console.log("Result:", resultImplicit);
console.log("Type of result:", typeof resultImplicit);

// Explicit conversion example
let userInput = "123abc";
let resultNumber = Number(userInput);
console.log("Testing explicit conversion of;", userInput); //converting string to number
console.log("After Number():", resultNumber);
console.log("Type of result:", typeof resultNumber);


