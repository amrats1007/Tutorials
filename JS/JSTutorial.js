/*
Polyfills and transpilers

The JavaScript language steadily evolves. New proposals to the language appear regularly, they are analyzed and, if considered worthy, are appended to the draft and then progress to the specification. Teams behind JavaScript engines in browsers have their own ideas about what to implement first. They may decide to implement proposals that are in draft and postpone things that are already in the spec because they are less interesting or just harder to do. So it’s quite common for an engine to implement only part of the standard. As programmers, we’d like to use the most recent features. The more good stuff – the better! On the other hand, how to make our modern code work on older engines that don’t understand recent features yet? There are two tools for that: Transpilers and Polyfills.

Transpilers
A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs so that it’ll also work in outdated engines. For E.g. JavaScript before the year 2020 didn’t have the “nullish coalescing operator” ??. So, if a visitor uses an outdated browser, it may fail to understand the code like height = height ?? 100. A transpiler would analyze our code and rewrite [height ?? 100] into [(height !== undefined && height !== null) ? height : 100].
	//Before running the transpiler
	height = height ?? 100;
	//After running the transpiler
	height = (height !== undefined && height !== null) ? height : 100;
Now the rewritten code is suitable for older JavaScript engines. Usually, a developer runs the transpiler on their own computer and then deploys the transpile code to the server. Speaking of names, Babel is one of the most prominent transpilers out there. Modern project build systems, such as Webpack, provide a means to run a transpiler automatically on every code change, so it’s very easy to integrate into the development process. you can set up a code build system based on Webpack with the babel-loader plugin. https://github.com/babel/babel-loader

Polyfills
New language features may include not only syntax constructs and operators, but also built-in functions. For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g. Math.trunc(1.23) returns 1. In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail. As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here. We just need to declare the missing function. A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations. For this particular case, the polyfill for Math.trunc is a script that implements it, like this:
	if (!Math.trunc) { // if no such function
		//Implement it
		Math.trunc = function(number) {
			// Math.ceil and Math.floor exist even in ancient JavaScript engines, so we can use them
			return number < 0 ? Math.ceil(number) : Math.floor(number);
		};
	}
JavaScript is a highly dynamic language. Scripts may add/modify any function, even built-in ones. Two interesting polyfill libraries are [core js] which supports a lot and allows to the inclusion of only needed features. [polyfill.io] service that provides a script with polyfills, depending on the features and the user’s browser.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Script

The programs in js are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads. Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run like Java. Javascript was named like this to gain Java developer confidence in it. But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all.

in the real world, we usually use the term ECMAScript to refer to the standard, while JavaScript is used when we talk about the language in practice, as it's implemented in browsers.

> javascript is a scripting language, the browser is the interpreter of javascript, and it supports OOP. Basically, it works on the client side (browser) but more recently it works on the server side too by nodeJs.

> JavaScript is “dynamic”, meaning that there exist data types, but variables are not bound to any of them. we can assign a new value with a different data type to the same variable without a problem.

> JavaScript is a loosely typed language, it can store any data type in a variable without define the type of it unlike strongly typed languages like java, c#, c++.

> JavaScript is a high-level object-oriented, multi-paradigm programming language.
	>> JavaScript is a high-level language, which means that we don't have to think about a lot of complex stuff such as managing the computer's memory while it runs or in programming. So in JavaScript, there are a lot of so-called abstractions over all these small details that we don't want to worry about.
	>> JavaScript is also a multi-paradigm language, meaning that it's so flexible and versatile, that we can use all kinds of different programming styles, such as imperative and declarative programming. And these different styles are just different ways of structuring our code
	>> JavaScript is object-oriented. And all that means is that the language is mostly based on the concept of objects for storing most kinds of data.

> HTML(content) >> noun | CSS(presentation) >> adjective | JavaScript(dynamic&interactivity) >> verb

> Window, Document, and Console are global variables in javascript, and they are available in all javascript files and all functions, and they considered as objects having properties and methods.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Developer Tools

> We can use the console (developer tools) as an editor because it has the full manual of javascript, console is a WepAPI, developer uses the console to log errors and messages that help him in coding and experimenting with his code in it. So any code that we write here and then hit return will immediately get evaluated.

> it has levels of issues [verbose - info - warning - error].

> Developer tools allow us to see errors, run commands, examine variables, and much more. the console is just an environment that was built to execute small pieces of code and then show results immediately. But it doesn't show the results of our operations in code by default.

> ctrl+shift+i or f12 to open developer tools in Chrome.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Place of javascript code

> inline (html tag) - internal (html file [head/body]) - external (js file)

> JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

> The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag.

> Place of javascript code in html is very important and it affects the web page performance and the user experience of the web page, so we must put it in the right place.

> in <head> you must put it in the last position, in this case, the javascript file will be executed first before the creation (loading) of the page (body), we can use events like [window.onload] to make javascript run after HTML tags creation (after the page is loaded).

> in <body> it's preferred and the best practice is to put it in the end, before closing tag </body>, because if there is an error in javascript code it will prevent or block the HTML code located after it.

> Making an external javascript file is better for caching and performance of the web page and the user experience. However, there are some of the javascript code that must be written in html page, As a rule; only the simplest scripts are put into HTML. More complex ones reside in separate files. The benefit of a separate file is that the browser will download it and store it in its cache. Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once. That reduces traffic and makes pages faster.

> If src is set, the script content is ignored. A single <script> tag can’t have both the src attribute and code inside. This won’t work:
	<script src="file.js">
		alert(1); // the content is ignored, because src is set
	</script>
We must choose either an external <script src="…"> or a regular <script> with code. The example above can be split into two scripts to work:
	<script src="file.js"></script>
	<script>
		alert(1);
	</script>
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
modern mode (strict mode)

> when ECMAScript 5 (ES5) appeared. it added new features to the language and modified some existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".

> You can enable strict mode by including the following directive "use strict" / 'use strict' at the top of your JavaScript file. or by adding it at the top of your function:
	function example() {
		'use strict';
		your code here
	}
You can also enable strict mode in ES6 by adding "strict": true in the config file of the project or by adding "strict": "global" in the tsconfig.json file if you're using TypeScript. It's considered best practice to use strict mode in production environment, it can help you spot an errors early and prevent unwanted behavior.

> There is no directive like "no use strict" that reverts the engine to old behavior. Once we enter strict mode, there’s no going back.

> When you use a developer console to run code, please note that it doesn’t use strict by default. Sometimes, when using strict makes a difference, you’ll get incorrect results. So, how to actually use strict mode in the console? First, you can try to press Shift+Enter to input multiple lines, and put use strict on top, like this:
	'use strict'; <Shift+Enter for a newline>
	...your code...
	<Enter to run>
It works in most browsers, namely Firefox and Chrome. If it doesn’t, e.g. in an old browser, there’s an ugly, but reliable way to ensure use strict. Put it inside this kind of wrapper(IIFE):
	(function() {
		'use strict';
		...your code here...
	})()

> Modern JavaScript supports “classes” and “modules”, that enable the use of strict mode automatically. So we don’t need to add the "use strict" directive if we use them. So, for now, "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.

> Strict mode makes our code secure, I mean that strict mode makes it easier for us developers to avoid accidental errors. So basically it helps us introduce the bugs into our code and that's because of 2 reasons. First, strict mode forbids us to do certain things and second, it will actually create visible errors for us in certain situations in which without strict mode JavaScript will simply fail silently without letting us know that we made a mistake. So again, first strict mode forbids us to do certain things and second, it creates visible errors in the developer console, whereas in other situations JavaScript would just fail silently.

> Now another thing that strict mode does is to introduce a short list of variable names that are reserved for features that might be added to the language a bit later like interface or private. So we can't use them as variable names in our code.

> So strict mode is a way to voluntarily enforce stricter parsing and error handling on our JavaScript code at runtime. So it's a way to tell the browser to please be more strict with our code and to please throw errors for certain things that without strict mode JavaScript would simply fail silently.
*/

'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Uncaught ReferenceError: hasDriverLicense is not defined - because in strict mode it is not allowed to declare variables without variable keyword
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; // SyntaxError: Unexpected strict mode reserved word
// const private = 534; // SyntaxError: Unexpected strict mode reserved word

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
syntax

> It is preferred to write code from the beginning of the line without indentation

> javascript code is very sensitive for spaces because space is considered a character

> letters in javascript are sensitive [amr != Amr]

> javascript loves camelCase notation for naming identifies [theFirstName]

> " 'Anything inside them considered as not programming keyword

> semicolon is the end of the statement; it is optional, A semicolon may be omitted in most cases when a line break exists. in this case, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion [ASI] [https://tc39.es/ecma262/#sec-automatic-semicolon-insertion]. In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!.
	alert(3 +
	1
	+ 2);
But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.
	alert("Hello")
	[1, 2].forEach(alert);
If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers anymore. That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement. Here’s how the engine sees it:
	alert("Hello")[1, 2].forEach(alert);
Semicolons are not required after code blocks {...} and syntax constructs with them like loops.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Comments

> Explain the code and prevent code execution

> In most editors, a line of code can be commented out by pressing the Ctrl+/ hotkey for a single-line comment and something like Ctrl+Shift+/ for multiline comments

> Comments increase the overall code footprint, but that’s not a problem at all. There are many tools that minify code before publishing it to a production server. They remove comments, so they don’t appear in the working scripts. Therefore, comments do not have negative effects on production at all.

> Nested multiple lines comments are not supported! => produces an error
*/

// single line comment

/*
multiple
lines
comment
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
output

> window.alert
> document.write
> console.log
*/

// window.alert
window.alert("hello"); // not recommended to use it in the production environment because it is not secure, not user-friendly, and it is not stable, use it only in the development environment.
function alerting() {
	let xx = 10, yy = 20;
	alert(xx + yy + " day");
}
alerting();

// document.write: put text or html elements to page - used for testing only not for production
document.write("500");
document.write("<h1>your <span>time</span></h1>");

// console.log
console.log("amr" + "abdelghani" + " " + 29); // concatenation
console.log("amr", "abdelghani"); // can log multiple messages in console by comma
let nyName = "amr";
console.log("hello" + nyName); // es5 way - concatenation
console.log(`hello ${nyName}`); // es6 way - template literals

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
console methods

> console.log
> console.error
> console.table
> console.group - console.groupEnd
....etc
*/

// console.log
console.log("amr" + "abdelghani" + " " + 29);
console.log("hello" + nyName);
console.log(`hello ${nyName}`);
console.log("hello", "amr", 5);
console.log("amr <span>abdelghani</span> taha <br> selim"); // console.log prints html elements as a text in console

// console.error
console.error("error1"); // print error in console with the line number

// console.table
console.table(["amr", "abdelghani", "taha", "selim"]); // array
console.table({name: "amr", age: 29,}); // object

// console.group - console.groupEnd
console.group("parent Group 1"); // start group 1 - (level 1)
console.log("Message one");
console.log("Message Two");
console.group("Child Group"); // (level 2)
console.log("Message one");
console.log("Message Two");
console.group("Grand Child Group"); // (level 3)
console.log("Message one");
console.log("Message Two");
console.groupEnd(); // end of level 3
console.groupEnd(); // end of level 2
console.groupEnd(); // end of level 1
console.group("Group 2"); // start of group 2 - (level 1)
console.log("Message one");
console.log("Message Two");

// console styling: %c directive is used to style forward text in console
console.log(
	"%c amr %c abdelghani",
	"color: red; font-size: 20px;",
	"color: blue; font-size: 30px;"
); // print amr in red and size 20px, abdelghani in blue and size 30px
console.log(
	"%c amr abdelghani",
	"color: red; font-size: 20px;"
); // print amr abdelghani in red and size 20px
console.log(
	"amr abdelghani",
	"color: red; font-size: 20px;"
); // logging two normal messages

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
statements(declarations) and expressions

> an expression is a piece of code that produces a value. the statement is like a bigger piece of code that is executed and which does not produce a value on itself. Statements are syntax constructs and commands that perform actions.

> a declaration is like a complete sentence and expressions are like the words that make up the sentences. Now, basically we write our whole programs as a sequence of actions. And these actions are statements.

> JavaScript expects statements and expressions in different places.

> statements(declarations) is actions, expressions is values.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Terms: “unary”, “binary”, “operand”

> An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

> An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:
	let x = 1;
	x = -x;
	alert( x ); // -1, unary negation was applied

> An operator is binary if it has two operands. The same minus exists in binary form as well:
	let x = 1, y = 3;
	alert( y - x ); // 2, binary minus subtracts values

> Formally, in the examples above we have two different operators that share the same symbol: the negation operator, a unary operator that reverses the sign, and the subtraction operator, a binary operator that subtracts one number from another.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Operator Precedence - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

> If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.

> There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

> an assignment (=) is also an operator. It is listed in the precedence table with the very low priority of 2. That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

> assignment operator work from right to left, in this example [x = y = 10] if assign operator work from left to right then x will = undefined because of y is not assigned yet
*/

// example 1
let W, T;
W = T = 25 - 10 - 5; // W = T = 10, W = T = 10
console.log(W, T); // 10 10
W = T = 25 - (10 - 5); // W = T = 25 - 5, W = T = 20
console.log(W, T); // 20 20

// example 2
const now = 2037;
console.log(now - 1991 > now - 2018); // true
const ageJonas = now - 1991;
const ageSarah = now - 2018;
const averageAge1 = ageJonas + ageSarah / 2;
const averageAge2 = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge1); // 46 19 55.5
console.log(ageJonas, ageSarah, averageAge2); // 46 19 32.5

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Data Types: basically specify what kind of data can be stored and manipulated within a program, in JavaScript it's the value that has a type, not the variable.

> There are 10 basic data types in JavaScript which can be divided into three main categories: primitive (or primary), composite (or reference), and special data types
	>> String, Number, Boolean, symbol, and bigint are primitive data types. Object, Array, and Function (which are all types of objects) are composite data types. Whereas Undefined and Null are special data types.
	>> Primitive data types can hold only one value at a time, whereas composite data types can hold collections of values and more complex entities

> String: used to represent textual data (i.e. sequences of characters). Strings are created using single or double quotes surrounding one or more characters - "text" / 'text', You can include quotes inside the string as long as they don't match the enclosing quotes
var a = 'Hi there!';  // using single quotes
var b = "Hi there!";  // using double quotes
var a = "Let's have a cup of coffee."; // single quote inside double quotes
var b = 'He said "Hello" and left.';  // double quotes inside single quotes
var c = 'We\'ll never give up.';     // escaping single quote with backslash
In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”. In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character, or many of them.

> Number: The number data type is used to represent positive or negative numbers with or without decimal places, or numbers written using exponential notation e.g. 1.5e-4 (equivalent to 1.5x10-4). 5 is not "5" or '5' | "5"/'5' are strings
var a = 25;         // integer
var b = 80.5;       // floating-point number
var c = 4.25e+6;    // exponential notation, same as 4.25e6
var d = 4.25e-6;    // exponential notation, same as 0.00000425
The Number data type also includes some special values which are: Infinity, -Infinity, and NaN
	>> Infinity/-Infinity represents the mathematical Infinity ∞, which is greater than any number. Infinity is the result of dividing a nonzero number by 0. https://en.wikipedia.org/wiki/Infinity
		alert(16 / 0);     // Output: Infinity
		alert('16' / 0);   // Output: Infinity
		alert(-16 / 0);    // Output: -Infinity
		alert(16 / -0);    // Output: -Infinity
	>> NaN represents a special Not-a-Number value. It is a result of an invalid or an undefined mathematical operation, like taking the square root of -1 or dividing 0 by 0, etc. and it is not equal to any other value (NaN != NaN) - NaN actually means an invalid number. It's still a number somehow, but it's an invalid one.
		alert("Some text" / 2);        // Output: NaN
		alert("Some text" / 2 + 10);   // Output: NaN
		alert(Math.sqrt(-1));          // Output: NaN
		alert(0 / 0);                  // Output: NaN
		NaN is sticky. Any further mathematical operation on NaN returns NaN
		alert( NaN + 1 ); // NaN
		alert( 3 * NaN ); // NaN
		alert( "not a number" / 2 - 1 ); // NaN
		So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

> Boolean(logical type): true, false (10 > 8 => true | 5 < 3 => false)
var isReading = true;   // yes, I'm reading
var isSleeping = false; // no, I'm not sleeping
var a = 2, b = 5, c = 10;
alert(b > a) // Output: true
alert(b > c) // Output: false

> Symbol: new data type in javascript, it is used to create unique identifiers for objects and functions. A value having the data type Symbol can be referred to as a symbol value. The symbol is an immutable primitive value that is unique. In some programming languages, Symbols are called atoms. Symbols may be used as identifiers for object properties; this is the data type's only purpose. Each time the Symbol() function is called, a new unique symbol is returned. Some further points to note about symbols are: 
	>> Symbols are always unique. For example, Symbol("foo") !== Symbol("foo"). Note though that Symbol.for("foo") == Symbol.for("foo"). Read more about symbol.for here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for
	>> Symbols are values created with the Symbol constructor. To create a symbol, you write Symbol() with an optional string as its description. For example, Symbol('foo') creates a symbol with the description "foo".
	>> The description is just a string and doesn’t affect the value of the symbol at all. The only purpose of the description is to help you remember what the symbol is for. For example, you might use the symbol "foo" to represent a particular command in your code. The description "foo" helps you remember that that’s what the symbol is for. But the description doesn’t affect the value of the symbol. For example, Symbol('foo') is not equal to Symbol('foo'). Each symbol is unique. The description is just a way to help you remember what the symbol is for.
	>> Symbols are often used as unique property keys on objects. Using symbols as keys makes it less likely that your code will accidentally access or change a property that was intended to be left alone. For example, if you add a new method to an object, you might use a symbol as the key, to make sure that the method doesn’t conflict with a method that might be added by someone else.

> bigint: big integer - it is used to store big integer in javascript (ex: 1.7976931348623157e+308) - it is not supported in all browsers yet. In JavaScript, the “number” type cannot safely represent integer values larger than (2**53 -1) (that’s 9007199254740991), or less than -(2**53 -1) for negatives. To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * (10**308)), but outside the safe integer range ±(2**53-1) there’ll be a precision error because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.
For example, these two numbers (right above the safe range) are the same:
	console.log(9007199254740991 + 1); // 9007199254740992
	console.log(9007199254740991 + 2); // 9007199254740992
So to say, all odd integers greater than (2**53 -1) can’t be stored at all in the “number” type. For most purposes, ±(2**53 -1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps. BigInt type was recently added to the language to represent integers of arbitrary length. A BigInt value is created by appending n to the end of an integer:
	const bigInt = 1234567890123456789012345678901234567890n; // the "n" at the end means it's a BigInt
	>> MDN BigInt compatibility table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#browser_compatibility

> Array: ["Facebook", "google", "Twitter"] - zero-based index
An array is a type of object used for storing multiple values in a single variable. Each value (also called an element) in an array has a numeric position, known as its index, and it may contain data of any data type like numbers, strings, booleans, functions, objects, and even other arrays. The array index starts from 0.

> Object: a complex data type that allows you to store collections of data. {firstNAme: "Amr", lastName: "Abdelghani"} - key-value pairs
An object contains properties, defined as a key-value pair. A property key (name) is always a string, but the property value can be any data type, like strings, numbers, booleans, or complex data types like arrays, functions, and other objects. You can omit the quotes around the property name if the name is a valid JavaScript name. That means quotes are required around "first-name" but are optional around firstName. The value of a property can be updated or added anytime after an object creation. To access a property value, you can use dot notation or bracket notation. The dot notation is preferred because it is shorter and easier to read. However, the bracket notation is useful when you want to access a property that contains special characters, or when you want to access a property dynamically using a variable.

> Function: A function is a callable object that executes a block of code. Since functions are objects, it is possible to assign them to variables. In fact, functions can be used at any place any other value can be used. Functions can be stored in variables, objects, and arrays. Functions can be passed as arguments to other functions, and functions can be returned from functions. Functions can also be invoked immediately, known as IIFE (Immediately Invoked Function Expression). It is a common pattern used in JavaScript to create a function and execute it immediately. This pattern helps create a local scope for variables and avoids polluting the global scope.

> null value: it is a reference to nothing, an unknown value, In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It is used to indicate that a variable points to no object. In other words, it is a value that has no value.

> Undefined value: variable is not defined yet, or it is not assigned with any value yet, unassigned value. The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined:
	let age;
	alert(age); // shows "undefined"
Technically, it is possible to explicitly assign undefined to a variable:
	let age = 100;
	change the value to undefined
	age = undefined;
	alert(age); // "undefined"
…But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

> You can know a data type by a built-in operator in javascript (typeof), which Returns a string with the name of the type. To put it clearly: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping. Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). Syntactically, they allow avoiding a space between the typeof operator and its argument, and some people like it.
	>> string: string
	>> number: number
	>> Infinity: number
	>> NaN: number
	>> boolean: boolean
	>> Symbol: symbol
	>> bigint: bigint
	>> array: object
	>> object: object
	>> Function: function
	>> null: object*
	>> undefined: undefined
*/

// undefined
let element51;
console.log(element51); // undefined

// NaN
let de = "amr",
	fr = 150,
	we = de - fr;
console.log(we); // NaN

// typeof operator
console.log(typeof 100+'100'); // "number"
console.log(typeof(50)); // "number"
console.log(typeof "de"); // "string"
console.log(typeof(de)); // "string"
console.log(typeof fr); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"
console.log(typeof Math.trunc()); // "function"

/*
null: object*

> null is "nothing" something doesn't exist, It is something that does not exist at all. It is not equivalent to an empty string ("") or 0, it is simply nothing. An example of a tissue roll:
	>> If the roll is available and there are tissues in it, this is really valuable
	>> But if the roll is available, but there are no tissues, then here it is with zero
	>> If the “cartoon” roll does not exist, this is considered null

> We can consider it a bug because the type of it is an object not null

> The null does not come from anywhere
	>> developer himself is the one who sets this null value inside a variable like this (var isExist = null) a place has been reserved for this value, but the type of value has not been specified
	>> you can create a function with a return null yourself
	>> a return for a built-in function or method as a match (xyz. match(/[A-Z]/);) - this would be null
	>> trying to use the DOM node that does not exist yet
*/

// Usually whenever we get something from the user interface, for example, from an input field, it usually always is a string.

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
variables

> variable is reference to a specific location at the memory that stores data, A variable is a “named storage” for data.

> var/let/const => variable keywords

> variable name/identifier naming conventions and rules => can start only with [letter, underscore, $] and can contain them, not take much more than 255 characters, and it is case-sensitive, can not contain special characters, and it preferred to be descriptive (Variables should be named in a way that allows us to easily understand what’s inside them).

> There are two limitations on variable names in JavaScript:
	>> The name must contain only letters, digits, or the symbols $ and _.
	>> The first character must not be a digit.

> can declare a variable without a variable keyword in non-strict mode. but this is not the best practice because of the value override issue and because js creates such variables in global scope instead of block scope which probably produce errors in our program.

> There are reserved words for javascript you can not use them for variable identifiers as [var | if | return | name | ....]. it also recommended to not use the word 'name' to name a variable
	>> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

> It is not recommended to name variables with words with uppercase letters by the first like this:
	let Person; // because it is reserved for classes in javascript

> Uppercase constants
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution. Such constants are named using capital letters and underscores. For instance, let’s make constants for colors in the so-called “web” (hexadecimal) format:
	const COLOR_RED = "#F00";
	const COLOR_GREEN = "#0F0";
	const COLOR_BLUE = "#00F";
	const COLOR_ORANGE = "#FF7F00";
	...when we need to pick a color
	let color = COLOR_ORANGE;
	alert(color); // #FF7F00
Benefits: COLOR_ORANGE is much easier to remember than "#FF7F00". It is much easier to mistype "#FF7F00" than COLOR_ORANGE. When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00
When should we use capitals for a constant and when should we name it normally? Let’s make that clear.
	Being a “constant” just means that a variable’s value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment. For instance: const pageLoadTime =  // time taken by a webpage to load; The value of pageLoadTime is not known prior to the page load, so it’s named normally. But it’s still a constant because it doesn’t change after the assignment. In other words, capital-named constants are only used as aliases for “hard-coded” values.
*/

/* variable declaration */

// naming variables
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3

// single line per variable.
let x1 = 10;
let y1 = 20;
let z1 = 30;
alert(x1+y1+z1);

// multiline style
let x2 = 10,
		y2 = 20,
		z2 = 30;
alert(x2+y2+z2);

// “comma-first” style
let x4 = 'John'
	, y4 = 25
	, z4 = 'Hello';
alert(x4+y4+z4);

// one-line style
let x3 = 10, y3 = 20, z3 = 30;
alert(x3+y3+z3);

// copy variable value to another variable
let hello = 'Hello world!';
let message;
// copy 'Hello world' from hello into the message
message = hello;
// Now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

// Non-Latin letters are allowed, but not recommended: It is possible to use any language, including Cyrillic letters, Chinese logograms, and so on, Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we’re writing a small script, it may have a long life ahead. People from other countries may need to read it sometime.
let имя = '...';
let 我 = '...';

// There is two ways to declare variables
	// 1. Initial variable then define it
	let first; // variable initializing
	first = 100; // defining the value of the variable
	// 2. Initial and define the variable in one step (best practice)
	let second = 100;

// Assignment [=] returns a value: The fact of = being an operator, not a “magical” language construct has an interesting implication. All operators in JavaScript return a value. That’s obvious for + and -, but also true for =. The call x = value writes the value into x and then returns it.
let V = 1;
let C = 2;
let U = 3 - (V = C + 1);
alert(V); // 3
alert(U); // 0

/* Chaining assignments */

// Example 1
let O;
let P = O = 10;
let M;
let F = (M = 10);
console.log(P); // 10
console.log(F); // 10
console.log(O); // 10
console.log(M); // 10

// Example 2
let Q, I, N;
Q = I = N = 2 + 2;
alert(Q); // 4
alert(I); // 4
alert(N); // 4
// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b, and a. At the end, all the variables share a single value. Once again, for the purposes of readability, it’s better to split such code into a few lines:
c = 2 + 2;
b = c;
a = c;
//That’s easier to read, especially when eye-scanning the code fast.

// An assignment without use strict: Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.
// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5
// This is a bad practice and would cause an error in strict mode:
"use strict";
num = 5; // error: num is not defined

// reassign(mutate) and redeclare variables
var ieee = 2;
var ieee = 3; // the value will be changed to (3) - redeclare variable + reassign value (mutate the variable)
console.log(ieee); // print (3)
ieee = 4; // the value will be changed to (4) - reassign value (mutate the variable)
console.log(ieee); // print (4)

// ID of an HTML element considered as a global variable: <div id="foot">toto</div>;
console.log(foot); // print the HTML element with id foot <div id="foot">toto</div>
console.log(typeof foot); // object
foot.innerHTML = "hello"; // change the innerHTML of the HTML element with id foot from "toto" to "hello"

/*
Functional languages

It’s interesting to note that there exist so-called pure functional programming languages, such as Haskell, that forbid changing variable values. In such languages, once the value is stored “in the box”, it’s there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can’t reuse the old one. Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits.
	>> Pure functional programming languages: https://en.wikipedia.org/wiki/Purely_functional_programming
	>> Haskell: https://en.wikipedia.org/wiki/Haskell
*/

/*
var - let - const

> var is function scoped - let and const are block scoped

> let used to declare variables that are meant to be reassigned later, like this:
	let x = 10;
	x = 20; // This is allowed

> const is used to declare variables that are meant to be read-only, meaning they cannot be reassigned later. and it can not declare const without assigning value to it (error) is mean that const is immutable
	const y = 10;
	y = 20; // This would cause an error
	const x; // This would cause an error

> One important thing to note is that const does not mean that the value of the variable cannot change. For example, if you declare an array or object with const, you can still modify the contents of the array or object with methods. what we can not do is actually replace the entire const Array. only const primitive values are immutable. But an Array is not a primitive value. And so we can actually always change it, so we can mutate it. And it works this way because of the way that JavaScript stores things in memory.
	const arr = [1, 2, 3];
	arr.push(4); // This is allowed
	arr = [5, 6, 7]; // This would cause an error

> Well, as a best practice for writing clean code, I always recommend using const by default and let only when you are really sure that the variable needs to change at some point in the future. The reason for this is that it's a good practice to have as few variable mutations or variable changes as possible because changing variables introduces a potential to create bugs. So, basic errors in your code.

> comparing var and let and const
	- redeclare: var can be redeclared but let and const can not redeclare (error)
	- access before declaration: var will be undefined but let and const will represent an error because they are not initialized yet
	- variable scope drama: var is scoped in the window object and can be accessed anywhere in the window object.
	- block or function scope: explained later.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Escape Sequences

'\' escape character - In JavaScript, an escape sequence is a combination of characters that represents a special character. Escape sequences are used in strings to represent characters that cannot be typed directly.

\0	Null character
\b	Backspace
\f	Form feed
\n	Newline
\r	Carriage return
\t	Tab
\v	Vertical tab
\'	Single quote
\"	Double quote
\\	Backslash
\xXX	Latin-1 character specified by the two hexadecimal digits XX
\uXXXX	Unicode character specified by the four hexadecimal digits XXXX
\u{X}	Unicode code point specified by the hexadecimal number X
*/

// example 1
console.log('hello "world"'); // print hello "world"
console.log("hello 'world'"); // print hello 'world'
console.log("hello \\ world"); // print hello \ world
console.log("hello  world"); // print hello  world - js render spaces and tabs in string
console.log("hello          world"); // print hello           world - js render spaces and tabs in string
console.log("hello \\\\ world"); // print hello \\ world
console.log("hello \
other \
world"
); // print hello other world in one line - escape newline - line continue
// console.log("hello
// other
// world"); // error - js can not render newline(line-breaks) in string
console.log("Elzero\nWeb\nSchool"); // print Elzero Web School - three lines
console.log("hello \n world"); // print hello world - two lines
console.log("hello \t world"); // print hello   world - tab

// example 2
console.log(
	'`I\'m In \n \\\\ \n Love \\\\ """ \'\'\' \n ++ With ++ \n \\"""\\""" \n ""Javascript""`` '
);
/*
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
concatenation (multiple data types)

> concatenation start from left: "Amr" + 4 + 5 = "Amr" + "4" + "5" = Amr45  |  4 + 5 + "Amr" = 9Amr

> if you need to calculate numbers after string you can use () / 5 + 10 + "amr" + (4 + 3) = 15amr7 = "15" + "amr" + "7" => this is means that javascript math numbers then convert it to string

> String concatenation with binary +
Let’s meet the features of JavaScript operators that are beyond school arithmetics. Usually, the plus operator + sums numbers. But, if the binary + is applied to strings, it merges (concatenates) them:
	let s = "my" + "string";
	alert(s); // mystring
Note that if any of the operands is a string, then the other one is converted to a string too. For example:
	alert('1' + 2); // "12"
	alert(2 + '1'); // "21"
See, it doesn’t matter whether the first operand is a string or the second one. Here’s a more complex example:
	alert(2 + 2 + '1'); // "41" and not "221"
Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
	alert('1' + 2 + 2); // "122" and not "14"
Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

> The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

> The plus + exists in two forms: the binary form that we used above and the unary form.
*/

let myFstName = "Amr", myLstNAme = "Abdelghani", mAge = 29, myCountry = "Egypt";

// example 1
document.write(
	"My Name Is " +
	myFstName +
	" " +
	myFstName +
	"," +
	" " +
	"My Age Is " +
	mAge +
	" " +
	"and I am From " +
	myCountry
	);

// example 2
document.write(
	"Name: " +
	myFstName +
	" " +
	myLstNAme +
	"<br>" +
	"Age: " +
	mAge +
	"\n" +
	"Country: " +
	myCountry
	);

