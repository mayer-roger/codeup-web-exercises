"use strict";
// #Assessment Review

// function named 'typeOfValue' that takes in a value and returns its type.
function typeOfValue(x){
    return typeof x;
}

console.log(typeOfValue("hello"));
console.log(typeOfValue(123));
console.log(typeOfValue([]));
console.log(typeOfValue([4,5,6]));

// - Write a function 'isPositive' that takes in a number and returns `true` or
//     `false` based on whether the input is positive.

function isPositive(x) {
    return (parseInt(x) > 0);
}

console.log(isPositive(2)); // true
console.log(isPositive(-4)); // false
console.log(isPositive(0)); // false

// - Write a function 'removeElement' that takes in an array and a value, and
// returns an Array with the first instance of the indicated value removed.

function removeElement(arr, x){
var results = [];
var counter = 0;
arr.forEach(function(num){
        if (num === x && counter === 0){
            counter++;
        } else {
            results.push(num);
        }
    });
 return results;
}

console.log(removeElement([1, 2, 3, 4, 5], 4));// returns [1,2,3,5]
console.log(removeElement([2, 2, 4, 4, 5], 2));// returns [2,4,4,5]
console.log(removeElement([10], 10)); // returns []

// - Write a function 'sumOfNumbers' that takes in an array of numbers and
// returns the sum of all values.
//

function sumOfNumbers(arr) {
var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;

}
console.log(sumOfNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumOfNumbers([-1, 15])); // 14


// - Write a function 'stringToArray' that takes in a comma separated list and
// returns it as an array.
var stringArray = "";
function stringToArray(str) {
    stringArray = str.split(',');
    return stringArray;
}

console.log(stringToArray("red,orange,yellow,green,blue")); // returns ['red','orange',
//'yellow','green','blue']
console.log(stringToArray("1,2,3")); // returns ['1','2','3']
console.log(stringToArray("dog")); // returns ['dog']

//!!!!!!!!!!!!!! need to access object within array

// - Given the following array of objects, write a function 'findUsers' that
// returns
// an
// Array of usernames.

var myMac = {};
myMac.users = [
    {
       username: "sophie",
       id: 1
    },
    {
        username: "vivian",
        id: 2
    },
    {
        username: "david",
        id: 3
    }
];


// var user= [];
// function findUsers(){
//     myMac.forEach(function (x) {
//             user = myMac.users[0];
//     });
//     return user;
// }

// function findUsers(x){
//     return x.users.username;
// }

//
// console.log(findUsers(myMac.users));    // returns ['sophie','vivian','david']



//!!!!!!!!!!

// - Write a function 'addRole' that accepts the array of objects, then adds the
// property 'role' to each object with a value of 'instructor.' The
// results should look like this:
// function addRole(x) {
//     myMac.forEach(function(element)  {
//         // username["role"] = x;
//         myMac.push({role: "instructer" });
//     });
//
// }
//
// // function addRole(){
//Object.assign (users {role: instructor}) ??????? USE THIS????????
//
//
// // addRole("instructor");
// console.log(myMac);




//
// [
//     {
//        username: "sophie",
//        id: 1,
//        role: "instructor"
//     },
//     {
//         username: "vivian",
//         id: 2,
//         role: "instructor"
//     },
//     {
//         username: "david",
//         id: 3,
//         role: "instructor"
//     }
// ];

// - Write a function 'countLetters' that takes in a string and a character, and
// counts the number of instances of that character in the string.
function countLetters(str, char)
{
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++)
    {
        str = str.toLowerCase();
        if (str.charAt(position) == char)
        {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(countLetters("banana", "a")); // returns 3
console.log(countLetters("Bob", "b")); // returns 2
console.log(countLetters("javascript", "x")); // returns 0

//!!!!!!!!!!!

// - Write a function 'evensIndex' that takes in an array of numbers and returns
// an array containing the index values of all even numbers.

var evenCount = [];
function evensIndex(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr % 2 === 0){
            evenCount += arr.indexOf();
        }
    }
        return evenCount;
}
console.log(evensIndex([1, 2, 3, 4, 5, 6])); // returns [1,3,5]
console.log(evensIndex([3, 7, 11, 12])); // returns [3]
console.log(evensIndex([5, 5, 7, 13])); // returns []

// ####BONUS:
//!!!!!!!!!!!!!!!!!!!!

//     - Write a function 'countAll' that takes in an array of strings and returns an
// array with the count of a character for each string. You may be able to use
// your countLetters function here.

// var countArr =[];
// function countAll(arr) {
//     for (var i = 0; i <arr.length; i++){
//         countArr += countLetters(arr);
//     }
//     return countArr;
// }
//
// console.log(countAll(["banana", "html", "java"], "a")); // returns [3,0,2]
// console.log(countAll(["push", "your", "commits"], "u")); // returns [1,1,0]
// ```
