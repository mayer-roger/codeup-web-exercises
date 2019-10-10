"use strict";

var i =2;
while (i < 65537) {
    console.log ('while loop iteration ' + i);
    i *= 2;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var conesSold = Math.floor(Math.random() * 5) + 1;

// do {
//     console.log (conesSold + ' cones sold...');
//
// } while (allCones > conesSold);