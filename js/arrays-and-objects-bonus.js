(function () {
"use strict";

    //bonus ex#1
    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// create a logMakeModel method on the car object
    car.logMakeModel = function () {
        console.log("Car make/model is: " + this.make + " " + this.model);
    };

// log the make/model
    car.logMakeModel();

    // function showCarInfo (make, model){
    //     var output = "";
    //     output += "Car make: " + car.make + "\n";
    //     output += "Car model: " + car.model + "\n";
    //     output += "---";
    //     console.log(output);

    // }
    // cars.forEach(showCarInfo);


    var userInput = [
        {name: "fred"},
        {name: true},
        {name: 5},
        {name: 3}
    ];


    function filterNumbers(x){
        var newArray = [];
        console.log(x);
        for (var i = 0; i < x.length; i++) {
            if (typeof x[i].name === "number") {
                // console.log(typeof (x[i]));
                newArray.unshift(parseFloat(x[i].name));
            }
        }
        var newNewArray = newArray.sort(function(a,b) {
            return a-b;
        });
        return newNewArray;
    }

    console.log(filterNumbers(userInput));


})();

var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder() {
    dogs.forEach(function (age, index) {
        var newAge = dogs[index].age + 1;
        var output = "";
        output += "Name: " + dogs[index].name + "\n";
        output += "Breed: " + dogs[index].breed +  "\n";
        output += "Age " + (newAge) + "\n";
        output += "---";
        console.log(output)
    });
}

console.log(dogs);
console.log(getOlder());

var cars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
];
console.log(cars);
function isDirty(){
    cars.forEach(function (car, index) {
            cars[index].isDirty = false;
    });
    console.log(cars);
}

console.log(isDirty(cars));

const people = ["Roger", "Katie", "Riley", "Asher"];

function family(person) {
    console.log(person);
}
people.forEach(family);

