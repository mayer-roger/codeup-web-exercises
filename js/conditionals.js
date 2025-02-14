"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var play = confirm("Would you like to enter a number?");
// function toDo1(play) {
//     if (play !== true) {
//         return alert("sorry you dont want to play");
//     } else {
//         var num = parseInt(prompt("please enter a number"));
//         } if (isNaN(num)) {
//         return alert("That's not a number");
//         } else {
//         if (num % 2 == 0){
//         alert("number is even");
//             } else {
//             alert("number is odd");
//         } alert(num + 100);
//         if (num > 0){
//             alert("number is positive");
//         } else {
//             alert("number is negative");
//         }
//     }
// }
// toDo1(play);

// instructer solved

// var userConfrim = confirm("would you like to enter a number?");
//
// if(userConfrim){
//     //true path
//     var userInput = prompt("please enter a number");
//     console.log("the users number: " + userInput);
//
//     //checking to see if usernumber is a number
//     var isNumber = !isNaN(userInput);
//     console.log("the user entered a number: " + isNumber);
//
//     if(isNumber){
//         var userNumber = parseFloat(userInput);
//         var isEven = userNumber % 2 ===0;
//         console.log("the user number is even: "+ isEven);
//
//         var evenMessage = (isEven) ? "your number is even" : "your number is odd";
//         alert(evenMessage);
//
//         alert(userNumber + 100);
//
//         var posNegativeMessage = (userNumber >= 0) ? "your number is positive" : "your number is negative";
//         alert(posNegativeMessage);
//
//     } else {
//         alert("not a number");
//     }
// }


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
 // var color = prompt("what color do you like??");
 // console.log(color);

    // function analyzeColor(x) {
    //     if (x === "blue"){
    //         return "the sky is blue!";
    //     } else if (x === "red"){
    //         return "Strawberries are red";
    //     } else if (x === "indigo"){
    //         return "I don't know anything about indigo";
    //     } else {
    //         return "That's a crazy color";
    //     }
    // }
    // console.log(analyzeColor(color));
    // alert(analyzeColor(color));




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(x) {
    switch (x) {
        case "red":
            return("roses are red");
        case "yellow":
            return("bananas are yellow!");
        case "green":
            return("the grass is green");
        default:
            return(x + " is a color I don't know much about");
    }
}

console.log(analyzeColor(randomColor));




/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Please enter a color");
alert(analyzeColor(userColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// var cart = parseInt(prompt("Total cost of cart"));
// function calculateTotal(lucky, cart) {
//     if (lucky == 0){
//         return ("No discount- $" + cart);
//     } else if (lucky == 1) {
//         return ("10% discount- $" + (cart * .90));
//     } else if (lucky == 2) {
//         return ("25% discount- $" + (cart * .75));
//     } else if (lucky == 3) {
//     return ("35% discount- $" + (cart * .65));
//     } else if (lucky == 4) {
//         return ("50% discount- $" + (cart * .50));
//     } else if (lucky == 5) {
//     return ("It's free! you owe $" + (cart - cart));
//     }
// }
//
// instructor switch solution

function calculateTotal(luckyNumber, totalPrice){
    var discountRate = 0;

        switch (luckyNumber) {
            case 0:
                discountRate = 0;
                break;
            case 2:
                discountRate = .1;
                break;
            case 3:
                discountRate = .25;
                break;
            case 4:
                discountRate = .35;
                break;
            case 4:
                discountRate = 0.5;
                break;
            case 5:
                discountRate = 1;
                break;
        }
        return totalPrice = (totalPrice + discountRate);
    }


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBillPrompt = parseFloat(prompt("what was total bill?"));
console.log(luckyNumber);
var finalAmount = calculateTotal((luckyNumber, totalBillPrompt));
alert("your lucky number is: " + luckyNumber + "your total bill was: " + totalBillPrompt + "and your total discount is; " + discountRate);


