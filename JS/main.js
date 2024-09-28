// "alert_Method"
alert( "Hello World!" );

// "Window.alert_Method"
window.alert( "Hello World!" );

/* "document.write_method. Expressing/definning 
"variable, new line characters and quotes */

/* var jsVar = "Famous quote on \"Def leppard's\" intro to there Song"
 + "\n\"Rock_of_Ages\" from their third and second best selling album of all" 
+  "\ntime\"Pyromania\": It's Better to Out, Than Fade Away...!"; */

document.write( jsVar );
document.write( "Famous quote on \"Def leppard's\" intro to there Song"
+ "<br>\"Rock_of_Ages\" from their third and second best selling<br>album of all" 
+  "time\"Pyromania\":<br>It's Better to Out, Than Fade Away...!" );

var b = "Concatenate" + "String";
document.write( b ); 

var family = "The Arezzinis";
var dad = "Jeremiah";
var mom = "Hermoine";
var duaghter = "Penny", son = "Zorro";

document.write( dad );

// Adding, concatenating, variables 
var num = 3 + 3;
document.write( " 3 + 3 = " + num );

// Declaring the function "myFirstFunction"
/*function myFirstFunction()
{
    // Declaring a "str" variable 

    var str = "This is the first button text!";
    /* Putting the value of the variable into the HTML 
    "elementFromPoint", with the id "Button_Text!" */
    // document.getElementById( "Button_Text!" ).innerHTML = str;
//}

// declare function displayTimeAndDate
function displayTimeAndDate()
{
    document.getElementById( "get-demo" ).innerHTML = Date();
}