"use strict";
do {
    var userInput = prompt("enter an odd number between 1 and 50");
    userInput = parseFloat(userInput);
} while (userInput % 2 === 0);

    console.log('User input: ' + userInput);
    console.log(userInput + ' is an odd number');

    for (var i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            if (i === userInput) {
                console.log("Skipping number: " + i);
                continue;
            }
            console.log("Here is an odd number: " + i);
        }

}
