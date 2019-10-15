
"use strict";

function  showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        console.log(x + " * " + i + " = " + (x * i));
    }
}
showMultiplicationTable(7);


// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5
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



//concatenating strings


function stringNum() {
    for (var i = 0; i < 10; i++){
        var str = " ";
        for(var j = 1; j <= i; j++){
            str += i;
        }
        console.log(str);
    }
}
stringNum();

//subtracting five
function subtractFive(num) {
    for (var i = num; i >= 5; i-=5){
       console.log(i);
    }
}
subtractFive(100);
