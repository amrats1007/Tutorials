/*
JavaScript Releases

> 1995 => brendan eich created javascript in 10 days, and it was first released in Netscape Navigator 2.0 it was called Mocha
> 1996 => Mocha changed to LiveScript and then to JavaScript and in this year Microsoft released IE, copying the javascript engine from Netscape navigator and calling it JScript
> 1997 => ECMA International released the first version of ECMAScript. the first official standard for js, and it was called ECMAScript 1 (ES1)
> 2009 => ES5 was released
> 2015 => ES6/ES2015, the biggest update to the language ever, ECMAScript changes to an annual release cycle in order to ship fewer breaking changes per update
> 2016 - ... => release of E6+ ......... ESNext
*/

/*
Backward compatibility

There is one particularity about JavaScript releases, which is pretty unique for any programming language and that's backward compatibility all the way to ES1. So what does that actually mean? Well, basically it means that if you were to take some JavaScript code written back in 1997 and put it in a modern browser with a modern JavaScript engine today, it would still work just the same. So again, the JavaScript engine that's in our browser today is able to understand old code written 25 years ago, without having to rely on version numbers or anything like that. It just works. And it works this way because of the fundamental principle that's baked into the JavaScript language and its development, which is to not break the web. This means that there is almost never anything removed from the language but only added in new versions. And actually, we cannot really call them new versions even, because they do not contain breaking changes like when other languages moved to a new version, Instead new versions are always just incremental updates, which add new stuff. And so I like to call them releases and not versions.

The ECMA committee, which works on updating the language, does all this. So old websites basically keep working forever. Just imagine they removed some important features that made a website from 2008, work just fine. If you then want it to visit that page, it will be broken. And that's why we, fortunately, have to don't break the web principle. Now, of course, this comes with problems because there are tons of old bugs and weird things in the language Remember that Brendan Eich made the very first version in just 10 days, and no one back then could even imagine what JavaScript would be used for one day. The initial goal of JavaScript was just to add some simple dynamics to pages, not to write whole web applications in a browser like we do today. But anyway, these bugs and weird quirks in the language have been giving the language a bad reputation among many programmers who can really take JavaScript seriously because of this. But here's the thing, we can actually go around much of this weird stuff by simply learning the modern JavaScript that matters today and just ignoring most of the old weird stuff.

There is one more thing that we need to talk about here, and that is forward compatibility. So what do you think would happen if we took this totally made-up code from the year 2089 and try to run it in today's browsers? Well, you're right. It would not work at all. There would be errors left and right. And nothing would work. That's why we say that JavaScript is not forward compatibility, basically because current browsers do not understand code from the future.
*/

/*
Polyfills and transpilers

Because browsers that users use might be old and there's no forward compatibility. Right? So to answer the question, of how we can use modern JavaScript today, we need to consider two distinct scenarios, development, and production. So the development phase is simply when you're building the site or application on your computer. To ensure, you can use the latest JavaScript features in this phase. All you have to do is to use the most up-to-date version of the Google Chrome browser. The second scenario is production, which is when your web application is finished. You deploy it on the internet and it's then running in your users' browsers. And this is where problems might appear because this is the part that we actually can't control. We cannot control which browser the user uses. And we also can't assume that all our users always use the latest browsers, right? Now, the solution to this problem is to basically convert these modern JavaScript versions back to ES5 using a process called Polyfills and transpilers

We will use a tool called Babel to transpile our code, transpiling back to ES5 is only necessary after your app is developed, and you want to ship it to your users. So now let's take a look at how different JavaScript releases can be used today. So first off ES5 is, of course, fully supported in all browsers today, all the way downer to Internet Explorer 9 from 2011. So we can assume that ES5 is safe to be used at this point, which is the reason why we use it as a target for transpiring. Now about the newer releases, ES6, ES7, and all the way to ES2020, as of mid-2020, they are actually quite well-supported already in all modern browsers. And we usually call all the current versions together, ES6+. So right now that's from ES6 to ES2020, and basically all together, they are modern JavaScript. Now it's in this modern JavaScript. So in this ES6+ where transpiring comes in, as I mentioned earlier. Again, because it's not safe to assume that all our users are using these modern browsers, and we don't want to break our app for them, right?

If you want to stay up to date with what features are currently supported in which browser, you can check out the ES6 compatibility table. It's fascinating - https://kangax.github.io/compat-table/es6/ and https://caniuse.com/

Next, there are also future releases of the language like ES2021, ES2022, and so on. And these future releases together are many times called ESNext. Now, why is this even relevant? Well, because most browsers actually start implementing new features even before they enter the official ECMAScript specification. That's possible because, as new features are proposed, they have to go through four stages, starting with stage one, where they are first admitted all the way to stage four, at which point they enter the language officially. But when a feature is at stage three, browsers can be pretty sure it will eventually pass to stage four. And so they're going to start implementing that feature while still in stage three. And there is a lot more to be said about this. You can find tons of information about this online. If you want to learn more. And a great place to start is actually once more, this compatibility table - https://kangax.github.io/compat-table/es6/ and https://caniuse.com/

So Transpiler supports Backwards compatibility, and Polyfill supports Forwards compatibility. So Transpiler is a tool that converts one programming language to another. And Polyfill is a piece of code that provides the technology that you, the developer, expect the browser to provide natively.
*/

