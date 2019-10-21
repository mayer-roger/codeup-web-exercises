"use strict";
console.log("Welcome to Intro to Objects!");
var rubberDuck = {};

rubberDuck.color = "yellow";
rubberDuck.role = "emotional suppot";
rubberDuck.name = "Cody";



console.log(rubberDuck);
//or
var redCup = new Object();

redCup.color = "red";
redCup.role = "need help";
redCup.amount = 1;

console.log(redCup);


/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TO DO TOGETHER: Create a new variable (of type Object) and call it
 * 'myPhone'. Use either the constructor or Object literal notation.
 */
var myPhone = {};
/**
 * TO DO: Create a new Object and call it 'myMac'. use either the
 * constructor or Object literal notation.
 */
var myMac = {};
/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */
myPhone.model = "iPhone";
myPhone.color = "black";
myPhone.storage = "128 gb";

console.log(myPhone);
/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */
myMac.model = "Air";
myMac.size = "13 inch";
myMac.year = 2017;

console.log(myMac);

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

myPhone.name = {
    firstName: "Roger",
    lastName: "Mayer"
};

//or dot notation - myPhone.name.firstName = "Roger"; ...

myPhone.apps = ["instagram", "slack", "facebook"];
console.log(myPhone.apps[2]); // facebook

/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */
myMac.folders = ["documents","downloads", "pictures"];
console.log(myMac.folders);

//creating a forEach loop to call items in array

function myApps(myArray) {
    console.log("these are my apps: ");
    myMac.folders.forEach(function (folder) {
        console.log(folder);
    });
    return "Did you find what you are looking for?"
}
myApps(myMac.folders);


/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

myMac.login = {
    username: "Roger",
    fakePassword: "1234",
    email: "rm@gmail.com"
};
console.log(myMac.login);


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
console.log(myMac.users);
console.log(myMac.users[1]); //username: vivian, id: 2
console.log(myMac.users[1].username); //username: vivian

myMac.users.forEach(function (user) {
    console.log(user)
});


/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */
console.log(myPhone);

myPhone.call = function () {
    console.log("dialing...");

};
console.log(myPhone.call());
/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

console.log(myMac);

myMac.powerOn = function () {
    console.log("powering on...");
};
console.log(myMac.powerOn());



/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.currentUser = function (){
    console.log("current user: " + this.name.firstName + " " + this.name.firstName)
};
console.log(myPhone.currentUser());

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

myMac.currentUser = function (){
    console.log("username: " + this.login.username + " email: " + this.login.email)
};
console.log(myMac.currentUser());


/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */




/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */

var chooseYourFighter = [
    {
        name: {
            firstName: "spongebob",
            lastName: "squarepants"
        },
        weapon: "spatula",
        attacks: ["karate", "bubble blowing", "eyes"],
        catchPhrase: function () {
            return "I'm ready!";
        }
    },
    {
        name: {
            firstName: "patrick",
            lastName: "star"

        },
        weapon: "net",
        attacks: ["rock", "bubble blowing", "yell"],
        catchPhrase:function(){
            return "No, this is Patrick";
        }
    },
    {
        name: {
            firstName: "squidward",
            lastName: "tentacles"
        },
        weapon: "clarinet",
        attacks: ["anger", "arms", "violin"],
        catchPhrase:function(){
            return "grrrrr";
        }
    }];

console.log(chooseYourFighter[1]); //patrick
console.log(chooseYourFighter[1].attacks[2]); //yell

chooseYourFighter.forEach(function (fighter) {
    console.log(fighter.name.firstName + ": " + fighter.catchPhrase());
    console.log(fighter.name.firstName + "'s attacks are: ");
    fighter.attacks.forEach(function(attack){
        console.log(attack);
    });
    console.log("-------")
});
