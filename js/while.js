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

var x =2;
while (x < 65537) {
    console.log ('while loop iteration ' + x);
    x *= 2;
}


// This is how you get a random number between 50 and 100

var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5

//
console.log(allCones + " cones total");
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (allCones > conesSold) {
        allCones -= conesSold;
        console.log(conesSold + ' cones sold...There are ' + allCones + " cones left");
    } else if (allCones < conesSold) {
        console.log('I cannot sell ' + conesSold + '... I only have '+ allCones);
    } else {
        allCones -= conesSold;
        console.log('All cones sold');
    }
} while (allCones > 0);

// 2. Create a while loop that counts backwards from 20 - 1
var x = 20;
while (x >= 1){
    console.log(x);
    x--;
}
//
var myQuestion = true;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?


/*
* DO-WHILE LOOPS
*/
4. Refactor question 3 using a do-while loop.
What is the behavior this time?
   do {
       myQuestion = confirm("Would you like to exit?");
   } while(!myQuestion);





// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"
    var userColor;
    do {
        userColor = prompt("enter a color");
    } while(userColor !== "blue");

// 6. Refactor question 1 using a do-while loop.

//i = initialization
var i = 0;

//condition
do { console.log(i +=10);
} while (i < 100);
//
// /*