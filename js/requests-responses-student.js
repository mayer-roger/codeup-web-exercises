$(document).ready(function(){
    "use strict";
    console.log("Intro to AJAX!");

    /*********************************************
     *              INTRO TO AJAX
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's make our first AJAX request. Generate a new Hookbin
     * endpoint, then query it for a username...
     */
    // console.log($.ajax('https://hookb.in/Z2ZkbdLGDxt1MVqkbNDR?username=bob')); //get request


    /*
     * TO DO TOGETHER: For this next one, we'll send over some data. Add the
     * following JavaScript Object to your Hookbin AJAX request:
     */

    var person = {
        type: "POST",
        data: {
            first: "Jesse",
            last: "Pinkman",
            location: "unknown"
        }
    };

// console.log($.ajax("https://hookb.in/Z2ZkbdLGDxt1MVqkbNDR", person)); //post request
    //
    /*
     * TO DO: Refactor the first example using a GET request object instead of
     * appending a query to the url.
     */
// var get = {
//     type: "GET",
// data: {
//     username: "bob"
//     }
// };
    // console.log($.ajax("https://hookb.in/Z2ZkbdLGDxt1MVqkbNDR", get)); //get request

    /*********************************************
     *              REQUESTS and RESPONSES
     ******************************************** */

    /*
     * TO DO TOGETHER: Now, let's see how we can use AJAX requests to communicate with an
     * API and get data back. Uncomment the line below.
     */

// $.ajax("https://pokeapi.co/api/v2/pokemon").done(function(data){
//     console.log(data);
// });

    /*
     * TO DO: Look up the Star Wars API and make a similar request that would
     * return a list of all Star Wars films.
     */
// var starWarsFilms= $.ajax("https://swapi.co/films");
//
// starWarsFilms.done(function(data){
//     console.log(data);
// }).fail(function(data){
//     console.log("you've been blocked");
// });

    /*
     * That's fine and dandy, but what if we have a local JSON file and
     * want to request data from that? We can! The URL will be the path to
     * the JSON file.
     *
     * TO DO TOGETHER: Let's make a request to the books inventory we saved
      * previously.
     */
var myBooks = $.ajax("data/books.json");
myBooks.done(function (data) {
    console.log(data);
});
console.log(myBooks);

    /*
     * TO DO TOGETHER: What if we want to display a message if this AJAX request
     * fails?
     */
myBooks.fail(function (status){
    console.log("check file path");
});
    /*
     * TO DO TOGETHER: How about a function that always runs whether the request
     * fails or not?
     */
myBooks.always(function (status){
    console.log("looking for books");
});
    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "Something wrong with your request..." if it fails.
     */
// starWarsFilms.fail(function (status){
//     console.log("these are not the droids you are looking for");
// });
    /*
     * TO DO: Refactor your Star Wars API request to log a message that says
     * "...loading" whether the request fails or not.
     */

// starWarsFilms.always(function (status){
//     console.log("...loading");
// });
    /*
     * TO DO TOGETHER: Create a Star Wars API request that queries for "A
     * New Hope" and store this request in a variable.
     */
// var newHope = $.ajax("https://swapi.co/films", {
//     type:"GET",
//     data:{
//         "search": "A New Hope"
//     }
// });


    /* Take a look at the object that is being returned. Write a console log
     * that displays the director of the film.
    */

// newHope.done(function (data) {
//     console.log(data.results[0].director);
// });
    /*
     * TO DO: Create a new variable that makes a similar request. Search for
     * "The Force Awakens" and console log its release date.
     */
// var awaken = $.ajax("https://swapi.co/films", {
//     type:"GET",
//     data:{
//         "search": "The Force Awakens"
//     }
// });

// awaken.done(function (data) {
//     console.log(data.results[0].release_date);
// });
    /*
     * TO DO: Make a request to books.json. Return the author of "The
     * Canterbury Tales."
     */

// var canterburyTales = myBooks;
// canterburyTales.done(function(data){
//     console.log(data[17].author);
// });




    /*********************************************
     *              GET and POST SHORTHAND
     ******************************************** */

    /*
     * TO DO TOGETHER: Let's take a look at our AJAX requests so far and see
     * how we can refactor them with the GET and POST shorthand.
     *
     * Remember, this isn't necessary. It's up to you to decide which
     * syntax to use. (: At the end of the day, what we are doing is making
     * a request to a server!
     */
// var awaken = $.get("https://swapi.co/api/films", {
//     "search": "The Force Awakens"
// });
    /*
     * TO DO TOGETHER: There's some additional refactoring we can do. We can
     * break up our callback methods on an AJAX request.
     *
     * We can also declare named functions to pass in to these methods.
     */

    /*********************************************
     *              AJAX and HTML
     ******************************************** */

    /*
     * TO DO TOGETHER: Make a request to books.json and append all book
     * titles to your html. You may need to create a div and assign a
     * class/id to target it.
     */

//variable stores request
function generateBooks(){
    var requestBooks = $.ajax("data/books.json");
    requestBooks.done(function (data) {
        //once request is done .. do this
        $.each(data, function(index, book){
            //log each book title
            console.log(book.title);
            //add to html
            var content = "<h2>";
            content += book.title;
            content += "</h2>";
            content += "<h4>";
            content += book.author;
            content += "</h4>";

            $('#main').append(content);
        });

    });
    requestBooks.fail(function (data) {
        console.log("error");
    });
}
generateBooks();


    /*
     * TO DO: Add your favorite book to the end of books.json.
     */

    /*
     * Bonus: Create a button the refreshes the contents of your html
     * without refreshing the page.
     */
    $("#refreshButton").click(function(){
        $("#main").html("");
        generateBooks();
    });
});