// example 3
document.write(
	"<span style='color: red;'>Name</span><strong>:</strong> " +
	"<span style='color: blue;'>" +
	myFstName +
	" " +
	myLstNAme +
	"</span><br>" +
	"<span style='color: red;'>Age</span><strong>:</strong> <span style='color: blue;'>" +
	mAge +
	"</span><br>" +
	"<span style='color: red;'>Country</span><strong>:</strong> <span style='color: blue;'> " +
	myCountry +
	"</span>"
	);

// example 4
console.log(myFstName + " " + myLstNAme + ' "" ' + mAge + " " + myCountry); // print Amr Abdelghani " " 29 Egypt
console.log(myFstName + " " + myLstNAme + ' "" ' + "<br>" + mAge + " " + myCountry); // print Amr Abdelghani " " <br>29 Egypt
console.log(myFstName + " " + myLstNAme + "\n" + mAge + " " + myCountry); // print Amr Abdelghani 29 Egypt - two lines

/*
ES6 Template Literals - `${}` - building string [basically a template literal can assemble multiple pieces into one final string]

> Template literals in JavaScript are called so because they allow you to define strings (or templates) that can contain placeholders, which are then replaced with values at runtime. These placeholders are denoted by the use of backticks (`) instead of the traditional single quotes ('') or double quotes ("") used for defining strings.

> Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…} - The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex. Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!
*/

// example 1
alert("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)

// example 2
let a = "Amr";
let b = "Abdelghani";
let c = 29;
let d = "Egypt";
console.log(`My Name Is ${a} ${b}, My Age Is ${c} and I am From ${d}`);
console.log(`Name: ${a} ${b} <br> Age: ${c} <br> Country: ${d}`); // will print <br> as a text just in console
console.log(`${a} ${b} "" '' \\ ${c} ${d}`); // print Amr Abdelghani "" '' \ 29 Egypt
console.log(`${a} ${b} "" '' \\
${c} ${d}`); // print Amr Abdelghani "" '' \ 29 Egypt - two lines - render newlines perfectly

// example 3
const firstName36 = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName36 + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
const jonasNew = `I'm ${firstName36}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');
console.log(`String with
multiple
lines`);

// example 4
let n = "Amr";
let yyy = 29;
let e = `
	<div class="card">
		<div class="card-body">
			<h1>${n}</h1>
			<h2>${yyy}</h2>
			<p>${yyy + 1}</p>
		</div>
	</div>
`;
document.write(e);
// before ES6, we have to write like this
var eeee =
	"<div class='card'>" +
	"\n" +
	"<div class='card-body'>" +
	"<h1>" +
	'\n' +
	"</h1>" +
	"<h2>" +
	yyy +
	"</h2>" +
	"<p>" +
	(yyy + 1) +
	"</p>" +
	"</div>" +
	"</div>";
var eee =
	"<div class='card'>" +
	"\n" +
	"<div class='card-body'>" +
	"<h1>"
	.concat(n + "</h1>" + "<h2>".concat(yyy + "</h2>" + "<p>".concat(yyy + 1 + "</p>" + "</div>" + "</div>")));

// example 5
let name = "Ilya";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Ilya

/*
Doing Concatenation Instead of Addition

You may want to read some numbers from the UI and then add them. Consider the HTML form below with two inputs and the code reading data from those inputs and adding their values:
	<form>
		<input id="no1" value="1" />
		<input id="no2" value="2" />
	</form>
	const no1 = document.getElementById('no1').value;
	const no2 = document.getElementById('no2').value;
	const sum = no1 + no2; // concatenation
In many cases, the values read from the UI are strings and the plus (+) operator is both the addition and the concatenation operator. When one of the operands is a string, the other operand is converted to a string and concatenation is performed. To avoid this issue, we need to make sure all the values are numbers. The built-in Number function can be used to convert strings to numbers:
	const no1 = Number(document.getElementById('no1').value);
	const no2 = Number(document.getElementById('no2').value);
	const sum = no1 + no2; // math operation
*/
let a44 = +prompt("First number?", 1);
let b55 = +prompt("Second number?", 2);
alert(a44 + b55); // 3
// Or in the alert:
let a55 = prompt("First number?", 1);
let b66 = prompt("Second number?", 2);
alert(+a55 + +b66); // 3
// Using both unary and binary + in the latest code is fine. The unary + is applied first, converting the string to a number, and then the binary + adds them.

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
arithmetic operators

[+]  addition
[-]  subtraction
[/]  division
[*]  multiplication
[**] exponentiation
[%]  modulation = remainder of division operation
[++] incremental counter [pre - post]
[--] decremental counter [pre - post]

> Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

> Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement). To see the difference, here’s an example:
	let counter = 1;
	let a = ++counter; // (*)
	alert(a); // 2
In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2. Now, let’s use the postfix form:
	let counter = 1;
	let a = counter++; // (*) changed ++counter to counter++
	alert(a); // 1
In the line (*), the postfix form counter++ also increments counter but returns the old value (prior to increment). So, the alert shows 1.

> using increment/decrement
If the result of increment/decrement is not used, there is no difference in which form to use:
	let counter = 0;
	counter++;
	++counter;
	alert(counter); // 2, the lines above did the same
If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
	let counter = 0;
	alert(++counter); // 1
If we’d like to increment a value but use its previous value, we need the postfix form:
	let counter = 0;
	alert(counter++); // 0

> Increment/decrement among other operators
The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations. For instance:
	let counter = 1;
	alert(2 * ++counter); // 4
Compare with:
	let counter = 1;
	alert(2 * counter++); // 2, because counter++ returns the "old" value
Though technically okay, such notation usually makes code less readable. One line does multiple things – not good. While reading code, a fast “vertical” eye-scan can easily miss something like counter++ and it won’t be obvious that the variable increased. We advise a style of “one line – one action”:
	let counter = 1;
	alert(2 * counter);
	counter++;

> Just like in maths, the exponentiation operator is defined for non-integer numbers as well. For example, a square root is an exponentiation by ½:
	alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
	alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

> Mathematical operations are safe: Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc. The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Unary Operators

> + Unary Plus Operator: The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number. has a priority of 14 which is higher than the 11 of “addition” (binary plus). That’s why, in the expression "+apples + +oranges", unary pluses work before the addition.

> - unary negation operator: The unary negation operator precedes its operand and negates it.
*/

// unary plus
console.log(+1); // 1
console.log(+-1); // -1
console.log(+"1"); // 1
console.log(+"-1"); // -1
console.log(+"amr"); // NaN
console.log(+"- amr"); // NaN
console.log(+"100 amr"); // NaN
console.log(+""); // 0
console.log(+null); // 0
console.log(+true); // 1
console.log(+false); // 0
console.log(+(-false)); // -0
console.log(+undefined); // NaN
console.log(+NaN); // NaN
console.log(+(-Infinity)); // -Infinity

// unary negation
console.log(-1); // print -1
console.log(-(-1)); // print 1
console.log(-"1"); // print -1
console.log(-"-1"); // print 1
console.log(-"amr"); // NaN
console.log(-"- amr"); // NaN
console.log(-"100 amr"); // NaN
console.log(-""); // -0
console.log(-null); // -0
console.log(-true); // -1
console.log(-false); // -0
console.log(-(-false)); // 0
console.log(-undefined); // NaN
console.log(-NaN); // NaN
console.log(-(-Infinity)); // Infinity

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
assignment operators

> Short “modify-and-assign” operators exist for all arithmetical and bitwise operators

[+=]  addition assignment operator
[-=]  subtraction assignment operator
[*=]  multiplication assignment operator
[/=]  division assignment operator
[%=]  modulus assignment operator
[**=] exponentiation assignment operator
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
type coercion / type conversion

> type conversion is when we manually convert from one type to another. On the other hand, type coercion is when JavaScript automatically converts types behind the scenes for us. So that's necessary in some situation, but it happens implicitly, completely hidden from us.

> Most of the time, operators and functions automatically convert the values given to them to the right type. For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.
*/

/* Type Conversions */

// explicit String Conversion: String conversion happens when we need the string form of a value.
let value = true;
alert(typeof value); // boolean
value = String(value); // now value is a string "true"
alert(typeof value); // string
// conversion is mostly obvious. A false becomes "false", null becomes "null", etc.

// explicit Numeric Conversion: Numeric conversion in mathematical functions and expressions happens automatically.
let str = "123";
alert(typeof str); // string
let num22 = Number(str); // becomes a number 123
alert(typeof num22); // number, notice that str still string, but we use Number constructor to convert value inside it to number type and store it in var num22 then use num22 not str
/*
Numeric conversion rules:

Value	          Becomes
undefined	      NaN
null	          0
true and false	1 and 0
string	        Whitespace (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0.
								Otherwise, the number is “read” from the string. An error gives NaN.
*/
alert(Number("   123   ")); // 123
alert(Number("123z"));      // NaN (error reading a number at "z")
alert(Number(true));        // 1
alert(Number(false));       // 0

// explicit Boolean Conversion: Boolean conversion is the simplest one. It happens in logical operations
/*
Boolean conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false. falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean. And in JavaScript, there are only five falsy values. Other values become true.

I never used this function here in practice. This was just to show you the concept of truthy and falsely values. So in practice, the conversion to boolean is always implicit, not explicit, or in other words is always typed coercion that JavaScript does automatically behind the scenes. But when exactly does JavaScript do type coercion to booleans? Well, it happens in two scenarios. First, when using logical operators, and second in a logical context, like for example, in the condition of an if else statement.
*/
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("hello")); // true
alert(Boolean("")); // false
alert(Boolean({})); // true
alert(Boolean("0")); // true - Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.
alert(Boolean(" ")); // spaces, also true (any non-empty string is true)

/* type coercion */

// operators
let aa = "1";
let ss = "amr";
let bb = 2;
let cc = true;
console.log(aa + bb); // print "12" - string - concatenation
console.log(+aa + bb); // print 3 - number - math operation
console.log(aa - bb); // print -1 - number - math operation
console.log(ss - bb); // NaN - number
console.log("" - 2); // -2  - number
console.log(false - true); // -1 - number
console.log(aa + bb + cc); // 12true - string
console.log(+aa + bb + cc); // 4 - number
console.log('I am ' + 23 + ' years old'); // convert number to string, output is string
console.log('23' - '10' - 3); // convert string to number , output is number
console.log('23' / '2'); // convert string to number , output is number
let nn = '1' + 1; // '11'
n = nn - 1;
console.log(nn); // 10 - number

// logical context
const money = 100;
if (money) { // type coercion - true
	console.log("Don't spend it all ;)");
} else {
	console.log('You should get a job!');
}
let height;
if (height) { // type coercion - false
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
}
let height6 = 0;
if (height6) { // type coercion - false
	console.log('YAY! Height is defined');
} else {
	console.log('Height is UNDEFINED');
}

/*
Summary

The three most widely used type conversions are to string, to number, and to boolean.

> String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

> Numeric Conversion – Occurs in math operations. Can be performed with Number(value). The conversion follows the rules:
undefined	    	NaN
null	        	0
true / false		1 / 0
string	      	The string is read “as is”, whitespace (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.

> Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value). Follows the rules:
0, null, undefined, NaN, ""	=> false
any other value	=> true

> Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:
undefined is NaN as a number, not 0.
"0" and space-only strings like " " are true as a boolean.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Comparison Operators

> All comparison operators return a boolean value
> strict equality operator does not perform type coercion

[==] Equal - loose equality
[!=] Not Equal
[===] Identical - strict equality
[!==] Not Identical
[>] Larger Than
[>=] Larger Than Or Equal
[<] Smaller Than
[<=] Smaller Than Or Equal
*/

// example 1
console.log(10 == "10"); // Compare Value Only - true
console.log(-100 == "-100"); // Compare Value Only - true
console.log(10 != "10"); // Compare Value Only - false
console.log(null == undefined); // true - 0/NaN

// example 2
console.log(10 === "10"); // Compare Value + Type - false
console.log(10 !== "10"); // Compare Value + Type - true
console.log(10 !== 10); // Compare Value + Type - false
console.log(null === undefined); // false - object/undefined

// example 3
console.log(10 > 20); // false
console.log(10 > 10); // false
console.log(10 >= 10); // true

// example 4
console.log(10 < 20); // true
console.log(10 < 10); // false
console.log(10 <= 10); // true

// example 5
console.log(typeof "Osama" === typeof "Ahmed"); // true
console.log(+"Osama" === +"Ahmed"); // false - remember NaN != NaN

// example 6
const age44 = '18';
if (age44 === 18) console.log('You just became an adult :D (strict)');
if (age44 == 18) console.log('You just became an adult :D (loose)');
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite === 23) { // 22 === 23 -> FALSE
	console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
	console.log('7 is also a cool number')
} else if (favourite === 9) {
	console.log('9 is also a cool number')
} else {
	console.log('Number is not 23 or 7 or 9')
}
if (favourite !== 23) console.log('Why not 23?');

/*
String comparison

To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. In other words, strings are compared letter-by-letter. For example:
	alert( 'Z' > 'A' ); // true
	alert( 'Glow' > 'Glee' ); // true
	alert( 'Bee' > 'Be' ); // true

The algorithm to compare two strings is simple:
- Compare the first character of both strings.
- If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
- Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
- Repeat until the end of either string.
- If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.
The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:
G is the same as G.
l is the same as l.
o is greater than e. Stop here. The first string is greater.

Not a real dictionary, but Unicode order
The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same. For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).
*/

/*
Comparison of different types

When comparing values of different types, JavaScript converts the values to numbers. For example:
	alert('2' > 1); // true, string '2' becomes a number 2
	alert('01' == 1); // true, string '01' becomes a number 1

For boolean values, true becomes 1 and false becomes 0. For example:
	alert(true == 1); // true
	alert(false == 0); // true

A funny consequence
It is possible that at the same time: Two values are equal. One of them is true as a boolean and the other one is false as a boolean. For example:
	let a = 0;
	alert(Boolean(a)); // false
	let b = "0";
	alert(Boolean(b)); // true
	alert(a == b); // true!
From JavaScript’s standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence "0" becomes 0), while the explicit Boolean conversion uses another set of rules.
*/

/*
Comparison with null and undefined

There’s a non-intuitive behavior when null or undefined are compared to other values.
For a strict equality check ===, These values are different, because each of them is a different type.
	alert( null === undefined ); // false
For a non-strict check ==, There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
	alert( null == undefined ); // true
For maths and other comparisons < > <= >=, null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

Strange result: null vs 0
Let’s compare null with a zero:
	alert( null > 0 );  // (1) false
	alert( null == 0 ); // (2) false
	alert( null >= 0 ); // (3) true
Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.
The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

An incomparable undefined
The value undefined shouldn’t be compared to other values:
	alert( undefined > 0 ); // false (1)
	alert( undefined < 0 ); // false (2)
	alert( undefined == 0 ); // false (3)
Why does it dislike zero so much? Always false! We get these results because: Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons. The equality check (3) returns false because undefined only equals null, undefined, and no other value.

Avoid problems
Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:
- Treat any comparison with undefined/null except the strict equality === with exceptional care.
- Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing.
If a variable can have these values, check for them separately.
*/

/*
Summary

Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Logical Operators

Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type. There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

[! Not]
The operator accepts a single argument and does the following:
Converts the operand to boolean type: true/false.
Returns the inverse value.
A double NOT !! is sometimes used for converting a value to boolean type:
	alert(!!"non-empty string"); // true
	alert(!!null); // false
There’s a little more verbose way to do the same thing – a built-in Boolean function:
	alert(Boolean("non-empty string")); // true
	alert(Boolean(null)); // false
The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||

[&& And]
true when all are true
In classical programming, AND returns true if both operands are truthy and false otherwise:
	alert(true && true);   // true
	alert(false && true);  // false
	alert(true && false);  // false
	alert(false && false); // false
finds the first falsy value. Given multiple AND’ed values:
	result = value1 && value2 && value3;
	The AND && operator does the following:
	- Evaluates operands from left to right.
	- For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
	- If all operands have been evaluated (i.e. all were truthy), returns the last operand.
	- In other words, AND returns the first falsy value or the last value if none were found.
The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one. Examples:
	if the first operand is truthy, AND returns the second operand:
	alert(1 && 0); // 0
	alert(1 && 5); // 5
	if the first operand is falsy, AND returns it. The second operand is ignored
	alert(null && 5); // null
	alert(0 && "no matter what"); // 0
We can also pass several values in a row. See how the first falsy one is returned: alert( 1 && 2 && null && 3 ); // null
When all values are truthy, the last value is returned: alert( 1 && 2 && 3 ); // 3, the last one
Don’t replace if with || or &&
	let x = 1;
	(x > 0) && alert( 'Greater than zero!' );
	So we basically have an analogue for:
	let x = 1;
	if (x > 0) alert( 'Greater than zero!' );
	Although, the variant with && appears shorter, if is more obvious and tends to be a little more readable. So we recommend using every construct for its purpose: use if if we want if and use && if we want AND.
Precedence of AND && is higher than OR ||. So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

[|| Or]
In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false. In JavaScript, the operator is a little trickier and more powerful. But first, let’s see what happens with boolean values.
	There are four possible logical combinations:
	alert(true || true);   // true
	alert(false || true);  // true
	alert(true || false);  // true
	alert(false || false); // false
	As we can see, the result is always true except for the case when both operands are false. If an operand is not a boolean, it’s converted to a boolean for the evaluation. For instance, the number 1 is treated as true, the number 0 as false:
	if (1 || 0) { // works just like if( true || false )
		alert( 'truthy!' );
	}
finds the first truthy value
	The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript. The extended algorithm works as follows. Given multiple OR’ed values:
	result = value1 || value2 || value3;
	The OR || operator does the following:
	Evaluates operands from left to right.
	For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
	If all operands have been evaluated (i.e. all were false), returns the last operand.
	A value is returned in its original form, without the conversion.
	In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found. For instance:
	alert(1 || 0); // 1 (1 is truthy)
	alert(null || 1); // 1 (1 is the first truthy value)
	alert(null || 0 || 1); // 1 (the first truthy value)
	alert(undefined || null || 0); // 0 (all falsy, returns the last value)
This leads to some interesting usage compared to a “pure, classical, boolean-only OR”.
	1.Getting the first truthy value from a list of variables or expressions. For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values). Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):
		let firstName = "";
		let lastName = "";
		let nickName = "SuperCoder";
		alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder
		If all variables were falsy, "Anonymous" would show up.
	2.Short-circuit evaluation. Another feature of OR || operator is the so-called “short-circuit” evaluation. It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument. The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call In the example below, only the second message is printed:
		true || alert("not printed");
		false || alert("printed");
		In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
		Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.
*/

// example 1
console.log(true);
console.log(!true); // false

// example 2
let $A = false;
let $B = true;
console.log(!$A && $B); // true
console.log($A || !$B); // false

// example 3
console.log(!(10 === "80")); // true
console.log(10 === "15" && 10 > 8 && 10 > 50);
console.log(10 === "17" || 10 > 80 || 10 > 50);

// example 4
const hasDriversLicense2 = true;
const hasGoodVision = true;
const isTired = false;
console.log(hasDriversLicense2 || hasGoodVision || isTired);
if (hasDriversLicense2 && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!');
} else {
	console.log('Someone else should drive...');
}

// advanced example
function randomVal() {
	let rv = Math.floor(Math.random() * 2) || Math.floor(Math.random() * 2);
	console.log(rv);
}
randomVal(); // 1: 75% - 0: 25%

/*
Don’t replace if with || or &&

Sometimes, people use the AND && operator as a "shorter way to write if". For instance:
	let x = 1;
	(x > 0) && alert( 'Greater than zero!' );
The action in the right part of && would execute only if the evaluation reaches it. That is, only if (x > 0) is true.
So we basically have an analogue for:
	let x = 1;
	if (x > 0) alert( 'Greater than zero!' );
Although, the variant with && appears shorter, if is more obvious and tends to be a little more readable. So we recommend using every construct for its purpose: use if, if we want if and use && if we want AND.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*

[||] returns the first truthy value.
[&&] returns the first falsy value.
[??] returns the first defined value.

Nullish Coalescing Operator ??

- This is a recent addition to the language. Old browsers may need polyfills.
- ?? returns the first argument if it’s not null/undefined. Otherwise, the second one. The common use case for ?? is to provide a default value. We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.
	let firstName = null;
	let lastName = null;
	let nickName = "Supercoder";
	// shows the first defined value:
	alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
- Precedence
	The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table. That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *. So we may need to add parentheses in expressions like this:
		let height = null;
		let width = null;
		// important: use parentheses
		let area = (height ?? 100) * (width ?? 50);
		alert(area); // 5000
	Otherwise, if we omit parentheses, then as * has the higher precedence than ??, it would execute first, leading to incorrect results.
- Using ?? with && or ||
	Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
		let x = 1 && 2 ?? 3; // Syntax error
	The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from || to ??.
	Use explicit parentheses to work around it:
		let x = (1 && 2) ?? 3; // Works - alert(x); // 2
- Comparison with ||
	The OR || operator can be used in the same way as ??, as it was described in the previous chapter. For example, in the code above we could replace ?? with || and still get the same result:
		let firstName = null;
		let lastName = null;
		let nickName = "Supercoder";
		// shows the first truthy value:
		alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
	Historically, the OR || operator was there first. It exists since the beginning of JavaScript, so developers were using it for such purposes for a long time. On the other hand, the nullish coalescing operator ?? was added to JavaScript only recently, and the reason for that was that people were not quite happy with ||. The important difference between them is that:
	|| returns the first truthy value.
	?? returns the first defined value.
	In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result. In practice though, we may want to use default value only when the variable is null/undefined. That is, when the value is really unknown/unassigned.
	For example, consider this:
		let height = 0;
		alert(height || 100); // 100
		alert(height ?? 100); // 0
	The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed. so the result of || is the second argument, 100. The height ?? 100 checks height for being null/undefined, and it’s not, so the result is height “as is”, that is 0. In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.

Summary
	The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list. It’s used to assign default values to variables:
	height = height ?? 100;
	The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression. It’s forbidden to use it with || or && without explicit parentheses.
*/

let price = 0;
console.log(`The Price Is ${price || 200}`); // 200
console.log(`The Price Is ${price ?? 200}`); // 0 - In practice, the zero price is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.

// In JavaScript, undefined and null are treated as “falsy” values. This means that it can be tricky to perform null checks around genuine false booleans — for example, 0 or false — which can sometimes be a legitimate response from a function. Below is a very contrived example:
function decisionMaker() {
	const rand = Math.random();
	if (rand < 0.3) {
		return true;
	}
	if (rand > 0.7) {
		return false;
	}
}
 // if number between 0.3 and 0.7 function will return undefined
console.log(decisionMaker() || "no"); // will work with undefined and false too
console.log(decisionMaker() ?? "no"); // will work with undefined only
function shouldIGoToTheBall1() {
	const str = decisionMaker() ?? "Undecided"; // decisionMaker() sometimes return undefined
	console.log("Should I go to the ball?", str);
}
shouldIGoToTheBall1();
// If the response from decisionMaker is undefined, we can use the nullish coalescing operator (??) to set the value to "Undecided" — otherwise, we print true or false. This can be contrasted to the logical “or” operator (||) which falls through if the value is false or “falsy.” In this example, if we used the || operator, we would see false when the decisionMaker function returned both false and undefined, which is not the desired behaviour.
// Using the nullish coalescing operator gives us much cleaner and more readable code, and leaves much less room for error. Before the nullish coalescing operator, we would have done something like the following:
function shouldIGoToTheBall2() {
	const str = decisionMaker();
	if (typeof str === "undefined") {
		console.log("Should I go to the ball?", "Undecided");
	} else {
		console.log("Should I go to the ball?", str);
	}}
shouldIGoToTheBall2();

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Bitwise operators

Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
These operators are not JavaScript-specific. They are supported in most programming languages.
The list of operators:
	AND ( & )
	OR ( | )
	XOR ( ^ )
	NOT ( ~ )
	LEFT SHIFT ( << )
	RIGHT SHIFT ( >> )
	ZERO-FILL RIGHT SHIFT ( >>> )
These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful. You can read the Bitwise Operators chapter on MDN when a need arises.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Comma operator

The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.
The comma operator allows us to evaluate several expressions, dividing them with a comma, Each of them is evaluated but only the result of the last one is returned. For example:
	let a = (1 + 2, 3 + 4);
	alert( a ); // 7 (the result of 3 + 4)
	Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.
Comma has a very low precedence
	Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above. Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.
Why do we need an operator that throws away everything except the last expression? Sometimes, people use it in more complex constructs to put several actions in one line. For example:
	// three operations in one line
	for (a = 1, b = 3, c = a * b; a < 10; a++) {
	...
	}
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Control Flow/Structure

it is called a control structure because this structure actually allows us to have more control over the way that our code is executed. For example, in this, 'if', 'else' statement the whole code does not just execute in a linear way. So JavaScript does not execute all of this code here, linearly. Instead, we can now control blocks of code that should execute and blocks that should not execute. And so again that gives us a lot more control over how our code works and that's why this is called a control structure.

=> if - The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
=> elseif clause [optional]
=> else clause [optional]

We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.
*/

// if statement

// example 1
const age = 15;
const isSuitable = age >= 18;
if (isSuitable) {
	console.log('Sarah can start driving license 🚗');
} else { // else clause
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} ${yearsLeft > 1 ? 'years' : 'year'} :)`);
}

// example 2
const birthYear55 = 2012;
let century;
if (birthYear55 <= 2000) {
	century = 20;
} else { // else clause
	century = 21;
}
console.log(century);

// example 3
for (let i = 0; i < 10; i++) {
	if (i % 2) {
		alert( i );
	}
} // 1 3 5 7 9

// else if

let discount1 = true;
let discountAmount1 = 30;
let country11 = "KSA";
if (discount1 === true) {
	price -= discountAmount1;
} else if (country11 === "Egypt") {
	price -= 40;
} else if (country11 === "Syria") {
	price -= 50;
} else {
	price -= 10;
}
console.log(price);

// Nested If: condition levels

let discount2 = true;
let discountAmount2 = 30;
let country2 = "KSA";
let student2 = true;
if (discount2 === true) {
	price -= discountAmount2;
} else if (country2 === "Egypt") {
	if (student2 === true) {
		price -= discountAmount2 + 30;
	} else {
		price -= discountAmount2 + 10;
	}
} else {
	price -= 10;
}
console.log(price);

/*
Conditional (Ternary) Operator - [considered as expression] - it is an operator which is return value like any operator in js

The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.

The operator is represented by a question mark ?. Sometimes it is called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.
It is useful to assign and store a value to a variable
*/

// example 1
let theGender = "Female";
if (theGender === "Male") {
	console.log("Mr");
} else {
	console.log("Mrs");
}
theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let result = theGender === "Male" ? "Mr" : "Mrs";
document.write(result);
console.log(theGender === "Male" ? "Mr" : "Mrs");
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

// example 2
let result556;
if (a + b < 4) {
	result556 = 'Below';
} else {
	result556 = 'Over';
}
console.log(result556);
let result557 = (a + b < 4) ? 'Below' : 'Over';
console.log(result557);

// example 3
console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`); // using ternary operator as an expression in template literals

// example 4
let accessAllowed1 = (age01 > 18) ? true : false; // Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.
let accessAllowed2 = age02 > 18 ? true : false; // But parentheses make the code more readable, so we recommend using them.
// In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:
let accessAllowed3 = age03 > 18;

// Multiple ‘?’
let theAge = 30;
theAge < 20
	? console.log(20)
	: theAge > 20 && theAge < 60
	? console.log("20 To 60")
	: theAge > 60
	? console.log("Larger Than 60")
	: console.log("Unknown");

// Multiple ‘?’
let message556
let login556;
if (login556 === 'Employee') {
	message556 = 'Hello';
} else if (login556 === 'Director') {
	message556 = 'Greetings';
} else if (login556 === '') {
	message556 = 'No login';
} else {
	message556 = '';
}
alert(message556);
let message554 =
	(login556 === 'Employee') ? 'Hello'
	: (login556 === 'Director') ? 'Greetings'
	: (login556 === '') ? 'No login'
	: '';
alert(message554);

// Multiple ‘?’
i = i ? i < 0 ? Math.max(0, len + i) : i : 0; // This code sets i to a non-negative integer value that represents an index into an array or string. If i is already non-negative, it remains unchanged. If i is negative, it is converted to a positive index that is within the bounds of the array or string.
if (i) {
	if (i < 0) {
		i = Math.max(0, len + i);
	}
} else {
	i = 0;
}

/*
Non-traditional use of ‘?’

Sometimes the question mark ? is used as a replacement for if:
	let company = prompt('Which company created JavaScript?', '');
	(company == 'Netscape') ? alert('Right!') : alert('Wrong.');
Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert. We don’t assign a result to a variable here. Instead, we execute different code depending on the condition. It’s not recommended to use the question mark operator in this way. The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable. Here is the same code using if for comparison:
	let company = prompt('Which company created JavaScript?', '');
	if (company == 'Netscape') {
		alert('Right!');
	} else {
		alert('Wrong.');
	}
Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set. The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Switch Statement

identical comparison
compare one value to multiple different options
A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants.

The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.
If the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break (or until the end of switch).
If no case is matched then the default code is executed (if it exists).
If there is no break then the execution continues with the next case without any checks.
*/

// example 1
let ay = 2 + 2;
switch (ay) {
	case 3:
		alert( 'Too small' );
	case 4:
		alert( 'Exactly!' );
	case 5:
		alert( 'Too big' );
	default:
		alert( "I don't know such values" );
}
// In the example above we’ll see sequential execution of three alerts:
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );

// example 2
let day = "A";
switch (day) {
	case 0:
		console.log("Saturday");
		break;
	case 1:
		console.log("Sunday");
		break;
	case 2:
	case 3:
		console.log("Monday"); // The ability to “group” cases is a side effect of how switch/case works without break. Here the execution of case 2 and goes through case 3, because there’s no break.
		break;
	default:
		console.log("Unknown Day");
		break;
}

// example 3
switch (day) {
	default:
		console.log("Unknown Day");
		break;
	case 0:
		console.log("Saturday");
		break;
	case 1:
		console.log("Sunday");
		break;
	case 2:
	case 3:
		console.log("Monday");
		break;
}

// Any expression can be a switch/case argument: Both switch and case allow arbitrary expressions.
let a88 = "1";
let b88 = 0;
switch (+a88) {
	case b88 + 1:
	alert("this runs, because +a is 1, exactly equals b+1");
	break;
	default:
	alert("this doesn't run");
}

// example 4
let arg = prompt("Enter a value?");
switch (arg) {
	case '0':
	case '1':
		alert( 'One or zero' );
		break;
	case '2':
		alert( 'Two' );
		break;
	case 3:
		alert( 'Never executes!' );
		break;
	default:
		alert( 'An unknown value' );
}
/*
For 0, 1, the first alert runs.
For 2 the second alert runs.
But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
loop

Loops are a way to repeat the same code multiple times.
A single execution of the loop body is called an iteration
Normally, a loop exits when its condition becomes falsy.
*/

/*
Loop: For

for (begin; condition; step) {
	// ... loop body ...
}
> begin executes once, and then it iterates: after each condition test, body and step are executed.

Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...

	for (let i = 0; i < 3; i++) alert(i)
run begin
	let i = 0
if condition → run body and run step
	if (i < 3) { alert(i); i++ }
if condition → run body and run step
	if (i < 3) { alert(i); i++ }
if condition → run body and run step
	if (i < 3) { alert(i); i++ }
...finish, because now i == 3

Inline variable declaration
	for (let i = 0; i < 3; i++) {
		alert(i); // 0, 1, 2
	}
	alert(i); // error, no such variable
Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.
Instead of defining a variable, we could use an existing one:
	let i = 0;
	for (i = 0; i < 3; i++) { // use an existing variable
		alert(i); // 0, 1, 2
	}
	alert(i); // 3, visible, because declared outside the loop
*/

//Loop On Sequences

// example 1
let myFriends9 = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
for (let i = 0; i < 10; i++) {
	console.log(myFriends9[i]); // 1 2 osama Ahmed 3 4 Sayed 6 Ali undefined
}
for (let i = 0; i < myFriends9.length; i++) {
	console.log(myFriends9[i]); // 1 2 osama Ahmed 3 4 Sayed 6 Ali
}
let onlyNames = [];
for (let i = 0; i < myFriends9.length; i++) {
	if (typeof myFriends9[i] === "string") {
		onlyNames.push(myFriends9[i]);
	}
}
console.log(onlyNames); // ["Osama", "Ahmed", "Sayed", "Ali"]

// example 2
const jonas33 = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true
];
const types = [];
for (let i = 0; i < jonas33.length; i++) {
	// Reading from jonas33 array
	console.log(jonas33[i], typeof jonas33[i]);
	// Filling types array
	types[i] = typeof jonas33[i];
	// OR
	types.push(typeof jonas33[i]);
}
console.log(types);

// example 3
const years33 = [1991, 2007, 1969, 2020];
const ages33 = [];
for (let i = 0; i < years33.length; i++) {
	ages33.push(2037 - years33[i]);
}
console.log(ages33);

// example 4
const jonas44 = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true
];
// 0, 1, ..., 4
// 4, 3, ..., 0
for (let i = jonas44.length - 1; i >= 0; i--) {
	console.log(i, jonas44[i]);
}

// Loop: Nested Loops

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];

// example 1
for (let i = 0; i < products.length; i++) {
	console.log(`# ${products[i]}`);
	console.log("\n");
	console.log("Colors: ");
	for (let j = 0; j < colors.length; j++) {
		console.log(`- ${colors[j]}`);
	}
	console.log("Models: ");
	for (let k = 0; k < models.length; k++) {
		console.log(`- ${models[k]}`);
	}
	console.log("-".repeat(15));
}

