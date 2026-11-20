
// Assignment # 11 - User Input & Conditional Statements

// Q18: Day Checker
var day = prompt("Enter day name:");

if (day.toLowerCase() === "monday" ||
    day.toLowerCase() === "tuesday" ||
    day.toLowerCase() === "wednesday" ||
    day.toLowerCase() === "thursday" ||
    day.toLowerCase() === "friday") {

    console.log("It's a week day");
}
else if (day.toLowerCase() === "saturday") {
    console.log("It's weekend");
}
else if (day.toLowerCase() === "sunday") {
    console.log("Yay! It's a holiday");
}
else {
    console.log("Invalid day");
}


// Q19: Pass or Fail
var score = Number(prompt("Enter your score:"));

if (score > 50) {
    console.log("You are passed");
}
else {
    console.log("Try again!");
}


// Q20: Greater Number
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));

if (num1 > num2) {
    console.log("The greater number of " + num1 + " and " + num2 + " is " + num1);
}
else if (num2 > num1) {
    console.log("The greater number of " + num1 + " and " + num2 + " is " + num2);
}
else {
    console.log("Both numbers are equal.");
}


// Q21: The Translator
var language = prompt("Enter language code (en, es, de):");

if (language.toLowerCase() === "es") {
    console.log("Hola, Mundo");
}
else if (language.toLowerCase() === "de") {
    console.log("Hallo, Welt");
}
else {
    console.log("Hello, World");
}


// Q22: Positive or Negative Number
var value = Number(prompt("Enter a number:"));

if (value > 0) {
    console.log("The number is positive.");
}
else if (value < 0) {
    console.log("The number is negative.");
}
else {
    console.log("The number is zero.");
}


// Q23: The Pluralizer
var noun = prompt("Enter a noun:");
var quantity = Number(prompt("Enter a number:"));

if (quantity === 1) {
    console.log(quantity + " " + noun);
}
else {
    console.log(quantity + " " + noun + "s");
}
