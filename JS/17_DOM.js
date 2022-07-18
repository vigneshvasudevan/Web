/*
Dom manipulation using JS:

1. Select element(s)
2. Add event listeners
3. Add new element(s)
4. Delete element(s)
5. Modify existing element(s)
    - Add attributes
    - Toggle attribute value

*/

// 1. Selection:

    // By tagname
    let allParagraphDOMs = document.getElementsByTagName('p');
    console.log(typeof allParagraphDOMs); // HTML collections, more like an array

    allParagraphDOMs  = document.querySelector('p');
    // By tagnameNS
    allParagraphDOMs = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p");
    // By Name
    // <input type="hidden" name="up" />
    let dom = document.getElementsByName("up");
    // By class
    document.getElementsByClassName('foo')
    dom  = document.querySelector('.foo');
    // Get all elements that have both the 'foo' and 'bar' classes:
    document.getElementsByClassName('foo bar')
    dom  = document.querySelector('.foo.bar');
    // By ID
    document.getElementById('foo');
    dom = document.querySelector('#foo');

    // By attribute
    document.querySelectorAll('[foo="value"]');

// 2. Add event listeners:
    dom.addEventListener("click", callbackFun);
    function callbackFun() {
        alert (`I'm clicked`);
    }

    // Event bubbling aka propagation : Inner most element's event is 
    // handled first and then the outer
    
    /*  
        <html>
            <style>
            body * {
                margin: 10px;
                border: 1px solid blue;
            }
            </style>

        <body>
            <form onclick="alert('form')">FORM
            <div onclick="alert('div')">DIV
                <p onclick="alert('p')">P</p>
            </div>
            </form>
        </body>
        </html>
    */


    /* 
    
    1. Almost all event bubble, one such exception event 'focus' which doesn't bubble
    2. To stop bubbling
        - event.stopPropagation() : stops the move upwards, but on the current element all other handlers will run.
        - event.stopImmediatePropagation() : To stop the bubbling and prevent handlers on the current element from running, 

        Having said, don't stop bubbling without need
    */


    /*
    Capturing: Is another phase of event,it is less commonly used

        The standard DOM Events describes 3 phases of event propagation:

            Capturing phase – the event goes down to the element.
            Target phase – the event reached the target element.
            Bubbling phase – the event bubbles up from the element.

        elem.addEventListener(..., {capture: true}); //default: capture:false

        <script>
            for(let elem of document.querySelectorAll('*')) {
                elem.addEventListener("click", e => alert(`Capturing: ${elem.tagName}`), true);
                elem.addEventListener("click", e => alert(`Bubbling: ${elem.tagName}`));
            }
        </script>

        If you click on <p>, then the sequence is:

            HTML → BODY → FORM → DIV (capturing phase, the first listener):
            P (target phase, triggers two times, as we’ve set two listeners: capturing and bubbling)
            DIV → FORM → BODY → HTML (bubbling phase, the second listener).
    */


    /* Remove event listener
            element.removeEventListener("mousedown", handleMouseDown, false); 
            
            if capture is 'true' then
            element.removeEventListener("mousedown", handleMouseDown, true);   

    */

// 3. Add new element(s)
    const newDiv = document.createElement("div");
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);

// 4. Delete element(s)
    dom = document.getElementById('foo');
    dom.remove();

// 5. Modify element(s)
    // <button>Hello World</button>
    const button = document.querySelector("button");
    button.setAttribute("name", "ClickMe");
    button.setAttribute("disabled", "");





