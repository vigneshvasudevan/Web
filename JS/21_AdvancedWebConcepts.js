// Injections


/* Ref: https://en.wikipedia.org/wiki/Same-origin_policy
        https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

1. Cross site tracking(XSS)


SOP : Same Origin Policy, Under this policy, a web browser permits scripts contained in a first web page to access data in a second web page

    SOP is true, if and only if
        1. Protocol is same
        2. Host name is matched
        3. Port(subjected to browser implementation)

    BaseURL: "http://www.example.com/dir/page.html".
    
    -------------------------------------------------------------------------------------------------------------
    | Compared against                                          | SOP outcome | Remarks                         |     
    -------------------------------------------------------------------------------------------------------------
    | http://www.example.com/dir/page2.html	                    | Success	  | Same scheme, host and port      |
    | http://www.example.com/dir2/other.html	                | Success	  | Same scheme, host and port      |
    | http://username:password@www.example.com/dir2/other.html	| Success	  | Same scheme, host and port      |
    | http://www.example.com:81/dir/other.html	                | Failure	  | Same scheme and host            |
                                                                                but different port              |
    | https://www.example.com/dir/other.html	                | Failure	  | Different scheme                |
    | http://en.example.com/dir/other.html	                    | Failure	  | Different host                  |
    | http://example.com/dir/other.html	                        | Failure	  |	Different host                  |
    | http://v2.www.example.com/dir/other.html	                | Failure	  | Failure	Different host          |
                                                                                (exact match required)          |
    | http://www.example.com:80/dir/other.html	                | Depends	  | Port explicit. Depends on       |
                                                                                implementation in browser.      |
    -------------------------------------------------------------------------------------------------------------


Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into 
otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send 
malicious code, generally in the form of a browser side script, to a different end user. 



For XSS attacks to be successful, an attacker needs to insert and execute malicious content in a webpage. 
Each variable in a web application needs to be protected. Ensuring that all variables go through validation 
and are then escaped or sanitized is known as perfect injection resistance. Any variable that does not go 
through this process is a potential weakness. Frameworks make it easy to ensure variables are correctly 
validated and escaped or sanitised.

    How to overcome it?
        Output Encoding and HTML Sanitization help address them.


    1. Output encoding:
        Output Encoding is recommended when you need to safely display data exactly as a user typed it in. 
        Variables should not be interpreted as code instead of text. 

        a. “HTML Context” :
            refers to inserting a variable between two basic HTML tags like a <div> or <b>. 
            For example..
                <div> $varUnsafe </div>
            An attacker could modify data that is rendered as $varUnsafe. This could lead to an attack being added to a webpage.. 
            for example.
                <div> <script>alert`1`</script> </div> // Example Attack

            
            In order to add a variable to a HTML context safely, use HTML entity encoding for that variable as 
            you add it to a web template.If you're using JavaScript for writing to HTML, look at the .textContent attribute as it is a Safe Sink and will automatically HTML Entity Encode.

        b. “HTML Attribute Contexts
            refers to placing a variable in an HTML attribute value
            Example:
            <div attr="$varUnsafe">
            <div attr=”*x” onblur=”alert(1)*”> // Example Attack

            It’s critical to use quotation marks like " or ' to surround your variables.If you're using JavaScript 
            for writing to a HTML Attribute, look at the .setAttribute and [attribute] methods which will automatically 
            HTML Attribute Encode. Those are Safe Sinks


            There will be situations where you use a URL in different contexts. The most common one would be adding it 
            to an href or src attribute of an <a> tag. In these scenarios, you should do URL encoding, followed by HTML attribute encoding.

            url = "https://site.com?data=" + urlencode(parameter)
            <a href='attributeEncode(url)'>link</a>

    2. HTML sanitization:
        HTML Sanitization will strip dangerous HTML from a variable and return a safe string of HTML. 
        let clean = DOMPurify.sanitize(dirty); // https://github.com/cure53/DOMPurify

        If you sanitize content and then modify it afterwards, you can easily void your security efforts.



    Notion of safe sinks:
        Safe HTML Attributes include: 
        
        align, alink, alt, bgcolor, border, cellpadding, cellspacing, class, 
        color, cols, colspan, coords, dir, face, height, hspace, ismap, lang, marginheight, marginwidth, 
        multiple, nohref, noresize, noshade, nowrap, ref, rel, rev, rows, rowspan, scrolling, shape, span, 
        summary, tabindex, title, usemap, valign, value, vlink, vspace, width.


*/








/* 

Ref: https://requirejs.org/docs/whyamd.html

What is a JS module? What its purpose?
    Definition: how to encapsulate a piece of code into a useful unit, and how to register its capability/export a value for the module.
    Dependency References: how to refer to other units of code.


    // Defined via an immediately executed factory function.
    (function () {
        var $ = this.jQuery;
        this.myExample = function () {console.log("method inside the object")};
    }());

    Shortcomings of this approach:
        1. Weakly stated dependency: References to dependencies are done via global variable names that were loaded via an HTML script tag.
        The dependencies are very weakly stated: the developer needs to know the right dependency order. 
        For instance, The file containing Backbone cannot come before the jQuery tag.
        

    // Overcoming above using common JavaScript(CJS)
    var $ = require('jquery');
    exports.myExample = function () {};

    Shortcomings of this approach:
        The CJS module format only allowed one module per file, They did not fully embrace some things in the
    browser environment that cannot change but still affect module design

    It also meant they placed more of a burden on web developers to implement the format, and the stop-gap measures
    meant debugging was worse. eval-based debugging or debugging multiple files that are concatenated into 
    one file have practical weaknesses. 


    AMD(Asynchronous Module Definition)
    
    define(['jquery'] , function ($) {
        return function () {};
    });

   
    It is an improvement over the web's current "globals and script tags" because:

        1. Uses the CommonJS practice of string IDs for dependencies. 
        2. Clear declaration of dependencies and avoids the use of globals.
        3. IDs can be mapped to different paths. This allows swapping out implementation. This is great for creating mocks for unit testing. 
        For the above code sample, the code just expects something that implements the jQuery API and behavior. It does not have to be jQuery.
        4. Encapsulates the module definition. Gives you the tools to avoid polluting the global namespace.
        5. Clear path to defining the module value. Either use "return value;" or the CommonJS "exports" idiom, which can be useful for circular dependencies.

    It is an improvement over CommonJS modules because:

        1. It works better in the browser, it has the least amount of gotchas. Other approaches have problems with debugging, cross-domain/CDN usage, file:// usage and the need for server-specific tooling.
        2. Defines a way to include multiple modules in one file. In CommonJS terms, the term for this is a "transport format", and that group has not agreed on a transport format.
        3. Allows setting a function as the return value. This is really useful for constructor functions. In CommonJS this is more awkward, always having to set a property on the exports object. 
        Node supports module.exports = function () {}, but that is not part of a CommonJS spec.


    define([ "require", "jquery", "blade/object", "blade/fn", "rdapi",
         "oauth", "blade/jig", "blade/url", "dispatch", "accounts",
         "storage", "services", "widgets/AccountPanel", "widgets/TabButton",
         "widgets/AddAccount", "less", "osTheme", "jquery-ui-1.8.7.min",
         "jquery.textOverflow"],
    function (require,   $,        object,         fn,         rdapi,
          oauth,   jig,         url,         dispatch,   accounts,
          storage,   services,   AccountPanel,           TabButton,
          AddAccount,           less,   osTheme) {

    });



    2. Cross site request forgery(CSRF)
    */

