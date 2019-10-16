
"use strict";
"use strict";
/*
* WHILE LOOPS
*/

//1. Create a while loop that counts to 100 in increments of ten:
//(10...20...30...)

//i = initialization
var i = 0;
//condition
while (i <= 90) {
    console.log(i +=10);
}



// 2. Create a while loop that counts backwards from 20 - 1
var x = 20;
while (x >= 1){
    console.log(x);
    x--;
}
//
// var myQuestion = true;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?


/*
* DO-WHILE LOOPS
*/
// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?
//    do {
//        myQuestion = confirm("Would you like to exit?");
//    } while(!myQuestion);





// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"
//     var userColor;
//     do {
//         userColor = prompt("enter a color");
//     } while(userColor !== "blue");
// 6. Refactor question 1 using a do-while loop.

//i = initialization
// var i = 0;
//
// //condition
// do { console.log(i +=10);
// } while (i < 100);
//
// /*
// * FOR LOOPS
// */
//
// var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

// for (var j=0; j < myArray.length; j++) {
//     console.log(myArray[j]);
// }

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

// for (var j = 0; j < 101; j++){
//     if (j % 15 === 0) console.log(j + " FizzBuzz");
//      else if (j % 3 === 0) console.log(j + " Fizz");
//      else if (j % 5 === 0) console.log(j + " Buzz");
//      else console.log(j);
// }
//
// for(var z=0; z<100;)console.log((++z%3 ? '':'fizz')+(z%5?'':'buzz')||z);


// 9. Refactor question 1 using a for-loop
// for (var b = 10; b <= 100; b+=10){
//     console.log(b);
// }
// 10. Write a for-loop


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.

// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.


// function  showMultiplicationTable(x) {
//     for (var i = 1; i <= 10; i++) {
//         console.log(x + " * " + i + " = " + (x * i));
//     }
// }
// showMultiplicationTable(7);
//
//
// // This is how you get a random number between 50 and 100
//
// // This expression will generate a random number between 1 and 5
// var tenRandom = Math.floor(Math.random() * 9) + 1;
//
//
// function evenOdd() {
//     for (var i = 1; i <= 10; i++) {
//         var randomTwo = Math.floor(Math.random() * 180) + 20;
//         if (randomTwo % 2 === 0) {
//             console.log((randomTwo + " is even"));;
//         } else {
//             console.log((randomTwo + " is odd"));;
//         }
//     }
//     return "loop is done.";
// }
//
// console.log(evenOdd());
//
//
//
//concatenating strings


function stringNum() {
    for (var i = 0; i < 10; i++){
        var str = " ";
        for(var j = 1; j <= i; j++){
            str += i;
        }
        console.log(str);
    }
//
    stringNum();
}
// //subtracting five
// function subtractFive(num) {
//     for (var i = num; i >= 5; i-=5){
//        console.log(i);
//     }
// }
// subtractFive(100);