// example 2
for (let i = 0; i < products.length; i++) {
	console.group(`${products[i]}`)
	for (let j = 0; j < colors.length; j++) {
		console.log(`${colors[j]}`);
	}
	console.groupEnd();
}

/*
Loop Control

=> Break directive
=> Continue directive
=> Label
*/

let products3 = ["Keyboard", "Mouse", "Pen", 9, 4, "Pad", "Monitor"];
let colors3 = ["Red", "Green", "Black"];

// break -  It stops the loop immediately, passing control to the first line after the loop

// example 1
for (let i = 0; i < products3.length; i++) {
	console.log(products3[i]);
	if (products3[i] === "Pen") {
		break;
	}
}

// example 2
let sum441 = 0;
while (true) {
	let value = +prompt("Enter a number", '');
	if (!value) break;
	sum441 += value;
}
alert( 'Sum: ' + sum441 );

// continue - The 'continue' directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

// example 1
for (let i = 0; i < products3.length; i++) {
	if (typeof products3[i] === "number") {
		continue;
	}
	console.log(products3[i]);
}

// example 2
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas33.length; i++) {
	if (typeof jonas33[i] !== 'string') continue;
	console.log(jonas33[i], typeof jonas33[i]);
}

// example 3
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas33.length; i++) {
	if (typeof jonas33[i] === 'number') break;
	console.log(jonas33[i], typeof jonas33[i]);
}

// label: loop identifier - break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one. The 'continue' directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

// example 1
mainLoop: for (let i = 0; i < products3.length; i++) {
	console.log(products3[i]);
	for (let j = 0; j < colors3.length; j++) {
		console.log(`- ${colors3[j]}`);
		if (colors3[j] === "Green") {
			break mainLoop;
		}
		for (let k = 0; k < 3; k++) {
			console.log("amr");
		}
	}
}

// example 2
outer:
for (let i = 0; i < 3; i++) { 5 } // We can also move the label onto a separate line

// example 3
for (let i = 0; i < 10; i++) {
	// if true, skip the remaining part of the body
	if (i % 2 == 0) continue;
	alert(i); // 1, then 3, 5, 7, 9
}// The 'continue' directive helps decrease nesting. A loop that shows odd values could look like this:
for (let i = 0; i < 10; i++) {
	if (i % 2) {
		alert( i );
	}
}// From a technical point of view, this is identical to the example above. Surely, we can just wrap the code in an if block instead of using continue. But as a side effect, this created one more level of nesting (the alert call inside the curly braces). If the code inside of if is longer than a few lines, that may decrease the overall readability.

/*
No break/continue to the right side of ‘?’

Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there. For example, if we take this code:
	if (i > 5) {
		alert(i);
	} else {
		continue;
	}
…and rewrite it using a question mark:
	(i > 5) ? alert(i) : continue; // continue isn't allowed here
…it stops working: there’s a syntax error. This is just another reason not to use the question mark operator ? instead of if.
*/

/*
Labels do not allow to “jump” anywhere

Labels do not allow us to jump into an arbitrary place in the code. For example, it is impossible to do this:
	break label; // jump to the label below (doesn't work)
	label: for (...)
A break directive must be inside a code block. Technically, any labelled code block will do, e.g.:
	label: {
		// ...
		break label; // works
		// ...
	}
…Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above. A continue is only possible from inside a loop.
*/

/*
Skipping parts

Any part of for can be skipped.
For example, we can omit begin if we don’t need to do anything at the loop start.
Like here:
	let i = 0; // we have I already declared and assigned
	for (; i < 3; i++) { // no need for "begin"
		alert( i ); // 0, 1, 2
	}
We can also remove the step part:
	let i = 0;
	for (; i < 3;) {
		alert( i++ );
	}
This makes the loop identical to while (i < 3).
We can actually remove everything, creating an infinite loop:
	for (;;) {
		// repeats without limits
	}
Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.
*/

// example 4
let products4 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
var ii = 0;
for (;;) {
	console.log(products4[ii]);
	ii++;
	if (ii === products4.length) break; // like do while
}
console.log(ii); // 1st: 0 - loop will update ii value
let iii = 0;
for (;;) {
	console.log(products4[iii]);
	iii++;
	if (iii === products4.length) break; // like do while
}
console.log(iii); // 1st: 0 - loop will update iii value
const iiii = 0;
for (;;) {
	console.log(products4[iiii]);
	//iiii++; // error
	if (iiii === products4.length) break;
}
console.log(iiii); // 0

// example 5
let g8 = 0;
for (; g8 < 3;) {
	alert(g8++);
} // while (i < 3) alert( i++ )

// example 6
let products99 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors99 = ["Red", "Green", "Blue"];
let showCount = 3;
document.write(`<h1>Show ${showCount} Products</h1>`);
for (let i = 0; i < showCount; i++) {
	document.write(`<div>`);
	document.write(`<h3>[${i + 1}] ${products99[i]}</h3>`);
	for (let j = 0; j < colors99.length; j++) {
		document.write(`<p>${colors99[j]}</p>`);
	}
	document.write(`<p>${colors99.join(" | ")}</p>`);
	document.write(`</div>`);
}

/*
Loop: While

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.
*/

// difference between while and for
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// example 1
let dice = Math.trunc(Math.random() * 6) + 1; // OR => let dice = Math.ceil(Math.random() * 6);
while (dice !== 6) { // if first roll is 6 the iteration will not start
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log('Loop is about to end...');
} // the while loop does really not have to depend on any counter variable. So whenever you do need a loop without a counter, you can reach for the while loop. So basically that happens whenever you do not know beforehand how many iterations the loop will have. So in that situation the while loop is the right tool for the job. we had no way of knowing how many times we would roll a dice that's different from six. Now, on the other hand, when we do know how many times the loop will run, that means that we're gonna actually need a counter. For example, when we want to loop over an array, we already know how many elements that array has, and so we know how many iterations we will need. And therefore the for loop is usually the right choice to loop over an array.

// example 2
let products22 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;
while (index < products22.length) {
	console.log(products22[index]);
	index += 1;
	if (index === 3) {
		break;
	}
}

// example 3
while (true) {
	console.log(products22[index]);
	index += 1;
	if (index === 3) {
		break;
	}
} // will not make infinite loop because of break

// example 4
let iu = 3;
while (iu) { // when I become 0, the condition becomes falsy, and the loop stops - Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.
	alert(iu);
	i--;
}

// example 5
let iy = 3;
while (iy) alert(iy--); // Curly braces are not required for a single-line body If the loop body has a single statement, we can omit the curly braces {…}:

// example 6
let sum = 0;
while (true) {
	let value = +prompt("Enter a number", '');
	if (!value) break; // The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.
	sum += value;
}
alert('Sum: ' + sum);

// Loop: Do / While

let h = 0;
do {
	console.log(h); // 0
	h++;
} while (false);
console.log(h); // 1

/*
Summary

=> while – The condition is checked before each iteration.
=> do.while – The condition is checked after each iteration.
=> for (;;) – The condition is checked before each iteration, additional settings available.
=> To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.
=> If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use continue directive.
=> break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* Block Scope [If, Switch, For, ....] */

// var
var x19 = 10;
if (10 === 10) {
	var x19 = 50;
	console.log(`From If Block ${x19}`); // 50
}
console.log(`From Global ${x19}`); // 50
var x29 = 10;
if (10 === 10) {
	console.log(`From If Block ${x29}`); // 10
	var x29 = 50;
}
console.log(`From Global ${x29}`); // 50

// let
var y19 = 10;
if (10 === 10) {
	let y19= 50;
	console.log(`From If Block ${y19}`); // 50
}
console.log(`From Global ${y19}`); // 10
var y29 = 10;
if (10 === 10) {
	console.log(`From If Block ${y29}`); // Cannot access 'y29' before initialization
	let y29= 50;
}
console.log(`From Global ${y29}`); // 10

// const
var z19 = 10;
if (10 === 10) {
	const z19= 50;
	console.log(`From If Block ${z19}`); // 50
}
console.log(`From Global ${z19}`); // 10
var z29 = 10;
if (10 === 10) {
	console.log(`From If Block ${z29}`); // Cannot access 'z29' before initialization
	const z29= 50;
}
console.log(`From Global ${z29}`); // 10

// for scope

// let
for (let i = 0; i < 10; i++) { // let creat block-scope in block of code
	console.log(i);
}
console.log(i); // error

// const
for (const e = 0; e < 10; a++) {  // cost creat block-scope in block of code
	console.log(e);
}
console.log(e); // error

// var
for (var m = 0; m < 10; m++) {  // var doesn't creat block-scope in block of code
	console.log(m);
}
console.log(m); // 10

// if scope

// inside if
if (true){
	var i = 5;
	console.log(i); // 5
	i++;
}
console.log(i); // 6
if (true){
	let i = 5;
	console.log(i); // 5
	i++;
}
console.log(i); // error
if (true){
	const i = 5;
	console.log(i); // 5
	//i++;
}
console.log(i); // error

// outside if
var g = 2;
if (true){
	g = 5;
	console.log(g); // 5
	g++;
}
console.log(g); // 6
let j = 2;
if (true){
	j = 5;
	console.log(j); // 5
	j++;
}
console.log(h); // 6
const f = 2;
if (true){
	//f = 5;
	console.log(f); // error
	//f++;
}
console.log(f); // 2

// in/out if
var l = 2;
if (true){
	var l = 5;
	console.log(l); // 5
	l++;
}
console.log(l); // 6
let v = 2;
if (true){
	let v = 5;
	console.log(v); // 5
	v++;
}
console.log(v); // 2
const s = 2;
if (true){
	const s = 5;
	console.log(s); // 5
	//s++; // error
}
console.log(s); // 2

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Function

=> function like variable but for a chunck of code

=> function use principle DRY: do not repeat yourself - Quite often we need to perform a similar action in many places of the script. Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

=> User-Defined function(custom function) => function declaration / function expression / arrow function / Anonymous function

=> rrow function and Anonymous function are considered as function expression

=> Built-In function

=> parameters is same as variables that are specific only to this function, arguments are the value of these parameters

=> In the context of programming, "call," "invoke," and "trigger" all refer to the act of executing or running a function or method.
	- "call" a function, you are telling the program to execute the code within that function.
	- "Invoke" is a synonym for "call." For example, you can say "I'm going to invoke the sayHello() function" instead of "I'm going to call the sayHello() function."
	- "Trigger" is a term that is often used in the context of event-driven programming, where a certain action or event "triggers" a specific function or method to be executed. For example, clicking a button might trigger a function that opens a menu or submits a form.
	- In short, all three terms refer to the act of executing a function or method, but "trigger" often implies that the execution is in response to a specific event or user action.

=> In JavaScript, a function is not a “magical language structure”, but a special kind of value.

=> A function is a value representing an “action”. Regular values like strings or numbers represent the data. A function can be perceived as an action. We can pass it between variables and run when we want.
*/

// Function declaration
/*
Naming a function
	Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does. It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.For instance,
	functions that start with "show" usually show something.
	"get…" – return a value,
	"calc…" – calculate something,
	"create…" – create something,
	"check…" – check something and return a boolean, etc.
	Examples of such names:
	showMessage(..)     // shows a message
	getAge(..)          // returns the age (gets it somehow)
	calcSum(..)         // calculates a sum and returns the result
	createForm(..)      // creates a form (and usually returns it)
	checkPermission(..) // checks a permission, returns true/false
	With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

One function – one action
	A function should do exactly what is suggested by its name, no more. Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two). A few examples of breaking this rule:
	getAge – would be bad if it shows an alert with the age (should only get).
	createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
	checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).
	These examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they’re not much different. In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions should obey the rules. And the team should share the knowledge.
	Ultrashort function names
	Functions that are used very often sometimes have ultrashort names. For example, the jQuery framework defines a function with $. The Lodash library has its core function named _. These are exceptions. Generally function names should be concise and descriptive.
* Lodash: https://lodash.com/

Functions == Comments
	Functions should be short and do exactly one thing. If that thing is big, maybe it’s worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it’s definitely a good thing. A separate function is not only easier to test and debug – its very existence is a great comment!. So, functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.

Summary
	A function declaration looks like this:
		function name(parameters, delimited, by, comma) {
			code
		}
	Values passed to a function as parameters are copied to its local variables.
	A function may access outer variables. But it works only from inside out. The code outside the function doesn’t see its local variables.
	A function can return a value. If it doesn’t, then its result is undefined.
	To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.
	It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.
	Function naming: A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns. A function is an action, so function names are usually verbal. There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.
*/

// example 1
function logger() {
	console.log('My name is Jonas');
}
logger();
logger();
logger();// So function like this without parameters and without a return we really only use when there is a block of code that we want to reuse over and over again. So basically this here does not produce a value because we don't return anything from the function and that's why here we also don't save the result of the function to any variable because it doesn't produce any result while technically it does produce undefined so of course we don't capture that undefined value.
console.log(logger()); // log => My name is Jonas and undefined

// example 2
sayHello1("Osama"); // can call Declarations function before creation
function sayHello1(userName) { // userName is [parameter]
	console.log(`Hi ${userName}`);
}
sayHello1("Sayed"); // function call / trigger function
sayHello1("Ali"); // Osama - Sayed - Ali are [arguments]

// example 3
function sayHello2(userName, age) {
	if (age < 20) {
		console.log(`App is Not Suitable For You`);
	} else {
		console.log(`Hello ${userName} Your Age is ${age}`);
	}
}
sayHello2("Osama", 38);
sayHello2("Sayed", 40);
sayHello2("Ali", 18);

// example 4
function generateYears(start, end, exclude) {
	for (let i = start; i <= end; i++) {
		if (i === exclude) continue;
		console.log(i);
	}
}
generateYears(1982, 2021, 2020);

// example 5
function calcAge1(birthYeah) {
	return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
console.log(age1);

// example 6
function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}
fruitProcessor(5, 0); // log to the console => (5, 0)
const appleJuice = fruitProcessor(5, 0); // log to the console => (5, 0) and store value of juice var in the appleJuice var
console.log(appleJuice); // log to the console => (5, 0) and Juice with 5 apples and 0 oranges.

// example 7 - IIFE
(function () {
	console.log("This will never run again");
})();
(function (name) {
	console.log(`Hello ${name}`);
})("Osama");
/*
IIFE stands for Immediately Invoked Function Expression. It is a common pattern used in JavaScript to create a function and execute it immediately. This pattern helps create a local scope for variables and avoid polluting the global scope.

The main advantage of using an IIFE is that it encapsulates variables and functions within its own scope. This way, any variables or function declarations inside the IIFE do not interfere with other variables or functions outside of it. It helps prevent naming collisions and promotes better code organization.

IIFEs are often used to create modules or to provide private encapsulation for certain code snippets. They are also frequently used in older JavaScript code or when working in environments that do not support modern JavaScript features like modules or block-scoped variables (prior to the introduction of let and const).

It's worth mentioning that with the introduction of modules in ES6, the use of IIFEs has become less common. Modules provide a built-in mechanism for encapsulation and scoping, making IIFEs less necessary in modern JavaScript development.
*/

// Return

//Return 1
function sayHello3(userName) {
	return `Hi ${userName}`;
	console.log("5"); // Unreachable code
}
console.log(sayHello3("amr"));

//Return 2
function calc1(num1, num2) {
	return num1 + num2;
	console.log("5"); // Unreachable code
}
let result3 = calc1(5, 9);
console.log(result3 + 100);

//Return 3
let agepp = prompt('How old are you?', 18);
function checkAge(agepp) {
	if (agepp >= 18) {
		return true;
	} else {
		return confirm('Do you have permission from your parents?');
	}
}
if (checkAge(agepp)) {
	alert('Access granted');
} else {
	alert('Access denied');
}
function showMovie(agepp) {
	if (!checkAge(agepp)) {
		return;
	}
	alert("Showing you the movie"); // In the code above, if checkAge(agepp) returns false, then showMovie won’t proceed to the alert.
}

// Automatic Semicolon Insertion (ASI) [No Line Terminator Allowed]
function calc2(num1, num2) {
	return // ASI
	num1 + num2; // Unreachable code - no line terminator
}
console.log(calc2()); // undefined
console.log(calc2); // function structure

// Automatic Semicolon Insertion (ASI) [No Line Terminator Allowed]
function getGameObject1(){
	return
	{name: 'Fornicate'}; // Unreachable code
}
console.log(getGameObject2()); // undefined - To avoid this issue in returning object, put the { on the same line as the return statement:
function getGameObject2(){
	return {
		name: 'Fornicate'
	};
	return (
		some + long + expression
		+ or +
		whatever * f(a) + f(b)
	);
}
console.log(getGameObject2()); //{name: "Fornicate"}

// Interrupting
function generate(start, end) {
	for (let i = start; i <= end; i++) {
		if (i === 15) {
			return `Interrupting`; // stop - like break;
		}
		console.log(i);
	}
}
console.log(generate(10, 20)); // 10 11 12 13 14 Interrupting

// A function with an empty return or without it returns undefined: If a function does not return a value, it is the same as if it returns undefined
function doNothing() {/* empty */}
alert(doNothing() === undefined); // true
// An empty return is also the same as return undefined
function doNothing() {
	return;
}
alert(doNothing() === undefined); // true

/*
Default Function Parameters

=> Function Parameters Default [Undefined]
=> Old Strategies [Condition + Logical Or]
=> ES6 Method

Evaluation of default parameters: In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter. In the example above, anotherFunction() isn’t called at all, if the text parameter is provided. On the other hand, it’s independently called every time when text is missing.
*/

// example 1
function sayHello55(username = "Unknown", age = "Unknown") { // strategy 3 - ES6
	if (age === undefined || username === undefined) { // strategy 1 - Condition
		age = "Unknown";
		username = "Unknown";
	}
	age = age || "Unknown";  // strategy 21 - || / ??
	username = username ?? "Unknown";
	return `Hello ${username ?? "Unknown"} Your Age Is ${age || "Unknown"}`;  // strategy 22 - || / ??
}
console.log(sayHello55()); // Hello Unknown Your Age Is Unknown

// example 2
function testArgs14() {
	//return arguments; // Arguments(6) ['Osama', 'Ahmed', 'sayed', 1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
	console.log(arguments[0]); // Osama
}
testArgs14("Osama", "Ahmed", "sayed", 1, 2, 3);

// example 3
function showMessage444(from, text) {
	from = '*' + from + '*'; // make "from" look nicer
	alert( from + ': ' + text );
}
let from = "Ann";
showMessage444(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann
// When a value is passed as a function parameter, it’s also called an argument. In other words, to put these terms straight: A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term). An argument is the value that is passed to the function when it is called (it’s a call time term). We declare functions listing their parameters, then call them passing arguments. In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"".
function showMessage144(from, text = "no text given") {
	alert( from + ": " + text );
}
showMessage144("Ann"); // Ann: no text given
// Now if the text parameter is not passed, it will get the value "no text given".The default value also jumps in if the parameter exists, but strictly equals undefined, like this:
showMessage144("Ann", undefined); // Ann: no text given
// Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:
function showMessage15(from, text = anotherFunction()) {
	// anotherFunction() only executed if no text given
	// its result becomes the value of text
}

// Function expression - It allows us to create a new function in the middle of any expression - Function is a value.
/*
Function is a value
- no matter how the function is created, a function is a value We can even print out that value using alert:
	function sayHi() {
		alert( "Hello" );
	}
	alert( sayHi ); // shows the function code
	Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.
- In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code. Surely, a function is a special value, in the sense that we can call it like sayHi(). But it’s still a value. So we can work with it like with other kinds of values.
	We can copy a function to another variable:
	function sayHi() {   // (1) create
		alert( "Hello" );
	}
	let func = sayHi;    // (2) copy
	func(); // Hello     // (3) run the copy (it works)!
	sayHi(); // Hello    // this still works too (why wouldn't it)
	Here’s what happens above in detail: The Function Declaration (1) creates the function and puts it into the variable named sayHi. Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself. Now the function can be called as both sayHi() and func().
	We could also have used a Function Expression to declare sayHi
	let sayHi = function() { // (1) create
	alert( "Hello" );
	};
	let func = sayHi;
*/

const calcAge2 = function (birthYeah) {
	return 2037 - birthYeah;
}; // The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.
const age2 = calcAge2(1991); // can not call Function declaration before it
console.log(age2);

// Function Expression vs Function Declaration

// 1. First, the syntax: how to differentiate between them in the code. Function Declaration: a function, declared as a separate statement, Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =
function sum818(a, b) {
	return a + b;
}
let sum99 = function(a, b) {
	return a + b;
};

// 2. The more subtle difference is when a function is created by the JavaScript engine.
/*
A Function Expression is created when the execution reaches it and is usable only from that moment. Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on. Function Declarations are different.
A Function Declaration can be called earlier than it is defined. For example, a global Function Declaration is visible in the whole script, no matter where it is. That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So it has access to these functions.
*/
sayHi36("John"); // Hello, John
function sayHi36(name) {
	alert( `Hello, ${name}` );
} // The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it. …If it were a Function Expression, then it would not work:
sayHi("John"); // error!
let sayHi = function(name) {  // (*) no magic any more
	alert( `Hello, ${name}` );
}; //Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

// 3. Another special feature of Function Declarations is their block scope. In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it. For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later. If we use Function Declaration, it won’t work as intended:
let age66 = prompt("What is your age?", 18);
if (age66 < 18) {
	function welcome65() { // conditionally declare a function
		alert("Hello!");
	}
} else {
	function welcome65() { // conditionally declare a function
		alert("Greetings!");
	}
}
welcome65(); // Error: welcome is not defined. That’s because a Function Declaration is only visible inside the code block in which it resides
let age99 = 16; // take 16 as an example
if (age99 < 18) {
	welcome99();               // \   (runs)//  |
	function welcome99() {     //  |
		alert("Hello!");         //  |  Function Declaration is available
	}                          //  |  everywhere in the block where it's declared//  |
	welcome99();               // /   (runs)
} else {
	function welcome99() {
		alert("Greetings!");
	}
}
welcome99(); // Error: welcome is not defined - Here we're out of curly braces, so we can not see Function Declarations made inside them.
let age57 = prompt("What is your age?", 18);
let welcome57; // What can we do to make welcome visible outside of if? The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility. This code works as intended
if (age57 < 18) {
	welcome57 = function() {
		alert("Hello!");
	};
} else {
	welcome57 = function() {
		alert("Greetings!");
	};
}
welcome57(); // ok now
let age58 = prompt("What is your age?", 18);
let welcome58 = (age58 < 18) ? // Or we could simplify it even further using a question mark operator ?
		function() { alert("Hello!"); } :
		function() { alert("Greetings!"); };
welcome58(); // ok now

// Nested Function

// example 1
function sayMessage189(fName, lName) {
	let message = `Hello`;
	// Nested Function
	function concatMsg() {
		message += `${fName} ${lName}`;
		return message;
	}
	concatMsg();
}
console.log(sayMessage189("Osama", "Mohamed")); // undefined

// example 2
function sayMessage198(fName, lName) {
	let message = `Hello`;
	// Nested Function
	function concatMsg() {
		message += ` ${fName} ${lName}`;
	}
	concatMsg(); // update message
	return message;
}
console.log(sayMessage198("Osama", "Mohamed")); // Hello Osama Mohamed

// example 3
function sayMessage2(fName, lName) {
	let message = `Hello`;
	// Nested Function
	function concatMsg() {
		return `${message} ${fName} ${lName}`;
	}
	return concatMsg();
}
console.log(sayMessage2("Osama", "Mohamed"));

// example 4
function sayMessage(fName, lName) {
	let message = `Hello`;
	// Nested Function
	function concatMsg() {
		// Nested Function
		function getFullName() {
			return `${fName} ${lName}`;
		}
		return `${message} ${getFullName()}`;
	}
	return concatMsg();
}
console.log(sayMessage("Osama", "Mohamed"));

/*
Callback functions

- Callback is a function executed after another function has finished executing, because in js function is first class object they can take a function as an argument that is called call-back function
- call back hell is phenomenon where multiple callbacks are nested after each other, which makes code impossible to read
*/

// example 1
function ask44(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}
function showOk() {
	alert( "You agreed." );
}
function showCancel() {
	alert( "You canceled the execution." );
}
ask44("Do you agree?", showOk, showCancel); // usage: functions showOk, showCancel are passed as arguments to ask

// example 2 - In practice, such functions are quite useful. The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, such functions usually draw a nice-looking question window. But that’s another story. The arguments showOk and showCancel of ask are called callback functions or just callbacks. The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer. We can use Function Expressions to write an equivalent, shorter function:
function ask55(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}
ask55(
		"Do you agree?",
		function() { alert("You agreed."); },
		function() { alert("You canceled the execution."); }
);// Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here. Such code appears in our scripts very naturally, it’s in the spirit of JavaScript.

// Functions Calling Other Functions

// example 1
function cutFruitPieces(fruit) {
	return fruit * 4;
}
function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
	return juice;
}
console.log(fruitProcessor(2, 3));

