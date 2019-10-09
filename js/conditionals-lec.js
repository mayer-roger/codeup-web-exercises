"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over




// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin
//Together: Send a 20% off coupon if its users birthday
//Together: Write an if statement that alerts "It's raining" if isRainy is true
//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// if (isAdmin){
// //     show specific navbar
// }

// if(isBirthday){
//     //send 20% off
// }

// var isRainy = true;
// if (isRainy){
//     alert("It's raining!")
// }

// var itemCost = 100;
// var currentBalance = 200;
// if (itemCost < currentBalance){
//     alert("You can buy")
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberOfLives = 0;
// function lives(numberOfLives) {
//     if (numberOfLives === 0) {
//         alert("Sorry, game over");
//     } else {
//         return alert("You have " + numberOfLives + " lives left")
//
//     }
// }
//
// var weather = "snowing";
// function outside(weather) {
//     if (weather === "snowing") {
//         alert("It's snowing!")
//     } else {
//         return alert("It's not snowing")
//
//     }
// }
//
// var numberInput = 11;
// function numb(numberInput) {
//     if (numberInput > 10) {
//         alert(true);
//     } else {
//         return alert(false)
//
//     }
// }

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar
//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isAdmin = false;
// if (isAdmin){
//     alert("User is admin")
//     } else {
//     alert("User is not admin")
// }
//
// var isRainy = true;
// if (isRainy){
//     alert("It's raining")
//     } else {
//     alert("It's dry")
// }
//
//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 

// function lives(numberOfLives) {
//     var returnMessage;
//
//     if (numberOfLives === 0) {
//        returnMessage = "Sorry, game over";
//     } else {
//         returnMessage = "You have " + numberOfLives + " lives left";
//     }
//     return returnMessage;
// }
//
// console.log(lives(2));
//
// var currentWeather = prompt("what is the weather?");
// function outside(weather) {
//     if (weather === "snowing") {
//         alert("It's snowing!")
//     } else {
//         return alert("It's not snowing")
//
//     }
// }
// outside(currentWeather);
//
//
// var numberInput = 11;
// function numb(numberInput) {
//     if (numberInput > 10) {
//         alert(true);
//     } else {
//         return alert(false)
//
//     }
// }


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"


// var input = confirm("Are you 13?");
// function ageVerify(age) {
//     if (age) {
//         alert("You may proceed");
//     } else {
//         return alert("Sorry, you are not able to proceed");
//     }
// }
// ageVerify(input);

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

// function checkWeather(weather) {
//     if (weather === "snowing") {
//         alert("it's snowing");
//     } else if (weather === "raining") {
//         alert("it's raining");
//     } else if (weather === "hot") {
//         alert("it's hot");
//     } else {
//         alert("have a nice day");
//     }
// }
// checkWeather(hot);


// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

//Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// var color = prompt('what color is the light');
// console.log(color);
// function lightColor(x) {
//     if (x === "green"){
//         return "GO!";
//     } else if (x === "yellow"){
//         return "sloow down";
//     } else if (x === "red"){
//         return "STOP!";
//     } else {
//         return "Turn around";
//     }
// }
// console.log(lightColor(color));
// alert(lightColor(color));



// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license. 


// var userAge= parseInt(prompt("How old are you?"));
// var hasPermit = confirm("do you have a permit?")
// function eligible(x, y){
//     if (x < 15){
//         alert("you are not eligible for learners permit");
//     } else {
//         if (userAge === 15) {
//             alert("you are eligible for learners permit");
//         } else if (userAge >= 16 && hasPermit) {
//             alert("you are eligible for license");
//         } else if (userAge >= 16 && !hasPermit) {
//             alert("you need permit first");
//         }
//     }
// }
// alert(eligible(userAge, hasPermit));




// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);



// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
// var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "It's raining" : "Have a nice day";
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


// //TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
//  var weather2 = prompt("what the weather like??");
//
//  switch(weather2) {
//      case "snowing":
//          alert("It's snowing");
//          break;
//      case "raining":
//          alert("It's raining");
//          break;
//      case "hot":
//          alert("it's hot");
//          break;
//      default:
//          alert(weather2 + " means the apocalypse");
//          break;
//  }
//
//
//
//
// //TODO: Rewrite the intersection function from earlier as a switch statement.
// var color2 = prompt("What color is the traffic light");
// function checkTraffic(color2) {
//     switch (color2) {
//         case "red":
//             alert("NO!");
//             break;
//         case "yellow":
//             alert("SLOOOOW!");
//             break;
//         case "green":
//             alert("GO!");
//             break;
//         default:
//             alert(color2 + " means the turn around");
//             break;
//     }
// }
//
// console.log(checkTraffic(color2));
//

// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
// var childEarn = 5;
// var shoppingDone = confirm("Has the shopping been done?");
// function money(shoppingDone, childEarn) {
//     if (shoppingDone == true){
//         childEarn = childEarn + 5;
//         return childEarn;
//     } else
//         return childEarn;
// }
// console.log(money(shoppingDone, childEarn));
//
// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

 var weather3 = prompt("what the weather like??");
function checkWeather(weather3) {

    switch (weather3) {
        case "sunny":
            alert("It's nice and sunny");
            break;
        case "raining":
            alert("It's raining");
            break;
        case "snowy":
            alert("brrr. its snowing outside");
            break;
        default:
            alert(weather3 + " means the apocalypse");
            break;
    }
}
console.log(checkWeather(weather3))

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

