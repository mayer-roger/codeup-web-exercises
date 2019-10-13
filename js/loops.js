"use strict";

function  showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        console.log(x + " * " + i + " = " + (x * i));
    }
}
showMultiplicationTable(7);


// This is how you get a random number between 50 and 100
var randomTwo = Math.floor(Math.random() * 180) + 20;
// This expression will generate a random number between 1 and 5
var tenRandom = Math.floor(Math.random() * 10) + 1;


function evenOdd(randomTwo) {
    if (randomTwo % 2 === 0){
        return (randomTwo + " Is even");
    } else {
        return (randomTwo + " Is odd");
    }
}