// example 2
const calcAge = function (birthYeah) {
	return 2037 - birthYeah;
}
const yearsUntilRetirement2 = function (birthYeah, firstName) {
	const age = calcAge(birthYeah);
	const retirement = 65 - age;
	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`); // will be executed
		return retirement;
	} else {
		return -1;
		console.log(`${firstName} has already retired 🎉`); // unreachable code
	}
}
console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));

/*
Defining Two Functions With the Same Name

If you are coming from a language like Java or .NET where methods can be overloaded, you may try to create two functions with the same name but different signatures and expect the language to select the right one based on the provided arguments.
*/

function sum88(a, b) {
	return a + b;
}
function sum88(a, b, c) {
	return a + b + c;
}
const total = sum88(1, 2);
console.log(total); // NaN (1+2+undefined) The result of invoking sum(1, 2) is NaN. Let’s understand why. First, functions in JavaScript are not necessarily methods. In this example, they are just independent functions. Second, there is no support for overloading functions in the language. When we define several functions with the same name, the last one overrides all the other definitions. When invoking the function, the last defined function is invoked

/*
Rest Parameters - act as array

=> Only One Allowed
=> Must Be Last Element
*/

// example 1
function calc13(...numbers) {
	console.log(Array.isArray(numbers)); // array
	for (let i = 0; i < numbers.length; i++) {
		console.log(numbers[i]);
	}
}
calc13(10, 20, 10, 30, 50, 30); // 10 20 10 30 50 30

// example 2
function calc23(...numbers) {
	console.log(Array.isArray(numbers)); // array
	let result = 0;
	for (let i = 0; i < numbers.length; i++) {
		result += numbers[i]; // result = result + numbers[i]
	}
	return `Final Result Is ${result}`;
}
console.log(calc23(10, 20, 10, 30, 50, 30));

// example 3
function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
	document.write(`<div>`);
	document.write(`<h2>Welcome, ${us}</h2>`);
	document.write(`<p>Age: ${ag}</p>`);
	document.write(`<p>Hour Rate: $${rt}</p>`);
	if (show === "Yes") {
		if (sk.length > 0) {
			document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
		} else {
			document.write(`<p>Skills: No Skills</p>`);
		}
	} else {
		document.write(`<p>Skills Is Hidden</p>`);
	}
	document.write(`</div>`);
}
showInfo("Osama", 38, 20, "No", "Html", "CSS");

/*
Arrow Function - do not have a name

the return actually happens implicitly. So value will automatically be returned without us having to explicitly write the return keyword.

Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors: Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2. With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.

does not have this keyword
*/

// example 1
let print1 = function () { // Regular Function
	return 10;
};
let print896 = () => { // Arrow Function
	console.log("10");
	return 10;
};
let print11 = () => 10; // Arrow Function (without param) - one statement
let print111 = (_) => 10; // Arrow Function (without param) - one statement
let print1111 = _ => 10; // Arrow Function (without param) - one statement

// example 2
let print2 = function (num) { // Regular Function
	return num;
};
let print22 = (num) => num; // Arrow Function (one param)
let print222 = num => num; // Arrow Function (one param)

// example 3
let print3 = function (num1, num2) { // Regular Function
	return num1 + num2;
};
let print33 = (num1, num2) => num1 + num2; // Arrow Function (more than one param)

// example 4
(() => {let x = 5; console.log(x);})();
(() => console.log(10))();

// example 5
(() => {let x = (y = 10);})();
console.log(typeof x); // undefined - undefined
console.log(typeof y); // 10 - number

// example 6
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);
const yearsUntilRetirement = (birthYeah, firstName) => {
	const age = 2037 - birthYeah;
	const retirement = 65 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

// example 7
let sumuu = (a, b) => {  // the curly brace opens a multiline function
	let resultuu = a + b;
	return resultuu; // if we use curly braces, then we need an explicit "return"
};
alert(sumuu(1, 2)); // 3

/*
And here we have the three type of functions that we talked about. So we have
- first, the function declaration, and one particularity about function declarations is that they can be used before they are declared in the code.
- Second, we have the function expressions, and they are essentially function values that are stored in a variable.
- And finally, we have arrow functions that are in fact also function expressions, but special ones. And these are great for quick one line functions where we don't need to explicitly use the return keyword and no curly braces either. I also said that this one has no this keyword
Now what's important to note here is that these are three different ways of writing functions, but they all work in a similar way. So all of them can receive input data, they transform data, and then they can output data. It's all optional, but usually that's the things that functions do. And no matter which type of function we use, we can always do these three things
*/

// Function Review
function calcAgeR(birthYeah, firstname) {
	const age = 2037 - birthYeah;
	console.log(`${firstname} is ${age} years old`);
	return age;
}
const ageR = calcAgeR(1991, "Jonas");
/*
This one here is a function statement, but it works the exact same way for all other types of functions again. So first, usually a function needs a function name. So calcAge in this example, then a function also has parameters. And these parameters are essentially placeholders that receive input values. So, as I said before, these are a little bit like local variables of a function. So variables that are defined only inside this very function. Now, as you also already know, we use functions to reuse pieces of code, and these pieces of code are inside the function body. So this is where the functions input data is usually processed and then returned. And speaking of the return, by the end of the function, we usually have a return statement, which we use to output a value from the function. And also, as I mentioned a little bit earlier, the return statement also immediately terminates the function's execution. We also say that the function returns, okay. And now about calling the function, we do that using parenthesis. So we write the name of the function like we did here with calcAge and then with a parenthesis we call the function. Because without the parenthesis, the function is really just a value. But then with the parenthesis, we actually called a function. And we can also say that we run the function or invoke a function or execute a function. And all of these terms kind of mean the samething. Now, in this case, since the function actually has parameters, we then call the function with arguments and these arguments are the actual values of the function parameters. So we use these to input the actual data into the function. And we can also imagine this as replacing the placeholders that are the parameters. Then, once the calcAge function has finally done its job, then all these expressions will basically be replaced with the returned value. So in this case, the age that was replaced here. And that age value is what we then store into this age variable. So we use this variable to basically save the returned value from the function.

Now just one other thing that I want to make clear is that this console dot log that we have in the function. So in that first line, there has nothing to do with returning a value. This simply prints a message to the developer console, but it has nothing to do with returning. Actually, the console dot log is actually just another function call inside the calcAge function because console dot log is itself a function. And so the argument that we pass into the console dot log function is what will get printed to the developer console. Okay. So just wanted to make sure that you really get this distinction between console dot log and return.
*/

// Anonymous Function

// example 1
console.log(calculator1(10, 20)); // let: error (can not access calculator1 before initialization) - var: error (calculator1 is not a function)
let calculator1 = function (num1, num2) { // Anonymous Function
	return num1 + num2;
};
console.log(calculator1(10, 20)); // 30

// example 2
let calculator2 = function elzero(num1, num2) { // naming Anonymous Function to just trace errors
	return num1 + num2;
};
console.log(elzero(10, 20)); // error - elzero is not defined - hoisting issue
console.log(calculator2(10, 20)); // 30

// 1. Anonymous Function - made for this task only
document.getElementById("show").onclick = function () {
	console.log("Hello Osama");
};
// 2. Anonymous Function - will be called only one time in a project
setTimeout(function () {
	console.log("Good");
}, 2000);

/*
Summary

A function declaration looks like this:
	function name(parameters, delimited, by, comma) {
		// code
	}
Values passed to a function as parameters are copied to its local variables.
	A function may access outer variables. But it works only from inside out. The code outside the function doesn’t see its local variables.
	A function can return a value. If it doesn’t, then its result is undefined.
To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables. It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.
Function naming:
	A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
	A function is an action, so function names are usually verbal.
	There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.
Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.

Functions are values. They can be assigned, copied or declared in any place of the code.
	If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
	If the function is created as a part of an expression, it’s called a “Function Expression”.
	Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
	Function Expressions are created when the execution flow reaches them.
	In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.
	So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.
*/

// Global And Local Scope

// example 1
var at = 1; // global scope
let bs = 2; // global scope
const rt = 3; // global scope
var ato = 1; // global scope
let bso = 2; // global scope
const rto = 3; // global scope
function showText1() {
	var at = 10; // local scope
	let bs = 20; // local scope
	const rt = 30; // local scope
	ato = 10; // update global
	bso = 20; // update global
	/* rto = 30; // error */
	console.log(`Function - From Local ${at}`); // access [at] in local scope first, if it does not exist it will access [at] at global scope
	console.log(`Function - From Local ${bs}`); // access [bs] in local scope first, if it does not exist it will access [bs] at global scope
	console.log(`Function - From Local ${rt}`); // access [rt] in local scope first, if it does not exist it will access [rt] at global scope
	console.log(`Function - From Local ${ato}`); // access [ato] in local scope
	console.log(`Function - From Local ${bso}`); // access [bso] in local scope
	console.log(`Function - From Local ${rto}`); // access [rto] in global scope only
// The outer variable is only used if there’s no local one. If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:
	console.log(`Function - From Local ${att}`); // undefined
	console.log(`Function - From Local ${bss}`); // error
	console.log(`Function - From Local ${rtt}`); // error
	var att = 10; // local scope
	let bss = 20; // local scope
	const rtt = 30; // local scope
}
console.log(`${at}`); // 1
console.log(`${bs}`); // 2
console.log(`${rt}`); // 3
console.log(`${att}`); // error
console.log(`${bts}`); // error
console.log(`${rtt}`); // error
console.log(`${ato}`); // 1
console.log(`${bso}`); // 2
console.log(`${rto}`); // 3
showText1();
console.log(`${at}`); // 1
console.log(`${bs}`); // 2
console.log(`${rt}`); // 3
console.log(`${att}`); // error
console.log(`${bts}`); // error
console.log(`${rtt}`); // error
console.log(`${ato}`); // 10
console.log(`${bso}`); // 20
console.log(`${rto}`); // 3

// example 2
let userName7 = 'John';
function showMessage() {
	userName7 = "Bob"; // (1) changed the outer variable
	let message = 'Hello, ' + userName7;
	alert(message);
}
alert(userName7); // John before the function call
showMessage();
alert(userName7); // Bob, the value was modified by the function

// example 3
let userName77 = 'John';
function showMessage() {
	userName77 = "Bob"; // (1) changed the outer variable
	let message77 = 'Hello, ' + userName77;
	alert(message77);
}
alert(userName77); // John before the function call
showMessage();
alert(userName77); // Bob, the value was modified by the function

// example 4
var ata = 1;
let bsa = 2; // or const
function showText2() {
	ata = 15;
	bsa = 15;
}
console.log(`${ata}`); // 1
console.log(`${bsa}`); // 2
console.log(`${rta}`); // 3

// example 5 - parameter(local scope) example
function showMessage(from, text) {
	from = '*' + from + '*'; // make "from" look nicer
	alert( from + ': ' + text );
}
let from5 = "Ann";
showMessage(from5, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
alert(from5); // Ann

/*
Summary

The outer variable is only used if there’s no local one. If a same-named variable is declared inside the function then it shadows the outer one. Global variables are visible from any function (unless shadowed by locals). It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.
*/

// Lexical (Static) Scope

function parent() {
	let a = 10;
	function child() {
		console.log(a); // 10 - parent
		console.log(`From Child ${b}`); // can not access to variable b in the grand scope
		function grand() {
			let b = 100;
			console.log(`From Grand ${a}`); // 10 - parent
			console.log(`From Grand ${b}`); // 100 - grand
		}
		grand();
	}
	child();
}
parent();

/*
Different Types of JavaScript Functions

1. Function Statement or Function Declaration
	function child() {
	console.log(a);
}

2. Function Expression
let print1 = function () {
	return 10;
};

In memory allocation phase function statement/Function Declaration stores whole function as a value
In Memory allocation phase , function expression is initialized with “undefined” because they are stored in a variable. Hence, Function expression is considered as variable.

3.  Anonymous Functions?

4. Named Function Expression
	let print1 = function sum(x, y) {
	return x+y;
};
sum(10,20); // 30
It is same as Function expression , But a name is given to a Function expression , so it called as Named Function Expression

5. First class function:
When we pass function as an argument of another function called first class function. The ability to use function as a values known as first class function.
var a = function(parameter){
	return function(){
	}
}
console.log(a());

6. Higher-order Functions
Higher-Order Function: A function that receives another function as an argument or that returns a new function or both is called Higher-order functions. Higher-order functions are only possible because of the First-class function.
const greet = function(name){
	return function(m){
		console.log(`Hi!! ${name}, ${m}`);
	}
}
const greet_message = greet('ABC');

Difference between First class and higher order:-
First Class functions can:
	Be stored in variables
	Be returned from a function.
	Be passed as arguments into another function.
Higher-Order Function:
	A function that receives another function as an argument or that returns a new function or both is called Higher-order functions. Higher-order functions are only possible because of the First-class function.

For example:
1st example only returns another function :-
function highOrderFunc() {
	return function () {
		alert('hello');
	};
}
2nd example receives and returns a function
const greet = function(name){
	return function(m){
	console.log(`Hi!! ${name}, ${m}`);
	}
}
const greet_message = greet('ABC');

7. Arrow Functions
In Memory allocation phase , arrow function is initialized with “undefined” because they are stored in a variable. The arrow function is considered as variable.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* JavaScript specials: https://javascript.info/javascript-specials*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* numbers: javascript stores numbers as a double precision */

// Syntactic Sugar / e / ** / Decimal
console.log(1_000_000); // javascript ignore _ between digits
console.log(1e6); // 1 million
console.log(1e+6); // 1 million
console.log(1e-6); // 0.000001
console.log(10 ** 6); // 1 million
console.log(10 * 10 * 10 * 10 * 10 * 10); // 1 million
console.log(1000000.0); // 1000000 - integer - javascript ignore 0 on the right
console.log(1000000.01); // print 10000000.01

// number function - An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers
console.log(Number("100")); // 100 - number - like unary+ operator
console.log(Number("100.5")); // 100.5 - number - like unary+ operator
console.log(Number("100 Osama")); // NaN - like unary+ operator

// Max & Min Safe Int
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (16 digit)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 (16 digit)

// Max Value - The largest number that can be represented in JavaScript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE + 23434343434); // the same

// Min Value - The closest number to zero that can be represented in JavaScript
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_VALUE + 89); // 89 - deal with (Number.MIN_VALUE) as a zero
console.log(Number.MIN_VALUE - 89); // -89 - deal with (Number.MIN_VALUE) as a zero
console.log(Number.MIN_VALUE * 2); // deal with (Number.MIN_VALUE) as its real value
console.log(Number.MIN_VALUE / 0); // Infinity
console.log(Number.MIN_VALUE / 1); // 5e-324 - deal with (Number.MIN_VALUE) as its real value
console.log(Number.MIN_VALUE / 2); // 0 - deal with (Number.MIN_VALUE) as a zero

console.log(typeof Number); // function  - return number

/*
Number Methods

=> toString()
=> toFixed()
=> parseInt()
=> parseFloat()
=> isInteger() [ES6]
=> isNaN() [ES6]
*/

// toString() - Returns a string representation of an object.
console.log((100).toString()); // string - 100
console.log(100..toString()); // string - 100.
console.log((100.01).toString()); // string - 100.01
console.log((100.1).toString()); // string - 100.1

// toFixed() - Returns a string representing a number in fixed-point notation.
console.log((100.554555).toFixed(2)); // string - 100.55
console.log((100.556555).toFixed(2)); // string - 100.56
console.log((100.554555).toFixed(0)); // string - 101
console.log((100.554555).toFixed()); // string - 101
console.log((100.154555).toFixed()); // string - 100

// parseInt() - Converts a string to an integer.
console.log(Number("100 Osama")); // NaN
console.log(+"100 Osama"); // NaN
console.log(parseInt("100 Osama")); // number(INT) - 100
console.log(parseInt("100.500 Osama")); // number(INT) - 100
console.log(parseInt("Osama 100 Osama")); // NaN

// parseFloat() - Converts a string to a floating-point number.
console.log(parseFloat("100.500 Osama")); // number - 100.5

// isInteger() [ES6] - Returns true if the value passed is an integer, false otherwise.
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100)); // true
console.log(Number.isInteger(100.5)); // false

/*
=> isNaN() [ES6] - (function) Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number)

=> Number.isNaN() - (method) Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter to a number. Only values of the type number, that are also NaN, result in true.

=> isNaN() is a global function in JavaScript that determines whether a value is NaN (Not a Number). Number.isNaN() is a function that does the same thing, but it is a method of the Number object, and it is more reliable than the global isNaN() function. It is more robust and can handle the case where the type of the value is not a number.

=> Number.isNaN() will only return true if the value passed to it is NaN and its type is Number, whereas isNaN() will return true for any value that is not a number, including non-numeric strings.
*/

console.log(isNaN("Osama")); // true
console.log(isNaN("Osama" / 20)); // true
console.log(isNaN(20)); // false
console.log(isNaN('20')); // false
let number11 = NaN;
console.log(isNaN(number11)); // true
console.log(isNaN(NaN)); // true

console.log(Number.isNaN("Osama")); // false
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN("Osama" / 20)); // true

/*
Math Object

=> round() - Returns a supplied numeric expression rounded to the nearest integer.
=> trunc() [Es6] - Returns the integral part of the numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.
=> ceil() - Returns the smallest integer greater than or equal to its numeric argument.
=> floor() - Returns the greatest integer less than or equal to its numeric argument.
=> min() - Returns the smallest of a set of supplied numeric expressions.
=> max() - Returns the largest of a set of supplied numeric expressions.
=> pow() - Returns the value of a base expression taken to a specified power.
=> random() - Returns a pseudorandom number between 0 and 1.
*/

console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100

console.log(Math.trunc(99.5)); // 99 - cut the decimal

console.log(Math.ceil(99.2)); // 100

console.log(Math.floor(99.9)); // 99

console.log(Math.min(10, 20, 100, -100, 90)); // -100

console.log(Math.max(10, 20, 100, -100, 90)); // 100

console.log(Math.pow(2, 4)); // 2**4

console.log(Math.random());
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
console.log(Math.ceil(Math.random() * 5)); // 1 || 2 || 3 || 4 || 5

/*
Decimal Arithmetic Is Inexact

Sometimes we may forget that decimal arithmetic is inexact in JavaScript. You need to be aware of that and avoid related issues.
Consider the following equality that is false:
	console.log(0.1 + 0.2 === 0.3); //false
That’s because 0.1 + 0.2 makes something like 0.30000000000000004. As another example, 0.3 — 0.1 makes 0.19999999999999998.
The integer arithmetic is exact, so we can use it to avoid the previous issue. In our case, we multiply and then divide by 10:
	console.log( (0.1*10 + 0.2*10)/10  === (0.3*10)/10 ); //true
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
String (sequence) Methods

=> Index - Returns the character at the specified index - undefined

=> charAt() - Returns the character at the specified index - empty string

=> length - Returns the length of a String object - return number

=> trim() - Removes the leading and trailing white space and line terminator characters from a string

=> toUpperCase() - Converts all the alphabetic characters in a string to uppercase

=> toLowerCase() - Converts all the alphabetic characters in a string to lowercase

=> indexOf(Value [Mand], Start [Opt] def 0) - Returns the position of the first occurrence of a substring
	* @param searchString - The substring to search for in the string
	* @param position - The index at which to begin searching the String object. If omitted, search starts at the beginning of the string

=> lastIndexOf(Value [Mand], Start [Opt] def -1) - Returns the last occurrence of a substring in the string
	* @param searchString - The substring to search for in the string
	* @param position - The index at which to begin searching. If omitted, the search begins at the end of the string

=> slice(Start [Mand], End [Opt] Not Include End) - Returns a section of a string - empty string
	* @param start - The index to the beginning of the specified portion of stringObj.
	* @param end - The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj

=> repeat(Times) [ES6] - Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
	* @param count - number of copies to append

=> split(Separator [Opt], Limit [Opt]) - Split a string into substrings using the specified separator and return them as an array.
	* @param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
	* @param limit — A value used to limit the number of elements returned in the array.

=> substring(Start [Mand], End [Opt] Not Including End) - Returns the substring at the specified location within a String object.
	* Start > End => Swap
	* Start < 0 => Start From 0

=> substr(Start [Mand], Characters To Extract) - Gets a substring beginning at the specified location and having the specified length - deprecated
	* Start >= Length = ""
	* Negative Start From End

=> includes(Value [Mand], Start [Opt] Default 0) [ES6] - Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
	* @param searchString — search string
	* @param position — If position is undefined, 0 is assumed, to search all the String

=> startsWith(Value [Mand], Start [Opt] Default 0) [ES6] - Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise, returns false

=> endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6] - Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise, returns false
*/

let theName = "  Ahmed  ";

console.log(theName[1]); // space as a string
console.log(theName[5]); // e
console.log(theName[19]); // undefined

console.log(theName.charAt(1)); // space as a string
console.log(theName.charAt(5)); // e
console.log(theName.charAt(19)); // empty string

console.log(theName.length); // 9 - spaces calculated

console.log(theName.trim()); // Ahmed
let rty = " 123456 "
console.log((rty).trim()); // 123456

console.log(theName.toUpperCase()); // AHMED

console.log(theName.toLowerCase()); // ahmed

console.log(theName.trim().charAt(2).toUpperCase()); // M - chain method

let t = "Elzero Web School";

console.log(t.indexOf("Web")); // 7
console.log(t.indexOf("Web", 8)); // -1 = not found
console.log(t.indexOf("o")); // 5

console.log(t.lastIndexOf("o")); // 15
console.log(t.lastIndexOf("o", 9)); // 5 - same as indexOf
console.log(t.lastIndexOf("y")); // -1 = not found

console.log(t.slice(2, 6)); // zero
console.log(t.slice(2, 36)); // zero Web School
console.log(t.slice(-5, -3)); // ch
console.log(t.slice(-5, 3)); // empty string
console.log(t.slice(-25, -3)); // Elzero Web Sch
console.log(t.slice(-25, 3)); // Elz : 0 - 3

console.log(t.repeat(5));
let oo = 21;
let yy = 20;
let ee = `${yy}${oo}_`;
console.log(`_${oo}_${ee.repeat(3)}${yy}_`); // _21_2021_2021_2021_20_
console.log(t.repeat(0)); // empty string
console.log(t.repeat()); // empty string

console.log(t.split()); // array - ["Elzero Web School"]
console.log(t.split("")); // array - ["e", "l", "z", "e", "r", "o", " ", "w", ..........]
console.log(t.split("", 6)); // array - ["e", "l", "z", "e", "r", "o"]
let ttt = "Elzero | Web | School";
console.log(ttt.split("|", 2)); // array - ['Elzero ', ' Web ']
console.log(ttt.split(" | ", 2)); // array - ['Elzero', 'Web']

let zpp = "Elzero Web School";

console.log(zpp.substring(2, 6)); // zero
console.log(zpp.substring(6, 2)); // swap - zero
console.log(zpp.substring(-10, 6)); // 0 - 6 : Elzero
console.log(zpp.substring(zpp.length - 5, zpp.length - 3)); // ch

console.log(zpp.substr(0, 6)); // Elzero
console.log(zpp.substr(17)); // empty string
console.log(zpp.substr(-3)); // ool
console.log(zpp.substr(-5, 2)); // ch

console.log(zpp.includes("Web")); // true
console.log(zpp.includes("Web", 8)); // false

console.log(zpp.startsWith("E")); // true
console.log(zpp.startsWith("E", 2)); // false
console.log(zpp.startsWith("zero", 2)); // false

console.log(zpp.endsWith("l")); // true
console.log(zpp.endsWith("ro", 5)); // false

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* Arrays: Create Arrays with Two Methods => new Array() - [] */

const friends40 = ['Michael', 'Steven', 'Peter'];
const firstName40 = 'Jonas';
const jonas40 = [firstName40, 'Schmedtmann', 2037 - 1991, 'teacher', friends40];
console.log(jonas40); // js expect expressions inside array

const calcAge5 = function (birthYeah) {
	return 2037 - birthYeah;
}
const years5 = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge5(years5)); // NaN
console.log(years5 + 10); // "1990,1967,2002,2010,201810"
const age15 = calcAge5(years5[0]);
const age25 = calcAge5(years5[1]);
const age35 = calcAge5(years5[years5.length - 1]);
console.log(age15, age25, age35);
const ages1 = [age15, age25, age35];
const ages2 = [calcAge5(years[0]), calcAge5(years[1]), calcAge5(years[years.length - 1])];
console.log(ages1, ages2);

let myFriends12 = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// Access Arrays Elements & Nested Arrays
console.log(`Hello ${myFriends12[0]}`); // Ahmed
console.log(`Hello ${myFriends12[2]}`); // Sayed
console.log(`${myFriends12[1][2]}`); // h
console.log(`Hello ${myFriends12[3][1]}`); // Ali
console.log(`${myFriends12[3][1][2]}`); // i

// Change Arrays Elements - we can actually mutate Arrays even though they were declared with const. we can not replace the entire Array.
myFriends12[1] = "Gamal";
console.log(myFriends12); // ["Ahmed", "Gamal", "Sayed", ["Marwan", "Ali"]]
myFriends12[3] = ["Sameh", "Ameer"];
console.log(myFriends12); // ["Ahmed", "Mohamed", "Sayed", ["Sameh", "Ameer"]]
myFriends12[3] = 5;
console.log(myFriends12); // ["Ahmed", "Mohamed", "Sayed", 5]
myFriends12[9] = "Saad";
console.log(myFriends12); // will add "saad" to index 9 in the array and the length will be now 10
console.log(myFriends12.length); // 10

// Check For Array: Array.isArray(arr);
console.log(Array.isArray(myFriends12)); // true

// Length property - brackets accepts expression
let myFriends6 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
myFriends6[myFriends6.length] = "Gamal"; // add element in the last pos of array
console.log(myFriends6); // ["Ahmed", "Mohamed", "Sayed", "Alaa", "Gamal"]
myFriends6[myFriends6.length - 1] = "yaseen"; // update the last element of array
console.log(myFriends6); // ["Ahmed", "Mohamed", "Sayed", "Yaseen"]
myFriends6.length = 2; // control the length of array
console.log(myFriends6); // ["Ahmed", "Mohamed"]

/*
Arrays Methods

=> unshift("", "") Add Element To The First

=> push("", "") Add Element To The End

=> shift() Remove First Element From Array

=> pop() Remove Last Element From Array
*/

let myFriends5 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriends5);

let lengthNew1 = myFriends5.unshift("Osama", "Nabil"); // return the new length
console.log(myFriends5); // ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa"]
console.log(lengthNew1); // 6

let lengthNew2 = myFriends5.push("Samah", "Eman"); // return the new length
console.log(myFriends5); // ["Osama", "Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"]
console.log(lengthNew2); // 8

let first1 = myFriends5.shift(); // return element deleted - undefined if the array is empty.
console.log(myFriends5); // ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah", "Eman"]
console.log(`First Name Is ${first1}`); // Osama

let last1 = myFriends5.pop(); // return element deleted - undefined if the array is empty.
console.log(myFriends5); // ["Nabil", "Ahmed", "Mohamed", "Sayed", "Alaa", "Samah"]
console.log(`Last Name Is ${last1}`); // Eman

/*
Arrays Methods

=> indexOf(Search Element, From Index [Opt]) - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present

=> lastIndexOf(Search Element, From Index [Opt]) - The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex

=> includes(valueToFind, fromIndex [Opt]) [ES7] - The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate - uses strict equality
*/

let myFriends22 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
console.log(myFriends22);

console.log(myFriends22.indexOf("Ahmed")); // 0
console.log(myFriends22.indexOf("Ahmed", 2)); // 4
console.log(myFriends22.indexOf("Ahmed", -2)); // 4
console.log(myFriends22.indexOf("Ahmed", 9)); // -1 (if not found)
console.log(myFriends22.indexOf("Osama")); // -1

console.log(myFriends22.lastIndexOf("Ahmed")); // 4
console.log(myFriends22.lastIndexOf("Ahmed", -2)); // 0
console.log(myFriends22.lastIndexOf("Ahmed", -9)); // -1 (if not found)
console.log(myFriends22.lastIndexOf("Osama")); // -1
myFriends22.lastIndexOf("Osama") === -1 ? console.log("Not Found") : "found";

console.log(myFriends22.includes("Ahmed")); // true
console.log(myFriends22.includes("Ahmed", 9)); // false
if (friends.includes('Steven')) {
	console.log('You have a friend called Steven');
}

// advanced example
let num = [1, 3, 5];
for (let i = 1; i <= 5; i++) {
	if (!num.includes(i)) {
		num.push(i);
	}
	num.sort();
}
console.log(num); // [1, 2, 3, 4, 5]

/*
Arrays Methods

=> sort(Function [Opt]) - The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values - Returns: The sorted array. Note that the array is sorted in place , and no copy is made

=> reverse - The reverse() method reverses an array in place . The first array element becomes the last, and the last array element becomes the first - Returns: The reversed array
*/

let myFriends7 = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(myFriends7);

console.log(myFriends7.sort()); // sort elements in alphabetic order
console.log(myFriends7.reverse()); // reverse the place of elements inside array - not reverse sort
console.log(myFriends7.sort().reverse());

// You can also use a custom comparison function to sort the elements of the array in a specific order. The comparison function should return a value less than 0 if the first argument should be sorted before the second, a value greater than 0 if the first argument should be sorted after the second, and 0 if the elements are equal and their order doesn't matter.
let numbers898 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers898.sort((a, b) => b - a);
console.log(numbers898); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]

/*
Arrays Methods

=> slice(Start [Opt], End [Opt] Not Including End) - A new array containing the extracted elements

=> splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt]) - Returns: An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned
*/

let myFriends44 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends44); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']

console.log(myFriends44.slice()); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends44.slice(1)); // ['Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer']
console.log(myFriends44.slice(1, 3)); // ['Sayed', 'Ali']
console.log(myFriends44.slice(-3)); // ['Osama', 'Gamal', 'Ameer']
console.log(myFriends44.slice(1, -2)); // ['Sayed', 'Ali', 'Osama']
console.log(myFriends44.slice(-4, -2)); // ['Ali', 'Osama']
console.log(myFriends44); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer'] - This method does not change the existing arrays, but instead returns a new array

let splArray = myFriends44.splice(1, 2, "Sameer", "Samara"); // 1: start index - 2: number of elements will be deleted - "Sameer", "Samara": elements will added
console.log(splArray); // ["Sayed", "Ali"]
console.log(myFriends44); // ['Ahmed', 'Sameer', 'Samara', 'Osama', 'Gamal', 'Ameer'] - This method change the existing arrays

/*
Arrays Methods

=> concat(array, array) => Return A New Array

=> join(Separator) => return seperated string - Returns: A string with all array elements joined. If arr.length is 0, the empty string is returned
*/

let myFriends8 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends8.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
console.log(allFriends); // ['Ahmed', 'Sayed', 'Ali', 'Osama', 'Gamal', 'Ameer', 'Samar', 'Sameh', 'Haytham', 'Shady', 'Gameel', 1, 2]

console.log(allFriends.join()); // Ahmed,Sayed,Ali,Osama,Gamal,Ameer,Samar,Sameh,Haytham,Shady,Gameel,1,2
console.log(allFriends.join("")); // AhmedSayedAliOsamaGamalAmeerSamarSamehHaythamShadyGameel12
console.log(allFriends.join(" @ ")); // Ahmed @ Sayed @ Ali @ Osama @ Gamal @ Ameer @ Samar @ Sameh @ Haytham @ Shady @ Gameel @ 1 @ 2
console.log(allFriends.join("|")); // Ahmed|Sayed|Ali|Osama|Gamal|Ameer|Samar|Sameh|Haytham|Shady|Gameel|1|2
console.log(allFriends.join("|").toUpperCase()); // prove it is string - AHMED|SAYED|ALI|OSAMA|GAMAL|AMEER|SAMAR|SAMEH|HAYTHAM|SHADY|GAMEEL|1|2

/*
Array Methods

=> Array.from(Iterable, MapFunc, This)
*/

console.log(Array.from("Osama")); // array => ['O', 's', 'a', 'm', 'a']
console.log(Array.from("12345", function (n) {
	return +n + +n;
})); // array => [2, 4, 6, 8, 10]
console.log(Array.from("12345", (n) => +n + +n)); // array => [2, 4, 6, 8, 10]

let myArray44 = [1, 1, 1, 2, 3, 4];
let mySet = new Set(myArray44);
console.log(Array.from(mySet)); // array [1, 2, 3, 4]
console.log([...new Set(myArray44)]); // array [1, 2, 3, 4]

function testArgs() {
	return arguments;
}
console.log(testArgs("Osama", "Ahmed", "sayed", 1, 2, 3)); // Arguments(6) ['Osama', 'Ahmed', 'sayed', 1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

function af() {
	return Array.from(arguments);
}
console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));// array => ['Osama', 'Ahmed', 'sayed', 1, 2, 3]

/*
Array Methods

=> Array.copyWithin(Target, Start => Optional, End => Optional) - Copy Part Of An Array To Another Location in The Same Array without change in array length
	Any Negative Value Will Count From The End
	Target
		* Index To Copy Part To
		* If At Or Greater Than Array Length Nothing Will Be Copied
	Start
		* Index To Start Copying From
		* If Omitted = Start From Index 0
	End
		* Index To End Copying From
		* Not Including End
		* If Omitted = Reach The End
*/

let myArray55 = [10, 20, 30, 40, 50, "A", "B"];
myArray55.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]
myArray55.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]
myArray55.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]
myArray55.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]
myArray55.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]
console.log(myArray55);

/*
Array Methods [same as filter but return boolean]

=> Array.some(CallbackFunc(Element, Index, Array), This Argument)
	CallbackFunc => Function To Run On Every Element On The Given Array
		* Element => The Current Element To Process
		* Index => Index Of Current Element
		* Array => The Current Array Working With
	This Argument => Value To Use As This When Executing CallbackFunc
	Using
		* Check if Element Exists In Array
		* Check If Number In Range
*/

let nums55 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let myNumber = 10;
let check676 = nums55.some(function (e) {
	console.log("Test"); // 6 times
	return e > 5;
});
let check575 = nums55.some(function (e) {
	return e > this;
}, myNumber);
let check474 = nums55.some((e) => e > this, myNumber);
console.log(check676); // true
console.log(check575); // false
console.log(check474); // false

function checkValues(arr, val) {
	return arr.some(function (e) {
		return e === val;
	});
}
console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
	min: 10,
	max: 20,
};
let checkNumberInRange = nums.some(function (e) {
	console.log(this.min);
	console.log(this.max);
	return e >= this.min && e <= this.max;
}, range);
console.log(checkNumberInRange);

/*
Array Methods

=> Array.every(CallbackFunc(Element, Index, Array), This Argument)
	CallbackFunc => Function To Run On Every Element On The Given Array
		* Element => The Current Element To Process
		* Index => Index Of Current Element
		* Array => The Current Array Working With
	This Argument => Value To Use As This When Executing CallbackFunc
*/

const locations = {
	20: "Place 1",
	30: "Place 2",
	10: "Place 3",
	40: "Place 4",
};
let mainLocation = 15;
let locationsArray = Object.keys(locations);
console.log(locationsArray);
let locationArrayNumbers = locationsArray.map((n) => +n);
console.log(locationArrayNumbers);
let check686 = locationArrayNumbers.every(function (e) {
	return e > this;
}, mainLocation);
console.log(check686); // false

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* Object */

// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything. We can imagine an object as a cabinet with signed files. The key stores every piece of data in its file. It’s easy to find a file by its name or add/remove a file. An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user45 = new Object(); // "object constructor" syntax
let user44 = {};  // "object literal" syntax

// We can immediately put some properties into {...} as “key: value” pairs:
let user78 = {     // an object
	name: "John",  // by key "name" store value "John"
	age: 30        // by key "age" store value 30
}; // The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”. We can add, remove and read files from it at any time.

// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it

// By specification, only two primitive types may serve as object property keys: string type, or symbol type. Otherwise, if one uses another type, such as number, it’s auto-converted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

// we use objects to essentially group together different variables that really belong together. Now, the big difference between objects and arrays is that in objects, the order of these values does not matter at all when we want to retrieve them. And that's important to keep in mind. So in arrays, the order in which we specify the elements matters a lot because that's how we access these elements, right? So we can only access array elements using their order number. This means that we should use arrays for more order data, and objects for more unstructured data. And data that we actually want to name, and then retrieve from the object, based on that name.
let user7 = {
	// Properties
	theName: "Osama",
	theAge: 38,
	// Methods
	sayHello: function () {
		return `Hello`;
	},
};
console.log(user7.theName);
console.log(user7.theAge);
console.log(user7.sayHello());

// the big difference between objects and arrays, is that in objects, the order of these values does not matter at all when we want to retrieve them. And that's important to keep in mind. So in arrays, the order in which we specify the elements matters a lot because that's how we access these elements, right? So we can only access array elements using their order number. This means that we should use arrays for more order data, and objects for more unstructured data. And data that we actually want to name, and then retrieve from the object, based on that name.
const jonasArray = [
	"Jonas",
	"Schmedtmann",
	2037 - 1991,
	"teacher",
	["Michael", "Peter", "Steven"],
];
const jonasObject = {
	firstName: "Jonas",
	lastName: "Schmedtmann",
	age: 2037 - 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
};

// Dot Notation [member access operator]
// Property values are accessible using the dot notation
// get property values of the object:
alert(user.name); // John
alert(user.age); // 30
// The value can be of any type. Let’s add a boolean one:
user.isAdmin = true;
// To remove a property, we can use the delete operator:
delete user.age;
// We can also use multiword property names, but then they must be quoted:
let user16 = {
	name: "John",
	age: 30,
	"likes birds": true  // multiword property name must be quoted
};
// The last property in the list may end with a comma:
let user19 = {
	name: "John",
	age: 30,
}// That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

// Square brackets Notation [computed member access operator]
// For multiword properties, the dot access doesn’t work: this would give a syntax error user.likes birds = true . JavaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error when comes across unexpected birds. The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed). There’s an alternative “square bracket notation” that works with any string
let user = {};
// set
user["likes birds"] = true;
// get
alert(user["likes birds"]); // true
// delete
delete user["likes birds"];
// Now everything is fine. Please note that the string inside the brackets is properly quoted (any type of quotes will do). Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:
let key0 = "likes birds";
// same as user["likes birds"] = true;
user[key0] = true;
// Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility. For instance:
let user = {
	name: "John",
	age: 30
};
let key02 = prompt("What do you want to know about the user?", "name");
alert( user[key02] ); // John (if enter "name")
// The dot notation cannot be used in a similar way:
let user = {
	name: "John",
	age: 30
};
let key01 = "name";
alert( user.key01 ) // undefined
// Computed properties. We can use square brackets in an object literal, when creating an object. That’s called computed properties.For instance:
let fruit02 = prompt("Which fruit to buy?", "apple");
let bag02 = {
	[fruit02]: 5, // the name of the property is taken from the variable fruit
};
alert( bag02.apple ); // 5 if fruit="apple"
// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit. So, if a visitor enters "apple", bag will become {apple: 5}.Essentially, that works the same as:
let fruit03 = prompt("Which fruit to buy?", "apple");
let bag03 = {};
// take property name from the fruit variable
bag03[fruit03] = 5; // …But looks nicer.
// We can use more complex expressions inside square brackets:
let fruit04 = 'apple';
let bag04 = {
	[fruit04 + 'Computers']: 5 // bag.appleComputers = 5
};
// Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write. So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

// We have to use the real final property name with Dot Notation and not a computed property name like Bracket Notation. Bracket Notation accepts expression unlike Dot Notation

// example 1
let myVarC = "country";
let user8 = {
		theFirstName: "Osama",
		"theLastName": "mo",
		"street address": "foda", // multiword property name must be quoted
		country: "Egypt", // Dynamic Property Name
		age: true,
};
console.log(user8.theFirstName); // Osama
console.log(user8["theFirstName"]); // Osama
console.log(user8.theLastName); // mo
console.log(user8["theLastName"]); // mo
// console.log(user8.street address); // error
console.log(user8["street address"]); // foda
console.log(user8.country); // Egypt
console.log(user8.myVarC); // undefined
console.log(user8[myVarC]); // Egypt
delete myVarC.age;

// example 2
const jonas22 = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYeah: 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLicense: true,
	calcAge1: function (birthYeah) {
		return 2037 - birthYeah;
	},
	calcAge2: function () {
		// console.log(this); // jonas22 object
		return 2037 - this.birthYeah; // this keyword is used to access the object that the method is called on
	},
	calcAge3: function () {
		this.age = 2037 - this.birthYeah; // store age in object and call it when need instead of executing function every time I need age
		return this.age;
	},
	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
	}, // ${this.calcAge()} because I assume that I did not call calcAge3 previously so the age prop to be stored in object
	sayHi() { // same as "sayHi: function(){...}" - Method shorthand: To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance
		alert("Hello");
	}
};
console.log(jonas22);
console.log(jonas22.lastName);
console.log(jonas22['lastName']);
const nameKey = 'Name';
console.log(jonas22['first' + nameKey]);
console.log(jonas22['last' + nameKey]);
// console.log(jonas.'last' + nameKey); // error
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas22.interestedIn); // undefined
console.log(jonas22[interestedIn]); // if I write name does not exist in properties => undefined
if (jonas22[interestedIn]) { // check for property name existance
	console.log(jonas22[interestedIn]);
} else {
	console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}
console.log(`${jonas22.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); // "Jonas has 3 friends, and his best friend is called Michael"
jonas22.calcAge1(1991);
jonas22['calcAge1'](1991); // access method by bracket notation
jonas22.calcAge2();
jonas22.calcAge2();
jonas22.calcAge2(); // calling method every time i need age and performing calculation every time I need age is not efficient so I will store age in object and call it when need instead of executing function every time I need age by calcAge3 method below
jonas22.calcAge3(); // must call it first to store age in object
console.log(jonas22.age); // access the new property added by calcAge3 method to the object insteade of calling the method every time I need age
console.log(jonas22.age);
console.log(jonas22.age);
console.log(jonas.getSummary()); // "Jonas is a 46-year-old teacher, and he has a driver's license"

// example 3
let user = {
	// ...
};
// first, declare
function sayHi() {
	alert("Hello!");
}
// then add as a method
user.sayHi = sayHi;
user.sayHi(); // Hello!

// Object-oriented programming: When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”. OOP is a big thing, an interesting science of its own. How to choose the right entities? How to organize the interaction between them? That’s architecture, and there are great books on that topic, like “Design Patterns: Elements of Reusable Object-Oriented Software” by E. Gamma, R. Helm, R. Johnson, J. Vissides or “Object-Oriented Analysis and Design with Applications” by G. Booch, and more.

// Property value shorthand
// In real code, we often use existing variables as values for property names. For instance:
function makeUser(name, age) {
	return {
		name: name,
		age: age,
		// ...other properties
	};
}
let user = makeUser("John", 30);
alert(user.name); // John
let user = makeUser();
alert(user.name); // undefined
// In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter. Instead of name:name we can just write name, like this:
function makeUser(name, age) {
	return {
		name, // same as name: name
		age,  // same as age: age
		// ...
	};
}
// We can use both normal properties and shorthands in the same object:
let user = {
	name,  // same as name:name
	age: 30
};
console.log(user.name); // ''

// Property names limitations
// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc. But for an object property, there’s no such restriction:
// these properties are all right
let obj04 = {
	for: 1,
	let: 2,
	return: 3
};
alert( obj04.for + obj04.let + obj04.return );  // 6
// In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later). Other types are automatically converted to strings. For instance, a number 0 becomes a string "0" when used as a property key:
let obj02 = {
	0: "test" // same as "0": "test"
};
// both alerts access the same property (the number 0 is converted to string "0")
alert( obj02["0"] ); // test
alert( obj02[0] ); // test (same property)
// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
let obj03 = {};
obj03.__proto__ = 5; // assign a number
alert(obj03.__proto__); // [object Object] - the value is an object, didn't work as intended
// As we see from the code, the assignment to a primitive 5 is ignored.

// Property existence test, “in” operator
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist! Reading a non-existing property just returns undefined. So we can easily test whether the property exists:
let user = {};
alert( user.noSuchProperty === undefined ); // true means "no such property"
// There’s also a special operator "in" for that. The syntax is:
"key" in object
// For instance:
let user = { name: "John", age: 30 };
alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
// Please note that on the left side of in there must be a property name. That’s usually a quoted string. If we omit quotes, that means a variable should contain the actual name to be tested. For instance:
let user = { age: 30 };
let key = "age";
alert( key in user ); // true, property "age" exists
// Why does the in operator exist? Isn’t it enough to compare against undefined? Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly. It’s when an object property exists, but stores undefined:
let obj05 = {
	test: undefined
};
alert(obj05.test); // it's undefined, so - no such property?
alert("test" in obj05); // true, the property does exist!
// In the code above, the property obj.test technically exists. So the in operator works right. Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code.

// The "for..in" loop
// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before. The syntax:
for (key in object) {
	// executes the body for each key among object properties
}
// For instance, let’s output all properties of user:
let user = {
	name: "John",
	age: 30,
	isAdmin: true
};
for (let key in user) {
	// keys
	alert(key);  // name, age, isAdmin
	// values for the keys
	alert(user[key]); // John, 30, true
}
// Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here. Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.
// Ordered like an object - Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this? The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow. As an example, let’s consider an object with the phone codes:
let codes02 = {
	"49": "Germany",
	"41": "Switzerland",
	"44": "Great Britain",
	// ..,
	"1": "USA"
};
for (let code in codes02) {
	alert(code); // 1, 41, 44, 49
}
// The object may be used to suggest a list of options to the user. If we’re making a site mainly for a German audience then we probably want 49 to be the first. But if we run the code, we see a totally different picture: USA (1) goes first then Switzerland (41) and so on. The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.
// Integer properties? What’s that? The “integer property” term here means a string that can be converted to-and-from an integer without a change. So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:
// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property
// …On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:
let user = {
	name: "John",
	surname: "Smith"
};
user.age = 25; // add one more
// non-integer properties are listed in the creation order
for (let prop in user) {
	alert( prop ); // name, surname, age
}
// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough. Like this:
let codes = {
	"+49": "Germany",
	"+41": "Switzerland",
	"+44": "Great Britain",
	// ..,
	"+1": "USA"
};
for (let code in codes) {
	alert( +code ); // 49, 41, 44, 1
}// Now it works as intended.

/*
Summary

Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.
What we’ve studied in this chapter is called a “plain object”, or just Object.

There are many other kinds of objects in JavaScript:

Array to store ordered data collections,
Date to store the information about the date and time,
Error to store the information about an error.
…And so on.
They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.
*/

// Nested Object
let available = true;
let user9 = {
		name: "Osama",
		age: 38,
		skills: ["HTML", "CSS", "JS"],
		available: false,
		addresses: {
			ksa: "Riyadh",
			egypt: {
				one: "Cairo",
				two: "Giza",
			},
		},
		checkAv1: function () {
			if (user9.available === true) { // if I write "available", it will search for var available in the global scope
				return `Free For Work`;
			} else {
				return `Not Free`;
			}
		},
		checkAv2: function () {
			if (this.available === true) { // if I write "available", it will search for var available in the global scope
				return `Free For Work`;
			} else {
				return `Not Free`;
			}
		},
};
console.log(user9.name);
console.log(user9.age);
console.log(user9.skills);
console.log(user9.skills.join(" | "));
console.log(user9.skills[2]); // Access With Index
console.log(user9.addresses.ksa);
console.log(user9.addresses.egypt.one);
console.log(user9["addresses"].egypt.one);
console.log(user9["addresses"]["egypt"]);
console.log(user9["addresses"]["egypt"]["one"]);
console.log(user9.checkAv1());
console.log(user9.checkAv2());

// Object references and copying
// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”. That’s easy to understand if we look a bit under the hood of what happens when we copy a value. Let’s start with a primitive, such as a string. Here we put a copy of message into phrase:
let message05 = "Hello!";
let phrase = message05;
// As a result we have two independent variables, each one storing the string "Hello!". Quite an obvious result, right? Objects are not like that. A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it. Let’s look at an example of such a variable:
let user = {
	name: "John"
};
// And here’s how it’s actually stored in memory: The object is stored somewhere in memory (at the right of the picture), while the user variable (at the left) has a “reference” to it. We may think of an object variable, such as user, like a sheet of paper with the address of the object on it. When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks at what’s at that address and performs the operation on the actual object. Now here’s why it’s important. When an object variable is copied, the reference is copied, but the object itself is not duplicated. For instance:
let user = { name: "John" };
let admin05 = user; // copy the reference
// Now we have two variables, each storing a reference to the same object: As you can see, there’s still one object, but now with two variables that reference it. We can use either variable to access the object and modify its contents:
let user = { name: 'John' };
let admin06 = user;
admin06.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference
// It’s as if we had a cabinet with two keys and used one of them (admin) to get into it and make changes. Then, if we later use another key (user), we are still opening the same cabinet and can access the changed contents.

// Comparison by reference
// Two objects are equal only if they are the same object. For instance, here a and b reference the same object, thus they are equal:
let a02 = {};
let b01 = a; // copy the reference
alert( a02 == b01 ); // true, both variables reference the same object
alert( a02 === b01 ); // true
// And here two independent objects are not equal, even though they look alike (both are empty):
let a01 = {};
let b02 = {}; // two independent objects
alert( a01 == b02 ); // false
// For comparisons like obj1 > obj2 or for a comparison against a primitive obj == 5, objects are converted to primitives. but to tell the truth, such comparisons are needed very rarely – usually they appear as a result of a programming mistake.
// Const objects can be modified - An important side effect of storing objects as references is that an object declared as const can be modified. For instance:
const user = {
	name: "John"
};
user.name = "Pete"; // (*)
alert(user.name); // Pete - It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change. In other words, the const user gives an error only if we try to set user=... as a whole. That said, if we really need to make constant object properties, it’s also possible, but using totally different methods. We’ll mention that in the chapter Property flags and descriptors.

/*
Create Object With Assign Method

=> The Object.assign() method copies all enumerable  own properties  from one or more source objects to a target object. It returns the modified target object.
=> Params:
	* target > The target object — what to apply the sources’ properties to, which is returned after it is modified
	* sources – The source object(s) — objects containing the properties you want to apply.
=> Returns: The target object
*/

let obj1 = {
	prop1: 1,
	meth1: function () {
		return this.prop1;
	},
};

let obj2 = {
	prop2: 2,
	meth2: function () {
		return this.prop2;
	},
};

let targetObject = {
	prop1: 100,
	prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
console.log(finalObject); // prop1 will be 1 from obj1
finalObject.prop1 = 200; // update
finalObject.prop4 = 4; // add
console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
console.log(newObject);

// Cloning and merging, Object.assign
// So, copying an object variable creates one more reference to the same object. But what if we need to duplicate an object? We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level. Like this:
let user = {
	name: "John",
	age: 30
};
let clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
	clone[key] = user[key];
}
// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
alert( user.name ); // still John in the original object
// We can also use the method Object.assign. The syntax is:
Object.assign(dest, ...sources)
// The first argument dest is a target object. Further arguments is a list of source objects. It copies the properties of all source objects into the target dest, and then returns it as the result. For example, we have user object, let’s add a couple of permissions to it:
let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true
// If the copied property name already exists, it gets overwritten:
let user = { name: "John" };
Object.assign(user, { name: "Pete" });
alert(user.name); // now user = { name: "Pete" }
// We also can use Object.assign to perform a simple object cloning:
let user = {
	name: "John",
	age: 30
};
let clone = Object.assign({}, user);
alert(clone.name); // John
alert(clone.age); // 30
// Here it copies all properties of user into the empty object and returns it. There are also other methods of cloning an object, e.g. using the spread syntax clone = {...user}, covered later in the tutorial.
// Nested cloning - Until now we assumed that all properties of user are primitive. But properties can be references to other objects. Like this:
let user = {
	name: "John",
	sizes: {
		height: 182,
		width: 50
	}
};
alert( user.sizes.height ); // 182
// Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:
let user = {
	name: "John",
	sizes: {
		height: 182,
		width: 50
	}
};
let clone = Object.assign({}, user);
alert( user.sizes === clone.sizes ); // true, same object
// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one
// To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning. structuredClone: The call structuredClone(object) clones the object with all nested properties. Here’s how we can use it in our example:
let user = {
	name: "John",
	sizes: {
		height: 182,
		width: 50
	}
};
let clone = structuredClone(user);
alert( user.sizes === clone.sizes ); // false, different objects
// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
// The structuredClone method can clone most data types, such as objects, arrays, primitive values. It also supports circular references, when an object property references the object itself (directly or via a chain or references). For instance:
let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;
let clone = structuredClone(user);
alert(clone.me === clone); // true
// As you can see, clone.me references the clone, not the user! So the circular reference was cloned correctly as well. Although, there are cases when structuredClone fails. For instance, when an object has a function property:
// error
structuredClone({
	f: function() {}
});
// Function properties aren’t supported. To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.

/*
Summary
Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

All operations via copied references (like adding/removing properties) are performed on the same single object.

To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).
*/

// Create With New Keyword new Object();
let user86 = new Object({
	age: 20,
});
console.log(user86); // object with age = 20
user86.fName = 'amr'; // add property to object with dot notation
user86.lName = 'abdelghani'; // add property to object with dot notation
user86.age = 38; // update property
user86["country"] = "Egypt"; // add property to object with bracket notation
user86.sayHello = function () { // add method to object
	return `Hello`;
};
console.log(user86); // object with age = 38
console.log(user86.age); // 38
console.log(user86.country);
console.log(user86.sayHello());

/*
Function this Keyword

- this Inside Object Method: When a function is called as a method of an object,it's this is set to the object the method is called on.

- The value of this is the object “before dot”, the one used to call the method.

- “this” is not bound
In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object. There’s no syntax error in the following example:
	function sayHi() {
		alert( this.name );
	}
The value of this is evaluated during the run-time, depending on the context.
For instance, here the same function is assigned to two different objects and has different “this” in the calls:
	let user = { name: "John" };
	let admin = { name: "Admin" };
	function sayHi() {
		alert( this.name );
	}
same function in two objects
	user.f = sayHi;
	admin.f = sayHi;
these calls have different this
"this" inside the function is the object "before the dot"
	user.f(); // John  (this == user)
	admin.f(); // Admin  (this == admin)
	admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
The rule is simple: if obj.f() is called, then this is obj during the call of f. So it’s either user or admin in the example above.

- The consequences of unbound this
If you come from another programming language, then you are probably used to the idea of a "bound this", where methods defined in an object always have this referencing that object.
In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.
The concept of run-time evaluated this has both pluses and minuses. On the one hand, a function can be reused for different objects. On the other hand, the greater flexibility creates more possibilities for mistakes.

- strict mode
In strict mode (The modern mode), the value of this inside a function is undefined, if the function is called without an object.
In non-strict mode, if the function is called without an object, this refers to the global object (window in the browser, or global in Node.js). In strict mode, the global object is not eligible for this keyword, so it's undefined instead. This makes it more difficult to accidentally use the global object and helps prevent potential security and performance issues.
In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes. Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

- Arrow functions have no “this”
Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
For instance, here arrow() uses this from the outer user.sayHi() method:
	let user = {
		firstName: "Ilya",
		sayHi() {
			let arrow = () => alert(this.firstName);
			arrow();
		}
	};
	user.sayHi(); // Ilya
That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context.
*/

// example 1
console.log(this); // window
console.log(this === window); // true
myVar = 100;
console.log(window.myVar); // 100
console.log(this.myVar); // 100
function sayHello() {
	console.log(this); // window
	return this; // window
}
sayHello(); // window
console.log(sayHello() === window); // true

// example 2
document.getElementById("cl").onclick = function () {
	console.log(this); // button - owner of this
};

// example 3
let user17 = {
	age: 38,
	ageInDays: function () {
		console.log(this); // full user object
		return this.age * 365; // this.age === user17.age
	},
};
console.log(user17.age); // 38
console.log(user17.ageInDays()); // 13870

// example 4
let user = {
	name: "John",
	age: 30,
	sayHi() {
		// "this" is the "current object"
		alert(this.name);
	}
};
user.sayHi(); // John
// Here during the execution of user.sayHi(), the value of this will be user. Technically, it’s also possible to access the object without this, by referencing it via the outer variable:
let user = {
	name: "John",
	age: 30,
	sayHi() {
		alert(user.name); // "user" instead of "this"
	}
};
// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object. That’s demonstrated below:
let user = {
	name: "John",
	age: 30,
	sayHi() {
		alert( user.name ); // leads to an error
	}
};
let admin = user;
user = null; // overwrite to make things obvious
admin.sayHi(); // TypeError: Cannot read property 'name' of null
// If we used this.name instead of user.name inside the alert, then the code would work.

/*
Summary

Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
*/

// Constructor, operator "new"
// The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on. That can be done using constructor functions and the "new" operator.
// Constructor function - Constructor functions technically are regular functions. There are two conventions though:
/*
They are named with capital letter first.
They should be executed only with "new" operator.
*/
function User(name) {
	this.name = name;
	this.isAdmin = false;
}
let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false
// When a function is executed with new, it does the following steps:
/*
A new empty object is created and assigned to this.
The function body executes. Usually it modifies this, adds new properties to it.
The value of this is returned.
In other words, new User(...) does something like:
*/
function User(name) {
	// this = {};  (implicitly)

	// add properties to this
	this.name = name;
	this.isAdmin = false;

	// return this;  (implicitly)
}
let user = new User("Jack")
// gives the same result as:
let user = {
	name: "Jack",
	isAdmin: false
};
// Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read. That’s the main purpose of constructors – to implement reusable object creation code. Let’s note once again – technically, any function (except arrow functions, as they don’t have this) can be used as a constructor. It can be run with new, and it will execute the algorithm above. The “capital letter first” is a common agreement, to make it clear that a function is to be run with new.
// new function() { … } - If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:
// create a function and immediately call it with new
let user = new function() {
	this.name = "John";
	this.isAdmin = false;
	// ...other code for user creation
	// maybe complex logic and statements
	// local variables etc
};
// This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.
// Omitting parentheses - By the way, we can omit parentheses after new:
let user = new User; // <-- no parentheses
// same as
let user = new User();
// Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification.

// Constructor mode test: new.target
// Inside a function, we can check whether it was called with new or without it, using a special new.target property. It is undefined for regular calls and equals the function if called with new:
function User() {
	alert(new.target);
}
// without "new":
User(); // undefined
// with "new":
new User(); // function User { ... }
// That can be used inside the function to know whether it was called with new, “in constructor mode”, or without it, “in regular mode”. We can also make both new and regular calls to do the same, like this:
function User(name) {
	if (!new.target) { // if you run me without new
		return new User(name); // ...I will add new for you
	}
	this.name = name;
}
let john = User("John"); // redirects call to new User
alert(john.name); // John
// This approach is sometimes used in libraries to make the syntax more flexible. So that people may call the function with or without new, and it still works. Probably not a good thing to use everywhere though, because omitting new makes it a bit less obvious what’s going on. With new we all know that the new object is being created.

// Return from constructors
// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result. But if there is a return statement, then the rule is simple:
/*
If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.
*/
function BigUser() {
	this.name = "John";
	return { name: "Godzilla" };  // <-- returns this object
}
alert( new BigUser().name );  // Godzilla, got that object
// And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):
function SmallUser() {
	this.name = "John";
	return; // <-- returns this
}
alert( new SmallUser().name );  // John
// Usually constructors don’t have a return statement. Here we mention the special behavior with returning objects mainly for the sake of completeness.

// Methods in constructor
// Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it. Of course, we can add to this not only properties, but methods as well. For instance, new User(name) below creates an object with the given name and the method sayHi:
function User(name) {
	this.name = name;
	this.sayHi = function() {
		alert( "My name is: " + this.name );
	};
}
let john08 = new User("John");
john08.sayHi(); // My name is: John
/*
john = {
	name: "John",
	sayHi: function() { ... }
}
*/
// To create complex objects, there’s a more advanced syntax, classes, that we’ll cover later.

/*
Summary

Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
We can use constructor functions to make multiple similar objects.

JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets and others that we plan to study.
*/

// Symbols
// A “symbol” represents a unique identifier. A value of this type can be created using Symbol():
let id01 = Symbol();
// Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:
let id02 = Symbol("id");
// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything. For instance, here are two symbols with the same description – they are not equal:
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false
// If you are familiar with Ruby or another language that also has some sort of “symbols” – please don’t be misguided. JavaScript symbols are different. So, to summarize, a symbol is a “primitive unique value” with an optional description. Let’s see where we can use them.
// Symbols don’t auto-convert to a string - Most values in JavaScript support implicit conversion to a string. For instance, we can alert almost any value, and it will work. Symbols are special. They don’t auto-convert. For instance, this alert will show an error:
let id03 = Symbol("id");
alert(id03); // TypeError: Cannot convert a Symbol value to a string
// That’s a “language guard” against messing up, because strings and symbols are fundamentally different and should not accidentally convert one into another. If we really want to show a symbol, we need to explicitly call .toString() on it, like here:
let id04 = Symbol("id");
alert(id04.toString()); // Symbol(id), now it works
// Or get symbol.description property to show the description only:
let id05 = Symbol("id");
alert(id05.description); // id

// “Hidden” properties
// Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite. For instance, if we’re working with user objects, that belong to a third-party code. We’d like to add identifiers to them. Let’s use a symbol key for it:
let user = { // belongs to another code
	name: "John"
};
let id09 = Symbol("id");
user[id09] = 1;
alert( user[id09] ); // we can access the data using the symbol as the key
// What’s the benefit of using Symbol("id") over a string "id"? As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally.The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.
// Also, imagine that another script wants to have its own identifier inside user, for its own purposes. Then that script can create its own Symbol("id"), like this:
// ...
let id = Symbol("id");
user[id] = "Their id value";
// There will be no conflict between our and their identifiers, because symbols are always different, even if they have the same name. …But if we used a string "id" instead of a symbol for the same purpose, then there would be a conflict:
let user = { name: "John" };
// Our script uses "id" property
user.id = "Our id value";
// ...Another script also wants "id" for its purposes...
user.id = "Their id value"
// Boom! overwritten by another script!

// Symbols in an object literal
// If we want to use a symbol in an object literal {...}, we need square brackets around it. Like this:
let id00 = Symbol("id");
let user = {
	name: "John",
	[id00]: 123 // not "id": 123
};
// That’s because we need the value from the variable id as the key, not the string “id”.

// Symbols are skipped by for…in
// Symbolic properties do not participate in for..in loop.
let id07 = Symbol("id");
let user = {
	name: "John",
	age: 30,
	[id07]: 123
};
for (let key in user) alert(key); // name, age (no symbols)
// the direct access by the symbol works
alert( "Direct: " + user[id07] ); // Direct: 123
// Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle. If another script or a library loops over our object, it won’t unexpectedly access a symbolic property. In contrast, Object.assign copies both string and symbol properties:
let id11 = Symbol("id");
let user = {
	[id11]: 123
};
let clone = Object.assign({}, user);
alert( clone[id11] ); // 123
// There’s no paradox here. That’s by design. The idea is that when we clone an object or merge objects, we usually want all properties to be copied (including symbols like id).

// Global symbols
// As we’ve seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property. To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol. In order to read (create if absent) a symbol from the registry, use Symbol.for(key). That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.
// read from the global registry
let id33 = Symbol.for("id"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");
// the same symbol
alert( id33 === idAgain ); // true
// Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.
// That sounds like Ruby In some programming languages, like Ruby, there’s a single symbol per name. In JavaScript, as we can see, that’s true for global symbols.
// Symbol.keyFor - We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
// The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol. So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined. That said, all symbols have the description property.
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");
alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global
alert( localSymbol.description ); // name

// System symbols
/*
There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.
They are listed in the specification in the Well-known symbols table:
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
…and so on.
For instance, Symbol.toPrimitive allows us to describe object to primitive conversion. We’ll see its use very soon.
Other symbols will also become familiar when we study the corresponding language features.
*/

/*
Summary

Symbol is a primitive type for unique identifiers.

Symbols are created with Symbol() call with an optional description (name).

Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) a global symbol with key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.

Symbols have two main use cases:

“Hidden” object properties.

If we want to add a property into an object that “belongs” to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be accidentally processed together with other properties. Also it won’t be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.

So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.

Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. But most libraries, built-in functions and syntax constructs don’t use these methods.
*/

/*
Create Object With Create Method (prototype)

=> The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
=> Params:
	* proto > The object which should be the prototype of the newly-created object.
	* propertiesObject > If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of Object.defineProperties().
=> Returns: A new object with the specified prototype object and properties
*/
let user27 = {
	age: 20,
	doubleAge: function () {
		return user27.age * 2;
	},
};
console.log(user27);
console.log(user27.age);
console.log(user27.doubleAge());
let obj = Object.create({}); // creat object with empty prototype
obj.a = 100; // add property to object
console.log(obj);
let copyObj = Object.create(user27); // creat object with real prototype(user27)
console.log(copyObj); // user27 object
console.log(copyObj.age); // 20
console.log(copyObj.doubleAge()); // 40
copyObj.age = 50; // add not update - in this case copyObj will use it instead of same property in prototype if using this keyword in prototype
console.log(copyObj.age); // 50
console.log(copyObj.doubleAge()); // 40 not 100 - solution of this issue is to make "return user27.age * 2;" in user27 obj as "return this.age * 2;"

// return an array from object
const locations51 = {
	20: "Place 1",
	30: "Place 2",
	10: "Place 3",
	40: "Place 4",
};
let locationsArrays1 = Object.keys(locations51);
console.log(locationsArrays1);
const locations52 = {
	20: "Place 1",
	30: "Place 2",
	10: "Place 3",
	40: "Place 4",
};
let locationsArrays2 = Object.values(locations52);
console.log(locationsArrays2);
const locations53 = {
	20: "Place 1",
	30: "Place 2",
	10: "Place 3",
	40: "Place 4",
};
let locationsArrays3 = Object.entries(locations53);
console.log(locationsArrays3);

// object length
// In JavaScript, you can use the Object.keys() method to get the length of an object. For example:
let obj828 = {a: 1, b: 2, c: 3};
let length15 = Object.keys(obj828).length;
console.log(length); // 3
// You can also use the Object.values() method and find the length by using the .length property on the returned array.
let obj989 = {a: 1, b: 2, c: 3};
let length16 = Object.values(obj989).length;
console.log(length); // 3
// You can use the .length property on the Object.entries() method to find the length of object as well
let obj787 = {a: 1, b: 2, c: 3};
let length17 = Object.entries(obj787).length;
console.log(length); // 3
// Note that these methods will only return the number of enumerable properties of the object, not all properties including non-enumerable ones.

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Garbage collection: https://javascript.info/garbage-collection

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* optional chaining operator: ?. => Null + Undefined (error) to undefined */

// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

// The “non-existing property” problem
let user = {}; // a user without "address" property
alert(user.address.street); // Error!
// That’s the expected result. JavaScript works like this. As user.address is undefined, an attempt to get user.address.street fails with an error. In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”). …and another example. In Web development, we can get an object that corresponds to a web page element using a special method call, such as document.querySelector('.elem'), and it returns null when there’s no such element.
let html01 = document.querySelector('.elem').innerHTML; // error if it's null
// Once again, if the element doesn’t exist, we’ll get an error accessing .innerHTML property of null. And in some cases, when the absence of the element is normal, we’d like to avoid the error and just accept html = null as the result.
// How can we do this?
// The obvious solution would be to check the value using if or the conditional operator ?, before accessing its property, like this:
let user = {};
alert(user.address ? user.address.street : undefined);
// It works, there’s no error… But it’s quite inelegant. As you can see, the "user.address" appears twice in the code. Here’s how the same would look for document.querySelector:
let html02 = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
// We can see that the element search document.querySelector('.elem') is actually called twice here. Not good. For more deeply nested properties, it becomes even uglier, as more repetitions are required. E.g. let’s get user.address.street.name in a similar fashion.
let user = {}; // user has no address
alert(user.address ? user.address.street ? user.address.street.name : null : null);
// That’s just awful, one may even have problems understanding such code. There’s a little better way to write it, using the && operator:
let user = {}; // user has no address
alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)
// AND’ing the whole path to the property ensures that all components exist (if not, the evaluation stops), but also isn’t ideal. As you can see, property names are still duplicated in the code. E.g. in the code above, user.address appears three times. That’s why the optional chaining ?. was added to the language. To solve this problem once and for all!

// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element
// Please note: the ?. syntax makes optional the value before it, but not any further. E.g. in user?.address.street.name the ?. allows user to safely be null/undefined (and returns undefined in that case), but that’s only for user. Further properties are accessed in a regular way. If we want some of them to be optional, then we’ll need to replace more . with ?.

// Don’t overuse the optional chaining. We should use ?. only where it’s ok that something doesn’t exist. For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street. Then, if user happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, and become more difficult to debug.

// The variable before ?. must be declared If there’s no variable user at all, then user?.anything triggers an error:
// ReferenceError: user is not defined
user?.address;
// The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.

// Short-circuiting
// As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist. So, if there are any further function calls or operations to the right of ?., they won’t be made.
let user = null;
let x = 0;
user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
alert(x); // 0, value not incremented

// It allows you to access properties of an object in a chain of properties like object?.property1?.property2 and so on. If any of the properties in the chain is undefined or null the whole chain will return undefined. The optional chaining operator allows you to access a property of an object without having to first check if the object is null or undefined. If the object is null or undefined, the expression will return undefined instead of throwing an error.
const book88 = null;
console.log(book88?.title); // This code is using the optional chaining operator (?.) to access the title property of an object stored in the book variable. The book variable is currently being assigned the value null, so the console.log statement would output undefined, since null does not have a title property.
const user362 = {
	name: 'John',
	address: {
		street: 'Main',
		city: 'New York'
	}
};
console.log(user362?.address?.city);  // Output: "New York"
console.log(user362?.address?.zipCode?.talkha);  // Output: undefined - because zipCode is not defined on the address object.

if(book?.title){
	return true; // returns true when the title exists and is not empty. It does not throw an error when the book is null or undefined:
}
// Here is how we can check if both the book and its title have a value that is not one of the falsy values (null, undefined, '', 0, or NaN):
let book77;
const hasTitle7 = Boolean(book77 && book77.title); //false
const hasTitle8 = Boolean(book77?.title); //false
// Optional chaining allows you to select a value from a nested property without explicitly checking that each property in the chain is defined. If any of the properties in the chain are not defined, you simply get undefined rather than a runtime error. This means you can refactor code like this:
let result999;
if (foo && foo.bar && foo.bar.baz) {
	result999 = foo.bar.baz;
}
// To this:
const result9999 = foo?.bar?.baz;
// This is a huge win for readability and makes your code a lot more concise. It also means you’re much less likely to miss a null check and introduce unwanted bugs into your code. This is the main use case for optional chaining — however, there a few other situations where it can be incredibly helpful. For example, it allows you to optionally execute a function if the function is defined:
function calculate1(num1, num2, action) {
	const actions = {
		add: (a, b) => a + b,
		subtract: (a, b) => a - b,
		multiply: (a, b) => a * b,
		divide: (a, b) => a / b,
	};
	return actions[action]?.(num1, num2) ?? "Calculation is not recognised";
}
// Here we are only executing the value selected from the actions object if it is defined — this allows us to then use the nullish coalescing operator to return a fallback message if the function is not defined. Previously you would have needed to do something like this:
function calculate2(num1, num2, action) {
	const actions = {
		add: (a, b) => a + b,
		subtract: (a, b) => a - b,
		multiply: (a, b) => a * b,
		divide: (a, b) => a / b,
	};
	if (typeof actions[action] === "function") {
		return actions[action](num1, num2);
	}return "Calculation is not recognised";
}
// This is a lot more code and in my opinion less clear than the version using optional chaining — though of course this is a personal preference! You can also use optional chaining to select an item from an array if the array is defined. For example:
const people = [];
const first88 = people.filter((person) => person.name === name)?.[0]; // We are filtering an array of people by name and only selecting the first option if the filter has returned some values. Again, nice and concise and in my opinion much more readable than lots of null checking.

// Other variants: ?.(), ?.[]
// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets. For example, ?.() is used to call a function that may not exist. In the code below, some of our users have admin method, and some don’t:
let userAdmin = {
	admin() {
		alert("I am admin");
	}
};
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)
// Here, in both lines we first use the dot (userAdmin.admin) to get admin property, because we assume that the user object exists, so it’s safe read from it. Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors. The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.
let key05 = "firstName";
let user1 = {
	firstName: "John"
};
let user2 = null;
alert( user1?.[key05] ); // John
alert( user2?.[key05] ); // undefined
// Also we can use ?. with delete:
delete user?.name; // delete user.name if user exists
// We can use ?. for safe reading and deleting, but not writing. The optional chaining ?. has no use on the left side of an assignment.
let user = null;
user?.name = "John"; // Error, doesn't work - because it evaluates to: undefined = "John"

