/*
What is Jquery?
It is a JS library which simplifies scripting. Motto: Write less, do more
    Offers
    1. DOM element selection
    2. DOM manipulation 
    3. CSS manipulation
    4. HTML event listeners
    5. AJAX
    6. Utilities(say JSON parsing)

    Include Jquery CDN in the html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
*/

// DOM element selection
    /*
        $("*") - Wildcard: selects every element on the page.
        $(this) - Current: selects the current element being operated on within a function.
        $("p") - Tag: selects every instance of the <p> tag.
        $(".foo") - Class: selects every element that has the example class applied to it.
        $("#foo") - Id: selects a single instance of the unique example id.
        $("[attrib='value']") - Attribute: selects any element with text applied to the type attribute.
        $("p:first-line") - Pseudo Element: selects the first <p>.

        For more selectors
            https://api.jquery.com/category/selectors/

        Syntax: $("selectorGoesHere")
    */

// DOM selectors
let dom = document.getElementById("foo");

// DOM manipulation
dom.innerHTML = "Hello, World!";
$("#foo").html("Hello, World!");
$('#foo').outerHTML = `<b> some text </b>`
$( "p" ).addClass( "myClass yourClass" );
$( "p" ).last().addClass( "selected highlight" );

// event listeners
$( "#foo" ).focus( () => {
    alert( "foo focussed" );
});

// css styling
$("div").css("background-color", "blue");


// AJAX: Ref https://api.jquery.com/jquery.ajax/
$.ajax({
    url: "https://fiddle.jshell.net/favicon.png",
    beforeSend: function( xhr ) {
      xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
    }
}).done(function( data ) { // On 
    if ( console && console.log ) {
        console.log( "Sample of data:", data.slice( 0, 100 ) );
    }
});

var jqxhr = $.ajax( "example.php")
    .done(function() {
        alert( "success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        alert( "complete" );
    });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
    alert( "second complete" );
});


async function doAjax(args) {
    try {
        await $.ajax({
            url: 'http://someWebsite/api/v1/someEndPoint',
            type: 'POST',
            data: {
                stuff: args
            },
            success: function (data) {
                console.log("Success");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("Error");
            }
        });
    } catch(e) {
        console.log(e);
    }
}
