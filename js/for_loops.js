
// "use strict";


// * FOR LOOPS

// */
//
var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

for (var j=0; j < myArray.length; j++) {
    console.log(myArray[j]);
}

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

for (var j = 0; j < 101; j++){
    if (j % 15 === 0) console.log(j + " FizzBuzz");
     else if (j % 3 === 0) console.log(j + " Fizz");
     else if (j % 5 === 0) console.log(j + " Buzz");
     else console.log(j);
}

for(var z=0; z<100;)console.log((++z%3 ? '':'fizz')+(z%5?'':'buzz')||z);


// 9. Refactor question 1 using a for-loop
for (var b = 10; b <= 100; b+=10){
    console.log(b);
}

// 10. Write a for-loop


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.

// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.


function  showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        console.log(x + " * " + i + " = " + (x * i));
    }
}
showMultiplicationTable(7);
//
//
// // This is how you get a random number between 50 and 100
//
// // This expression will generate a random number between 1 and 5
var tenRandom = Math.floor(Math.random() * 9) + 1;

function evenOdd() {
    for (var i = 1; i <= 10; i++) {
        var randomTwo = Math.floor(Math.random() * 180) + 20;
        if (randomTwo % 2 === 0) {
            console.log((randomTwo + " is even"));;
        } else {
            console.log((randomTwo + " is odd"));;
        }
    }
    return "loop is done.";
}

console.log(evenOdd());




//EXERCISE #4
//concatenating strings


function stringNum() {
    for (var i = 0; i < 10; i++) {
        var str = " ";
        for (var j = 1; j <= i; j++) {
            str += i;
        }
        str= parseInt(str);
        console.log(str);
    }
}
stringNum();


//EXERCISE #5
//subtracting five
function subtractFive(num) {
    for (var i = num; i >= 5; i-=5){
       console.log(i);
    }
}
subtractFive(100);