/*
Summary

The optional chaining ?. Syntax has three forms:

Obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.
As we can see, all of them are straightforward and simple to use. [?.] Checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. Allows to safely access nested properties.

Still, we should apply ?. Carefully, only where it is acceptable, according to our code logic, that the left part does not exist. So that it won’t hide programming errors from us if they occur.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Loop For: in / of

"For in" is to iterate over the properties of an object and "for of" is to iterate over the values of an iterable object.
It's important to keep in mind that "for in" loops enumerate over the properties of an object in an arbitrary order, while "for of" loops enumerate over the values of an iterable object in the order they appear.
*/

let anArray1 = ["amr", "salah", "alaa"];
for (let i in anArray1){
	console.log(`index: ${i}`); // indices
	console.log(`element: ${anArray1[i]}`) // elements
}
let anArray2 = ["amr", "salah", "alaa"];
for (let i of anArray2){
	console.log(`element: ${i}`) // elements
}

let anObj1 = {
	name:"mohamed",
	age: "unknown"}
for(let prop in anObj1){
	console.log(`key: ${prop}`); // name , age
	console.log(`value: ${anObj1[prop]}`); // mohamed , unknown
}
let anObj2 = {
	name:"mohamed",
	age: "unknown"}
for(let prop of anObj2){
	console.log(`value: ${prop}`); // error - anObj2 is not iterable
}
for(let prop of Object.keys(anObj2)){
	console.log(`value: ${prop}`); // name age
}
for(let prop of Object.values(anObj2)){
	console.log(`value: ${prop}`); // mohamed unknown
}
for(let [key, value] of Object.entries(anObj2)){
	console.log(`value: ${key} ${value}`); // name mohamed, age unknown
}

