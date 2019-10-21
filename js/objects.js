(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     */

    var person = {
        firstName: "Roger",
        lastName: "Mayer",

    };

    // console.log(person.firstName); // "Roger"
    // console.log(person.lastName); // "Mayer"

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     // * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // person.sayHello = function(){
    // var sayHello = ("Hello from " + person["firstName"] + " " + person["lastName"]);
    // console.log(sayHello);
    // };
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

// var shoppers = [
//     {name: 'Cameron', amount: 180},
//     {name: 'Ryan', amount: 250},
//     {name: 'George', amount: 320}
// ];
//
// shoppers.forEach(function (x) {
//     console.log(x.name + " spent $" + x.amount)
// });
//
// var discount = (shoppers.amount * .12);
// var newAmount = (shoppers.amount - discount);
//
// shoppers.forEach(function (shopper) {
//     if (shopper.amount >= 200) {
//         console.log(shopper.name + " spent " + shopper.amount + " and will receive discount of " + discount + " for a new total of " + newAmount);
//     } else {
//         console.log(shopper.name + " spent " + shopper.amount + " and will not receive discount");
//     }
// });
//
//
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array

     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "Fourth of July Creek",
            author: {
                firstName: "Smith",
                lastName: "Henderson"
            }
        },
        {
            title: "IQ84",
            author: {
                firstName: "Haruki",
                lastName: "Murakami"
            }
        },

        {
            title: "Narrow Road",
            author: {
                firstName: "Richard",
                lastName: "Flanagan"
            }
        },

        {
            title: "Battleborn",
            author: {
                firstName: "Claire",
                lastName: "Watkins",
            }
        },

        {
            title: "Eileen",
            author: {
                firstName: "Otessa",
                lastName: "Moshfegh",
            }
        }
    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */







    function createBook(title, first, last) {
        var book = {};
        book.title = title;
        book.author = {
            firstName: first,
            lastName: last
        };
        return book;
    }

    books.push(createBook("Cat's Cradle", "Kurt", "V"));


    function showBookInfo(book, i) {
        var output = "";
        output += "Book # " + (i + 1) + "\n";
        output += "Title: " + book.title + "\n";
        output += "Author: " + book.author.firstName + " " + book.author.lastName + "\n";
        output += "---";
        console.log(output);

    }

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

})();
