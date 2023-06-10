// we want to add two numbers
var a = 1;
var b = 2;

var add = a + b;
var sub = a - b;
var mul = a * b;
var div = a / b;

// console.log(add);
// console.log(sub);

// the syntax to write a function is
// function nameOfTheFunction (){code};
// here nameOfTheFunction is just a variable which is holding our function.

function addition() {
  console.log(a + b);
}
function subtraction() {
  console.log(a - b);
}
function multiplication() {
  console.log(a * b);
}
function division() {
  console.log(a / b);
}

// console.log(addition);
// in order to execute a function or invoke a function we use this
// functionName();
// addition();

// while creating a function, we can pass values to the function using parameters.
// function functionName(parameter1, parameter2 .....){here we can access the parameters}
function calculator(operation) {
  switch (operation) {
    case "+":
      addition();
      break;
    case "-":
      subtraction();
      break;
    case "*":
      multiplication();
      break;
    case "/":
      division();
      break;
    default:
      console.log("invalid operation");
  }
}
// switch(value){case1:, case2: , ....default:}
calculator("+");
// 1. JS will try to find the function called calculator;
// 2. it will try to execute this function with '+' as the parameter
// 3. we run the switch case statement and look for '+' case;
// 4. whenever we find that case, we execute it.
calculator("*");

// let us try to create a better calculator version
function newAdd(number1, number2) {
  console.log(number1 + number2);
}
newAdd(5, 10);

// use the same calculator logic (switch case), but I want you to create
// calculator(number1, number2, operation);

// create a function to print all the values of a given array.
var array = ["a", 2, 489, false, ["abd"], true, newAdd];
var array2 = ["b", 2, 4, 6, 7, 8, 4, 3, 55];
function print(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

print(array);
// the below execute is just the definition of the function.
// here we are taking an imaginary array which is full of functions.
function execute(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}

var arrayOfFunc = [addition, subtraction, multiplication, division];

execute(arrayOfFunc);

print(array2);

var collectionOfArrays = [
  [11, 2, 3, 2, 5, 6, 7, 7],
  [848, "a", "kn", true],
  ["apple", "banana"],
  [true, false],
];
for (var i = 0; i < collectionOfArrays.length; i++) {
  print(collectionOfArrays[i]);
}
console.log(print);

// we use return instead of console.log() in a function when we want to store the output instead of printing it.

function checkingReturn(num1, num2) {
  return num1 + num2;
}

checkingReturn(1, 5);
// we are not getting any print because we are not using console.log
// we can use return to give back a value and store it for later use
var output = checkingReturn(1, 10);
console.log(output);

var arrOutputs = [];

arrOutputs.push(checkingReturn(1, 12));
arrOutputs.push(checkingReturn(1, 11));
arrOutputs.push(checkingReturn(1, 15));
arrOutputs.push(checkingReturn(1, 2));
arrOutputs.push(checkingReturn(1, 23));
arrOutputs.push(checkingReturn(1, 10));

console.log(arrOutputs);

// all the functions that are already present in JS are called as inbuilt functions
// examples: console.log(),array.length(), string.length(),push(),pop()
