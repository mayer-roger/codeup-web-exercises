"use strict"

// alert("welcome to my website!");
// var favoriteColor= prompt("what is your favorite color?");
// console.log(favoriteColor);
// alert("Cool, " + favoriteColor + " is my favorite color too");
//
// //3.2 rental exercise
//
// var cost = 3;
//
// var mermaid = parseInt(prompt("how many days did you rent lil merms?"));
// var bear = parseInt(prompt("how many days did you rent burrs?"));
// var hercules = parseInt(prompt("how many days did you rent herks?"));
// var totalRental = (mermaid + bear + hercules);
// var totalCost = (totalRental * cost);
// alert("You owe $" + totalCost);
//
// function rentTotal(days) {
//     return days * cost;
//
// }
// console.log(rentTotal(5) + rentTotal(1) + rentTotal(3))

//3.3 wages exercise

var google = parseInt(prompt("how many hours worked at google?"));
var googlePay = parseInt(prompt("how much does google pay per hour?"));
var amazon = parseInt(prompt("how many hours worked for amazon?"));
var amazonPay = parseInt(prompt("how much does amazon pay per hour?"));
var facebook = parseInt(prompt("how many hours worked for facebook?"));
var facebookPay = parseInt(prompt("how how much does facebook pay per hour?"));
var payTotal = googlePay + facebookPay + amazonPay;
var hoursTotal= google + amazon + facebook;

var wage = payTotal * hoursTotal;

alert("congrats, you've made " + wage)


//3.4 class

var classSize = parseInt(prompt("how many students are currently enrolled?"));
var currentSched = parseInt(prompt("how many hours are you working now?"));
var classTotal = parseInt(prompt ("how many classes do you want to take?"));
var classHours = classTotal * 3;

function enroll() {
    if (classSize <= 30) {
        if ((currentSched + classHours) <= 40) {
            alert("You can enroll!");
            return true;
        }
        else alert("you are too busy");

    }
    else alert("Class is full");
}

var canEnroll = enroll();
console.log(canEnroll);


//3.5 membership exercise
var offerValid = confirm("is offer still valid?");
var howMany = parseInt(prompt())


function offerValid(membership,numItems,offerExp,todaysDate){
    if (membership === "premium"){
        if(offerExp <= todaysDate){
            return true;
        }
    }
    else{
        return false;
    }
}





var password = prompt("enter new password");
var username = prompt( "enter new username");

function validPassword(username, password){
    if(password.length < 5){
        return false;
    }
    if(password.includes(username)){
        return false;
    }
    if(username.length > 20){
        return false;
    }
    if (username !== username.trim) {
        return false;
    }
    return true;
}

var valid = validPassword(username, password)

console.log(valid);