/* Creating Callbacks in a Loop */

// You may encounter the following issue when using the same variable and creating callbacks inside a loop. Consider the code below:
let pp = 0;
while(pp < 3){
	setTimeout(()=>{
		console.log(pp); // 3 3 3
	}, 100);
	pp = pp + 1;
}
// Inside the loop, we create three callbacks all referring to the same variable: p. When these callbacks are invoked later, they all display the last value of the i variable — that being 3. We may expect to see 0 1 2, but that is not the case because all callbacks refer to the same variable that can change over time, and the last value of it is displayed 100ms after the loop executed. We can avoid this issue by using a for loop and declaring the loop variable with let. It will create a block scope for each iteration with a different variable. So this time, each callback points to a different variable:

// 1. using let
for(let o=0; o<3; o++){
setTimeout(()=>{
		console.log(o); // 0 1 2
	}, 100);
}
for(let o=0; o<3; o++){
setTimeout(()=>{
		console.log(++o); // 1 2 3
	}, 100);
}
for(let o=0; o<3; o++){
setTimeout(()=>{
		console.log(o++); // 0 1 2
	}, 100);
}
// 2. using var
for(var o=0; o<3; o++){
setTimeout(()=>{
	console.log(o); // 3 3 3
}, 100);
}
for(var o=0; o<3; o++){
setTimeout(()=>{
	console.log(++o); // 4 5 6
}, 100);
}
for(var o=0; o<3; o++){
setTimeout(()=>{
	console.log(o++); // 3 4 5
}, 100);
}
// The better option is to check if you can write the code using the array methods. In that case, each iteration will have new function scope:
const arrop = ['A','B','C'];
arrop.forEach(function(value, index){
	setTimeout(()=>{
			console.log(index); // 0 1 2
		}, 100);
});

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Higher Order Functions: is a function that accepts functions as argument and/or returns a function

=> map     => deal with arrays - return new array
=> filter  => deal with arrays - return new array
=> reduce  => deal with arrays - return new array
=> foeEach => deal with arrays - current array - return undefined
*/

/*
Map

=> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
=> Params:
	* callbackFn – Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray. The callbackFn function accepts the following arguments:
		element > The current element being processed in the array.
		index > Optional - The index of the current element being processed in the array.
		array> Optional - The array map was called upon.
	* thisArg – Value to use as this when executing callbackFn.
=> Returns: A new array with each element being the result of the callback function
*/

// regular function
let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];
for (let i = 0; i < myNums.length; i++) {
	newArray.push(myNums[i] + myNums[i]);
}
console.log(newArray);

// Same Idea With Map
let addSelf1 = myNums.map(function (element, index, arr) { // index, arr => optional - and can access them even I do not put them as parameters
	console.log(`Current Element => ${element}`);
	console.log(`Current Index => ${index}`);
	console.log(`Array => ${arr}`);
	console.log(`This => ${this}`); // 10
	return element + element;
}, 10);
console.log(addSelf1);

let addSelf2 = myNums.map((ele) => ele + ele); // arrow Function
console.log(addSelf2);

function addition(ele) { // named function
	return ele + ele;
}
let add5 = myNums.map(addition);
console.log(add5);

/* Map practices */

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers2 = "Elz123er4o";

// Swap Cases
let sw7 = swappingCases.split("").map(function (ele) {
		return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
	}).join("");
console.log(sw7);
let sw8 = swappingCases.split("").map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())).join("");
console.log(sw8);

// Inverted Numbers
let inv = invertedNumbers.map(function (ele) {
	return -ele;
});
console.log(inv);

// Ignore nums Value
let ign2 = ignoreNumbers2.split("").map(function (ele) {
		return isNaN(parseInt(ele)) ? ele : "";
	}).join("");
console.log(ign2);
let ign22 = ignoreNumbers2.split("").map((ele) => isNaN(parseInt(ele)) ? ele : "").join("");
console.log(ign22);

/*
Filter

	=> The filter() method creates a new array with all elements that pass the test implemented by the provided function.
	=> Params:
		* callbackFn – Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise. It accepts three arguments:
			element > The current element being processed in the array.
			index > Optional - The index of the current element being processed in the array.
			array > Optional - The array filter was called upon.
		* thisArg – Value to use as this when executing callbackFn.
	=> Returns: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned
*/

// get names starts with A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filteredFriends = friends.filter(function (el) {
	return el.startsWith("A");
});
console.log(filteredFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter(function (el) {
	return el % 2 === 0;
});
console.log(evenNumbers);

// Test Map vs Filter
let addMap = numbers.map(function (el) {
	return el + el;
});
console.log(addMap); // return new array with new values

let addFilter = numbers.filter(function (el) {
	return el + el;
});
console.log(addFilter); // return new array with the same values of original array - bad use for filter

/* Filter Practice */

// Filter Words More Than 4 Characters
let sentence = "I Love Food Code Too Playing Much";
let smallWords = sentence.split(" ").filter(function (ele) {
		return ele.length <= 4;
	}).join(" ");
console.log(smallWords);

// Ignore Numbers
let ignoreNumbers1 = "Elz123er4o";
let ign1 = ignoreNumbers1.split("").filter(function (ele) {
		return isNaN(parseInt(ele));
	}).join("");
console.log(ign1);

// Ignore Numbers with map
let ignoreNumbers22 = "Elz123er4o";
let ign12 = ignoreNumbers22.split("").map(function (ele) {
		return isNaN(parseInt(ele)); // truetruetruefalsefalsefalsetruetruefalsetrue
	}).join("");
console.log(ign12);

// Filter Strings + Multiply
let mix = "A13BS2ZX";
let mixedContent = mix
	.split("")
	.filter(function (ele) {
		return !isNaN(parseInt(ele));
	}).map(function (ele) {
		return ele * ele;
	}).join("");
console.log(mixedContent);

/*
Reduce

	=> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
	=> Params:
		* callbackFn – A function to execute on each element in the array (except for the first, if no initialValue is supplied). It takes four arguments:
				** accumulator > The accumulator accumulates callbackFn's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).
				** currentValue > The current element being processed in the array.
				** index > Optional - The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
				** array > Optional - The array reduce() was called upon.
		* initialValue – A value to use as the first argument to the first call of the callbackFn. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue. Calling reduce() on an empty array without an initialValue will throw a TypeError.
	=> Returns: The single value that results from the reduction
*/

let nums = [10, 20, 15, 30];
let add = nums.reduce(function (acc, ele, index, arr) {
	console.log(`Acc => ${acc}`);
	console.log(`Current Element => ${ele}`);
	console.log(`Current Element Index => ${index}`);
	console.log(`Array => ${arr}`);
	console.log(acc + ele);
	console.log(`#############`);
	return acc + ele;
}, 5);
console.log(add);

/* Reduce Practice */

// The Longest Word
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];
let check = theBiggest.reduce(function (acc, ele) {
	console.log(`Acc => ${acc}`);
	console.log(`Current Element => ${ele}`);
	console.log(acc.length > ele.length ? acc : ele);
	console.log(`#############`);
	return acc.length > ele.length ? acc : ele;
});
console.log(check);

// Remove Characters + Use Reduce
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let finalString = removeChars
	.filter(function (ele) {
		return ele !== "@";
	}).reduce(function (acc, current) { // like join
		return `${acc}${current}`;
		// return acc + current;
	});
console.log(finalString);

/*
forEach

	=> Performs the specified action for each node in a list.
	=> Params:
		* callbackfn > A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list
		* thisArg > An object to which the 'this keyword' can refer in the callbackfn function. If thisArg is omitted, undefined is used as the value
	=> Note
		* Doesnt Return Anything [Undefined]
		* Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
allLis.forEach(function (ele) {
	ele.onclick = function () {
		// Remove Active Class From All Elements
		allLis.forEach(function (ele) {
			ele.classList.remove("active");
		});
		// Add Active Class To This Element
		this.classList.add("active");
		// Hide All Divs
		allDivs.forEach(function (ele) {
			ele.style.display = "none";
		});
	};
});

// Find index of an object in an array of objects
const array552 = [
	{ id: 1, city: 'Mumbai'},
	{ id: 2, city: 'New York'},
	{ id: 3, city: 'Toronto'},
	{ id: 4, city: 'London'}
];
function findIndex(array, value) {
	let index = -1;
	array.forEach((obj, i) => {
		if (obj.city === value) {
			index = i;
		}
	})
	return index;
}
console.log(findIndex(array552, 'London')); // 3

/*
findIndex

	=> The findIndex() method accepts a callback function as its argument, which iterates through all the elements in the array until the callbackFn does not return a truthy value
	=> Once the callbackFn returns a truthy value, the findIndex() method returns the index of the matched element; otherwise, it returns -1.
	=> The findIndex() method is not supported in IE browsers, but you can use a polyfill of Array.findIndex
*/

// Find index of an object in an array of objects
const array774 = [
	{ id: 1, city: 'Mumbai'},
	{ id: 2, city: 'New York'},
	{ id: 3, city: 'Toronto'},
	{ id: 4, city: 'London'}
];
const notMatchedIndex = array774.findIndex((obj)=>obj.city === 'Berlin');
console.log(notMatchedIndex) // -1
const matchedIndex = array774.findIndex((obj)=>obj.city === 'Toronto');
console.log(matchedIndex) // 2

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* Destructuring: is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables */

/* Destructuring Array */

let myFriends88 = ["Ahmed", "Sayed", "Ali", "Maysa"];
let qu = 1, xo = 2, zb = 3, qw = 4;
[qu, xo, zb] = myFriends88; // update
// let [qu, xo, zb] = myFriends88; // error - duplicate declaration
console.log(qu); // Ahmed
console.log(xo); // Sayed
console.log(zb); // Ali
console.log(qw); // 4
let [qau2 = 5, xao2 = 6, zab2 = 7, qaw2 = 8, rat2] = myFriends88;
console.log(qau2); // Ahmed
console.log(xao2); // Sayed
console.log(zab2); // Ali
console.log(qaw2); // Maysa
console.log(rat2); // undefined
let [qau3 = 5, xao3 = 6, zab3 = 7, qaw3 = 8, rat3 = 9] = myFriends88;
console.log(qau3); // Ahmed
console.log(xao3); // Sayed
console.log(zab3); // Ali
console.log(qaw3); // Maysa
console.log(rat3); //  9
let [qau1, xao1, zab1] = myFriends88;
console.log(qau1); // Ahmed
console.log(xao1); // Sayed
console.log(zab1); // Ali
console.log(qaw1); // error
let [, y, , z] = myFriends88;
console.log(y); // Sayed
console.log(z); // Maysa
let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];
let [, , , [ar, , [, b6]]] = myFriends;
console.log(ar); // Shady
console.log(b6); // Gamal

/*  Destructuring Array => Swapping Variables */

let book = "Video";
let video = "Book";
// old Way
// 1. Save Book Value In Stash
let stash = book; // Video
// 2. Change Book Value
book = video; // Book
// 3. Change Video Value
video = stash; // Video
// new way by Destructuring Array
[book, video] = [video, book];
[book, video] = ["book","video"];
console.log(book); // book
console.log(video); // video

/* Destructuring Object */

const user777 = {
	theName11: "Osama",
	theAge11: 39,
	theTitle11: "Developer",
	theCountry11: "Egypt",
};
// old way
let aaa = user777.theName11;
let bbb = user777.theAge11;
let ccc = user777.theTitle11;
let ddd = user777.theCountry11;
console.log(aaa);
console.log(bbb);
console.log(ccc);
console.log(ddd);
// new way
let { theName11, theAge11, theCountry11 } = user777;
({ theName11, theAge11, theTitle11, theCountry11 } = user777);
console.log(theName11);
console.log(theAge11);
console.log(theTitle11);
console.log(theCountry11);

/* Destructuring Object */

const user563 = {
	theName: "Osama",
	theAge: 39,
	theTitle: "Developer",
	theCountry: "Egypt",
	theColor: "Black",
	skills: {
		html: 70,
		css: 80,
	},
};
// Destructuring all object
const {theName: nyy, theAge: ayy, theCountry, theColor: co = "Red", skills: { html: hy, css },title, position = 88} = user563;
console.log(nyy);
console.log(ayy);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${hy}`);
console.log(`My CSS Skill Progress Is ${css}`);
console.log(`${title}`); // undefined
console.log(`${position}`); // 88
// Destructuring some
const {theName: name1, theCountry: country1} = user563;
console.log(name1);
console.log(country1);
// Destructuring nested object {skills} only
const { html: skillOne, css: skillTwo } = user563.skills;
console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

/* Destructuring Function Parameters */

const user444 = {
	theName: "Osama",
	theAge: 39,
	skills: {
		html: 70,
		css: 80
	}
};
showDetails111(user444);
function showDetails111(obj) {
	console.log(`Your Name Is ${obj.theName}`);
	console.log(`Your Age Is ${obj.theAge}`);
	console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
}
showDetails222(user444);
function showDetails222({ theName: n, theAge: a, skills: { css: c } } = user444) {
	console.log(`Your Name Is ${n}`);
	console.log(`Your Age Is ${a}`);
	console.log(`Your CSS Skill Progress Is ${c}`);
}

/* Destructuring Mixed Content */

const user = {
	theName: "Osama",
	theAge: 39,
	skills: ["HTML", "CSS", "JavaScript"],
	addresses: {
		egypt: "Cairo",
		ksa: "Riyadh"
	}
};
const {theName: nuu, theAge: auu, skills: [, , three], addresses: { egypt: euu },} = user;
console.log(`Your Name Is: ${nuu}`);
console.log(`Your Age Is: ${auu}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${euu}`);

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* iteration / iterable / iterator */

/*
In programming, an iterable is an object that can be looped over, meaning it can be passed to a function or used in a for loop. In JavaScript, an iterable is an object that can be used with the for...of loop and the spread operator (...). Examples of iterable objects in JavaScript include arrays, strings, and maps.
*/

/*
	=> iteration is the process of going through the elements of a data structure, such as an array or an object, one by one. This can be done using loops, such as for or while loops, or using higher-order functions like map, filter, and reduce.

	=> An iterable is an object that can be used in a for...of loop. An iterable object is any object that has a method called Symbol.iterator that returns an iterator object. This method is a standard built-in method in javascript, and it is used to define an object as iterable.

	=> An iterator is an object that defines a next() method, which returns the next value in the data structure and a boolean done property which indicates whether iteration is complete or not. The for...of loop uses the iterator to access the values in an iterable.

JavaScript also provides the for...in loop, which can be used to iterate over the properties of an object. However, it is important to note that for...in will iterate over all enumerable properties of an object, including those that are inherited, whereas for...of will only iterate over the values of an iterable object, not properties.

Another way to iterate over arrays in JavaScript is using the forEach() method, which allows you to execute a callback function for each element in an array.

There are also several other methods available for arrays like map(), filter() and reduce() which can perform specific operations on the array and return a new array, that can be useful when dealing with large sets of data.

In summary, iteration is the process of going through elements of a data structure, iterable is an object that can be used in a for...of loop, and iterator is an object that allows access to the values in an iterable in a for...of loop. There are several ways to perform iteration in JavaScript, including using loops and higher-order functions, and each has its own specific use case.

	Iteration is the process of going through elements of a data structure
	Iterable is an object that can be used in a for...of loop
	Iterator is an object that allows access to the values in an iterable in a for...of loop.
*/

/*
In JavaScript, there are several built-in iterable objects by default, including:

	Arrays: Arrays are a collection of elements, and they are iterable by default. The elements of an array can be accessed using a for...of loop or the array's built-in methods, such as forEach() and map().

	Strings: Strings are a sequence of characters, and they are also iterable by default. You can use the for...of loop or the forEach() method to iterate over the characters of a string.

	Maps: Maps are a collection of key-value pairs, and they are iterable by default. You can use the for...of loop to iterate over the entries of a Map.

	Sets: Sets are a collection of unique values, and they are iterable by default. You can use the for...of loop to iterate over the values of a Set.

	DOM data structures: Some DOM data structures, such as NodeLists and HTMLCollections, are iterable.

	Generators: A generator is a special type of iterable, created by a generator function, it can be used in a for...of loop, and it allows to generate values on the fly. and to generate a sequence of values. You can use the for...of loop to iterate over the values generated by a generator.

	Typed Arrays : Typed Arrays are a collection of elements of a specific type, such as Int32Array and they are iterable by default

In summary, in JavaScript, arrays, strings, maps, sets, generators, typed arrays are built-in iterable objects, they have a default Symbol.iterator method and can be used in a for...of loop or other iteration methods like forEach().

In addition to these built-in iterable objects, you can also create your own custom iterable objects by adding a Symbol.iterator method to an object. This method should return an iterator object that defines a next() method and a done property.
*/

/*
Symbol.iterator is a built-in JavaScript symbol that defines the default iterator for an object. It is a method that returns an iterator object, which defines a next() method that returns the next value in the data structure and a boolean done property that indicates whether iteration is complete or not.

When an object is used in a for...of loop, JavaScript will look for a Symbol.iterator method on that object and use it to access the values in the object. If the object does not have a Symbol.iterator method, the loop will throw an error.

You can also define your own custom iterator by adding the Symbol.iterator method to an object. This can be useful if you want to define a custom way of iterating over the values of an object.

In summary, Symbol.iterator is a built-in JavaScript symbol that defines the default iterator for an object. It is used by for...of loop to access the values in an iterable object, it returns an iterator object, and you can also define your own custom iterator by adding the Symbol.iterator method to an object.
*/

/*
To add the Symbol.iterator method to an object, you can define the method on the object's prototype. For example, if you have an object called "myObject", you could add the Symbol.iterator method as follows:

myObject.prototype[Symbol.iterator] = function() {
	// Code for the iterator method goes here
};
The code inside the function should return an iterator object, which should have a next() method. This method should return an object with two properties: value, which is the next value in the iteration, and done, which is a boolean indicating whether the iteration has completed.

It's important to note that the Symbol.iterator is a built-in symbol, and it's used to customize the iteration behavior of an object. It's not a function, it's a property key, so it doesn't need to be invoked with ().
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Set Data Type => object stores unique any data (iterable)

	=> Syntax: new Set(Iterable)
	=> Properties:
		* Cannot Access Elements By Index
		* has entries
		* keys|values => iterator (customize iteration, control iteration stages, access to iteration value)
		* type => object
	=> Methods:
		* size
		* add
		* delete
		* clear
		* has
*/

let myData = [1, 1, 1, 2, 3, "A"];
let myUniqueData1 = new Set([1, 1, 1, 2, 3]); // set(1, 2, 3)
let myUniqueData2 = new Set(myData); // set(1, 2, 3, "A")
console.log(myData); // array
console.log(typeof myUniqueData2); // object
console.log(myData.length); // 6
console.log(myUniqueData1); // set(3)
console.log(myUniqueData2); // set(4)
console.log(myUniqueData1.size, "-" ,myUniqueData2.size); // 3 - 4

let myUniqueData3 = new Set();
myUniqueData3.add(1).add(1).add(1);
myUniqueData3.add(2).add(3).add("A");
let myUniqueData4 = new Set().add(1).add(1).add(1).add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData4.has("a".toUpperCase())}`); // true

console.log(myData[0]); // 1
console.log(myUniqueData4[0]); // undefined

myUniqueData4.delete(2); // true
console.log(myUniqueData4.delete(2)); // false
console.log(myUniqueData4); // set(1, 3, "A")
console.log(myUniqueData4.size); // 3

myUniqueData4.clear();
console.log(myUniqueData4); // set(0)
console.log(myUniqueData4.size); // 0

// Values + Keys [Alias For Values]
let iterator1 = myUniqueData3.keys();
let iterator2 = myUniqueData3.values();
let iterator3 = myUniqueData3.entries();
console.log(iterator1); // SetIterator {1, 2, 3, 'A'}
console.log(iterator2); // SetIterator {1, 2, 3, 'A'}
console.log(iterator3); // SetIterator {1 => 1, 2 => 2, 3 => 3, 'A' => 'A'}
console.log(iterator1.next().value); // 1
console.log(iterator1.next().value); // 2
console.log(iterator1.next().value); // 3
console.log(iterator1.next().value); // A
console.log(iterator1.next()); // {value: undefined, done: true}

// forEach
myUniqueData4.forEach((el) => console.log(el));

/*
Set vs WeakSet

	=> The WeakSet is weak,meaning references to objects in a WeakSet are held weakly.If no other references to an object stored in the WeakSet exist,those objects can be garbage collected.
	=> Usage: Store objects and removes them once they become inaccessible
	=> comparison (set vs weakSet):
		Set     => Can Store Any Data Values
		WeakSet => Collection Of Objects Only

		Set     => Have Size Property
		WeakSet => Does Not Have Size Property

		Set     => Have Keys, Values, Entries
		WeakSet => Does Not Have clear, Keys, Values And Entries

		Set     => Can Use forEach
		WeakSet => Cannot Use forEach
*/

let mySet22 = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet22); // object
let myWeakSet22 = new WeakSet([{ A: 1, B: 2 }]);
console.log(myWeakSet22); // object

/*
Map Data Type

	=> Syntax: new Map(Iterable With Key/Value)
	=> properties:
		* has entries
		* keys/values => iterator (customize iteration, control iteration stages, access to iteration value)
		* type => object
	=> comparison (map vs object):
		Map => Does Not Contain Keys By Default
		Object => Has Default Keys

		Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
		Object => String Or Symbol

		Map => Ordered By Insertion
		Object => Not 100% Till Now

		Map => Get Items By Size
		Object => Need To Do Manually - Object.Entries().length

		Map => Can Be Directly Iterated
		Object => Not Directly And Need To Use Object.keys() And So On

		Map => Better Performance When Add Or Remove Data
		Object => Low Performance When Comparing To Map
*/

let myObject66 = {}; // object has default keys
let myEmptyObject = Object.create(null); // object with no keys (null prototype)
let myMap222 = new Map(); // map - has no keys by default
console.log(myObject66); // has properties by default
console.log(myEmptyObject); // No properties
console.log(myMap222); // No properties
let myMap383 = new Map([
	[10, "Number"],
	["Name", "String"],
	[false, "Boolean"],
]);
console.log(typeof myMap383); // object

let myNewObject = {
	10: "Number",
	//"10": "String",
};
console.log(myNewObject); // one pair - 10: "String"
console.log(myNewObject[10]); // string - 10 is updated

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
console.log(myNewMap.get(10)); // number
console.log(myNewMap.get("10")); // string
console.log(myNewObject); // one pair - 10: "String"
console.log(myNewMap); // map(2) {10, "Number", "10", "String"}
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");
console.log(myNewMap);

for (let k of myNewMap){
	console.log(k);
}
for (let [k, y] of myNewMap){
	console.log(`${k} ${y}`);
}

let iterator11 = myNewMap.keys();
let iterator22 = myNewMap.values();
let iterator33 = myNewMap.entries();
console.log(iterator11); // MapIterator {10, '10', true, {…}, ƒ}
console.log(iterator22); // MapIterator {'Number', 'String', 'Boolean', 'Object', 'Function'}
console.log(iterator33); // MapIterator {10 => 'Number', '10' => 'String', true => 'Boolean', {…} => 'Object', ƒ => 'Function'}
console.log(iterator11.next().value); // 10
console.log(iterator11.next().value); // 10
console.log(iterator11.next().value); // true
console.log(iterator11.next().value); // {a: 1, b: 2}
console.log(iterator11.next()); // {value: 'Function', done: false}
console.log(iterator22.next().value); // Number
console.log(iterator22.next().value); // String
console.log(iterator22.next().value); // Boolean
console.log(iterator22.next().value); // Object
console.log(iterator22.next()); // {value: 'Function', done: false}
console.log(iterator33.next().value); // [10, 'Number']
console.log(iterator33.next().value); // ['10', 'String']
console.log(iterator33.next().value); // [true, 'Boolean']
console.log(iterator33.next().value); // [{…}, 'Object']
console.log(iterator33.next()); // {value: Array(2), done: false}

/*
Map Data Type

	=> Methods
		* set
		* get
		* delete
		* clear
		* has
		* size
*/

let myMap33 = new Map([
	[10, "Number"],
	["Name", "String"],
	[false, "Boolean"],
]);

myMap33.set(10, "Number");
myMap33.set("Name", "String");
console.log(myMap33);

console.log(myMap33.get(10));
console.log(myMap33.get("Name"));
console.log(myMap33.get(false));

console.log(myMap33.has("Name")); // true
console.log(myMap33.size); // 3

console.log(myMap33.delete("Name")); // true
console.log(myMap33.size); // 2

myMap33.clear();
console.log(myMap33.size); // 0

/*
Map vs WeakMap

	=> WeakMap Allows Garbage Collector To Do Its Task But Not Map.
	=> comparison (map vs weakMap):
		Map     => Key Can Be Anything
		WeakMap => Key Can Be Object Only
*/

let mapUser = { theName: "Elzero" };
let myMap = new Map();
myMap.set(mapUser, "Object Value");
mapUser = null; // Override The Reference
console.log(myMap);
console.log(typeof myMap); // object

