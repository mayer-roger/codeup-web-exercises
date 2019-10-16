"use strict";
do {
    var userInput = prompt("enter an odd number between 1 and 50");
    userInput = parseFloat(userInput);
} while (userInput % 2 === 0 && userInput <= 50 && userInput >=1);

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

    //another solution
while(true){
        var num = prompt("enter an odd number between 1 and 50");
        if (num % 2 === 0 && num <= 50 && num >=1){
            break;
        }
}
    console.log("skipping number: " + num);
    for (var q= 1; q <=50; q+=2){
        if (q == num){
            console.log("Skipping number" + q);
            continue
        }
        console.log("here is the odd number: " + q)
    }