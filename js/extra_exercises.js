"use strict";


//1.Counting the Number of Characters EXERCISE
// var input = prompt("What is the input string?");
//
// function countChar(input) {
//     for (var ch = 0; input.length; ch++) {
//         var countAns = input + " has " + ch + " characters."
//     }
// }
// console.log(countChar(input));

//2.MADLIB EXERCISE
// var noun = prompt("Enter a noun");
// var verb = prompt("Enter a verb");
// var adjective = prompt("Enter an adjective");
// var adverb = prompt("Enter an adverb");
//
// alert("Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "? That's hilarous");


//3.SIMPLE MATH EXERCISE
// var oneNum = parseInt(prompt("What is the first number?"));
// var twoNum = parseInt(prompt("What is the second number?"));
//
// function simpleAdd(oneNum, twoNum) {
//     return oneNum + twoNum;
// }
//     console.log(simpleAdd(oneNum, twoNum));
//     var addAns = (simpleAdd(oneNum, twoNum));
//
// function simpleSub(oneNum, twoNum) {
//     return oneNum - twoNum;
// }
//     console.log(simpleSub(oneNum, twoNum));
//     var subAns = (simpleSub(oneNum, twoNum));
//
// function simpleMult(oneNum, twoNum) {
//     return oneNum * twoNum;
// }
//     console.log(simpleMult(oneNum, twoNum));
//     var multAns = (simpleMult(oneNum, twoNum));
//
//
// function simpleDiv(oneNum, twoNum) {
//     return oneNum / twoNum;
// }
//     console.log(simpleDiv(oneNum, twoNum));
//     var divAns = (simpleDiv(oneNum, twoNum));
//
// alert(oneNum + " + " + twoNum  + " = " +  addAns);
// alert(oneNum + " - " + twoNum  + " = " +  subAns);
// alert(oneNum + " * " + twoNum  + " = " +  multAns);
// alert(oneNum + " / " + twoNum  + " = " +  divAns);

//4. AREA OF RECTANGLE ROOM
// var recLength= parseInt(prompt("What is length of room in feet?"));
// var recWidth= parseInt(prompt("What is with of room in feet?"));
// var metersWidth = recWidth / 3.281;
// var metersLength = recLength / 3.281
// var metersArea = metersLength * metersWidth;
// var meters= metersArea.toFixed(3);
// alert("You entered the demensions of " + recLength + " by " + recWidth + " feet");
// alert("The area is " + recLength * recWidth + " feet");
// alert("The area is " + meters + " meters");

//5. Pizza Party
// var people= parseInt(prompt("How many people?"));
// var pizza= parseInt(prompt("How many pizzas?"));
// var slices= parseInt(prompt("How many slices in pizza?"));
// alert(people + " people with " + pizza + " pizzas");
// var sliceTotal = pizza * slices;
// var pizzaEach = sliceTotal / people;
// pizzaEach = pizzaEach.toFixed(0);
// var pizzaRemain =  sliceTotal % people;
// alert("Each person gets " + pizzaEach + " slices and there are " + pizzaRemain + " leftover slices." )

//Paint room
// var paintLength= parseInt(prompt("What is the length?"));
// var paintWidth= parseInt(prompt("What is the width"));
// var paintArea = paintLength * paintWidth;
// var gallon = paintArea / 350;
// var paintGallon = Math.ceil(gallon);
// alert("You will need to purchase " + paintGallon +" gallons of paint to cover "+ paintArea + " square feet.")
