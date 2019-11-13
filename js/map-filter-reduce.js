"use strict";

/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];
// let newArray = [];
// numbers.forEach(function(number){
//     newArray.push(number +1);
// });
// console.log(newArray);

//refactored with .map

let newArray = numbers.map(num => num * 2);
console.log(newArray);

//TO DO TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

//TO DO: Map through the new array of numbers and this time multiply each
// element by 3. Console log the new copy.

let threes = newArray.map(num => num * 3);
console.log(threes);

/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TO DO TOGETHER: Let's filter through our binary and return all the true
// values. We'll store the new array in a variable named 'ones'
let ones = binary.filter(num => num == true);
console.log(ones);

// TO DO: filter through binary again and this time, return all the false
// values.
let zeros = binary.filter(num => num == false);
console.log(zeros);


const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TO DO: filter through the array of objects and return all fruit type
// objects.
let fruits = fruitsAndVeggies.filter(fruit => fruit.type === "fruit");
console.log(fruits);
// TO DO: filter through the array of objects and return all vegetable type
// objects.
let veggies = fruitsAndVeggies.filter(veg => veg.type === "vegetable");
console.log(veggies);

/*********************************************
 *              .reduce
 ******************************************** */

// TO DO TOGETHER: Let's reduce our original numbers Array into one single
// value.

const sum = numbers.reduce((accumulation, currentNumber) => accumulation + currentNumber, 0);
console.log(sum);

// TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// starting point of 100.
const minus = numbers.reduce((total, currentNumber) => {
    return total - currentNumber;
}, 100);
console.log(minus);

const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TO DO: Using .reduce, return the total number of apples.

let totalApples = shoppingCarts.reduce(function(total, cart){
    return total + cart.apples;
},0);

console.log(totalApples);

// TO DO TOGETHER: let's use .reduce to return an object that has properties
// representing total values for each fruit.
// let totalFruit = shoppingCarts.reduce(function(total, cart){
//     return total + cart;
// },0);
//
// console.log(totalFruit);

function countFruits(fruit) {
    // const words = sentence.split(' '); // transform a sentence into an array of words
    const fruitCountObject= shoppingCarts.reduce((total, cart) => {
        if (typeof total[cart] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            total[cart] = 1;
        } else {
            // otherwise increment the existing count
            total[cart] += 1;
        }
        return total;
    }, {}); // start with an empty object
    return fruitCountObject;
}

const colors = ['red','orange','red','blue','blue','green','red'];

// TO DO: Count the number of times a color appears in this Array. Hint:
// your initial value should be an empty object.
const colorCount = colors.reduce(function(colorCount, color){
  if (typeof (colorCount[color] === "undefined")) {
      colorCount[color] = 1;
  } else {
      colorCount[color] += 1;
  }
  return colorCount
},{});
console.log(colorCount);





//TO DO TOGETHER: Using reduce, let's turn this into a string.
const lyrics = ['we','all','live','in','a','yellow','submarine'];
const oneLine = lyrics.reduce(function(currentString, word){
    return `$[currentString} ${word}`;
}, "");

// Bonus: Create an Array of all the unique fur colors!
//look up js set

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];
// let fur = [];
// let furs = hamsters.filter(function(fur){
//
// });

const users= [

    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let atLeastThree = users.filter((user) => user.languages.length >=3);
console.log(atLeastThree);

//Use .map to create an array of strings where each element is a user's email address
let emails = users.map(user => user.email);
console.log(emails);
//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYearsExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

let averageExp = totalYearsExperience / users.length;

console.log(totalYearsExperience);
console.log(averageExp);
//Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longest, email) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
        }
    }, " ");
console.log(longestEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let instructors = users.reduce((str, user) => {
    return `${str}${user.name}`
}, "your instructors are david, sophie, vivian, trant") + ".";

console.log(instructors);

//Use .reduce to get the unique list of languages from the list of users.
let listOfLanguages = Array.from(users.reduce((accumulator, user) =>{
    user.language.forEach(language => accumulator.add(language));
    return accumulator;
}, new Set()));

console.log(listOfLanguages);