let wMapUser = { theName: "Elzero" };
let myWeakMap = new WeakMap();
myWeakMap.set(wMapUser, "Object Value");
wMapUser = null; // Override The Reference
console.log(myWeakMap);
console.log(typeof myWeakMap); // object

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* Spread Operator => ...Iterable - Allow Iterable To Expand In Place */

// Spread With String => Expand String
console.log("Osama");
console.log(..."Osama"); // o s a m a
console.log([..."Osama"]); // ['o', 's', 'a', 'm', 'a']

// Concatenate Arrays
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];
let allArrays = [...myArray1, ...myArray2]; // concat
console.log(allArrays);

// Copy Array
let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array
let allFriends88 = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];
allFriends.push(...thisYearFriends);
console.log(allFriends88);

// Use With Math Object
let myNums99 = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums99));

// Spread With Objects => Merge Objects
let objOne = {
	a: 1,
	b: 2,
};
let objTwo = {
	c: 3,
	d: 4,
};
console.log({ ...objOne, ...objTwo, e: 5 });

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* Regular Expression [pattern] */

// string
let str1 = "10 20 100 1000 5000";
let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";

// Email
let invalidEmail = "Osama@@@gmail....com";
let validEmail = "o@nn.sa";

// IP
let ip = "192.168.2.1"; // IPv4

// URL
let url1 = "elzero.org";
let url2 = "elzero.org/";
let url3 = "http://elzero.org/";
let url4 = "http://www.elzero.org/";
let url5 = "https://.elzero.org/";
let url6 = "https://www.elzero.org/";
let url7 = "https://www.elzero.org/?facebookid=asdasdasd";

/*
Syntax
	* /pattern/modifier(s);
	* new RegExp("pattern", "modifier(s)")

Modifiers/Flags
	* i => case-insensitive
	* g => global
	* m => Multilines

Methods
	* .match(Pattern) - match() function returns an array containing the first match found in the string, or null if no match is found.
		** Matches A String Against a Regular Expression Pattern
		** Returns An Array With The Matches
		** Returns null If No Match Is Found
	* Test Method: pattern.test(input)
	* replace
	* replaceAll
*/

let myString585 = "Hello Elzero Web School I Love elzero";
let regex = /elzero/ig;
console.log(myString585.match(regex));

/*
Group
	(X|Y) => X Or Y

Ranges
	[0-9] => 0 To 9
	[^0-9] => Any Character Not 0 To 9
	[a-z]
	[^a-z]
	[A-Z]
	[^A-Z]
	[abc]
	[^abc]
*/

let tld = "Com Net Org Info Code Io";
let tldRe1 = /(info|org|io)/i;
console.log(tld.match(tldRe1)); // [Org]
let tldRe2 = /(info|org|io)/gi;
console.log(tld.match(tldRe2)); // [info, org, io]

let nums585 = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums585.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

// practice

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

let myString77 = "AaBBCodeG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde1 = /[ace]/g;
let aAndcAnde2 = /ace/g;
let aAndcAnde3 = /ace|d/g;
let aAndcAnde4 = /(ace)/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials1 = /[^a-zA-Z0-9]/g;
let specials2 = /[^a-z^A-Z0-9]/g;
console.log(myString77.match(atozSmall));
console.log(myString77.match(NotAtozSmall));
console.log(myString77.match(atozCapital));
console.log(myString77.match(NotAtozCapital));
console.log(myString77.match(aAndcAnde1));
console.log(myString77.match(aAndcAnde2));
console.log(myString77.match(aAndcAnde3));
console.log(myString77.match(aAndcAnde4));
console.log(myString77.match(NotaAndcAnde));
console.log(myString77.match(lettersCapsAndSmall));
console.log(myString77.match(numsAndSpecials));
console.log(myString77.match(specials1));
console.log(myString77.match(specials2));

/*
Character Classes

	.  => matches any character, except newline or other line terminators.
	\w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
	\W => matches Non word characters
	\d => matches digits from 0 to 9.
	\D => matches non-digit characters.
	\s => matches whitespace character.
	\S => matches non whitespace character.
	\b => matches at the beginning or end of a word.
	\B => matches NOT at the beginning/end of a word.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word1 = /\w/g;
let word2 = /\W/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word1));
console.log(email.match(word2));
console.log(email.match(valid));
let names51 = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re51 = /(\bspam|spam\b)/gi;
console.log(names51.match(re51));

// Test Method: pattern.test(input)
let names91 = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re91 = /(\bspam|spam\b)/gi;
console.log(re91.test(names91)); // true
console.log(/(\bspam|spam\b)/gi.test("Osama")); // false
console.log(/(\bspam|spam\b)/gi.test("1Spam")); // true
console.log(/(\bspam|spam\b)/gi.test("Spam1")); // true

/*
Quantifiers

	n+ => One Or More
	n* => zero or more
	n? => zero or one

	n{x}   => Number of
	n{x,y} => Range
	n{x,}  => At Least x

	$  => End With Something
	^  => Start With Something
	?= => Followed By Something
	?! => Not Followed By Something
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let mailsRe1 = /\w+@\w+.(com|net)/ig;
let mailsRe2 = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe1));
console.log(mails.match(mailsRe2));

let nums63 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe63 = /0\d*0/gi;
console.log(nums63.match(numsRe63));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

let serials = "S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

let myString53 = "We Love Programming";
console.log(/ing$/gi.test(myString53));
console.log(/^we/gi.test(myString53));

let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
console.log(/lz$/gi.test(names));
console.log(/^\d/gi.test(names));
console.log(names.match(/\d\w{5}(?=Z)/gi));
console.log(names.match(/\d\w{8}(?!Z)/gi));

// replace
let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));

// replaceAll
let re88 = /@/gi;
console.log(txt.replaceAll(re88, "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));

// form validation

/*
<form id="register" action="" method="get">
	<input type="text" id="phone" name="the-phone" maxlength="15" />
	<input type="submit" value="Register" />
</form>
*/
/*
	Regular Expression
	- Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
	let phoneInput = document.getElementById("phone").value;
	let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
	let validationResult = phoneRe.test(phoneInput);
	if (validationResult === false) {
		return false;
	}
	return true;
}

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Prototype

	=> Prototypes are the mechanism by which JavaScript objects inherit features from one another.
*/

console.log(String.prototype); // String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}

/*
Prototype

	=> Add To Prototype Chain
	=> Extend Built-In Constructors Features
*/

class User {
	constructor(id, username) {
		this.i = id;
		this.u = username;
	}
	sayHello() {
		return `Hello ${this.u}`;
	}
}

let userOne53 = new User(100, "Elzero");
console.log(userOne53.u); // Elzero
console.log(User.prototype);
	/*
	> {constructor: ƒ, sayHello: ƒ}
		> constructor: class User
		> sayHello: ƒ sayHello()
		> [[Prototype]]: Object
	*/
console.log(userOne53);
	/*
	> User {i: 100, u: 'Elzero'}
		> i: 100
		> u: "Elzero"
		> [[Prototype]]: Object
			> constructor: class User
			> sayHello: ƒ sayHello()
			> [[Prototype]]: Object
	*/

User.prototype.sayWelcome = function () {
	return `Welcome ${this.u}`;
};
console.log(User.prototype);
	/*
	> {constructor: ƒ, sayHello: ƒ}
		> sayWelcome: ƒ ()
		> constructor: class User
		> sayHello: ƒ sayHello()
		> [[Prototype]]: Object
	*/
console.log(userOne53);
	/*
	> User {i: 100, u: 'Elzero'}
		> i: 100
		> u: "Elzero"
		> [[Prototype]]: Object
			> sayWelcome: ƒ ()
			> constructor: class User
			> sayHello: ƒ sayHello()
			> [[Prototype]]: Object
	*/

Object.prototype.love = "Elzero Web School"; // add to object constructor prototype - User class will inherit this property and userOne53 so

String.prototype.addDotBeforeAndAfter = function (val) {
	return `.${this}.`;
};
let myString503 = "Elzero";
console.log(myString503.addDotBeforeAndAfter()); // .Elzero.

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Object Meta Data And Descriptor - default: false

	=> writable
	=> enumerable
	=> configurable [Cannot Delete Or Reconfigure]
*/

const myObject778 = {
	a: 1,
	b: 2,
};
Object.defineProperty(myObject778, "c", {
	writable: false,
	enumerable: true,
	configurable: true,
	value: 3,
});
Object.defineProperty(myObject778, "c", {
	writable: true,
	enumerable: true,
	configurable: false,
	value: 200,
});
Object.defineProperty(myObject778, "c", { // error - Cannot redefine property: cat Function.defineProperty
	writable: false,
	enumerable: false,
	configurable: true,
	value: 5,
});
myObject778.c = 500;
console.log(delete myObject778.c);
for (let prop in myObject778) {
	console.log(prop, myObject778[prop]);
}
console.log(myObject778);

/*
Object Meta Data And Descriptor

	=> Define Multiple Properties
	=> Check Descriptors
*/

const myObject887 = {
	a: 1,
	b: 2,
};
Object.defineProperties(myObject887, {
	c: {
		configurable: true,
		value: 3,
	},
	d: {
		configurable: true,
		value: 4,
	},
	e: {
		configurable: true,
		value: 5,
	},
});
console.log(myObject887);
console.log(Object.getOwnPropertyDescriptor(myObject887, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject887));

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Date And Time

	=> Date Constructor
	=> Static Methods
		* Date.now()
	=> To Track Time You Need Starting Point
	=> Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
	=> Why 1970 [829 Days To 136 Years]
	=> Search For
		* Year 2038 Problem in Computer Science.
		* unix time => wikipedia
*/

let dateNow = new Date();
console.log(dateNow); // current date and time - Mon Jan 16 2023 18:48:00 GMT+0200 (Eastern European Standard Time)
console.log(Date.now()); // number of mill seconds from 1/1/1970 - 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);
let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);
let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);
let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);
let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*
Date And Time

	=> getTime() => Number Of Milliseconds
	=> getDate() => Day Of The Month
	=> getFullYear()
	=> getMonth() => Zero Based
	=> getDay() => Day Of The Week
	=> getHours()
	=> getMinutes()
	=> getSeconds()
*/

let dateNow88 = new Date();
console.log(dateNow88); // Mon Jan 16 2023 19:10:17 GMT+0200 (Eastern European Standard Time)
let birthday = new Date("Oct 26, 82");
console.log(birthday); // Tue Oct 26 1982 00:00:00 GMT+0200 (Eastern European Standard Time)
let dateDiff = dateNow88 - birthday;
console.log(dateDiff); // 1269457792783
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365); // 40.254242259988594

console.log(dateNow88.getTime()); // 1673888972394
console.log(dateNow88.getDate()); // 16
console.log(dateNow88.getFullYear()); // 2023
console.log(dateNow88.getMonth()); // 0 - january  - [January, February, March, April, May, .....]
let arrayMonth =["jan", "feb", "mar", "apr"];
console.log(arrayMonth[dateNow88.getMonth()]); // jan
console.log(dateNow88.getDay()); // 1 - monday - [Sunday, Monday, Tuesday, Wednesday, .......]
let arrayDay =["Sunday", "Monday", "Tuesday", "Wednesday"];
console.log(arrayDay[dateNow88.getDay()]); // Monday
console.log(dateNow88.getHours()); // 19
console.log(dateNow88.getMinutes()); // 10
console.log(dateNow88.getSeconds()); // 17

/*
Date And Time

	=> setTime(Milliseconds)
	=> setDate() => Day Of The Month [Negative And Positive]
	=> setFullYear(year, month => Optional [0-11], day => Optional [1-31])
	=> setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
	=> setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
	=> setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
	=> setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow77 = new Date();
console.log(dateNow77); // Mon Jan 16 2023 19:17:48 GMT+0200 (Eastern European Standard Time)
dateNow77.setTime(0);
console.log(dateNow77); // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)
dateNow77.setTime(10000);
console.log(dateNow77); // Thu Jan 01 1970 02:00:10 GMT+0200 (Eastern European Standard Time)
dateNow77.setDate(0);
console.log(dateNow77); // Wed Dec 31 1969 02:00:10 GMT+0200 (Eastern European Standard Time)
dateNow77.setDate(-5);
console.log(dateNow77); // Tue Nov 25 1969 02:00:10 GMT+0200 (Eastern European Standard Time)
dateNow77.setDate(35);
console.log(dateNow77); // Fri Dec 05 1969 02:00:10 GMT+0200 (Eastern European Standard Time)
dateNow77.setFullYear(2020, 13);
console.log(dateNow77); // Fri Feb 05 2021 02:00:10 GMT+0200 (Eastern European Standard Time)
dateNow77.setMonth(15);
console.log(dateNow77); // Tue Apr 05 2022 02:00:10 GMT+0200 (Eastern European Standard Time)
dateNow77.setHours(15);
console.log(dateNow77);
dateNow77.setMinutes(15);
console.log(dateNow77);
dateNow77.setSeconds(15);
console.log(dateNow77);

/*
Date And Time
	=> new Date(timestamp)
	=> new Date(Date String)
	=> new Date(Numeric Values)

Format
	- "Oct 25 1982"
	- "10/25/1982"
	- "1982-10-25" => ISO International Standard
	- "1982 10"
	- "1982"
	- "82"
	- 1982, 9, 25, 2, 10, 0
	- 1982, 9, 25
	- "1982-10-25T06:10:00Z"
method
	=> Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982")); // 404344800000

let date1 = new Date(0);
console.log(date1); // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)
let date2 = new Date(404344800000);
console.log(date2); // Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)

let date31 = new Date("10-25-1982");
console.log(date31); // Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)
let date32 = new Date("10 25 1982");
console.log(date32);// Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)
let date33 = new Date("10/25/1982");
console.log(date33);// Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)
let date34 = new Date("10@25@1982");
console.log(date34);// Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)
let date4 = new Date("1982-10-25");
console.log(date4);// Mon Oct 25 1982 02:00:00 GMT+0200 (Eastern European Standard Time)
let date5 = new Date("1982-10");
console.log(date5);// Fri Oct 01 1982 02:00:00 GMT+0200 (Eastern European Standard Time)
let date61 = new Date("1982");
console.log(date61);// Fri Jan 01 1982 02:00:00 GMT+0200 (Eastern European Standard Time)
let date62 = new Date("82");
console.log(date62);// Fri Jan 01 1982 00:00:00 GMT+0200 (Eastern European Standard Time)
let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);// Mon Oct 25 1982 02:10:00 GMT+0200 (Eastern European Standard Time)
let date8 = new Date(1982, 9, 25);
console.log(date8);// Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)
let date91 = new Date("1982-10-25T06:10:00Z");
console.log(date91);// Mon Oct 25 1982 08:10:00 GMT+0200 (Eastern European Standard Time)
let date92 = new Date("1982-10-25T06:10:00");
console.log(date92); // Mon Oct 25 1982 06:10:00 GMT+0200 (Eastern European Standard Time)

/*
Date And Time
	=> Track Operations Time
	=> performance.now()
	=> performance.mark()
*/

// Start Time
let start1 = new Date();
// Operation
for (let i = 0; i < 100000; i++) {
	// document.write(`<div>${i}</div>`);
	let div = document.createElement("div");
	div.appendChild(document.createTextNode(i));
	document.body.appendChild(div);
}
// Time End
let end1 = new Date();
// Operation Duration
let duration1 = end1 - start1;
console.log(duration1/1000);

/*
performance.now() is a JavaScript function that returns the current time in milliseconds, according to the performance.timing API. It can be used to measure the duration of a certain event or operation.

performance.mark() is another function of the performance.timing API. It creates a named timestamp in the browser's performance timeline, which can be used as a reference point for measuring the duration of a certain event or operation. This is often used in conjunction with performance.measure() to create a measure of the duration between two marks.

It's worth noting that the performance.now(), performance.mark(), and performance.measure() are useful for measuring performance of your JavaScript code, but it's not a substitute for real user monitoring, since it can vary greatly depending on the user's device and network conditions.

It's important to keep in mind that the actual time it takes to complete the request could be affected by various factors such as network conditions, server load, and browser's performance.
*/

// performance.now()

function someFunction() {
	console.log("amr");
}
let start2 = performance.now();
someFunction();
let end2 = performance.now();
let duration2 = end2 - start2;
console.log(`Duration of someFunction(): ${duration2}ms`);

let arr54 = [3, 1, 4, 2, 5];
let start54 = performance.now();
arr54.sort();
let end54 = performance.now();
let duration54 = end54 - start54;
console.log(`Sorting duration: ${duration54}ms`);

// performance.mark(), performance.measure()

performance.mark('start');
console.log("amr");
performance.mark('end');
performance.measure('duration', 'start', 'end');
let measure1 = performance.getEntriesByName('duration')[0];
console.log(`Duration between start and end: ${measure.duration}ms`);

performance.mark('start-load');
let img = new Image();
img.src = 'large-image.jpg';
img.onload = function() {
		performance.mark('end-load');
		performance.measure('load-time', 'start-load', 'end-load');
		let measure2 = performance.getEntriesByName('load-time')[0];
		console.log(`Image load time: ${measure2.duration}ms`);
} // In this example, the performance.mark('start-load') is called before the image is loaded, then performance.mark('end-load') is called when the image onload event is fired and finally the measure is taken with the performance.measure('load-time', 'start-load', 'end-load')

performance.mark('start-promise');
let promise = new Promise((resolve, reject) => {
		setTimeout(resolve, 2000);
});
promise.then(() => {
		performance.mark('end-promise');
		performance.measure('promise-time', 'start-promise', 'end-promise');
		let measure = performance.getEntriesByName('promise-time')[0];
		console.log(`Promise resolution time: ${measure.duration}ms`);
});

performance.mark('start-ajax');
$.ajax({
		url: '/some-url',
		success: function(data) {
				performance.mark('end-ajax');
				performance.measure('ajax-time', 'start-ajax', 'end-ajax');
				let measure = performance.getEntriesByName('ajax-time')[0];
				console.log(`AJAX request time: ${measure.duration}ms`);
		}
});

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Generators

	=> Generator Function Run Its Code When Required.
	=> Generator Function Return Special Object [Generator Object]
	=> Generators Are Iterable
*/

function* generateNumbers() {
	yield 1;
	console.log("Hello After Yield 1");
	yield 2;
	yield 3;
	yield 4;
}
let generator = generateNumbers();
console.log(typeof generator); // object
console.log(generator);
/*
> generateNumbers {<suspended>}
		[[GeneratorLocation]]: script.js:1
	> [[Prototype]]: Generator
		[[GeneratorState]]: "suspended"
	> [[GeneratorFunction]]: ƒ* generateNumbers()
	> [[GeneratorReceiver]]: Window
*/
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next().value); // 2
console.log(generator.next().done); // false
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: undefined, done: true}
console.log(generator.next()); // {value: undefined, done: true}
console.log(generator.next()); // {value: undefined, done: true}
for (let value of generateNumbers()) {
	console.log(value); // 1 Hello After Yield 1 2 3 4
}
for (let value of generator) {
	console.log(value); // empty - because we yielded before
}

/* Delegate Generator */

function* generateNums() {
	yield 1;
	yield 2;
	yield 3;
}
function* generateLetters() {
	yield "A";
	yield "B";
	yield "C";
}
function* generateAll() {
	yield* generateNums(); // using * to yield data instead of yield function
	yield* generateLetters(); // using * to yield data instead of yield function
	yield* [4, 5, 6]; // using * to yield data instead of yield array
}
let generator77 = generateAll();
console.log(generator77.next());
console.log(generator77.next());
console.log(generator77.next());
console.log(generator77.next());
console.log(generator77.next());
console.log(generator77.next()); // {value: C, done: false}
console.log(generator77.return()); // or return(any) => to stop yielding - .return() => {value: undefined, done: true} / .return(any) => {value: any, done: true}
console.log(generator77.next()); // {value: undefined, done: true} - because of .return()
console.log(generator77.next()); // {value: undefined, done: true} - because of .return()
console.log(generator77.next()); // {value: undefined, done: true} - because of .return()

/*
Generators

	=> Generate Infinite Numbers
	=> Use Return Inside Generators
*/

function* generateNumbers1() {
	yield 1;
	yield 2;
	return "A";
	yield 3; // Unreachable code
	yield 4;
	let index = 0;

	while (true) {
		yield index++;
	}
}
let generator78 = generateNumbers1();
console.log(generator78.next()); // {value: 1, done: false}
console.log(generator78.next()); // {value: 2, done: false}
console.log(generator78.next()); // {value: 'A', done: true}
console.log(generator78.next()); // {value: undefined, done: true}

function* generateNumbers2() {
	let index = 0;
	while (true) {
		yield index++;
	}
}
let generator788 = generateNumbers2();
console.log(generator788.next()); // {value: 1, done: false}
console.log(generator788.next()); // {value: 2, done: false} and so on

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Modules

	=> Import And Export
*/

let aa44 = 10;
let array554 = [1, 2, 3, 4];
function saySomething441() {
	return `Something`;
}
export { aa44, array554, saySomething441 }; // can export all in one group

//
import { a, array554, saySomething as s55 } from "./main.js"; // as => for alias
console.log(aa44);
console.log(array554);
console.log(s55());

// in the another js file
export function saySomething5() { // can export individual
	return `Something`;
}

/*
in html
	<script src="script.js" type="module"></script>
*/

/*
Modules

	=> Export Alias
	=> Named Export
	=> Default Export
	=> Import All
*/

let aa88 = 10;
let array553 = [1, 2, 3, 4];
function saySomething553() {
	return `Something`;
}
export { aa88 as myNumber, array553, saySomething553 }; // as => for alias
export default function () {
	return `Hello`;
}
export default function saySome903() { // A module cannot have multiple default exports
	return `Hello`;
}
import elzero, { myNumber, arr, saySomething as s88 } from "./main.js"; // elzero => alias for default export
console.log(myNumber);
console.log(arr);
console.log(s88());
console.log(elzero());
import * as all from "./main.js";
console.log(all);
console.log(all.myNumber);
console.log(all.arr);

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// DOM: DOM stands for Document Object Model, and it is, basically, a structured representation of HTML documents. The DOM allows us to use JavaScript to access HTML elements and styles in order to manipulate them. We will be able to change text, to change HTML attributes and also to change CSS styles from our JavaScript. So we can say that DOM is basically a connection point between HTML documents and JavaScript code. The DOM is automatically created by the browser as soon as the HTML page loads. And it's stored in a tree structure. In this tree, each HTML element is one object.

/*
And so let's now take a look at this DOM structure in a little bit more detail. And to illustrate this here is a very simple HTML document. So, as I already mentioned, this is a tree structure, which looks a bit like a family tree, right? And actually we used the terms, child element, parent element, sibling element and so on, when we talk about the DOM tree and DOM manipulation. Anyway, as you can see for each element in the HTML, there is one element node in the DOM tree, and we can access and interact with each of these nodes using JavaScript. Okay, so the DOM always starts with the document object, right at the very top. And document is a special object that we have access to in JavaScript. And this object serves as an entry point into the DOM. So that means that the query selector method is available on the document object. And so that's why we say that document is the entry point to the DOM, because we need it to start selecting elements. All right, then the first child element of document is usually the HTML element, because that's usually the root element in all HTML documents. Next, HTML usually has two child elements, head and body. And so of course you can also find them here in the DOM tree. In the HTML, they are adjacent elements, and so they are siblings in our DOM as well. Then, as we keep going deeper into the nested HTML structure, we keep adding more and more children to the DOM tree. So inside head and body, you have more child elements, and the two sections and the body, even have child elements themselves. And from there, it goes even deeper because the first paragraph also has a child, which is this link element here. And with that, finally, we have all our HTML elements in the DOM tree. But a Dom tree actually has more than just element nodes. It also has nodes for all the text itself, comments and other stuff, because basically the rule is that whatever is in the HTML document also has to be in the DOM. And so, as you see, the DOM really is a complete representation of the HTML document, so that we can manipulate it in complex ways.
*/
<html>
	<head>
		<title>Document</title>
	</head>
	<body>
		<section>
			<p>Paragraph 1<a>link</a></p>
			<p>Paragraph 2</p>
		</section>
		<section>
			<img src="https://picsum.photos/200/300" alt="Image" />
		</section>
	</body>
</html>

// DOM is not a apart of JS, it is an web APIs. So the web APIs are like libraries that browsers implement and that we can access from our JavaScript code. And API stands for Application Programming Interface. That is provided by the browser. So, it is a set of rules that the browser provides to us, so that we can interact with the browser. Remember that JavaScript is actually just a dialect of the ECMAScript specification, and all this DOM related stuff is simply not in there. You need to know is that a web APIs are, basically, libraries that are also written in JavaScript and that are automatically available for us to use. So all this happens behind the scenes, we don't have to import or do anything, okay? And there is actually an official DOM specification that browsers implement, which is the reason why DOM manipulation works the same in all browsers.

/*
Find Elements

> Find Element By DOM Selectors
	>> Find Element By ID
	>> Find Element By Tag Name
	>> Find Element By Class Name
	>> Find Element By CSS Selectors (querySelector - querySelectorAll)
> Find Element By Collection
	>> title
	>> body
	>> images
	>> forms
	>> links
*/

let myIdElement = document.getElementById("my-div"); // Element or null if not found
console.log(myIdElement);
let myTagElements = document.getElementsByTagName("p"); // HTMLCollection(n)
console.log(myTagElements[1]);
let myClassElements = document.getElementsByClassName("my-span");  // HTMLCollection(n)
console.log(myClassElements[1]);
let myQueryElement = document.querySelector(".my-span"); // get a first element
console.log(myQueryElement);
let myQueryAllElement = document.querySelectorAll(".my-span"); // NodeList(n) - act as array
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);  // HTMLCollection(n)
console.log(document.links[1].href);  // HTMLCollection(n)
console.log(document.images);  // HTMLCollection(n)

/*
Get/Set Elements Content And Attributes

> innerHTML
> textContent
> Change Attributes Directly
> Change Attributes With Methods
	>> getAttribute
	>> setAttribute
> Search
	>> innerText
*/

let myElement885 = document.querySelector(".js");
console.log(myElement885.innerHTML); // get html
console.log(myElement885.textContent); // get txt

myElement885.innerHTML = "Text From <span>Main.js</span> File"; // set html
myElement885.textContent = "Text From <span>Main.js</span> File"; // set text

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture"; // if Attribute not actually exist it will be added to html element and set its value
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter"); // if Attribute not actually exist it will be added to html element and set its value

/*
Check Attributes

> Element.attributes
> Element.hasAttribute
> Element.hasAttributes
> Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[0].attributes); // NamedNodeMap 
let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) { // bool
	if (myP.getAttribute("data-src") === "") {
		myP.removeAttribute("data-src");
	} else {
		myP.setAttribute("data-src", "New Value");
	}
} else {
	console.log(`Not Found`);
}
if (myP.hasAttributes()) { // bool
	console.log(`Has Attributes`);
}
if (document.getElementsByTagName("div")[0].hasAttributes()) {
	console.log(`Has Attributes`);
} else {
	console.log(`Div Has No Attributes`);
}

/*
Create Elements

> createElement
> createAttribute
> setAttributeNode
> createComment
> createTextNode
> appendChild
*/

let myElement225 = document.createElement("div");
let myAttr = document.createAttribute("data-custom"); // 1st creat Attribute (can be empty)
myElement225.setAttributeNode(myAttr);
myElement225.setAttribute("data-test", "testing");  // 2nd creat Attribute (can not be empty)
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");
myElement225.className = "product";
// Append Comment To Element
myElement225.appendChild(myComment);
// Append Text To Element
myElement225.appendChild(myText);
// Append Element To Body
document.body.appendChild(myElement225);

// Practice Product With Heading And Paragraph
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");
let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");
// Add Heading Text
myHeading.appendChild(myHeadingText);
// Add Heading To Main Element
myMainElement.appendChild(myHeading);
// Add Paragraph Text
myParagraph.appendChild(myParagraphText);
// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);
myMainElement.className = "product";
document.body.appendChild(myMainElement);

/*
Deal With Children

> children
> childNodes
> firstChild
> lastChild
> firstElementChild
> lastElementChild
*/

/*
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Learn JavaScript</title>
	</head>
	<body>
		<div><!-- Osama -->Hello Div<p>Hello P</p><span>Hello Span</span><!-- Comment -->Hello</div>
		<script src="main.js"></script>
	</body>
</html>
*/

let myElement = document.querySelector("div");
console.log(myElement);
console.log(myElement.children); // elements
console.log(myElement.children[0]);
console.log(myElement.childNodes); // all nodes
console.log(myElement.childNodes[0]);
console.log(myElement.firstChild); // first node = myElement.childNodes[0]
console.log(myElement.lastChild); // last node
console.log(myElement.firstElementChild); // first element
console.log(myElement.lastElementChild); // last element

/*
Events

> onclick
> oncontextmenu
> onmouseenter
> onmouseleave
> onload
> onscroll
> onresize
> onfocus
> onblur
> onsubmit
> onkeydown
> onkeyup
> onkeypress
> oninput
> onchange
> onselect
> oncopy
> oncut
> onpaste
> ondblclick
> onmousedown
> onmouseup
> onmousemove
....
*/

// keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events we usually list and on the whole document.

let myBtn = document.getElementById("btn");
myBtn.onmouseleave = function () {
	console.log("Clicked");
};
window.onresize = function () {
	console.log("Scroll");
};

/*
Events

> Validate Form Practice
> Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
document.forms[0].onsubmit = function (e) {
	let userValid = false;
	let ageValid = false;
	if (userInput.value !== "" && userInput.value.length <= 10) {
		userValid = true;
	}
	if (ageInput.value !== "") {
		ageValid = true;
	}
	if (userValid === false || ageValid === false) {
		e.preventDefault();
	}
};

document.links[0].onmouseenter = function (event) {
	console.log(event); // MouseEvent => type: mouseenter
	event.preventDefault();
};

/*
Events Simulation

> click
> focus
> blur
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");
window.onload = function () {
	two.focus();
};
one.onblur = function () {
	document.links[0].click();
};

/*
Class List

> length
> contains
> item(index)
> add
> remove
> toggle
*/

let element = document.getElementById("my-div");
console.log(element.classList); // DOMTokenList
console.log(typeof element.classList); // object
console.log(element.classList.contains("osama")); // bool
console.log(element.classList.contains("show")); // bool
console.log(element.classList.item("3")); // class name
console.log(element.classList.add("osama", "amr")); // add class
console.log(element.classList.remove("osama", "amr")); // remove class
element.onclick = function () {
	element.classList.toggle("show"); // add / remove
};

/*
CSS

> style - background-color: #00F => backgroundColor = '#00F' - inline style
> css text
> removeProperty(propertyName) [Inline, Stylesheet]
> setProperty(propertyName, value, priority)
*/

let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold";
element.style.cssText = "font-weight: bold; color: green; opacity: 0-9";
element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");
document.styleSheets[0].rules[0].style.removeProperty("color"); // external css
document.styleSheets[0].rules[0].style.setProperty("font-size", "40px", "important"); // external css

/*
Deal With Elements

> before [Element || String]
> after [Element || String]
> append [Element || String]
> prepend [Element || String]
> remove
*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");
// add outside element
element.before("text");
element.after("text");
element.before(createdP);
element.after(createdP);
// add inside element
element.append("text");
element.prepend("text");
element.append(createdP);
element.prepend(createdP);
// remove
element.remove();

/*
Traversing

> nextSibling
> nextElementSibling
> previousSibling
> previousElementSibling
> parentElement
*/

let span = document.querySelector(".two");
console.log(span.nextSibling); // node
console.log(span.nextElementSibling); // element
console.log(span.previousSibling); // node
console.log(span.previousElementSibling); // element
console.log(span.parentElement); // element
span.onclick = function () {
	span.parentElement.remove();
};

