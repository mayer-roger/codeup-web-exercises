
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

//concatinating strings

var str = " ";
function stringNum(num) {
    for (var i = 0; i <= 9; i++){
        console.log(str);
        str += num;
        num+=1;

    }
}
stringNum(1);

//subtracting five
function subtractFive(num) {
    for (var i = 5; i > 0; --i){
        if (i !== 0);
        var fiveLess = num - 5;
        console.log (fiveLess);
    }
}
subtractFive(100);