"use strict";
var userInput = prompt("enter an odd number between 1 and 50");
    console.log('User input: ' + userInput);
    if (userInput % 2 !== 0) {
        console.log(userInput + ' is an odd number');
    } else {
        console.log(userInput + ' is an even number');
    }

function oddSkip(userInput) {
    for (var i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log("Here is an odd number: " + i);
            if (i === userInput) {
                console.log("Skipping number: " + i);
                break;
            }
        }
    }
}