/*
Cloning

> cloneNode(Deep)
*/

let myP1 = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");
myP1.id = `${myP1.id}-clone`;
myDiv.appendChild(myP1);

/*
Add Event Listener(event, eventHandler)

> An event is something that happens on the page. For example, a mouse click, or a mouse moving, or a key press, or many other events. Then, with an event listener, we can wait for a certain event to happen, and then react to it. There are actually multiple ways to listen for events in JavaScript. But using this addEventListener method is the best one and also the most used one.
> Search
	>> Capture & Bubbling JavaScript
	>> removeEventListener
*/

// 1. addEventListener allows adding multiple events on a same element
let myP2 = document.querySelector("p");
function one() {
	console.log("Message From OnClick 1");
}
function two() {
	console.log("Message From OnClick 2");
}
// the second event will be executed only
myP2.onclick = one;
myP2.onclick = two;
// the two events will be applied on myP2 element
myP2.addEventListener("click", one);
myP2.addEventListener("click", two);

// 2. addEventListener will produce an error if event handler is not a function or object
window.onload = "Osama"; // no error
myP2.addEventListener("click", "String"); // Error

// 3. add event to element not present yet in the DOM
myP2.onclick = function () {
	let newP = myP2.cloneNode(true);
	newP.className = "clone";
	document.body.appendChild(newP);
};
let cloned = document.querySelector(".clone"); // Error
cloned.onclick = function () {
	console.log("Iam Cloned"); // Error
};
document.addEventListener("click", function (e) {
	if (e.target.className === "clone") { // no error
		console.log("Iam Cloned");
	}
});

myP2.addEventListener("click", function () {
	console.log("Message From OnClick 1 Event");
	// Note that we do not call this function here anywhere. We only define the function here, and then pass it into the event handler. But it is the JavaScript engine who will call this function as soon as the event happens. Okay? That's important to understand. So again, this function will not be called immediately once the script here is executed. This function will only be called as soon as the event happens. And you can also see that here in the code, because, well, we don't call the function anywhere using the parenthesis. And so, now, again, we're just really passing it into the addEventListener function. So this works just fine.
});
myP2.addEventListener("click", one);
myP2.addEventListener("click", two()); // if I write an event handler like that two() it will be executed on page loads, and it will not wait for event

// And now let's write a document. So that's the same document that we use for query selector. And so basically it's a big object which contains a bunch of methods for all kinds of stuff. And that includes the add event listener method. So by using add event listener here on the document, we are basically listening for events everywhere. So no matter where they happen on the page, they will always trigger the event handler that we're going to specify here.
document.addEventListener("click", function(){});

// The information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed. So remember, as I hit any key here on the keyboard, a key down event is generated and our list and our function here. So our handler function is waiting for that event to happen. And anytime that an event like this occurs, JavaScript does in fact generate an object. And that object contains all the information about the event itself, and we can then actually access that object indie event handler function. So again, when an event happened we can have access to information about that event in the event handler function just like this one.
document.addEventListener("keydown", function(e){
	console.log(e); // KeyboardEvent {object} with property called key with value of the key that I pressed
});
// JavaScript, we'll call this function with the event object as an argument. And once more, this works because we do not call this function here ourselves. We do not call the function. We only define it here. So we say Hey, JavaScript call function when a key down event happens. And when you do so, please pass on the event object as an argument.

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
BOM [Browser Object Model]

	=> Introduction
		* Window Object Is The Browser Window
		* Window Contain The Document $ console Object
		* All Global Variables And Objects And Functions Are Members Of Window Object
	=> What Can We Do With Window Object ?
		* Open Window
		* Close Window
		* Move Window
		* Resize Window
		* Print Document
		* Run Code After Period Of Time Once Or More
		* Fully Control The URL
		* Save Data Inside Browser To Use Later
*/

window.document.title = "Hello JS";
window.console.log("Hello JS");

/*
Interaction

=> alert(Message) => Need No Response Only Ok Available - The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc., until they have dealt with the window. In this case – until they press “OK” - SweetAlert2

=> confirm(Message) => The function confirm shows a modal window with a question and two buttons: OK and Cancel. - Returns true or false

=> prompt(Message, Default Message) => It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel - returns Message or null
	The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt. So, for prompts to look good in IE, we recommend always providing the second argument:
	let test = prompt("Test", ''); // <-- for IE
*/

window.alert("Test");
this.alert("Test");
alert("Test");

let confirmMsg = confirm("Are You Sure?"); // return boolean
console.log(confirmMsg);
if (confirmMsg === true) {
	console.log("Item Deleted");
} else {
	console.log("Item Not Deleted");
}

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters"); // "Write Day With 3 Characters" => default message
console.log(promptMsg); // return string || null

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

/*
	Alert: shows a message
	prompt: shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null
	confirm: shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc

	All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.
	There are two limitations shared by all the methods above:
		1. The browser determines the exact location of the modal window. Usually, it’s in the center.
		2. The exact look of the window also depends on the browser. We can’t modify it.
*/

/*
	=> setTimeout(Function, Timeout, Additional Params) => wait a specific time to invoke a function just one time

	=> clearTimeout(Identifier)
*/

setTimeout(function () {
	console.log("Msg");
}, 3000);

setTimeout(sayMsg111, 3000);
function sayMsg111() {
	console.log(`Iam Message`);
}

function sayMsg222(user, age) {
	console.log(`Iam Message For ${user} Age Is : ${age}`);
}
setTimeout(sayMsg222, 3000, "Osama", 38);

let counter1 = setTimeout(sayMsg222, 3000);
console.log(counter1); // id of setTimeout function
let btn33 = document.querySelector("button");
btn33.onclick = function () {
	clearTimeout(counter1); // counter1 => handler(id of setTimeout function)
};

/*
	=> setInterval(Function, Milliseconds, Additional Params) => invoke a function Interval after a specific time

	=> clearInterval(Identifier)
*/

setInterval(function () {
	console.log(`Msg`);
}, 1000);

setInterval(sayMsg888, 1000);
function sayMsg888() {
	console.log(`Iam Message`);
}

setInterval(sayMsg777, 1000, "Osama", 38);
function sayMsg777(user, age) {
	console.log(`Iam Message For ${user} His Age Is: ${age}`);
}

let counter2 = setInterval(countdown, 1000);
let div = document.querySelector("div");
function countdown() {
	div.innerHTML -= "1";
	if (div.innerHTML === "0") {
		clearInterval(counter2);
	}
}

/*
location Object

	=> href - Get / Set [URL || Hash || File || Mail]
	=> host
	=> host name
	=> protocol
	=> hash
	=> reload()
	=> replace()
	=> assign()
*/

console.log(location);

console.log(location.href);
location.href = "https://google.com";
location.href = "/#sec02";
location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

console.log(location.host); // port
console.log(location.hostname); // host

console.log(location.protocol); // Returns the Location object's URLs scheme. Can be set, to navigate to the same URL with a changed scheme

console.log(location.hash); // Returns the Location object's URLs fragment (includes leading "#" if non-empty). Can be set, to navigate to the same URL with a changed fragment (ignores leading "#")

window.location.reload(); // Reloads the current page
window.location.replace("https://google.com"); // Removes the current page from the session history and navigates to the given URL
window.location.assign("https://google.com"); // Navigates to the given URL

/*
	=> open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
	=> close() => close page that opened by open()
	=> Window Features
		* left [Num]
		* top [Num]
		* width [Num]
		* height [Num]
		* menubar [yes || no]
	=> Search
		* Window.Open Window Features
*/

setTimeout(function () {
	window.open("", "", "");
}, 2000);

setTimeout(function () {
	window.open(
			"https://google.com",
			"_blank",
			"width=400,height=400,left=200,top=10"
	);
}, 2000);

/*
History API

	=> Properties
		* length
	=> Methods
		* back()
		* forward()
		* go(Delta) - Position In History
	=> Search
		* pushState() + replaceState()
*/

console.log(history);
window.history.pushState();
window.history.replaceState();

// window.history.pushState() and window.history.replaceState() are JavaScript methods used to manipulate the browser's history. pushState() adds a new entry to the browser's history, while replaceState() modifies the current entry. Both methods take three arguments: a state object, a title (which is not used by most browsers), and a URL.
window.history.pushState({ page: "home" }, "Home", "/home"); // Add a new history entry with state { page: "home" } and URL "/home"
window.history.replaceState({ page: "about" }, "About", "/about"); // Replace the current history entry with state { page: "about" } and URL "/about"
// Note that, these functions only change the URL displayed in the browser and the state object of the current entry in the browser's history. They do not cause the browser to load a new page from the server. This allows you to update the URL and state in the browser without triggering a page reload, which can be used for example for Single Page Applications.

/*
	=> stop()
	=> print()
	=> focus()
	=> scroll(x, y || Options) - scrollTo(x, y || Options)
	=> scrollBy(x, y || Options)
*/

let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
myNewWindow.focus();

window.scrollTo({
	left: 500,
	top: 200,
	behavior: "smooth",
});

/*
Practice

	=> scrollX [Alias => PageXOffset]
	=> scrollY [Alias => PageYOffset]
*/

console.log(window.scrollX === window.pageXOffset); // true
console.log(window.scrollY === window.pageYOffset); // true

let btn = document.querySelector("button");
window.onscroll = function () {
	if (window.scrollY >= 600) {
		btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
};
btn.onclick = function () {
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
};

/*
Local Storage (object)

	=> setItem
	=> getItem
	=> removeItem
	=> clear
	=> key
	=> Info
		* No Expiration Time
		* HTTP And HTTPS
		* Private Tab
*/

console.log(window.localStorage);
console.log(typeof window.localStorage);

// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

// Remove One
window.localStorage.removeItem("color");

// Remove All
window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

console.log(window.localStorage);

// Local Storage Practice

/*
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Learn JavaScript</title>
		<link rel="stylesheet" href="main.css" />
		<style>
			body {
				background-color: #eee;
			}
			ul {
				padding: 0;
				margin: 0;
				background-color: #ddd;
				margin: 20px auto;
				padding: 20px;
				width: 400px;
				list-style: none;
				display: flex;
				justify-content: space-between;
			}
			ul li {
				width: 60px;
				height: 60px;
				border: 2px solid transparent;
				opacity: 0.4;
				cursor: pointer;
				transition: 0.3s;
			}
			ul li.active,
			ul li:hover {
				opacity: 1;
			}
			ul li:first-child {
				background-color: red;
			}
			ul li:nth-child(2) {
				background-color: green;
			}
			ul li:nth-child(3) {
				background-color: blue;
			}
			ul li:nth-child(4) {
				background-color: black;
			}
			.experiment {
				background-color: red;
				width: 600px;
				height: 300px;
				margin: 20px auto;
			}
		</style>
	</head>
	<body>
		<ul>
			<li class="active" data-color="red"></li>
			<li data-color="green"></li>
			<li data-color="blue"></li>
			<li data-color="black"></li>
		</ul>
		<div class="experiment"></div>
		<script src="main.js"></script>
	</body>
</html>
*/
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
	// If There Is Color In Local Storage
	// [1] Add Color To Div
	exp.style.backgroundColor = window.localStorage.getItem("color");
	// [2] Remove Active Class From All Lis
	lis.forEach((li) => {
		li.classList.remove("active");
	});
	// [3] Add Active Class To Current Color
	document
			.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
			.classList.add("active");
}
lis.forEach((li) => {
	li.addEventListener("click", (e) => {
		// console.log(e.currentTarget.dataset.color);
		// Remove Active Class From all Lis
		lis.forEach((li) => {
			li.classList.remove("active");
		});
		// Add Active Class To Current Element
		e.currentTarget.classList.add("active");
		// Add Current Color To Local Storage
		window.localStorage.setItem("color", e.currentTarget.dataset.color);
		// Change Div Background Color
		exp.style.backgroundColor = e.currentTarget.dataset.color;
	});
});

/*
Session Storage

	=> setItem
	=> getItem
	=> removeItem
	=> clear
	=> key
	=> Info
		* New Tab = New Session
		* Duplicate Tab = Copy Session
		* New Tab With Same Url = New Session
*/

/*
<form action="">
	<input type="text" class="name" />
</form>
*/

window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
	// console.log(this.value);
	window.localStorage.setItem("input-name", this.value);
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// JavaScript OOP

/*
What Is OOP ?
	* OOP Stand For => Object-Oriented Programming
	* OOP Is A Paradigm or Style Of Code
	* OOP Use The Concept Of Object To Design A Computer Program
	* It's Not New => Simula Is The First OOP Programming Language At 1960
	* Some Languages Support OOP and Some Not
	* Object Is A Package Contains Properties and Functions That Work Together To Produce Something in Your Application. Functions Here Called Methods
*/
/*
Object Simulation: car
	* Methods
		** Walk
		** Stop
	* Properties
		** Color
		** Price
*/
/*
Why We Use OOP ?
	* You Will be Able to Create a Large and Complex Software Architecture in Organized Ways.
	* You Will be Able To Hide Certain Parts Of Code in Your Object With Encapsulation To Prevent Mess With The Code.
	* You Will Be Able To Create Reusable Objects To Use in Your Application Easily With Inheritance.
*/

/*
	Constructor Function
*/

function User54(id, username, salary) {
	this.i = id;
	this.u = username;
	this.s = salary + 1000;
}

let userOne11 = new User54(100, "Elzero", 5000);
let userTwo2 = new User54(101, "Hassan", 6000);
let userThree3 = new User54(102, "Sayed", 7000);

console.log(userOne11.i);
console.log(userOne11.u);
console.log(userOne11.s);

console.log(userTwo2.i);
console.log(userTwo2.u);
console.log(userTwo2.s);

console.log(userThree3.i);
console.log(userThree3.u);
console.log(userThree3.s);

const userOne = {
	id: 100,
	username: "Elzero",
	salary: 5000,
};

const userTwo = {
	id: 101,
	username: "Hassan",
	salary: 6000,
};

const userThree888 = {
	id: 102,
	username: "Sayed",
	salary: 7000,
};

/*
	Constructor Function
	- New Syntax
*/

class User89 {
	constructor(id, username, salary) {
		this.i = id;
		this.u = username;
		this.s = salary + 1000;
	}
}

let userOne33 = new User89(100, "Elzero", 5000);

console.log(userOne33.i);
console.log(userOne33.u);
console.log(userOne33.s);

console.log(userOne33 instanceof User);
console.log(userOne33.constructor === User);

/*
	Constructor Function
	- Deal With Properties And Methods
*/

class User99 {
	constructor(id, username, salary) {
		// Properties
		this.i = id;
		this.u = username || "Unknown";
		this.s = salary < 6000 ? salary + 500 : salary;
		this.msg = function () {
			return `Hello ${this.u} Your Salary Is ${this.s}`;
		};
	}
	// Methods
	writeMsg() {
		return `Hello ${this.u} Your Salary Is ${this.s}`;
	}
}

let userOne55 = new User99(100, "Elzero", 5000);
let userTwo55 = new User99(101, "", 6000);

console.log(userOne55.u);
console.log(userOne55.s);
console.log(userOne55.msg());
console.log(userOne55.writeMsg());

console.log(userTwo55.u);
console.log(userTwo55.s);
console.log(userTwo55.msg); // Native Code
console.log(userTwo55.writeMsg); // Native Code

/*
	Constructor Function
	- Update Properties
	- Built In Constructors
*/

class User98 {
	constructor(id, username, salary) {
		this.i = id;
		this.u = username;
		this.s = salary;
	}
	updateName(newName) {
		this.u = newName;
	}
}

let userOne99 = new User98(100, "Elzero", 5000);

console.log(userOne99.u);
userOne.updateName("Osama");
console.log(userOne99.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

/*
	Class
	- Static Properties And Methods
*/

class User93 {
	// Static Property
	static count = 0;

	constructor(id, username, salary) {
		this.i = id;
		this.u = username;
		this.s = salary;
		User93.count++;
	}

	// Static Methods
	static sayHello() {
		return `Hello From Class`;
	}
	static countMembers() {
		return `${this.count} Members Created`;
	}
}

let userOne7 = new User93(100, "Elzero", 5000);
let userTwo7 = new User93(101, "Ahmed", 5000);
let userThree = new User93(102, "Sayed", 5000);

console.log(userOne7.u);
console.log(userTwo7.u);
console.log(userOne7.count);
console.log(User93.count);
console.log(User93.sayHello());
console.log(User93.countMembers());

/*
	Class
	- Inheritance
*/

// Parent Class
class User955 {
	constructor(id, username) {
		this.i = id;
		this.u = username;
	}
	sayHello() {
		return `Hello ${this.u}`;
	}
}

// Derived Class
class Admin extends User955 {
	constructor(id, username, permissions) {
		super(id, username);
		this.p = permissions;
	}
}

class Superman extends Admin {
	constructor(id, username, permissions, ability) {
		super(id, username, permissions);
		this.a = ability;
	}
}

let userOne4 = new User955(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne4.u);
console.log(userOne4.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());

/*
	Encapsulation
	- Class Fields Are Public By Default
	- Guards The Data Against Illegal Access.
	- Helps To Achieve The Target Without Revealing Its Complex Details.
	- Will Reduce Human Errors.
	- Make The App More Flexible And Manageable.
	- Simplifies The App.
*/

class User96 {
	// Private Property
	#e;
	constructor(id, username, eSalary) {
		this.i = id;
		this.u = username;
		this.#e = eSalary;
	}
	getSalary() {
		return parseInt(this.#e);
	}
}

let userOne00 = new User96(100, "Elzero", "5000 Dollars");

console.log(userOne00.u);
console.log(userOne00.getSalary() * 0.3);

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
What Is JSON ?

- JavaScript Object Notation
- Format For Sharing Data Between Server And Client
- JSON Derived From JavaScript
- Alternative To XML
- File Extension Is .json

Why JSON ?
- Easy To Use And Read
- Used By Most Programming Languages And Its Frameworks
- You Can Convert JSON Object To JS Object And Vice Versa

JSON vs XML
===================================================
= Text Based Format      = Markup Language        =
= Lightweight            = Heavier                =
= Does Not Use Tags      = Using Tags             =
= Shorter                = Not Short              =
= Can Use Arrays         = Cannot Use Arrays      =
= Not Support Comments   = Support Comments       =
===================================================
*/
// json file
// يمكنك الفصل بين كل JSON Object والآخر عن طريق علامة ال Comma “,” ووضعهم كلهم داخل Square Brackets []
/*
{
	"widget": {
		"debug": "on",
		"window": {
			"title": "Sample Confabulation Widget",
			"name": "main_window",
			"width": 500,
			"height": 500
		},
		"image": {
			"src": "Images/Sun.png",
			"name": "sun1",
			"hOffset": 250,
			"vOffset": 250,
			"alignment": "center"
		},
		"text": {
			"data": "Click Here",
			"size": 36,
			"style": "bold",
			"name": "text1",
			"hOffset": 250,
			"vOffset": 100,
			"alignment": "center",
			"onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
		}
	}
}
*/
// XML file
/*
<widget>
	<debug>on</debug>
	<window title="Sample Confabulation Widget">
		<name>main_window</name>
		<width>500</width>
		<height>500</height>
	</window>
	<image src="Images/Sun.png" name="sun1">
		<hOffset>250</hOffset>
		<vOffset>250</vOffset>
		<alignment>center</alignment>
	</image>
	<text data="Click Here" size="36" style="bold">
		<name>text1</name>
		<hOffset>250</hOffset>
		<vOffset>100</vOffset>
		<alignment>center</alignment>
		<onMouseUp>
			sun1.opacity = (sun1.opacity / 100) * 90;
		</onMouseUp>
	</text>
</widget>
*/

/*
JSON Syntax

	- Data Added Inside Curly Braces {  }
	- Data Added With Key : Value
	- Key Should Be String Wrapped In Double Quotes
	- Data Separated By Comma
	- Square Brackets [] For Arrays
	- Curly Braces {} For Objects

	Available Data Types
	- String
	- Number
	- Object
	- Array
	- Boolean Values
	- null
*/
/*
{
	"string": "Elzero",
	"number": 100,
	"object": { "EG": "Giza", "KSA": "Riyadh" },
	"array": ["HTML", "CSS", "JS"],
	"boolean": true,
	"null": null
}
*/

/*
	JSON
	- API Overview
	- Tools To Test API
	- Preview GitHub API
*/

/*
	JSON
	- JSON.parse => Convert Text Data To JS Object
	- JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*
	To Understand Ajax, Fetch, Promises

	Asynchronous vs Synchronous Programming
	- Meaning

	Synchronous
	- Operations Runs in Sequence
	- Each Operation Must Wait For The Previous One To Complete
	- Story From Real Life

	Asynchronous
	- Operations Runs In Parallel
	- This Means That An Operation Can Occur while Another One Is Still Being Processed
	- Story From Real Life

	- Facebook As Example
	- Simulation

	Search
	- JavaScript Is A Single-Threaded
	- Multi Threaded Languages
*/

// Synchronous
console.log("1");
console.log("2");
window.alert("Operation");
console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");

/*
	To Understand Ajax, Fetch, Promises

	Call Stack || Stack Trace
	-- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
	-- Mechanism To Make The Interpreter Track Your Calls
	-- When Function Called It Added To The Stack
	-- When Function Executed It Removed From The Stack
	-- After Function Is Finished Executing The Interpreter Continue From The Last Point
	-- Work Using LIFO Principle => Last In First Out
	-- Code Execution Is Synchronous.
	-- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

	Web API
	-- Methods Available From The Environment => Browser
*/

setTimeout(() => {
	console.log("Web API");
}, 0);

function one() {
	console.log("One");
}
function two() {
	one();
	console.log("Two");
}
function three() {
	two();
	console.log("Three");
}

three();

/*
=================================
console.log("One");
=================================
function one() {
	console.log("One");
}
=================================
function two() {
	one();
	console.log("Two");
}
=================================
function three() {
	two();
	console.log("Three");
}
=================================
*/

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");

/*
	To Understand Ajax, Fetch, Promises

	Event Loop + Callback Queue

	Story
	- JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
	- Call Stack Track All Calls
	- Every Function Is Done Its Piped Out
	- When You Call Asynchronous Function It Sent To Browser API
	- Asynchronous Function Like Settimeout Start Its Own Thread
	- Browser API Act As A Second Thread
	- API Finish Waiting And Send Back The Function For Processing
	- Browser API Add The Callback To Callback Queue
	- Event Loop Wait For Call Stack To Be Empty
	- Event Loop Get Callback From Callback Queue And Add It To Call Stack
	- Callback Queue Follow FIFO "First In First Out" Rule
*/

console.log("One");
setTimeout(() => {
	console.log("Three");
}, 0);
setTimeout(() => {
	console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
	console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;

/*
	AJAX
	- Asynchronous JavaScript And XML
	- Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
	- It Use "XMLHttpRequest" Object To Interact With The Server
	- You Can Fetch Data Or Send Data Without Page Refresh
	- Examples
	--- Youtube Studio
	--- Google Drive
	--- Upload Article Photo
	--- Form Check Name

	Test new XMLHttpRequest();
	Request And Response
	Status Code
*/

let req = new XMLHttpRequest();
console.log(req);

/*
	Ajax
	- Ready State => Status Of The Request
	[0] Request Not Initialized
	[1] Server Connection Established
	[2] Request Received
	[3] Processing Request
	[4] Request Is Finished And Response Is Ready
	- Status
	[200] Response Is Successful
	[404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
	// console.log(myRequest.readyState);
	// console.log(myRequest.status);
	if (this.readyState === 4 && this.status === 200) {
		console.log(this.responseText);
	}
};

/*
	Ajax
	Loop On Data

	Search
	- Cross Origin API [CORS]
	- API Authentication
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
	if (this.readyState === 4 && this.status === 200) {
		// console.log(this.responseText);
		let jsData = JSON.parse(this.responseText);
		// console.log(jsData);
		for (let i = 0; i < jsData.length; i++) {
			let div = document.createElement("div");
			let repoName = document.createTextNode(jsData[i].full_name);
			div.appendChild(repoName);
			document.body.appendChild(div);
		}
	}
};

/*
	To Understand Ajax, Fetch, Promises

	Pyramid Of Doom || Callback Hell

	- What Is Callback
	- Callback Hell Example

	What Is Callback
	- A Function That Is Passed Into Another One As An Argument To Be Executed Later
	- Function To Handle Photos
	--- [1] Download Photo From URL
	--- [2] Resize Photo
	--- [3] Add Logo To The Photo
	--- [4] Show The Photo In Website
*/

function makeItRed(e) {
	e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
	console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

setTimeout(() => {
	console.log("Download Photo From URL");
	setTimeout(() => {
		console.log("Resize Photo");
		setTimeout(() => {
			console.log("Add Logo To The Photo");
			setTimeout(() => {
				console.log("Show The Photo In Website");
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);

/*
	Promise Intro And Syntax
	- Promise In JavaScript Is Like Promise In Real Life
	- Promise Is Something That Will Happen In The Future
	- Promise Avoid Callback Hell
	- Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

	- Promise Status
	--- Pending: Initial State
	--- Fulfilled: Completed Successfully
	--- Rejected: Failed

	Story
	- Once A Promise Has Been Called, It Will Start In A Pending State
	- The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
	- Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

	- Then
	--- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise1 = new Promise((resolveFunction, rejectFunction) => {
	let connect = true;
	if (connect) {
		resolveFunction("Connection Established");
	} else {
		rejectFunction(Error("Connection Failed"));
	}
});

console.log(myPromise1);

let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter);

myPromise.then(
	(resolveValue) => console.log(`Good ${resolveValue}`),
	(rejectValue) => console.log(`Bad ${rejectValue}`)
);

myPromise.then(
	(resolveValue) => console.log(`Good ${resolveValue}`),
	(rejectValue) => console.log(`Bad ${rejectValue}`)
);

/*
	Promise Training

	We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
	.then(We Will Choose Two People)
	.then(We Will Test Them Then Get One Of Them)
	.catch(No One Came)

	Then    => Promise Is Successfully Use The Resolved Data
	Catch   => Promise Is Failed, Catch The Error
	Finally => Promise Successfully Or Failed Finally Do Something
*/

const myPromise = new Promise((resolveFunction, rejectFunction) => {
	let employees = [];
	if (employees.length === 4) {
		resolveFunction(employees);
	} else {
		rejectFunction(Error("Number Of Employees Is Not 4"));
	}
});

myPromise
	.then((resolveValue) => {
		resolveValue.length = 2;
		return resolveValue;
	})
	.then((resolveValue) => {
		resolveValue.length = 1;
		return resolveValue;
	})
	.then((resolveValue) => {
		console.log(`The Chosen Employee Is ${resolveValue}`);
	})
	.catch((rejectedReason) => console.log(rejectedReason))
	.finally(console.log("The Operation Is Done"));

/*
	Promise And XHR
*/

const getData = (apiLink) => {
	return new Promise((resolve, reject) => {
		let myRequest = new XMLHttpRequest();
		myRequest.onload = function () {
			if (this.readyState === 4 && this.status === 200) {
				resolve(JSON.parse(this.responseText));
			} else {
				reject(Error("No Data Found"));
			}
		};

		myRequest.open("GET", apiLink);
		myRequest.send();
	});
};

getData("https://api.github.com/users/elzerowebschool/repos")
	.then((result) => {
		result.length = 10;
		return result;
	})
	.then((result) => console.log(result[0].name))
	.catch((rej) => console.log(rej));

/*
	Fetch API
	- Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
	.then((result) => {
		console.log(result);
		let myData = result.json();
		console.log(myData);
		return myData;
	})
	.then((full) => {
		full.length = 10;
		return full;
	})
	.then((ten) => {
		console.log(ten[0].name);
	});

const getData = (apiLink) => {
	return new Promise((resolve, reject) => {
		let myRequest = new XMLHttpRequest();
		myRequest.onload = function () {
			if (this.readyState === 4 && this.status === 200) {
				resolve(JSON.parse(this.responseText));
			} else {
				reject(Error("No Data Found"));
			}
		};

		myRequest.open("GET", apiLink);
		myRequest.send();
	});
};

getData("https://api.github.com/users/elzerowebschool/repos")
	.then((result) => {
		result.length = 10;
		return result;
	})
	.then((result) => console.log(result[0].name))
	.catch((rej) => console.log(rej));

/*
	Promise
	- All
	- All Settled
	- Race
*/

const myFirstPromise = new Promise((res, rej) => {
	setTimeout(() => {
		res("Iam The First Promise");
	}, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
	setTimeout(() => {
		rej("Iam The Second Promise");
	}, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
	setTimeout(() => {
		res("Iam The Third Promise");
	}, 2000);
});

Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
	(resolvedValues) => console.log(resolvedValues),
	(rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
	(resolvedValues) => console.log(resolvedValues),
	(rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
	(resolvedValues) => console.log(resolvedValues),
	(rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

/*
	Async
	- Async Before Function Mean This Function Return A Promise
	- Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

function getData() {
	return new Promise((res, rej) => {
		let users = [];
		if (users.length > 0) {
			res("Users Found");
		} else {
			rej("No Users Found");
		}
	});
}

getData().then(
	(resolvedValue) => console.log(resolvedValue),
	(rejectedValue) => console.log("Rejected " + rejectedValue)
);

function getData() {
	let users = ["Osama"];
	if (users.length > 0) {
		return Promise.resolve("Users Found");
	} else {
		return Promise.reject("No Users Found");
	}
}

getData().then(
	(resolvedValue) => console.log(resolvedValue),
	(rejectedValue) => console.log("Rejected " + rejectedValue)
);

async function getData() {
	let users = [];
	if (users.length > 0) {
		return "Users Found";
	} else {
		throw new Error("No Users Found");
	}
}

console.log(getData());

getData().then(
	(resolvedValue) => console.log(resolvedValue),
	(rejectedValue) => console.log("Rejected " + rejectedValue)
);

/*
	Await
	- Await Works Only Inside Async Functions
	- Await Make JavaScript Wait For The Promise Result
	- Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve("Iam The Good Promise");
		reject(Error("Iam The Bad Promise"));
	}, 3000);
});

async function readData() {
	console.log("Before Promise");
	// myPromise.then((resolvedValue) => console.log(resolvedValue));
	// console.log(await myPromise);
	console.log(await myPromise3.catch((err) => err));
	console.log("After Promise");
}

readData();

/*
	Async & Await With Try, Catch, Finally
*/

const myPromise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Iam The Good Promise");
	}, 3000);
});

async function readData() {
	console.log("Before Promise");
	try {
		console.log(await myPromise);
	} catch (reason) {
		console.log(`Reason: ${reason}`);
	} finally {
		console.log("After Promise");
	}
}

readData();

// "https://api.github.com/users/elzerowebschool/repos"

async function fetchData() {
	console.log("Before Fetch");
	try {
		let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
		console.log(await myData.json());
	} catch (reason) {
		console.log(`Reason: ${reason}`);
	} finally {
		console.log("After Fetch");
	}
}

fetchData();

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
install and run live server via nodejs-npm

install: npm install live-server -g
run: live-server
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
4-step framework for solving problems

1. ask questions to clarify the problem (what, why, how, when, where, who, etc)
2. divide and conquer (break the problem into smaller sub-problems)
3. research (google, stack overflow, youtube, docs, etc)
4. write pseudocode (write down the steps you need to take in plain english)
5. draw a flowchart (draw a diagram of the steps you need to take)
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
Debugging Process

1. Identity
2. Find
3. fix
4. prevent

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Code quality - https://javascript.info/code-quality */

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* Manuals and specifications: https://javascript.info/manuals-specifications */

/*--------------------------------------------------------------------------------------------------------------------------------------------*/