/*
What can in-browser JavaScript do?

Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers that do not require it. JavaScript’s capabilities greatly depend on the environment it's running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc. In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the web server. For instance, in-browser JavaScript is able to:
	> Add new HTML to the page, change the existing content, and modify styles.
	> React to user actions, run on mouse clicks, pointer movements, and key presses.
	> Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
	> Get and set cookies, ask questions to the visitor, and show messages.
	> Remember the data on the client side (“local storage”).
What CAN’T in-browser JavaScript do? JavaScript’s abilities in the browser are limited to protect the user’s safety. The aim is to prevent an evil webpage from accessing private information or harming the user’s data. Examples of such restrictions include:
	> JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS functions.
		- Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via a <input> tag.
		- There are ways to interact with the camera/microphone and other devices, but they require a user’s explicit permission. So a JavaScript-enabled page may not sneakily enable a web camera, observe the surroundings and send the information to the NSA.
	> Different tabs/windows generally do not know about each other. Sometimes they do, for example, when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol, or port).
		- This is called the “Same Origin Policy”. To work around that, both pages must agree for data exchange and must contain special JavaScript code that handles it
		- This limitation is, again, for the user’s safety. A page from http://anysite.com which a user has opened must not be able to access another browser tab with the URL http://gmail.com, for example, and steal information from there.
	> JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that’s a safety limitation.
		- Such limitations do not exist if JavaScript is used outside the browser, for example on a server. Modern browsers also allow plugins/extensions which may ask for extended permissions.
*/

/*
Javascript Engines

Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine. The browser has an embedded engine sometimes called a “JavaScript virtual machine”. Different engines have different “code names”. For example,
	> V8 – in Chrome, Opera, and Edge.
	> SpiderMonkey – in Firefox.
	> …There are other code names like “Chakra” for IE, “JavaScriptCore”, “Nitro” and “SquirrelFish” for Safari, etc.
How do engines work? Engines are complicated. But the basics are easy.
	> The engine (embedded if it’s a browser) parses (reads) the script.
	> Then it converts (“compiles”) the script to machine code.
	> And then the machine code runs, pretty fast.
	> The engine applies optimizations at each step of the process. It even watches the compiled script as it runs, analyzes the data that flows through it, and further optimizes the machine code based on that knowledge.
*/

/*
Languages “over” JavaScript
The syntax of JavaScript does not suit everyone’s needs. Different people want different features. That’s to be expected because projects and requirements are different for everyone. So, recently a plethora of new languages appeared, which are transpile (converted) to JavaScript before they run in the browser. Modern tools make the transpile very fast and transparent, actually allowing developers to code in another language and auto-converting it “under the hood”. Examples of such languages:
	> CoffeeScript is “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby developers like it.
	> TypeScript is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.
	> Flow also adds data typing but in a different way. Developed by Facebook.
	> Dart is a standalone language that has its own engine that runs in non-browser environments (like mobile apps) but also can be transpile to JavaScript. Developed by Google.
	> Brython is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.
	> Kotlin is a modern, concise, and safe programming language that can target the browser or Node.
There are more. Of course, even if we use one of these transpile languages
*/

/*
Variable naming

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.
Some good-to-follow rules are:
	> Use human-readable names like userName or shoppingCart.
	> Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
	> Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
	> Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.
*/

// refactoring technique: basically means restructuring the code but without changing how it works. So basically we do refactoring to improve the code and to eliminate duplicate code.
