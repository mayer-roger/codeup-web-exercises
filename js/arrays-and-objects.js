(function () {
"use strict";

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

function isDirty(){
    cars.forEach(function (isDirty, index) {
        if (cars[index].isDirty === true){
            cars[index].isDirty = false;
        }
    });
}
console.log(isDirty());