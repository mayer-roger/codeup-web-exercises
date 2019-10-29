"use script";
$(document).ready(function() {
    // $('*').html({'height': '100%', 'width': '100%'});
    $('html').css({'border':'1px solid black','background-color':'lightgrey'});
    $('#main-header').css({'background-color':'darkgrey','color': 'red','display':'flex', 'border':'2px solid red'});

    $('#navbar').css({'display':'flex', 'margin':'auto', 'padding-top': '1em'});
    $('ul').css({'list-style':'none','font-size': '1.5em'});
    $('li').css({'color' : 'yellow', 'padding-right': '.5em','font-size':'35px'});

    $('#container').css({'background-color':'teal','color': 'lightyellow','width':'100%'});

    $('p').css({'font-size':'40px','padding':'10px'});
    $("div").click(function(){
        $("#hello").animate({
            right: '200px',
            opacity: '0.5'
            // height: '150px',
            // width: '150px'
        });
    });
    $('p').hover(function(){
        $('p').css('background-color', 'gray');
    });
    $('strong').css({'background-color':'yellow', 'color': 'black'});
    // We've seen how much easier it is to write html and styling changes in jQuery. But now let's take a look at mouse events.

// With Vanilla JS, this would be done like this:


// With jQuery, we can do it even easier!

    $('h1').click(function() {
        $(this).css('background-color','red');
    });

// When we click on the smaller circle, the background image changes! Note that we can use the this keyword as well!

    $('p').dblclick(function(){
        $(this).css('font-size','18px')
    });

    $('li').hover(function() {
        $(this).css('color', 'red');
    }, function() {
        $(this).css('color','black');
    });




});
