/*
> A computer program is like a recipe. So when we write programs, we need to be very, very explicit about what we want the computer to do.

> A program is a set of instructions that a computer executes to solve a problem.

> A set of precise steps for solving a problem is known as an Algorithm and the process of creating an algorithm is called Algorithmic Thinking.

> Programmers often use something called pseudocode. Pseudocode is like an English-like or your own natural spoken language-like representation of the algorithm or the steps necessary to solve the problem. It's not a programming language. It's just a way to express the algorithm in a way that's understandable by humans.

> Refactoring means changing your code to make it better without changing behavior, that's really important. Refactoring does not change the behavior of your code(logic), it just makes your code better, more modifiable, easier to read, and so forth.

> C++ is a compiled language. or compile-time not run-time like python or javascript. So when we write C++ programs, we need to compile them first before we can run them.

> Integrated development environments (IDE) are programs that allow us to do everything from a common interface. IDEs are programs that provide an editor with a way to compile, link and execute your source code. They also often have debuggers that can help you understand your code and fix errors. IDEs also help us keep our files in sync and provide hooks to version control systems such as git and subversion.
*/

/*
C++ features

> popular
  >> Most of SW is still written in C++
  >> C++ Ranking is consistently high, look at(Programming Language Popularity Indexes)
  >> Active community (GitHub Repos, StackOverflow)
> relevant
  >> There are many, many leading software titles written entirely or partly in C++. like Windows, Linux, and macOS 10 operating systems
  >> Many Adobe products such as Photoshop and Illustrator are written in C++
  >> The MySQL and MongoDB database engines and many, many more written in C++
  >> Leading tech companies use C++ for many of their products and internal research and development. These include Amazon, Apple, Microsoft, PayPal, Google, Facebook, Oracle, and more
  >> In many cases, these are the engines that drive many popular frameworks. For example, engines for virtual reality, the unreal game engine, machine learning, network and telecom, and more
> powerful
  >> C++ (a root programming language) is super-fast, and it is a general-purpose programming language that supports both procedural and object-oriented programming making it very flexible and powerful, It scales easily, and it can also be portable
  >> With all this power and flexibility comes complexity, there's no question that C++ is one of the most complex programming languages out there
> career
  >> C++ = salary++
*/

/*
C++ standards

> 1970: Dennis Ritchie created the c programming language at Bell Labs. The development of c was closely tied to the development of the UNIX operating system.
> Classical C++
  >> 1979: Bjarne Stroustrup working on what became C++. He initially called it c with classes. His idea was to add to C object-oriented features that he knew from a language called similar.
  >> 1983: the name was changed to C++
  >> 1989: the first commercial release
  >> 1998: the c++ standards committee published the first c++ standard. informally known as C++98
  >> 2003: C++03
> Modern C++ [Bjarne Stroustrup described modern C++ as a new language with modern abstractions for ease of use and power. Along with the language features themselves, modern C++ is also about best practices and core guidelines]
  >> 2011: C++11
  >> 2014: C++14
  >> 2017: C++17
  >> 2020: C++20
  >> 2023: C++23
  >> ...........
*/

/*
Build Process

> Source code(translation unit): The code we write using programming editors. C++ programs have an extension like .cpp .h .cc .hpp and there are several others like .c .cxx .c++ .H,.hh .hxx .h++
  >> a translation unit refers to the basic unit of source code that is processed by the compiler. it is a single source code file and all the header files it includes directly or indirectly. When you compile a C++ program, each translation unit is compiled separately into an object file, and then these object files are linked together to create an executable file. In practical terms, the concept of a translation unit is important because it determines the scope of identifiers in your code. Identifiers (such as variables, functions, and classes) defined in one translation unit are not visible in other translation units unless they are explicitly declared as external. This is known as the one-definition rule. The one-definition rule is important because it allows the compiler to optimize your code by eliminating duplicate definitions of identifiers. It also prevents you from accidentally defining the same identifier in multiple translation units, which would cause a linker error.
  >> Once the preprocessor has processed the translation unit, the resulting code is passed on to the compiler for further compilation and translation into object code.

> Compiler: The C++ compiler is a program that takes as input C++ source code and produces object code as output for each C++ source file. If the source code has errors, then no object code is produced. the compiler also performs optimizations to improve the performance of the generated code. These optimizations can include dead code elimination, constant folding, and loop unrolling.

> object code: (0 1) computer code - .obj extension on Windows, .o extension on UNIX and MAC
  >> Just as humans aren't very good at reading computer code, computers aren't very good at reading source code. We need to translate the source code into a form that's understandable by the computer. This form is called object code, and the compiler is the translator.

> Linker: takes our object code and the object code that exists out there in the form of libraries and links it all together to form an executable program.

> Executable program: That is a program that we can now run and that follows the recipe we told the computer to do using C++. .exe on Windows and on UNIX/MAC, they typically don't have any extensions.

> Test & debug: Now that our program is complete, we test it to find as many errors as possible, and we debug it to eliminate those errors.

> Release: Once we've tested and debugged our program, we release it to the world. This means that we make it available to our users. This is the final step in the build process.
*/

/*
C++ preprocessor

> In C++, the preprocessor is a component of the C++ compiler that processes the source code before it is compiled into machine code. The preprocessor is responsible for performing various tasks, such as macro substitution, conditional compilation, and file inclusion.

> The preprocessor is a program that runs before the compiler. It's a program that takes your source code and does some processing on it before it hands it off to the compiler. The preprocessor is a built-in component of the C++ compiler and is typically invoked automatically as part of the compilation process. It is not a separate file that you need to include or link with your program. However, you can control the behavior of the preprocessor by using various preprocessor directives in your code. When you compile a C++ program, the preprocessor reads the source code and performs a series of text manipulations based on preprocessor directives, which are special commands written in the code that begins with the '#' symbol. The resulting modified code is then passed on to the compiler for further processing and translation into machine code.

> The preprocessor is responsible for several tasks, including:
  >> Macro substitution: The preprocessor replaces all occurrences of a macro in the code with its corresponding value or expression defined by the programmer usinf the #define directive.
  >> Conditional compilation: The preprocessor evaluates conditional directives such as #if, #else, and #endif to determine which sections of code should be compiled based on a set of predefined conditions.
  >> File inclusion: The preprocessor inserts the contents of other source code files into the current file using the #include directive.
  >> Compiler control: The preprocessor provides other directives, such as #define and #undef, that allows the programmer to define and undefine macros, respectively.
  >> Remove comments: The preprocessor removes comments from the source code before passing it to the compiler.
  >> Line control: The preprocessor generates line control information that aids in error messages and debugging. It inserts #line directives to indicate the original line numbers in the source file.

> The preprocessor is a powerful tool that can be used to automate repetitive tasks, control the flow of program execution, and make code more modular and reusable. However, its misuse can lead to code bloat, poor readability, and difficult debugging.

> In C++, a macro is a fragment of code that is given a name and can be reused throughout the code. Macros are defined using the #define preprocessor directive and are expanded by the preprocessor. When the preprocessor encounters a macro in the code, it replaces the macro with its corresponding value or expression, which can be a simple constant, a complex expression, or even a function call. Macros can be used to simplify repetitive or complex code, improve code readability, or create code that is specific to a particular platform or environment. However, improper use of macros can lead to code that is difficult to read, understand, and maintain.
  --> example:
  In this example, we define two macros using the #define directive. The first macro defines the constant value of pi as 3.14159. The second macro defines a function-like macro called SQUARE that takes a parameter x and computes the square of it using the expression ((x) * (x)). In the main function, we declare a variable radius and initialize it to 5.0. We then compute the area of a circle with radius using the formula PI * radius^2, where PI is substituted with its value of 3.14159 and SQUARE(radius) is substituted with its expression of radius * radius.
  #include <iostream>
  // Define a macro named PI with the value of 3.14159
  #define PI 3.14159
  // Define a macro that takes a parameter and computes the square of it
  #define SQUARE(x) ((x) * (x))
  int main() {
    double radius = 5.0;
    double area = PI * SQUARE(radius);
    std::cout << "The area of a circle with radius " << radius << " is " << area << std::endl;
    return 0;
  }

> Macro substitution is a process in C++ preprocessor where the preprocessor replaces all occurrences of a macro in the code with its corresponding value or expression defined by the programmer. When a macro is defined using the #define directive, the preprocessor assigns it a name and a value. Later, when the macro is used in the code, the preprocessor replaces the macro name with its corresponding value or expression before the actual compilation of the code begins. This is known as macro substitution.
  --> example:
  This macro defines a function-like macro that takes two parameters a and b, and returns the maximum of the two values. The macro expands to an expression using the ternary operator. The preprocessor replaces the macro MAX(x, y) with its corresponding expression ((x) > (y) ? (x) : (y))
  #define MAX(a, b) ((a) > (b) ? (a) : (b))
  int x = 10, y = 20;
  int max_value = MAX(x, y);
  int x = 10, y = 20;
  int max_value = ((x) > (y) ? (x) : (y));

> Conditional compilation is a feature of the C++ preprocessor that allows the compilation of different sections of code based on a set of predefined conditions. Conditional compilation directives, such as #if, #ifdef, #ifndef, #else, and #endif, are used to define these conditions. The preprocessor evaluates these directives and determines which sections of code should be compiled based on the result of the evaluation.
  --> example:
  let's say we have a program that can be compiled in debug or release mode. In debug mode, we want to include additional code for debugging purposes, while in release mode, we want to optimize the code for performance. In this example, we define a macro named DEBUG_MODE that is set to 1 for debug mode, and undefined for release mode. We use the #ifdef directive to check if the macro is defined and include additional code for debugging purposes if it is. We also use the #ifndef directive to check if the macro is not defined and include code for release mode if it is not. When we compile the code in debug mode, the preprocessor defines the DEBUG_MODE macro with the value 1 and includes the additional debugging code. When we compile the code in release mode, the preprocessor does not define the DEBUG_MODE macro, and excludes the additional debugging code, while including the optimized code.
  #include <iostream>
  // Define a macro for debug mode
  #define DEBUG_MODE 1
  int main() {
    int x = 5, y = 10;
    #ifdef DEBUG_MODE
      // Additional code for debugging
      std::cout << "Debugging information: x = " << x << ", y = " << y << std::endl;
    #endif
    int sum = x + y;
    #ifndef DEBUG_MODE
      // Code for release mode
      std::cout << "The sum of x and y is: " << sum << std::endl;
    #else
      // More debugging code
      std::cout << "The sum of x and y is: " << sum << " (debug mode)" << std::endl;
    #endif
    return 0;
  }
  --> example:
  In this example, we define a macro named OS_NAME that is used to store the name of the operating system on which the code is running. We use conditional compilation to determine the value of this macro based on the operating system. We check for the presence of predefined macros that indicate the operating system being used, such as __unix__, _WIN32, and __APPLE__. If one of these macros is defined, the corresponding value is assigned to OS_NAME. If none of these macros are defined, the value "Unknown" is assigned to OS_NAME. When we run the program, it prints the message "This code is running on <OS_NAME> operating system." where <OS_NAME> is the name of the operating system on which the code is running. The value of OS_NAME will depend on the operating system being used. This example demonstrates how conditional compilation can be used to create code that is specific to a particular platform or environment. By using different preprocessor directives for different operating systems, we can create code that is optimized for the specific requirements of each platform.
  #include <iostream>
  // Define a macro for the current operating system
  #if defined(__unix__)
    #define OS_NAME "Unix"
  #elif defined(_WIN32)
    #define OS_NAME "Windows"
  #elif defined(__APPLE__)
    #define OS_NAME "MacOS"
  #else
    #define OS_NAME "Unknown"
  #endif
  int main() {
    std::cout << "This code is running on " << OS_NAME << " operating system." << std::endl;
    return 0;
  }
  --> example:
  In this example, we define a macro named PLATFORM_NAME that is used to store the name of the operating system on which the code is compiled. The macro is defined using conditional compilation directives, which check whether the _WIN32 macro is defined or not. The Microsoft Visual C++ compiler on Windows platforms predefines the _WIN32 macro. If this macro is defined, the preprocessor expands the #ifdef directive and defines the PLATFORM_NAME macro with the value "Windows". Otherwise, the preprocessor expands the #else directive and defines the PLATFORM_NAME macro with the value "Unknown".
  #include <iostream>
  // Define a macro for the Windows operating system
  #ifdef _WIN32
    #define PLATFORM_NAME "Windows"
  #else
    #define PLATFORM_NAME "Unknown"
  #endif
  int main() {
    std::cout << "This code is compiled for " << PLATFORM_NAME << " platform." << std::endl;
    return 0;
  }
Thus, conditional compilation allows us to create code that is tailored to specific requirements or environments, making the code more flexible and efficient. #ifndef is a preprocessor directive that checks if a macro has not been defined. If the macro has not been defined, the code block between #ifndef and #endif is included in the compiled code. In the example provided, #ifndef DEBUG_MODE is used to check if the DEBUG_MODE macro has not been defined. If the macro has not been defined, the code block that outputs the sum of x and y is included in the compiled code. If the macro has been defined, the code block that includes additional debugging information is included instead. Note that #ifndef is often used in conjunction with #define and #ifdef to create conditional compilation statements. In this example, we use #define to define the DEBUG_MODE macro and #ifdef and #endif to create a conditional block of code that is only included in the compiled code when DEBUG_MODE is defined or not.
*/

/***************************************************************************************************************************/

/*
Compiler Installation

> see 'Udemy-Dr.Frank.Mitropoulos-Beginning.C++.Programming.-.From.Beginner.to.Beyond - Section 2: Installation and Setup'

> mingw-w64.org => Downloads => MingW-W64-builds (It's a GCC compiler, which is really a collection of compilers.) => x86_64 for 64-bit windows - i686 for 32-bit windows

> install in folder mingw-w64 directly - It's very important once you when you name your directories to be sure that you don't use any special characters, no international characters, and no spaces. So make sure that whatever you decide to use for directory names, they're very, very simple because compiler toolchains have real problems with cloud drives, spaces, international characters, and special characters.
*/

/***************************************************************************************************************************/

#include <iostream> // pound directive preprocessor - input output libraries
#include <string> // pound directive preprocessor - string libraries
int main(){
  int name;
  int age // notice the semicolon can be at end in the same line or at start in the next line
  ;char[] gender;
  std::cout << "What is your name? ";
  std::cout << "What is your age? " // notice the semicolon can be at end in the same line or at start in the next line
  ;std::cout << "What is your gender? ";
  std::cin >> name >> age >> gender;
  std::cout << "welcome!" << name << age << gender << std::endl;
  return 0;
}
// iostream: header file that contains the declarations for the standard input/output streams
// the main function is the main entry point. This is the place where execution begins. every c++ program must has only one main function
// cout: is typically tied to your console, your terminal, so the user can type things in
// <<:  stream insertion operator which inserts something into that stream
// >>:  stream extraction operator which extracts something from that stream
// std: namespace
// std::cout, std::cin => input and output streams
// :: => scope resolution operator - it's used to access a variable or a function that's in a namespace
// All c++ programs must have a main function. All c++ programs must only have exactly one main function. So when the program begins to execute, this is where it starts

/*
> building means compiling, linking together with extra libraries and external files if we need to and creating an executable file. That's what building is all about.

> Clean project: Now as your programs are compiled, they will have many of these .object files. The clean process removes all those object files and puts your project in a clean state. In other words source code only. No object files. Now why is this important. It's important because when you compile your programs and build your programs, sometimes you want to do a clean build. What that means is I want to start from a position where nothing has been built. I just want to clean everything out.

> Build project: Now what's going to happen here is it's going to go through your project looking at all the c++ files and only build what it needs to build. But it's going to not build what it doesn't need to build and that's important to understand.

> Rebuild project: is the combination of a clean and a build. So when you say hey rebuild the project, it's going to do a clean, it's going to clean everything out, and then it's going to build it again.
*/

/*
build configurations[debug and release]

> Debug and release are two different build configurations. Debug is typically used when you're developing your program.

> Release is typically used when you're ready to ship your program.

> Release is when you want to release the file form to productions for your users to use. So in this case, debug creates that debug folder. If we do this in release mode, we'll get a release folder as well. So we'll have two exes.

> Now the difference is the debug configuration creates object files that has debugging information in them. It's got all those variable names and stuff. So later on when we debug our program, we can have all that information available to us, and it makes us very, very productive. And it really helps us debug and test our code. The release configuration removes all of that stuff. And it does more optimizations. And it just makes your exe leaner and meaner. So that you don't need all that debugging information at runtime. So that's the difference between debug and release. Debug is for development. Release is for production.
*/

/*
Errors and Warnings

> compiler errors: Programming languages have very specific rules about how to write code, so that the compiler can translate that code to machine code. These rules involve both structure[syntax errors] and meaning[semantic errors].

> compiler warnings: The compiler has noticed a potential problem in your code, and it's warning you about it. That's what compiler warnings are all about. It's only a warning because the compiler is still able to understand your code and produce object code from it. However, it's letting you know to be aware that something could be problematic. Big tip, don't ignore compiler warnings. They're there for a reason. They're there to help you. So if you see a compiler warning, you should fix it. If you don't fix it, you're going to have a problem later on. So don't ignore compiler warnings. Fix them.

> Linker errors: occur when the linker is trying to put all the pieces of a program together to create an executable, and one or more pieces are missing. Typically, this can happen when an object file or libraries can't be found by the linker. Fixing linker errors can be tricky. Sometimes it's just a matter of getting the paths correct, so that the linker knows where the missing pieces are.

> runtime errors: why they can happen As the name suggests, runtime errors are errors that happened when the program is executing. These types of errors can be difficult to predict when we're writing our program. These errors include divided by zero errors, file not found errors, out of memory errors and many, many more. Some runtime errors can cause your program to crash. We use exception handling to help us know when runtime errors happen, so we can try to recover from them.

> Logic errors: is errors or bugs in your code that cause your program to run incorrectly. Logic errors are mistakes made by a programmer. Sometimes the mistakes are careless of the time. Some mistakes are because the programmers have incomplete or incorrect information. Other times mistakes occur when one programmer modifies another programmer's code to fix or add something, and they introduce an error as they do this. There are many, many causes for logic errors. It doesn't matter what the cause is though, they need to be corrected. We need to test our code and debug it to find incorrect errors.
*/

/*
Challenge

Create a C++ program that asks the user for their favorite number between 1 and 100
then read this number from the console.
Suppose the user enters 24.
Then display the following to the console:
Amazing!! That's my favorite number too!
No really!!, 24 is my favorite number!
Below are 2 sample runs of the program:
=======================================
Enter your favorite number between 1 and 100: 24
Amazing!! That's my favorite number too!
No really!!, 24 is my favorite number!
Enter your favorite number between 1 and 100: 75
Amazing!! That's my favorite number too!
No really!!, 75 is my favorite number!
*/

#include <iostream>
int main() {
  int favorite_number;
  std::cout << "Enter your favorite number between 1 and 100: ";
  std::cin >> favorite_number;
  std::cout << "Amazing!! That's my favorite number too!" << std::endl;
  std::cout << "No really!!, " << favorite_number << " is my favorite number!" << std::endl;
  return 0;
}

/***************************************************************************************************************************/

/*
Structure of a C++ Program

> Keywords are part of the vocabulary of a programming language in most languages. The keywords are also reserved. This means that you, the programmer, cannot redefine their meaning, and you can't use them in a way in which there were not intended. Keywords: int, return.

> there's an important distinction between identifiers and keywords and identifier is something that the programmer names. So these names have been created by programmers to create something that represents something meaningful to them. There are rules about how to name identifiers. identifiers: variable names, function names, class names, cout, cin endl, #include, and so forth.

> C++ also has operators has got a lot of operators. It's got the operators that you used to, you know, your addition, multiplication, subtraction, division, and so forth. non-standard operators: << >> ::

> C++ also has punctuation things like semicolons at the end of statements, curlies open and closed quotes, parentheses.It's got all kinds of punctuation.

> When you put all of these elements together in a program, you end up with something called Syntax. the syntax of the programming language, the structure, and the meaning of what you want the compiler to understand. the compiler is taking your code and translating it to machine code. And it's translating it based on what you told that you wanted to be done. It's not going to guess.
*/

/***************************************************************************************************************************/

/*
The C++ preprocessor 

> is a program that processes your source code before the compiler sees it. The C++ pre-processor first strips all the comments from the source file and replaces each comment with a single space. Then it looks for pre-processor directives and executes them. Pre-processor directives are lines in the source code that begin with a pound or hashtag symbol. there are quite a few pre-processor directives available. The most commonly used pre-processor directive is included directive. When the preprocessor sees this directive, it replaces the pound include line with the file that it's referring to that it recursively processes that file as well. So by the time the compiler sees the source code, all comments are stripped out and all preprocessor directives have been processed and removed.

> Preprocessor directives have commonly used to conditionally compile code. For example, suppose you only want to compile a portion of your source code if you're on the windows operating system. In this case, you would use a pre-processor directive to test to see if you are on windows and then perhaps includes some windows-specific libraries. If you're not on windows, then maybe you want to include some macOS 10 libraries or use the error directive to abort to compile with an error message. aka Conditional compilation.

> the C++ pre-processor does not understand C++. It simply follows the preprocessor directives and gets the source code ready for the compiler. The compiler is the program that does understand C++.
*/

/***************************************************************************************************************************/

/*
comments

> Comments are programmer readable explanations in the source code. Explanations, notes, annotations, anything that adds meaning to what the program is doing. One thing that's very important to understand is that the comments never make it to the compiler. In c++, the preprocessor strips out the comments and just replace it with a single space. so that the compiler never sees them. The compiler is only concerned with the code that you write. It doesn't care about the comments. The comments are only there for you, the programmer, to help you understand what the code is doing.
*/

#include <iostream>
int main() {
  int favorite_number;
  std::cout << "Enter your favorite number between 1 and 100: ";
  std::cin >> favorite_number;
  std::cout << "Amazing!! That's my favorite number too!" << std::endl;
  std::cout << "No really!!, " /* multi line comment only accepted here */ << favorite_number << " is my favorite number!" << std::endl;
  return 0;
}

/***************************************************************************************************************************/

/*
main function

> Every c++ program must have exactly one main function somewhere. A c++ program can consist of hundreds of files, but one of those files must contain the main function. Note that the name main must be written in lowercase letters.

> When a c++ program executes, the main function is called by the operating system, and the code between the curly braces executes. When execution hits the return statement, the program returns the integer value to the operating system. If the return value is zero, then the program terminated successfully. If the return value is not zero, then the operating system can check the value returned and determine what went wrong.

> There are two versions of main, and they're both valid as per the c++ specification.
*/

// version 1
int main() {
  // code
  return 0;
} // program.exe - This version of main expects no information from the operating system in order to run.

// version 2
int main(int argc, char *argv[]) {
  // code
  return 0;
} // program.exe arg1 arg2 arg3 ... - need to pass information into the program - In this case, we tell the compiler that we need two pieces of information. First, we need the number of pieces of information that were passed in. That's argc. We can use any variable name here. But historically, we use argc, which stands for argument count. The second piece of information is the actual arguments that we passed into the program. This is captured by argv, which is the argument vector. It's basically a bunch of strings

/***************************************************************************************************************************/

/*
namespaces

> The std is a short form of standard, the std namespace contains the built-in classes and declared functions that are part of the c++ standard library. The std namespace is automatically included in every c++ program. So when we use the cout object, we're actually using the std::cout object. The std namespace is a container for all the standard library functions and classes.

> As our c++ programs become more and more complex, our programs become a combination of our own code, the c++ standard libraries and their code and libraries from third-party developers and their code. So as you can imagine, sooner or later we're going to run into the situation where company x names something the same as company y. When we use that name in our program, the c++ compiler doesn't know which one to use. So we have something called the naming conflict. For example, suppose another library that we're using has defined a name called cout. Well, that's a big problem, right. Because now c++ doesn't know which cout to use. C++ allows developers to use namespaces as containers to group their code entities into a namespace scope. That means that I could create a namespace called Frank, and I could define cout within that namespace. Now if a programmer wanted to use my version of cout, all they had to do is say Frank::cout and that would be my version of cout. So the namespace is a way to group related code entities together and to avoid naming conflicts.

> to reduce the possibility of naming conflicts. The double colon operator is called the scope resolution operator. It's used to resolve which name we want to use. However, many programmers find it tedious to type std:: all the time when using cin, cout, end-line and so forth. So c++ provides a few mechanisms to help in that regard. using namespace std; is one of those mechanisms. When you use the using namespace directive, you're telling the compiler that you want to use the entire std namespace. So now you can just use cin, cout and end-line without having to type std:: all the time.

> However, this may not be the best solution for large programs. Using namespace standard not only brings in cin, cout and end-line, it brings in a bunch of other names that are defined in that namespace. So the possibility exists that you may still have a naming conflict. C++ provides another variant of the using namespace directive. using std::cout; using std::cin; using std::endl; is another way to bring in the names that you want to use. So now you can use cout, cin and end-line without having to type std:: all the time. However, you still have to type std:: when you want to use something else from the std namespace. So this is a good compromise between the two. You can use the using namespace directive for the names that you want to use, and you can use the scope resolution operator for the names that you don't want to use.
*/

// variant 1
#include <iostream>
using namespace std; // using directive - use the entire std namespace - not be the best practice in larger programs
int main() {
  int favorite_number;
  cout << "Enter your favorite number between 1 and 100: ";
  cin >> favorite_number;
  cout << "Amazing!! That's my favorite number too!" << endl;
  cout << "No really!!, " << favorite_number << " is my favorite number!" << endl;
  return 0;
}

// variant 2
#include <iostream>
// using declaration - use only what I need from the std namespace
using std::cout;
using std::cin;
using std::endl;
int main() {
  int favorite_number;
  cout << "Enter your favorite number between 1 and 100: ";
  cin >> favorite_number;
  cout << "Amazing!! That's my favorite number too!" << endl;
  cout << "No really!!, " << favorite_number << " is my favorite number!" << endl;
  return 0;
}

/***************************************************************************************************************************/

/*
(I/O) Input/Output

> In C++, a stream is an abstraction that represents a sequence of bytes that can be read from or written to. When we say that "C++ uses a stream abstraction to handle IO on devices like the console and keyboard", it means that C++ provides a standard way to interact with input/output (IO) devices, such as the console and keyboard, using streams. In other words, instead of dealing directly with the low-level details of reading and writing bytes from and to these devices, C++ provides a higher-level abstraction in the form of streams. This abstraction makes it easier and more convenient to perform IO operations, since we can use familiar input and output operators (>> and <<) to read and write data to these devices, just as we would with other stream objects, like files or memory buffers. For example, to read input from the console using streams, we can create an instance of the std::cin stream object, and then use the input operator >> to read data from it:
  int x; std::cin >> x;  // read an integer value from the console
Similarly, to write output to the console using streams, we can create an instance of the std::cout stream object, and then use the output operator << to write data to it: std::cout << "Hello, world!" << std::endl;  // write a message to the console
By using streams to handle IO on devices like the console and keyboard, C++ provides a consistent and convenient way to perform input/output operations, regardless of the underlying details of the device being used.

> cout and cin are two important objects in the C++ Standard Library that allow you to output and input data to and from the console, respectively. cout stands for "console output, cin stands for "console input.

> cout, cin, cerr and clog are defined in the c++ standard. To use them, you must include iostream.

> C++ uses a stream abstraction to handle IO on devices like the console and keyboard. cout is an output stream that defaults to the console or the screen. cerr and clog are also output streams that default to standard error and standard log, respectively. And finally, cin is an input stream that defaults to the keyboard

> The insertion operator is used with output streams, and the extraction operator is used with input streams. The insertion operator inserts the value of the operand in its right to the stream on its left. The extraction operator extracts information from the input stream on its left and stores it in the operand on its right.

> The extraction operator extracts information from the cin input stream which defaults to the keyboard and stores the information into the variable to the right of the extraction operator. The way in which the information is interpreted is based on the type of the variable. So in this case, if data is an integer then an integer representation will be read from the keyboard. If data is a double then a real number will be read and stored. If data is a string a sequence of characters will be read and stored. Extraction operators can also be chained. The characters entered using the keyboard will only be processed when the enter key is pressed.

> It's possible that the extraction operator could fail. For example, suppose you want to read an integer and the user enters my name Frank. In this case, the operation fails and the data will have an undetermined value.

> cin extraction uses white space that is spaces, tabs, new lines as terminating the value being extracted. That's important to understand. So if you put spaces between the things that you type in, the spaces will be ignored.

> cin is by default tied to your keyboard. We can redirect it as we wish but by default it's the keyboard. So if you want to read from a file, you can use a file stream object. And if you want to read from a string, you can use a string stream object. So cin is just a stream object. It's not tied to the keyboard. It's just a stream object that happens to be tied to the keyboard by default. So we can redirect it as we wish.

> we can use the same operators to insert and extract data to/from file streams.

> Since cout is by default the console, the value of data on the right side will be displayed on the screen. Since we're using stream abstraction, we can chain multiple insertions in the same statement. This makes basic IO very, very easy to do. It's important to understand that the insertion operator does not automatically add line breaks to move to the next line on the console. You must do this explicitly either by using the end line manipulator or by including a new line character, "\n" So it's similar to end line. It doesn't flush the buffer, but it still advances to the next line. If you use the end line stream manipulator, it will also flush the stream, this is important to know since if the stream is buffered, it may not get written to the console until it's flushed.

> Flushing the stream means that any data that is still in the buffer will be written to the output device immediately. This can be useful in situations where you want to make sure that the output is visible immediately, such as when debugging.

> endl is a manipulator that adds a new line to the output stream and also flushes the stream. \n is simply a character that represents a new line. It does not flush the stream, so any data that is still in the buffer will be written to the output device at a later time.

> In general, it is recommended to use \n instead of endl unless you need to flush the stream. This is because flushing the stream can be an expensive operation in terms of performance, especially if you are writing a lot of data to the stream.
*/

#include <iostream>
using namespace std;
int main() {
  cout << "Hello world!";
  // example 1
  cout << "Hello";
  cout << "World" << endl; // Helloworld!
  // example 2
  cout << "Hello world!" << endl; // Hello world!
  cout << "Hello" << " world!" << endl; // Hello world!
  cout << "Hello" << " world!\n"; // Hello world!
  cout << "Hello\nOut\nThere\n"; // Hello Out There in 3 lines and 1 new line at the end
  int num1;
  int num2;
  double num3;
  cout <<  "Enter an integer: "; // 123 => characters are read from your keyboard, and they're not read directly by cin, they're stored in a buffer. This is done to make the program more efficient So if. I type in 123 on the keyboard, then what happens is the numbers are read from the buffer, the characters in this case are read from the buffer. And the compiler knows that num1 is an integer. So it's going to read those characters, and it's only going to process what makes sense to be an integer. So in this case, it's going to read the one and say yeah. It's going to read the two, yep. Going to read the three, yep. Now we're done. So we've got 123. So 123 gets stored into num1
  cin >> num1;
  cout << "You entered: " << num1 << endl;  // Amr => 0 - // 10.5 => 10
  // example 3
  cout << "Enter a first integer: "; // 100 200 => the program will not ask for the second integer it will take it as 200 and store it in num2, and then it will print out 100 and 200 // 10.5 => Enter a second integer: You entered 10 and 0
  cin >> num1;
  cout << "Enter a second integer: ";
  cin >> num2;
  cout << "You entered " << num1 << " and " << num2 << endl;
  // example 4
  cout << "Enter 2 integers separated with a space: "; // 100               200        => the program will not ask for the second integer it will take it as 200 and store it in num2, and then it will print out 100 and 200, This is actually a really handy way to get information from the user when you want them to you know enter more than one number, enter three numbers separated by spaces. That's really easy for them to do rather than say enter number one, enter number two, enter number three and so forth.
  cin >> num1 >> num2;
  cout << "You entered " << num1 << " and " << num2 << endl;
  // example 4
  cout << "Enter a double: "; // 12.5
  cin >> num3;
  cout << "You entered : " << num3 << endl; // 12.5
  // example 5
  cout << "Enter an integer: "; // 10   12.5 => 10 12.5 // 10.5 => 10 0.5 So let's enter the integer 10.5. Now remember, there's going to be that 0.5 left in the buffer. So it's not going to ask me. It's going to ask me to enter the double, but it's not going to wait for me to press enter because it's already got data in the buffer. So I press enter, and you can see enter a double, right, it's not waiting for me here. The integer is 10, and the double is 0.5 // Amr => Enter a double: The integer is: 0 And the double is 4.24896e-322, what happens is when it tried to read the integer, it got the F in Frank, and it's lost. So the input failed, and it goes into a fail state. From that point on, everything that's happening is unreliable. You can see that the integer got 0. It got basically initialized to 0 there. But everything else after that point is completely unreliable, you've got to be really careful.
  cin >> num1;
  cout << "Enter a double: ";
  cin >> num3;
  cout << "The integer is: " << num1 << endl;
  cout << "And the double is " << num3 << endl;
  return 0;
}

// You do not need to prompt the user for any information using cout
#include <iostream>
int main() {
  int favorite_number;
  std::cin >> favorite_number; // 10
  std::cout << "No really!!, " << favorite_number << " is my favorite number!" << std::endl; // No really!!, 10 is my favorite number!
  return 0;
}

// In this example, we are using endl to add a new line after the value of x is printed. When endl is used, the output stream will be flushed and any data that is still in the buffer will be written to the output device. This means that the message "This line will be printed on a new line because of endl" will be printed immediately after the value of x is printed.
#include <iostream>
using namespace std;
int main() {
  int x = 10;
  cout << "The value of x is: " << x << endl;
  cout << "This line will be printed on a new line because of endl" << endl;
  return 0;
}

// In this example, we are using \n to add a new line after the message "This line will be printed on the same line as the previous message because of \n" is printed. Unlike endl, \n does not flush the output stream, so any data that is still in the buffer will not be written to the output device until the buffer is full or until the stream is closed. This means that there may be a delay before the message "This line will be printed on the same line as the previous message because of \n" is printed, depending on the amount of data that has already been written to the stream.
#include <iostream>
using namespace std;
int main() {
  int x = 10;
  cout << "The value of x is: " << x << endl;
  cout << "This line will be printed on the same line as the previous message because of \\n" << "\n";
  return 0;
}

/***************************************************************************************************************************/

/*
variables

> Random access memory or ram is a contiguous block of storage used by the computer to store information. This information can include computer instructions as well as data. Ram can be thought of as having memory cells where each cell has an associated location. If we had to program using the specific memory locations, it wouldn't be a lot of fun, and we'd likely have a lot of programmer errors. Imagine saying something like move 21 to memory location 1002. In many very low level languages, this is sometimes what we do. However, most programming languages allow you to associate a name with a memory location.

> Let's see the same example using a variable. In this example, you can see that the memory location 1002 has been associated with the name age. In computing this is called a binding, and we can move 21 to age. This allows us not to have to worry about what exact memory location age is associated with. If we run the program again, age will likely be associated with a different memory address. And that's okay since we never knew about it in the first place. Our code will still work. Also thinking of names that make sense to us makes writing and reading programs much easier. That's the basic idea behind names and variables. Of course, since age is a variable that means that its contents can vary. So if we turn 22 years old, we can change the value of age from 21 to 22.

> a variable is an abstraction for a memory location. We use abstractions all the time in programming to make it easier for us to deal with complexity. Variables allow us to use a meaningful name to represent a value. It's important to understand that variables have two main properties. First is their type. The compiler needs to know what types of values are legal to store in age. second is their value.

> variables must be declared before you use them in c++. Their value or contents may change as the program executes.

> The rules for naming c++ variables are very very simple. C++ variable names can contain letters, numbers and underscores. However, the first letter of the name cannot be a number, it can be an underscore or a letter. As discussed previously, c++ keywords are also reserved words, so you can't use those names. You can't use int, you can't use double as your own names. Also, you cannot declare a variable name that's already been declared in the same scope. So if you declared x to be an integer, you can't do that again. Remember, c++ is case-sensitive. So the name, AGE in uppercase is considered different from the name, age and lowercase.

> INT, Int are legal identifies

> int, return are not legal identifiers

> cout => cout is a little different. cout is a legal name because it conforms to the variable naming rules. However, if you include iostream in your program, then cout is already defined somewhere else. It's defined by the standard library. So it no longer becomes a valid name since it's been defined somewhere you cannot re-declare it yourself.
*/

age1 = 10; // This will produce a compiler error telling us that age hasn't been declared.

int age2; // Declaration - Now the compiler knows that only integers are allowed to be stored in age. This is called static typing because the compiler is enforcing these rules when the program is compiled rather than when the program is executing.
age2 = 10; // initialization - The value 10 is stored in the memory location associated with name age.

// variables Declaration and Initialization
int age3; // uninitialized variable - The value of an uninitialized local variable is garbage value, it could be anything.
int age4 = 10; // C-like initialization
int age5 (10); // Constructor initialization
int age6 {10}; // C++11 list initialization - catch more errors than the other two methods of initialization

int num (); // num is a function declaration
int num {}; // num is initialized to zero
int num1 {}, num2 {}; // num1 and num2 are initialized to zero
int num3, num4, num5 {}; // num3 and num4 is undefined, and num5 are initialized to zero

// This program will calculate the area of a room in square feet
#include <iostream>
using namespace std;
int main() {
  cout << "Enter the width of the room: ";
  int room_width {0};
  cin >> room_width;
  cout << "Enter the length of the room: ";    
  int room_length {0};
  cin >> room_length;
  cout << "The area of the room is " << room_width * room_length << " square feet" << endl;
  return 0;
}

// variable scope - Unlike local variables, global variables are automatically initialized to zero.
#include <iostream>
using namespace std;
int age {18}; // Global variable - if uninitialized, it will be zero.
int main() {
  int age {16}; // local variable - The local variable age shadows the global variable age. - if uninitialized, it will be initialized to garbage value
  cout << age <<  endl; // 16
  return 0;
}

/***************************************************************************************************************************/

/*
primitive data types

> These types are also sometimes called fundamental data types because they're implemented directly by the c++ language.

> It's important to keep in mind that unlike many other programming languages, the size and precision of c++'s primitive data types are largely dependent on the platform that you're working on and in the compiler you're using. This means that as a c++ programmer, you need to be aware of your specific machine and understand how much storage is allocated for these types to effectively use them. The c++ include file climits contains information about the size and precision of the data types for your specific compiler.

> As you know, computers store information using a binary representation, which consists of zeros and ones. And these fundamental type sizes are expressed in bits. The more bits allocated to a type, the more unique values that can be represented. Also, the more bits, the more storage that's necessary to represent that type in memory.

> how many values can be represented in a given number of bits. The formula used to calculate these values is 2, raised to the number of bits power. So we can store 256 distinct values in 8 bits. 65,536 distinct values in 16 bits. Over 4 billion distinct values in 32 bits. And over 18 billion, a billion distinct values in 32 bits.

> The c++ character data type is used to represent characters such as the letter a, x and so forth. / char => use at least 8 bits - char16_t => use at least 16 bits - char32_t => use at least 32 bits - wchar_t => can represent the largest character set of the native character set of the execution environment

> the character type can hold values that represent characters. These values are basically integers that match to a character set like the ASCII character set.

> Integers are used to represent whole numbers, both signed and unsigned integers are supported, there are many variants of the integer data type / short int => use at least 16 bits - int => use at least 16 bits - long int => use at least 32 bits - long long int => use at least 64 bits / In addition to those it's possible to store both signed and unsigned integers in the character data type. / by default integers are signed. / unsigned => unsigned integers can only store positive values If you want unsigned integers that is integers that are 0 or positive values only, then you're required to use the unsigned keyword. you do need to keep in mind the limitations especially when you perform math on variables and store results in other variables since the results may not fit into the variable you're saving to. This could cause an overflow.

> Floating point numbers These are used to represent non-integer numbers, such as real numbers, numbers like 1.2, 0.5 and pi. / float => use at least 32 bits - double => use at least 64 bits - long double => use at least 80 bits / It's important to understand that computers have finite storage and many real numbers have an infinite number of digits after the decimal point. Pi is a perfect example of this. In these cases, computers store an approximation of the real number. There's no way the computer can store numbers such as pi precisely. / Floating point numbers are represented internally by the computer as signed numbers with a mantissa and an exponent[ float typical range = 1.2X10^-38 to 3.4X10^38 - double typical range = 2.2X10^-308 to 1.8X10^308 - long double typical range = 3.4X10^-4932 to 1.1X10^4932 ] / long double can store very, very small and very, very large floating point numbers.

> Boolean data type / bool => use at least 8 bits / The boolean data type is used to represent true or false values. / true => non-zero - false => 0 / The boolean data type is often used in conditional statements to determine if a condition is true or false. / The boolean data type is also used in loops to determine when to stop looping. / The boolean data type is also used in functions to determine if a function should return true or false.
*/

#include <iostream>
using namespace std;
int main() {
  /***********************************************
  *  Character type
  **********************************************/
  char middle_initial {'J'};  // Notice the single quotes around characters
  cout << "My middle initial is " << middle_initial << endl;
  /***********************************************
  *  Integer types
  **********************************************/
  unsigned short int exam_score {55};  // same as unsigned short exam_score {55};
  cout << "My exam score was " << exam_score << endl;
  int countries_represented {65};
  cout << "There were " << countries_represented << " countries represented in my meeting" << endl;
  long people_in_florida {20610000};
  cout << "There are about " << people_in_florida << " people in Florida" << endl;
  long long people_on_earth  {7'600'000'000};     // make sure this is a long long and not just a long to avoid overflow issue
  cout << "There are about " << people_on_earth << " people on earth" << endl;
  long long distance_to_alpha_centauri {9'461'000'000'000};
  cout << "The distance to alpha centauri is " << distance_to_alpha_centauri << " kilometers" << endl;
  /***********************************************
  *  Floating point types
  **********************************************/
  float  car_payment { 401.23};
  cout << "My car payment is " << car_payment << endl;
  double pi {3.14159};
  cout << "PI is " << pi << endl;
  long double large_amount {2.7e120};
  cout << large_amount << " is a very big number" << endl;
  /***********************************************
  *  Boolean type
  **********************************************/
  bool game_over {false};
  cout << "The value of gameOver is " << game_over << endl; // The value of gameOver is 0 / Because as far as c++ is concerned zero is false. If it was true, it would print out a one.
  /***********************************************
  *  Overflow example
  **********************************************/
  short value1 {30000};
  short value2 {1000};
  short product {value1 * value2}; // overflow error - the product is 30,000 * 1,000 = 30,000,000 which is too big to store in a short which can only store 32,767. So the compiler will give us an error. 
  cout << "The product of " << value1 <<  " and " << value2 << " is " <<  product << endl;

  return 0;
}

/***************************************************************************************************************************/

/*
sizeof operator

> returns the number of bytes used to represent any type. Sizeof can also be used to determine the sizeof compound types like arrays, structures and objects. This will tell us the sizeof that type in bytes on the specific machine and compiler that you're running the program on.

> The sizeof operator gets its information from two c++ include files, climits and cfloat. climits provides information about integral types and cfloat about floating point types. These include files also provide a bunch of handy defined constants that we can use to determine the precision of our primitive types such as [INT_MAX] tells us the maximum value we can store in an int on this specific machine.

> The sizeof operator is a unary operator, meaning it takes a single operand. The operand can be any type, including a variable, a literal, an expression, or a function. The sizeof operator returns the size of the operand in bytes. The sizeof operator is a compile-time operator, meaning that the compiler will evaluate the operand and return the size of the operand at compile time.
*/

#include <iostream>
#include <climits> // make sure you include climits for integer types - Similar information for floating point numbers is contained in <cfloat>
#include <cfloat>
using namespace std;
int main() {
  cout << "sizeof information" << endl;
  cout << "========================" << endl;
  cout << "char: " << sizeof(char) << " bytes." << endl;
  cout << "int : " << sizeof(int) << " bytes." << endl;
  cout << "unsigned int: " << sizeof(unsigned int) << " bytes." << endl;
  cout << "short: " << sizeof(short) << " bytes." << endl;
  cout << "long: " << sizeof(long) << " bytes." << endl;
  cout << "long long: " << sizeof(long long) << " bytes." << endl;
  /*
  char: 1 bytes.
  int : 4 bytes.
  unsigned int: 4 bytes.
  short: 2 bytes.
  long: 4 bytes.
  long long: 8 bytes.
  */
  // Now I'm running a 32-bit compiler on a 64-bit operating system. If you're running a 64-bit compiler, these numbers will likely be different.
  cout << "========================" << endl;
  cout << "float: " << sizeof(float) << " bytes." << endl;
  cout << "double: " << sizeof(double) << " bytes." << endl;
  cout << "long double: " << sizeof(long double) << " bytes." << endl;
  /*
  float: 4 bytes.
  double: 8 bytes.
  long double: 16 bytes.
  */
  // the amount of storage that it takes to represent these specific types on this machine.
  cout << "========================" << endl;
  // use values defined in <climits>
  cout << "Minimum values:" << endl;
  cout << "char: " << CHAR_MIN << endl;
  cout << "int: " << INT_MIN << endl;
  cout << "short: " << SHRT_MIN << endl;
  cout << "long: " << LONG_MIN << endl; 
  cout << "long long: " << LLONG_MIN << endl;
  /*
  Minimum values:
  char: -128
  int: -2147483648
  short: -32768
  long: -2147483648
  long long: -9223372036854775808
  */
  // numbers may look different on your machine depending on a lot of factors.   
  cout << "========================" << endl;
  // use values defined in <climits>
  cout << "Maximum values:" << endl;
  cout << "char: " << CHAR_MAX << endl;
  cout << "int: " << INT_MAX << endl;
  cout << "short: " << SHRT_MAX << endl;
  cout << "long: " << LONG_MAX << endl; 
  cout << "long long: " << LLONG_MAX << endl;
  /*
  Maximum values:
  char: 127
  int: 2147483647
  short: 32767
  long: 2147483647
  long long: 9223372036854775807
  */
  // numbers may look different on your machine depending on a lot of factors.  
  cout << "========================" << endl;
  // sizeof can also be used with variable names
  cout << "sizeof using variable names" << endl;
  int age {21};
  cout << "age is " << sizeof(age) << " bytes." << endl;
  cout << "age is " << sizeof age << " bytes." << endl;
  double wage { 22.24};
  cout << "wage is " << sizeof(wage) << " bytes." << endl;
  cout << "wage is " << sizeof wage << " bytes." << endl << endl; // tow-lines at the end
  /*
  sizeof using variable names
  age is 4 bytes.
  age is 4 bytes.
  wage is 8 bytes.
  wage is 8 bytes.
  */

  return 0;
}

/***************************************************************************************************************************/

/*
Constants

> Constants are very much like c++ variables. They have names. The rules for naming is the same, they occupy storage, and they're usually typed. This means that when you declare a constant, you usually declare their type just like you do with a variable. There is one type of constant that is not typed which is nullptr which can be assigned to any pointer type.

> The big difference between variables and constants is that unlike variables the value of c++ constants cannot change once they're declared.

> nullptr is a distinct keyword in C++. Using nullptr instead of 0 is safer because it prevents unintended conversions between integer and pointer types, which can lead to hard-to-debug errors.Note that nullptr is not a keyword in C or earlier versions of C++, so code that uses nullptr may not be compatible with older compilers or libraries.

> C++ gives us several ways to create constants. We can use literals, declared constants, constant expressions, enumerated constants and defined constants.

> Literals are constants that are written directly into the source code. For example, 12, 3.14, 'a', "amr" are all literals. Literals are also called literal constants. Literals are the most obvious kind of constant. We can use literals throughout our code, and we often do. They're used to express specific values. Literal constants also have types based on a naming convention. You can be explicit with the types of literal constants by using suffixes. The suffixes are case-insensitive. The suffixes are as follows: u, l, ll, f, d, ld for unsigned, long, long long, float, double, long double respectively.

> The default type for integer literals is int. The default type for floating point literals is double. The default type for character literals is char. The default type for string literals is char[]. The default type for boolean literals is bool. The default type for pointer literals is nullptr_t. The default type for user-defined literals is the type returned by the user-defined literal operator. The default type for wide string literals is wchar_t[]. you can add certain suffixes to the literal to specify a different type.

> In C++, when the compiler encounters a reference to a literal value in the code, such as the integer literal "42", it can replace that reference with the actual value of the literal, which in this case is the integer value 42. This process is done by the compiler during the compilation phase, before the program is executed. The compiler simply replaces each reference to the literal with its actual value, and this optimized code is what is executed during runtime. This optimization can lead to faster and more efficient code execution, since the program doesn't need to perform any extra calculations or lookups to determine the value of the literal at runtime. Instead, the literal value is already known and can be used directly in the code. For example, consider the following code snippet:
  int x = 42;
  int y = x * 2;
In this case, the literal value "42" is assigned to the variable "x", and then "x" is used to calculate the value of "y". Since the literal value "42" is known at compile-time, the compiler can replace the reference to "x" with the actual value of 42, resulting in optimized code like this:
  int y = 42 * 2;
This optimized code is faster and more efficient, since it doesn't need to perform the extra step of looking up the value of "x" at runtime.

> Declared constants are constants that are declared using the const keyword. For example, const int x = 12; is a declared constant. Declared constants are also called symbolic constants.
const int x = 12;

> Constant expressions are expressions that are evaluated at compile time. For example, 12 + 3.14 is a constant expression. Constant expressions are also called compile time constants.
constexpr int x = 12 + 3.14;

> Enumerated constants are constants that are declared using the enum keyword. For example, enum {red, green, blue} is an enumerated constant. Enumerated constants are also called enumeration constants.
enum {red, green, blue};

> Defined constants are constants that are defined using the #define preprocessor directive. For example, #define PI 3.14 is a defined constant. Defined constants are also called macro constants.
#define PI 3.14;
*/

/*
literal constants
is a constant that is written directly into the source code. For example, 12, 3.14, 'a', "amr" are all literals. Literals are also called literal constants. The value of a literal constant cannot change once it's declared. The value of a literal constant is always the same.
*/
//> integral literal constants - They can be expressed in decimal, octal, or hexadecimal format
12 // int - decimal
052 // int - octal
0x2A // int - hexadecimal
0b101010 // int - binary
12U // unsigned int
12L // long
12UL // unsigned long
12LL // long long
//> floating point literal constants - They can be expressed in decimal or scientific notation
12.0 // double - decimal
0x1.fp2 // double - hexadecimal
6.022e-23 // double - scientific(Exponential) notation
12.0F // float
12.0L // long double
//> character literal constants - They are enclosed in single quotes
'a' 'B' // single characters
'\u00E9' // Unicode character
98 // ASCII value of 'b'
'a'; // char - single character enclosed in single quotes - 8 bits wide - 1 byte wide - 2^8 possible values - 0 to 255
L'á'; // wchar_t - wide character type (C++11) - 16 bits wide - 2 bytes wide - 2^16 possible values - 0 to 65535
u'π'; // char16_tr - UTF-16 character type (C++11) - 16 bits wide - 2 bytes wide - 2^16 possible values - 0 to 65535
U'Ω'; // char32_t - UTF-32 character type (C++11) - 32 bits wide - 4 bytes wide - 2^32 possible values - 0 to 4294967295
u8'á'; // char8_t - UTF-8 character type (C++20) - 8 bits wide - 1 byte wide - 2^8 possible values - 0 to 255
/*
Escape sequences:
\n => newline
\t => tab
\b => backspace
\r => carriage return
\f => form feed
\' => single quote
\" => double quote
\\ => backslash
\ooo => octal value ooo
\xhh => hexadecimal value hh
\uhhhh => hexadecimal value hhhh
*/
//> boolean literal constants
true
false
//> string literal constants - used to represent a sequence of characters. They are enclosed in double quotes
"amr" // regular string
R"(C:\Windows\system32)" // raw string
//> pointer literal constants
nullptr
//> char[] - array of characters terminated by a null character '\0' (ASCII 0) which is not included in the character count. The null character is used to mark the end of a string. The null character is also known as the null terminator. The null character is not the same as the null pointer. The null pointer is a pointer that points to nothing. The null character is a character that is used to mark the end of a string.
//> wide string literal constants
L"amr" // wchar_t[]
//> raw string literal constants
R"(amr)" // char[]
//> raw wide string literal constants
LR"(amr)" // wchar_t[]
//> wide character literal constants
L'a' // wchar_t
//> user-defined literal constants -  not considered built-in literal constants.

/*
declared constants
with the const keyword at the beginning. You must initialize the declared constant or the compiler will give you an uninitialized const error message.
*/
const double pi {3.14159};
const double gravity {9.8};

/*
defined constants
were very commonly used in older c and c++ code. These constants are defined using the pound defined preprocessor directive. Think of this as a blind find replace as you might do in a word processor. The preprocessor will gladly substitute one for the other. Since the preprocessor doesn't know c++, it can't type check and this could lead too difficult to find errors. So please don't use defined constants in modern c++ code.
*/
#define PI 3.14159

/* 
Frank's Carpet Cleaning Service
Charges $30 per room
Sales tax rate is 6%
Estimates are valid for 30 days
Prompt the user for the number of rooms they would like cleaned
and provide an estimate such as:
Estimate for carpet cleaning service:
Number of rooms: 2
Price per room: $30
Cost: $60
Tax: $3.6
====================================
Total estimate: $63.6
This estimate is valid for 30 days
Pseudocode:
Prompt the user to enter the number of rooms
Display number of rooms
Display price per room
Display cost:  (number of rooms * price per room)
Display tax:   number of rooms * price per room * tax rate
Display total estimate: (number of rooms * price per room) + (number of rooms * price per room * tax rate)
Display estimate expiration time
*/

#include <iostream>
using namespace std;
int main() {
  cout << "Hello, welcome to Frank's Carpet Cleaning Service" << endl;
  cout << endl; // print a blank line
  cout << "\nHow many rooms would you like cleaned? "; // \n is the same as endl, but it's faster to type, and it's more efficient to execute because it doesn't flush the buffer.
  int number_of_rooms {0};
  cin >> number_of_rooms;
  const double  price_per_room {32.5};
  const double sales_tax {0.06};
  const int estimate_expiry {30}; // days
  cout << "\nEstimate for carpet cleaning service" << endl;
  cout << "Number of rooms: " << number_of_rooms << endl;
  cout << "Price per room: $" << price_per_room << endl;
  cout << "Cost : $" << price_per_room * number_of_rooms << endl;
  cout << "Tax: $" << price_per_room * number_of_rooms * sales_tax << endl;
  cout << "===============================" << endl;
  cout << "Total estimate: $" << (price_per_room * number_of_rooms) + (price_per_room * number_of_rooms * sales_tax) << endl;
  cout << "This estimate is valid for " << estimate_expiry << " days" << endl;

  cout << endl;
  return 0;
}

/* 
Challenge

Frank's Carpet Cleaning Service
Charges:
  $25 per small room
  $35 per large room
Sales tax rate is 6%
Estimates are valid for 30 days
Prompt the user for the number of small and large rooms they would like cleaned
and provide an estimate such as:
Estimate for carpet cleaning service
Number of small rooms: 3
Number of large rooms: 1
Price per small room: $25
Price per large room: $35
Cost : $110
Tax: $6.6
===============================
Total estimate: $116.6
This estimate is valid for 30 days
*/

#include <iostream>
using namespace std;
int main() {
  cout << "Hello, welcome to Frank's Carpet Cleaning Service" << endl;
  cout << endl;
  cout << "How many small rooms would you like cleaned? ";
  int number_of_small_rooms {0};
  cin >> number_of_small_rooms;
  cout << "How many large rooms would you like cleaned? ";
  int number_of_large_rooms {0};
  cin >> number_of_large_rooms;
  const double  price_per_small_room {25};
  const double  price_per_large_room {35};
  const double sales_tax {0.06};
  const int estimate_expiry {30};
  cout << "\nEstimate for carpet cleaning service" << endl;
  cout << "Number of small rooms: " << number_of_small_rooms << endl;
  cout << "Number of large rooms: " << number_of_large_rooms << endl;
  cout << "Price per small room: $" << price_per_small_room << endl;
  cout << "Price per large room: $" << price_per_large_room << endl;
  int cost = (price_per_small_room * number_of_small_rooms) + (price_per_large_room * number_of_large_rooms);
  double tax = cost * sales_tax;
  cout << "Cost : $" << cost << endl;
  cout << "Tax: $" << tax << endl;
  cout << "===============================" << endl;
  cout << "Total estimate: $" << cost + tax << endl;
  cout << "This estimate is valid for " << estimate_expiry << " days" << endl;

  cout << endl;
  return 0;
}

/***************************************************************************************************************************/

/*
array characteristics

> An array is a compound data type or a structured data type. This means that it's a data type that's made up of other data types. For example, a collection of test scores where each test score is an integer is considered a compound data type made up of integers. We say that this is an array of integers. It's important to understand that all elements of an array must be of the same type. And each element can be accessed directly.

> Arrays allow you to tell the compiler to give you a collection of as many elements as you want and give the entire collection a single name. So you no longer have to name each individual element.

> Arrays are fixed in size. Once you create an array of a specific size, the size cannot change. So if you create an array of 100 test scores, and then you need space for more than that, you'd have to go back to your source code, change the max size and recompile. The size of the array is fixed. Arrays will not grow or shrink on their own while the program is running.

> all the elements of an array must be of the same type. So we can have arrays of integers, arrays of doubles, arrays of persons, arrays of accounts and so forth.

> Arrays are stored contiguously in memory. So if you tell the compiler that you need an array of 100 integers, the compiler will generate code that allocates exactly 100 integers that are contiguous in memory. That means that the memory will be allocated as one chunk.

> Arrays are zero based. This means that the first element of an array is at index 0. The second element is at index 1 and so on. And the last element is at position size -1.

> arrays are not bounds checked. That means that there's no check to make sure that when you access an individual array element that it's between 0 and size -1. It's the programmer's responsibility to be sure that you don't go over bounds. If you go over bound, your program may have strange behavior and could even crash.
*/

int ages [5] {1, 2, 3, 4, 5} // [] => array subscript/indexing operator -- {} =>  initialization list

// this can be a constant literal. It can be a declared constant or constant expression.
int test_scores [5]; // literal constant
const int high_scores [100]; // declared constant
const int days_in_year {365};
double hi_temp [days_in_year]; // constant expression
// note that in all three cases the arrays have not been initialized. This means that the contents of the array elements could be anything. Best practice is to always initialize arrays when you declare them.
int test_scores [5] {100, 98, 89, 86, 55};
int high_scores [100] {3, 5}; // the first two elements are initialized to 3 and 5. The rest are initialized to 0.
const int days_in_year {365};
double hi_temp [days_in_year] {0} // initializes all elements to 0.
int another_array [] {1, 2, 3, 4, 5}; // this is an array of size 5. The compiler will figure out the size based on the number of elements you initialize it with. - size automatically calculated

//  accessing individual array elements
another_array[0] // subscripting / indexing

// storing values in array elements
cin >> another_array[0];
another_array[2] = 90; // assignment statement

// In c++ the name of the array represents the location or address in memory of the first element in the array that is the element with index 0. When we access an array element using the subscript operator and provide an index in the square brackets, the compiler knows that you want the element that is at that offset from the beginning of the array. So all the compiler has to do is a pretty simple calculation. For example, if you want the element at index two, all the compiler has to do is go two integers away from the beginning of the array and there it is or two doubles or two whatever. The compiler uses the size of operator to determine where the element will be. This is one reason why raw arrays in c++ are so efficient. But remember, there is no bounds checking. So be careful, if you have an array of five integers, and you ask the compiler for the integer at the tenth index, it will gladly do the calculation and give you whatever happens to be at that location. It's your responsibility to be sure that you're within the bounds of the array.

#include <iostream>
using namespace std;
int main() {
  char vowels[]  {'a' ,'e', 'i', 'o', 'u' };
  cout << "\nThe first vowel is: " << vowels[0] << endl; // a
  cout << "The last vowel is: " << vowels[4] << endl; // u
  // cin >> vowels[5];  out of bounds - crash, don't do this!!
  
  double hi_temps []  { 90.1, 89.8, 77.5, 81.6};
  cout << "\nThe first high temperature is: " << hi_temps[0] << endl; // 90.1
  hi_temps[0] = 100.7; // set the first element in hi_temps to 100.7
  cout << "The first high temperature is now: " << hi_temps[0] << endl; // 100.7

  int test_scores [];
  cout << "\nFirst score at index 0: " << test_scores[0] << endl; // garbage value
  cout << "Second score at index 1: " << test_scores[1] << endl; // garbage value
  cout << "Third score at index 2:  " << test_scores[2] << endl; // garbage value
  cout << "Fourth score at index 3: " << test_scores[3] << endl; // garbage value
  cout << "Fifth score at index 4: " << test_scores[4] << endl; // garbage value

  int test_scores [] {}; // same as {0} or {0, 0, 0, 0, 0}
  cout << "\nFirst score at index 0: " << test_scores[0] << endl; // 0
  cout << "Second score at index 1: " << test_scores[1] << endl; // 0
  cout << "Third score at index 2:  " << test_scores[2] << endl; // 0
  cout << "Fourth score at index 3: " << test_scores[3] << endl; // 0
  cout << "Fifth score at index 4: " << test_scores[4] << endl; // 0

  int test_scores [] {50, 40};
  cout << "\nFirst score at index 0: " << test_scores[0] << endl; // 50
  cout << "Second score at index 1: " << test_scores[1] << endl; // 40
  cout << "Third score at index 2:  " << test_scores[2] << endl; // 0
  cout << "Fourth score at index 3: " << test_scores[3] << endl; // 0
  cout << "Fifth score at index 4: " << test_scores[4] << endl; // 0

  int test_scores [] {100, 90, 80,70, 60};
  cout << "\nFirst score at index 0: " << test_scores[0] << endl; // 100
  cout << "Second score at index 1: " << test_scores[1] << endl; // 90
  cout << "Third score at index 2:  " << test_scores[2] << endl; // 80
  cout << "Fourth score at index 3: " << test_scores[3] << endl; // 70
  cout << "Fifth score at index 4: " << test_scores[4] << endl; // 60
  
  cout << "\nEnter 5 test scores: ";
  // reading integers from the console and storing them into those array elements from 0 to 4. So whatever was in here before is going to be removed now.
  cin >> test_scores[0];
  cin >> test_scores[1];
  cin >> test_scores[2];
  cin >> test_scores[3];
  cin >> test_scores[4];
  
  cout << "\nThe updated array is:" << endl;
  cout << "First score at index 0: " << test_scores[0] << endl;
  cout << "Second score at index 1: " << test_scores[1] << endl;
  cout << "Third score at index 2:  " << test_scores[2] << endl;
  cout << "Fourth score at index 3: " << test_scores[3] << endl;
  cout << "Fifth score at index 4: " << test_scores[4] << endl;
  
  cout << "\nNotice what the value of the array name is : " << test_scores << endl; // some hexadecimal number. That number is actually the memory address or the storage location where the array is located. This is the way that c++ works or the arrays, the name of the array is the location of the array.

  cout << endl;
  return 0;
}

/*
Declaring, Initializing and Accessing an Array
Declare an array of 10  integers named arr  and initialize the array so that all 10 integers are 0 .
Then assign 100  to the first element of the array and 1000  to the last element of the array.
*/
  int arr [10] {0};
  arr[0] = 100;
  arr[9] = 1000;

// multi-dimensional arrays
int movie_ratings [3] [4]; // We have not initialized this array, so we should assume that the array elements contain garbage data until initialized. We could choose to model this data by having one array of movie ratings for each reviewer. So we could declare three arrays of four integers each and solve our problem like that.
int movie_ratings [3][4] { // 3 rows and 4 columns, total size of the array is 12 integers - two-dimensional (2d) array, but you can use as many dimensions as they're supported by your system.
  {0, 4, 3, 5},
  {2, 3, 3, 5},
  {1, 4, 4, 5}
};
// While there's no real limit to the number of dimensions you can have for arrays, be aware that some compilers do place limits on this. Though the limits are quite high, and you're unlikely to reach them.
const int rows {3};
const int cols {4};
int movie_ratings [rows][cols];
// Accessing multi-dimensional arrays
cout << movie_ratings[0][0] << endl; // 0
cout << movie_ratings[0][1] << endl; // 4
// updating multi-dimensional arrays
movie_ratings[0][0] = 1; // This would update that specific element in the array.
cin >> movie_ratings[0][1]; // This would allow the user to update that specific element in the array.
// the same characteristics hold for multidimensional arrays as for single-dimensional arrays. So we can use the sizeof operator to determine the size of the array in bytes. We can also use the subscript operator to access the elements of the array. We can also use the subscript operator to update the elements of the array.

/***************************************************************************************************************************/

/*
vectors

> dynamic arrays - a vector is a dynamic array. A dynamic array is an array that can grow and shrink in size as needed at runtime. A vector is a class template provided by the standard library. So we have to include the vector header file in order to use it.

> Suppose we want to store test scores for students in a class but registration hasn't started yet, so I don't know how many students I'll have in class. Also, students drop and add as the semester progresses. How can I model this information using an array as we've seen to this point? Remember, c++ arrays are fixed in size and I need to specify a size when I declare them. So what are my options? Well, I can always set the fixed size of the array to a size large enough, so that it's unlikely I'll have more than that number of students. Many times this option is okay, but you'll probably make it too big and waste space. For example, we may have 30 students in the class, but we allocated 50 students in the array. Not only have I wasted storage space, but now I need to keep track of how many students are actually in the array. And of course sooner or later, you'll get that one student that exceeds the size of the array.

> So what do we do? Well, we can use a dynamic array, such as a vector to solve some of these problems. A c++ vector is part of the c++ standard template library. This is a library of powerful containers, algorithms, functions and iterators. This means that we have available to us pre-written, pre-tested, easy to use components that we can use to help us solve our problems.

> We've talked about c++ being an object-oriented language. Well, when we create a c++ vector, we are creating a c++ object. And we can ask the object to perform operations for us. Vectors can grow and shrink in size at runtime, so it's a perfect choice to model my students. Vectors also provide syntax and semantics similar to arrays.

> In addition to the array-like syntax, we can also use lots of really powerful functions like sort, reverse, erase, find and more. Vectors also give us the ability to use methods that provide bounds checking if we wish.
*/

// Declaring and Initializing a Vector - There are several ways to declare a vector. The syntax for declaring a vector changes slightly from that of declaring an array because vectors are objects.
#include <iostream>
#include <vector> // include the vector header file
using namespace std; // the vector type is part of the standard library
int main () {
// since the vector is an object-oriented template class. We must include the type of the elements of the vector inside the angle brackets.
vector <char> vowels; // vector of characters named vowels
vector <int> test_scores; // vector of integers named test_scores
// Both these examples create an empty vector that contains no elements.
vector <int> test_scores (3); // vector of integers named test_scores with 3 elements initialized to 0 - constructor initialization syntax which provides information inside parentheses. This tells the compiler that you want 5 characters. Unlike arrays, these ten integers will be automatically set to 0. I don't have to do that explicitly myself.
vector <int> test_scores (3, 100); // vector of integers named test_scores with 3 elements initialized all to 100
// We can also use initializer lists as we did with arrays to initialize vector elements.
vector <int> test_scores {100, 98, 89}; // vector of integers named test_scores with 3 elements initialized to 100, 98 and 89
vector <char> vowels {'a', 'e', 'i', 'o', 'u'}; // vector of characters named vowels with 5 elements initialized to a, e, i, o and u - Note that there are single quotes around the character literals, not double quotes.
vector <double> hi_temps (365, 80.0); // vector of doubles named hi_temps with 365(initialize size) elements initialized all to 80.0
}
/*
We can also initialize a vector using an array. We can use the curly braces to initialize the vector. We can also use the assignment operator to initialize the vector. We can also use the copy constructor to initialize the vector. We can also use the assignment operator to initialize the vector. We can also use the copy constructor to initialize the vector.

vectors are an object-oriented container, defined in the standard template library. We must include the vector include file to use them, and they belong to the standard namespace. Like arrays, vectors allow you to tell the compiler to give you a collection of as many elements as you want and give the entire collection a single name. Vectors are dynamic which means they can grow and shrink as needed at runtime. Like arrays, vector data is stored contiguously in memory. Vector elements are individually accessible. Vector indexes start at 0 and end at position size minus one. If you use the subscript operator, that's the square brackets to access vector elements, then vectors will provide no bounds checking. This provides the same behavior as arrays. However, vectors provide a rich set of functions that do provide type checking. As a programmer, you can decide what you need to use. Unlike arrays, when you declare a vector, the vector elements will automatically be initialized to 0 unless you specify otherwise. So if you declare a vector of 10 integers, these integers will be initialized to 0. They won't contain garbage. Vectors are very efficient. And finally, we commonly use iteration or looping to process vectors just like we do in arrays.
*/

// accessing and modifying vector elements using subscript/indexing operator - It's important to understand when we use the subscript operator with a vector, no bounds checking will be done. You have to do it yourself as with arrays.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};

  cout << test_scores[0] << endl; // 100
  cout << test_scores[1] << endl; // 98
  cout << test_scores[2] << endl; // 89
  cout << "\n=============================\n" << endl;
  test_scores[0] = 86;
  cout << test_scores[0] << endl; // 86
  cout << test_scores[1] << endl; // 98
  cout << test_scores[2] << endl; // 89
  cout << "\n=============================\n" << endl;
  cout << "Enter 3 test scores: ";
  cin >> test_scores[0];
  cin >> test_scores[1];
  cin >> test_scores[2];
  cout << "\n=============================\n" << endl;
  cout << test_scores[0] << endl; // 86
  cout << test_scores[1] << endl; // 98
  cout << test_scores[2] << endl; // 89
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: at() member method - The at() member method is a member function of the vector class. It provides bounds checking. If you use the at() member function, then the vector will check to make sure that the index you're using is valid. If it's not, then the vector will throw an exception. This is a run-time error that will terminate the program. So if you use the at() member function, you must use a try-catch block to handle the exception.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.at(0) << endl; // 100
  cout << test_scores.at(1) << endl; // 98
  cout << test_scores.at(2) << endl; // 89
  cout << "\n=============================\n" << endl;
  test_scores.at(0) = 86;
  cout << test_scores.at(0) << endl; // 86
  cout << test_scores.at(1) << endl; // 98
  cout << test_scores.at(2) << endl; // 89
  cout << "\n=============================\n" << endl;
  cout << "Enter 3 test scores: ";
  cin >> test_scores.at(0);
  cin >> test_scores.at(1);
  cin >> test_scores.at(2);
  cout << "\n=============================\n" << endl;
  cout << test_scores.at(0) << endl; // 86
  cout << test_scores.at(1) << endl; // 98
  cout << test_scores.at(2) << endl; // 89
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: front() and back() member functions(methods) - The front() and back() member functions are member functions of the vector class. They provide access to the first and last elements of the vector. They are useful when you want to access the first and last elements of the vector without having to know the size of the vector.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.front() << endl; // 100
  cout << test_scores.back() << endl; // 89
  cout << "\n=============================\n" << endl;
  test_scores.front() = 86;
  test_scores.back() = 76;
  cout << test_scores.front() << endl; // 86
  cout << test_scores.back() << endl; // 76
  cout << "\n=============================\n" << endl;
  cout << "Enter 3 test scores: ";
  cin >> test_scores.front();
  cin >> test_scores.back();
  cout << "\n=============================\n" << endl;
  cout << test_scores.front() << endl; // 86
  cout << test_scores.back() << endl; // 76
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: data() member method - The data() member function is a member function of the vector class. It provides access to the underlying array that's used to store the vector elements. It returns a pointer to the first element of the array. It's useful when you want to pass a vector to a function that expects a pointer to an array. It's also useful when you want to use the C-style array functions with a vector.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.data() << endl; // 0x7ffeeb2b9b20
  cout << "\n=============================\n" << endl;
  test_scores.data() = 86;
  cout << test_scores.data() << endl; // 0x7ffeeb2b9b20
  cout << "\n=============================\n" << endl;
  cout << "Enter 3 test scores: ";
  cin >> test_scores.data();
  cout << "\n=============================\n" << endl;
  cout << test_scores.data() << endl; // 0x7ffeeb2b9b20
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: empty() and size() member functions(methods) - The empty() and size() member functions are member functions of the vector class. They provide information about the vector. The empty() member function returns true if the vector is empty, and false otherwise. The size() member function returns the number of elements in the vector.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << boolalpha;
  cout << test_scores.empty() << endl; // false
  cout << test_scores.size() << endl; // 3
  cout << "\n=============================\n" << endl;
  vector <char> vowels;
  cout << vowels.empty() << endl; // true
  cout << vowels.size() << endl; // 0
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: max_size() member method - The max_size() member function is a member function of the vector class. It returns the maximum number of elements that the vector can hold. This is the theoretical maximum number of elements that the vector can hold. It's not necessarily the actual maximum number of elements that the vector can hold. The actual maximum number of elements that the vector can hold depends on the amount of memory available to the program.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.max_size() << endl; // 4611686018427387903
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: capacity() and reserve() member functions(methods) - The capacity() and reserve() member functions are member functions of the vector class. They provide information about the vector's capacity. The capacity() member function returns the number of elements that the vector can hold before it needs to allocate more memory. The reserve() member function allocates memory for the vector so that it can hold at least the number of elements specified by the argument. If the argument is less than the current capacity, then the reserve() member function does nothing.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.capacity() << endl; // 3
  cout << "\n=============================\n" << endl;
  test_scores.reserve(100);
  cout << test_scores.capacity() << endl; // 100
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: shrink_to_fit() member method - The shrink_to_fit() member function is a member function of the vector class. It reduces the capacity of the vector to match its size. It's useful when you want to reduce the memory used by the vector.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.capacity() << endl; // 3
  cout << "\n=============================\n" << endl;
  test_scores.reserve(100);
  cout << test_scores.capacity() << endl; // 100
  cout << "\n=============================\n" << endl;
  test_scores.shrink_to_fit();
  cout << test_scores.capacity() << endl; // 3
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: shrink_to_fit() member method - The shrink_to_fit() member function is a member function of the vector class. It requests the container to reduce its capacity to fit its size. This function has no effect on the vector size and cannot alter its elements.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.capacity() << endl; // 4
  test_scores.reserve(100);
  cout << test_scores.capacity() << endl; // 100
  test_scores.shrink_to_fit();
  cout << test_scores.capacity() << endl; // 3
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: clear() member method - The clear() member function is a member function of the vector class. It removes all the elements from the vector. It doesn't deallocate any memory. It's useful when you want to reuse a vector that already has memory allocated to it.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.capacity() << endl; // 3
  cout << "\n=============================\n" << endl;
  test_scores.reserve(100);
  cout << test_scores.capacity() << endl; // 100
  cout << "\n=============================\n" << endl;
  test_scores.clear();
  cout << test_scores.capacity() << endl; // 100
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: clear() member method - The clear() member function is a member function of the vector class. It removes all elements from the vector. It does not deallocate any memory. The size of the vector is reduced to 0.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  test_scores.clear();
  cout << test_scores.size() << endl; // 0
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: insert() member method - The insert() member function is a member function of the vector class. It inserts an element into the vector before the element at the specified position. It returns an iterator to the newly inserted element. If the position argument is equal to the end() iterator, then the element is inserted at the end of the vector. If the position argument is equal to the begin() iterator, then the element is inserted at the beginning of the vector. If the position argument is equal to the rbegin() iterator, then the element is inserted at the end of the vector. If the position argument is equal to the rend() iterator, then the element is inserted at the beginning of the vector.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  auto it = test_scores.insert(test_scores.begin(), 1000);
  cout << *it << endl; // 1000
  cout << "\n=============================\n" << endl;
  it = test_scores.insert(test_scores.end(), 2000);
  cout << *it << endl; // 2000
  cout << "\n=============================\n" << endl;
  it = test_scores.insert(test_scores.begin() + 1, 3000);
  cout << *it << endl; // 3000
  cout << "\n=============================\n" << endl;
  it = test_scores.insert(test_scores.rbegin().base(), 4000);
  cout << *it << endl; // 4000
  cout << "\n=============================\n" << endl;
  it = test_scores.insert(test_scores.rend().base(), 5000);
  cout << *it << endl; // 5000
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: insert() member method - The insert() member function is a member function of the vector class. It inserts elements before the element at the specified position. The vector is extended by inserting new elements before the element at the specified position, effectively increasing the container size by the number of elements inserted.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  test_scores.insert(test_scores.begin(), 1000);
  cout << test_scores.at(0) << endl; // 1000
  cout << test_scores.at(1) << endl; // 100
  cout << "\n=============================\n" << endl;
  test_scores.insert(test_scores.end(), 3, 1000);
  cout << test_scores.at(4) << endl; // 1000
  cout << test_scores.at(5) << endl; // 1000
  cout << test_scores.at(6) << endl; // 1000
  cout << "\n=============================\n" << endl;
  vector <int> more_scores {1001, 1002, 1003};
  test_scores.insert(test_scores.begin() + 2, more_scores.begin(), more_scores.end());
  cout << test_scores.at(2) << endl; // 1001
  cout << test_scores.at(3) << endl; // 1002
  cout << test_scores.at(4) << endl; // 1003
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: emplace() member method - The emplace() member function is a member function of the vector class. It inserts an element into the vector before the element at the specified position. It returns an iterator to the newly inserted element. If the position argument is equal to the end() iterator, then the element is inserted at the end of the vector. If the position argument is equal to the begin() iterator, then the element is inserted at the beginning of the vector. If the position argument is equal to the rbegin() iterator, then the element is inserted at the end of the vector. If the position argument is equal to the rend() iterator, then the element is inserted at the beginning of the vector.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  auto it = test_scores.emplace(test_scores.begin(), 1000);
  cout << *it << endl; // 1000
  cout << "\n=============================\n" << endl;
  it = test_scores.emplace(test_scores.end(), 2000);
  cout << *it << endl; // 2000
  cout << "\n=============================\n" << endl;
  it = test_scores.emplace(test_scores.begin() + 1, 3000);
  cout << *it << endl; // 3000
  cout << "\n=============================\n" << endl;
  it = test_scores.emplace(test_scores.rbegin().base(), 4000);
  cout << *it << endl; // 4000
  cout << "\n=============================\n" << endl;
  it = test_scores.emplace(test_scores.rend().base(), 5000);
  cout << *it << endl; // 5000
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: erase() member method - The erase() member function is a member function of the vector class. It removes an element from the vector at the specified position. It returns an iterator to the element that followed the last element removed from the vector. If the position argument is equal to the end() iterator, then the last element is removed from the vector. If the position argument is equal to the begin() iterator, then the first element is removed from the vector. If the position argument is equal to the rbegin() iterator, then the last element is removed from the vector. If the position argument is equal to the rend() iterator, then the first element is removed from the vector.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  auto it = test_scores.erase(test_scores.begin());
  cout << *it << endl; // 98
  cout << "\n=============================\n" << endl;
  it = test_scores.erase(test_scores.end() - 1);
  cout << *it << endl; // 98
  cout << "\n=============================\n" << endl;
  it = test_scores.erase(test_scores.begin() + 1);
  cout << *it << endl; // 98
  cout << "\n=============================\n" << endl;
  it = test_scores.erase(test_scores.rbegin().base());
  cout << *it << endl; // 98
  cout << "\n=============================\n" << endl;
  it = test_scores.erase(test_scores.rend().base());
  cout << *it << endl; // 98
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: push_back() member method - The push_back() member function is a member function of the vector class. It adds an element to the end of the vector. It increases the size of the vector by 1.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  test_scores.push_back(85);
  cout << test_scores.at(3) << endl; // 85
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: emplace_back() member method - The emplace_back() member function is a member function of the vector class. It adds an element to the end of the vector. It increases the size of the vector by 1.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  test_scores.emplace_back(85);
  cout << test_scores.at(3) << endl; // 85
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: pop_back() member method - The pop_back() member function is a member function of the vector class. It removes the last element from the vector. It decreases the size of the vector by 1.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  test_scores.pop_back();
  cout << test_scores.at(2) << endl; // 98
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: swap() member method - The swap() member function is a member function of the vector class. It swaps the contents of the vector with the contents of another vector of the same type. The size of the two vectors may be different.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores1 {100, 98, 89};
  vector <int> test_scores2 {85, 93, 76, 87};
  test_scores1.swap(test_scores2);
  cout << test_scores1.at(0) << endl; // 85
  cout << test_scores2.at(0) << endl; // 100
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: resize() member method - The resize() member function is a member function of the vector class. It resizes the vector to the specified number of elements. If the number of elements is greater than the current size of the vector, then the new elements are initialized to the default value of the type of the vector. If the number of elements is less than the current size of the vector, then the vector is reduced to the specified number of elements.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  test_scores.resize(5);
  cout << test_scores.at(3) << endl; // 0
  cout << test_scores.at(4) << endl; // 0
  cout << "\n=============================\n" << endl;
  test_scores.resize(2);
  cout << test_scores.at(0) << endl; // 100
  cout << test_scores.at(1) << endl; // 98
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: reserve() member method - The reserve() member function is a member function of the vector class. It requests that the vector capacity be at least enough to contain n elements. If n is greater than the current vector capacity, the function causes the container to reallocate its storage increasing its capacity to n (or greater). In all other cases, the function call does not cause a reallocation and the vector capacity is not affected. This function has no effect on the vector size and cannot alter its elements.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores {100, 98, 89};
  cout << test_scores.capacity() << endl; // 4
  test_scores.reserve(100);
  cout << test_scores.capacity() << endl; // 100
  cout << "\n=============================\n" << endl;
  return 0;
}

// vector method: assign() member method - The assign() member function is a member function of the vector class. It assigns new contents to the vector, replacing its current contents, and modifying its size accordingly.
#include <iostream>
#include <vector>
using namespace std;
int main() {
  vector <int> test_scores1 {100, 98, 89};
  vector <int> test_scores2 {85, 93, 76, 87};
  test_scores1.assign(7, 100);
  cout << test_scores1.at(0) << endl; // 100
  cout << test_scores1.at(6) << endl; // 100
  cout << "\n=============================\n" << endl;
  test_scores2.assign(test_scores1.begin(), test_scores1.end());
  cout << test_scores2.at(0) << endl; // 100
  cout << test_scores2.at(6) << endl; // 100
  cout << "\n=============================\n" << endl;
  return 0;
}

/*
Declaring, Initializing and Accessing Vectors
Declare a vector of integers named vec  and initialize the vector to 10,20,30,40, and 50 
Modify the first element of the vector to be 100  and modify the last element of the vector to be 1000 .
The final vector should then be 100, 20, 30, 40, and 1000.
*/
vector <int> vec {10,20,30,40,50};
vec.at(0) = 100;
vec[vec.size() - 1] = 1000;

// example
#include <iostream>
#include <vector>   // don't forget this in order to use vectors
using namespace std;
int main() {

  // vector <char> vowels;         // empty 
  // vector <char> vowels (5);      // 5 initialized to zero 
  vector <char> vowels {'a' , 'e', 'i', 'o', 'u'};
  
  cout << vowels[0] << endl;
  cout << vowels[4] << endl;
  
  // vector <int> test_scores (3);  // 3 elements all initialized to zero
  // vector <int> test_scores (3, 100); // 3 elements all initialized to 100
  
  vector <int> test_scores {100, 98, 89};
  
  cout << "\nTest scores using array syntax:" << endl;
  cout << test_scores[0] << endl;
  cout << test_scores[1] << endl;
  cout << test_scores[2] << endl;

  cout << "\nTest scores using vector syntax:" << endl;
  
  cout << test_scores.at(0) << endl;
  cout << test_scores.at(1) << endl;
  cout << test_scores.at(2) << endl;
  cout << "\nThere are " << test_scores.size() << " scores in the vector" << endl;
  
  cout << "\nEnter 3 test scores: ";
  cin  >> test_scores.at(0);
  cin >> test_scores.at(1);
  cin >> test_scores.at(2);
  
  cout << "\nUpdated test scores: " << endl;
  
  cout << test_scores.at(0) << endl;
  cout << test_scores.at(1) << endl;
  cout << test_scores.at(2) << endl;
  
  cout << "\nEnter a test score to add to the vector: ";
  
  int score_to_add {0};
  cin >> score_to_add;
  
  test_scores.push_back(score_to_add);
  
  cout << "\nEnter one more test score to add to the vector: ";
  
  cin >> score_to_add;
  
  test_scores.push_back(score_to_add);
  
  cout << "\nTest scores are now: " << endl;
  
  cout << test_scores.at(0) << endl;
  cout << test_scores.at(1) << endl;
  cout << test_scores.at(2) << endl;
  cout << test_scores.at(3) << endl;
  cout << test_scores.at(4) << endl;
  
  cout << "\nThere are now " << test_scores.size() << " scores in the vector" << endl;
  
  // cout << "This should cause an exception!!" << test_scores.at(10) << endl; // this will cause an exception to be thrown and the program to terminate because there is no element at index 10 in the vector test_scores

  // Example of a 2D-vector
  vector <vector<int>> movie_ratings 
  {   
    {1, 2, 3, 4},
    {1, 2, 4, 4},
    {1, 3, 4, 5}
  };

  cout << "\nHere are the movie rating for reviewer #1 using array syntax :" << endl;
  cout << movie_ratings[0][0] << endl;
  cout << movie_ratings[0][1] << endl;
  cout << movie_ratings[0][2] << endl;
  cout << movie_ratings[0][3] << endl;
  
  cout << "\nHere are the movie rating for reviewer #1 using vector syntax :" << endl;
  cout << movie_ratings.at(0).at(0) << endl;
  cout << movie_ratings.at(0).at(1) << endl;
  cout << movie_ratings.at(0).at(2) << endl;
  cout << movie_ratings.at(0).at(3) << endl;
  
  cout << endl;
  return 0;
}

/*
Challenge

Write a C++ program as follows:
Declare 2 empty vectors of integers named
vector1 and vector 2, respectively.
Add 10 and 20 to vector1 dynamically using push_back
Display the elements in vector1 using the at() method as well as its size using the size() method
Add 100 and 200 to vector2 dynamically using push_back
Display the elements in vector2 using the at() method as well as its size using the size() method
Declare an empty 2D vector called vector_2d
Remember, that a 2D vector is a vector of vector<int>
Add vector1 to vector_2d dynamically using push_back
Add vector2 to vector_2d dynamically using push_back
Display the elements in vector_2d using the at() method
Change vector1.at(0) to 1000
Display the elements in vector_2d again using the at() method
Display the elements in vector1 
What did you expect? Did you get what you expected? What do you think happened?
*/
#include <iostream>
#include <vector>
using namespace std;
int main() {

  // Declare 2 empty vectors of integers named
  // vector1 and vector 2, respectively.
  
  vector <int> vector1;
  vector <int> vector2;
  
  // Add 10 and 20 to vector1 dynamically using push_back

  vector1.push_back(10);
  vector1.push_back(20);
  
  // Display the elements in vector1 using the at() method as well as its size using the size() method
  
  cout << "\nvector1: " << endl;
  cout << vector1.at(0) << endl;
  cout << vector1.at(1) << endl;
  cout << "vector1 contains " << vector1.size() << " elements" << endl;

  // Add 100 and 200 to vector2 dynamically using push_back

  vector2.push_back(100);
  vector2.push_back(200);
  
  // Display the elements in vector2 using the at() method as well as its size using the size() method

  cout << "\nvector2: " << endl;
  cout << vector2.at(0) << endl;
  cout << vector2.at(1) << endl;
  cout << "vector2 contains " << vector2.size() << " elements" << endl;

  // Declare an empty 2D vector called vector_2d
  // Remember, that a 2D vector is a vector of vector<int>

  vector <vector<int>> vector_2d;
  
  // Add vector1 to vector_2d dynamically using push_back
  // Add vector2 to vector_2d dynamically using push_back

  vector_2d.push_back(vector1);
  vector_2d.push_back(vector2);
  
  // Display the elements in vector_2d using the at() method

  cout << "\nvector_2d:" << endl;
  cout << vector_2d.at(0).at(0) << "  " << vector_2d.at(0).at(1) << endl;
  cout << vector_2d.at(1).at(0) << "  " << vector_2d.at(1).at(1) << endl;

  // Change vector1.at(0) to 1000

  vector1.at(0) = 1000;
  
  // Display the elements in vector_2d again using the at() method

  cout << "\nvector_2d:" << endl;
  cout << vector_2d.at(0).at(0) << "  " << vector_2d.at(0).at(1) << endl; // 10 and 20 - not 1000 and 20 as expected
  cout << vector_2d.at(1).at(0) << "  " << vector_2d.at(1).at(1) << endl; // 100 and 200

  // Display the elements in vector1 

  cout << "\nvector1: " << endl;
  cout << vector1.at(0) << endl; // 1000
  cout << vector1.at(1) << endl; // 20
  cout << "vector1 contains " << vector1.size() << " elements" << endl;

  /*    
  What did you expect? 
  Did you expect to see the 1000 in the vector_2d after you changed vector1?
  Did you get what you expected? 
  What do you think happened?
  It looks like copies are being made, right? 
  */

  cout << endl;
  return 0;
}

/***************************************************************************************************************************/

/*
statements and expressions

Expressions are the building blocks of statements. And statements are the building blocks of programming in c++.
*/

// expressions: Expressions are the most basic building blocks in programming. Expressions are defined as follows in the c++ standard. A sequence of operators and operands that specifies a computation. you can think of an expression as a sequence of operation operators that computer value.
34 // literal expression
x // variable expression
1.5 + 2.8 // arithmetic expression
a > b // relational(comparison) expression
x = c // assignment expression - We are assigning B to A. This is also an expression because the value of this expression is what we just assign.

// statements: A statement is a complete line of code that performs some action. Statements are usually terminated with a semicolon. Statements usually contain expressions.
int x; // declaration statement
x = 5; // assignment statement
cout << "Hello World" << endl; // output statement
cin >> x; // input statement
1.5+2.8; // expression statement
x = 2*5 + 3; // expression statement - Notice how expression are used to make up the statement. The expression 2*5 + 3 is evaluated and the result is assigned to x.
if (x > 10) { cout << "x is greater than 10" << endl; } // selection(if) statement
; // null statement - This is a statement that does nothing. It is used to terminate a statement that is otherwise empty.

/* statements examples */

// compound(block) statements: A compound statement is a statement that contains other statements. A compound statement is usually enclosed in curly braces. A compound statement is also called a block. A block is a sequence of statements enclosed in curly braces. A block is also called a compound statement.
{
  int x;
  x = 5;
  cout << "Hello World" << endl;
  cin >> x;
  1.5+2.8;
  x = 2*5 + 3;
  if (x > 10) { cout << "x is greater than 10" << endl; }
  ;
}

// declaration statement: A declaration statement is a statement that declares a variable. A declaration statement is a sequence of tokens that specifies the type of the variable and the name of the variable. A declaration statement is also called a variable declaration.
int x;

// assignment statement: An assignment statement is a statement that assigns a value to a variable. An assignment statement is a sequence of tokens that specifies the name of the variable and the value of the variable. An assignment statement is also called an assignment expression.
x = 5;

// output statement: An output statement is a statement that outputs a value to the screen. An output statement is a sequence of tokens that specifies the value to be output. An output statement is also called an output expression.
cout << "Hello World" << endl;

// input statement: An input statement is a statement that inputs a value from the keyboard. An input statement is a sequence of tokens that specifies the variable to be used to store the value. An input statement is also called an input expression.
cin >> x;

// expression statement: An expression statement is a statement that contains an expression. An expression statement is a sequence of tokens that specifies an expression. An expression statement is also called an expression.
1.5+2.8;
x = 2*5 + 3;

// selection(if) statement: A selection(if) statement is a statement that performs a selection. A selection(if) statement is a sequence of tokens that specifies a condition and a block. A selection(if) statement is also called an if statement.
if (x > 10) { cout << "x is greater than 10" << endl; }

// null statement: A null statement is a statement that does nothing. A null statement is a sequence of tokens that specifies a semicolon. A null statement is also called a null expression.
;

/***************************************************************************************************************************/

/*
operators

> Operators are the symbols that tell the compiler to perform specific mathematical or logical manipulations. C++ is rich in built-in operators and provide the following types of operators that can be used to build up expressions.

> The precedence and associativity of the operators determine the order in which the operators are evaluated. The associativity of the operators determine the order in which the operands are evaluated.
*/

// Most of the c++ operators are binary operators, which means they operate on two operands. some are unary operators, which means they operate on only one operand. There's even a ternary operator that operates on three operands.

// The c++ common operators can be grouped into several categories:
// assignment operators: are used to modify the value of some object by assigning a new value to it.
// arithmetic(math) operators: are used to perform mathematical operations on operands.
// increment and decrement operators: part of them work like an assignment and part of them work like arithmetic.
// relational(comparison) operators: allow you to compare the values of two objects.
// logical operators: used to test for logical or Boolean conditions.
// member access operators: such as the dot operator and the arrow operator and the array subscript operator.
// bitwise operators
// conditional operators
// comma operator
// sizeof operator
// pointer operators
// type conversion operators

// assignment operators: are used to modify the value of some object by assigning a new value to it. The assignment operator is a single equal sign. It's important to understand that this does not represent equality. we are not asserting that the left-hand side is equal to the right-hand side nor are we comparing the left-hand side in the right-hand side. we're evaluating the value of the expression on the right-hand side and storing that value into the variable represented by the left-hand side. C++ is statically typed. That means that the compiler will be checking to see if it makes sense to store the value from the right-hand side to the left-hand side. If it doesn't make sense, you'll get a compiler error saying exactly that. In order to store value into the left-hand side. The left-hand side must be a singable. It can't be a literal. It can't be a constant. If it is, the compiler will produce an error message. We can assign multiple variables all at once in a single assignment statement. This is possible because the assignment expression evaluates to what was just assigned. So it's easy to chain assignment statements together.
int x {10}; // initialization statement
x = 5; // assignment statement - when you use num1, this variable num1 on the left-hand side. We're using its location, not its value. In c ++, there's a concept of Lvalue and Rvalue, The R-value is the contents of num1 is 10. So the R-value of num1 will be 10. The L-value is the location of that variable. So again, what this means is move 100 or store 100 into the location of num1. we just changed the 10 to a 100.
x = y;
x = y = z;
x = y = z = 100;
x = "amr"; // error: invalid conversion from const char* to int [-fpermissive]
100 = x; // error: lvalue required as left operand of assignment - The left-hand side must be a singable. It can't be a literal. It can't be a constant. If it is, the compiler will produce an error message. 100 is literal it has no location in memory.

// arithmetic(math) operators: + - * / % - +, -. * and /  operators are overloaded to work with multiple types such as int, double, etc. %  only for integer types. The modulus operator or % works with integer data types. It returns the remainder of the division operation between two integer values. For example, 5 % 2 would return 1 because 2 divides into 5 evenly two times with a remainder of 1. If you try to use the modulus operator with non-integer data types, such as floating-point numbers or strings, you may encounter a TypeError.
#include <iostream>
using namespace std;
int main() {
  int num1 {200};
  int num2 {100};
  // cout << num1 << " + " <<  num2 << " = "<< num1+ num2 << endl;
  int result {0};
  
  result = num1 + num2;
  cout << num1 << " + " <<  num2 << " = "<< result << endl;
  
  result = num1 - num2;
  cout << num1 << " - " <<  num2 << " = "<< result << endl;
  
  result = num1 * num2;
  cout << num1 << " * " <<  num2 << " = "<< result << endl;
  
  result = num1 / num2;
  cout << num1 << " / " <<  num2 << " = "<< result << endl;    
  
  result = num2 / num1;
  cout << num2 << " / " <<  num1 << " = "<< result << endl;
  
  result = num1 % num2;
  cout << num1 << " % " <<  num2 << " = "<< result << endl;    
  
  num1 = 10;
  num2 = 3;
  
  result = num1 % num2;
  cout << num1 << " % " <<  num2 << " = "<< result << endl;    
  
  result = num1 * 10 + num2; // precedence and associativity of the operators
  
  cout << 5/10 << endl; // 0 - integer division
  
  cout << 5.0/10.0 << endl; // 0.5 - floating point division
  
  cout << endl;
  return 0;
}

// Convert EUR to USD
#include <iostream>
using namespace std;
int main() {
  const double usd_per_eur {1.19};
  cout << "Welcome to the EUR to USD converter" << endl;
  cout << "Enter the value in EUR : ";
  double euros {0.0};
  double dollars {0.0};
  cin >> euros;
  dollars = euros * usd_per_eur;
  cout << euros << " euros is equivalent to " << dollars << " dollars" << endl;

  cout  << endl;
  return 0;
}

/*
Using the Assignment Operator

In this exercise you will write a program that uses the assignment operator = to change the value of an initialized variable as well as assign the value of one variable to another. 
Begin by declaring and initializing the integer variable num1 to the value of 13 . 
Now declare and initialize the integer variable num2  to the value 0 .
Use the assignment operator to change the value of num1 to 5 . 
Now use the assignment operator to assign the value of  num1  to  num2.
*/
// Declare num1 as an integer and initialize it to 13.
int num1 {13};
// Declare num2 as an integer and initialize it to 0.
int num2 {0};
// Assign the value 5 to num1
num1 = 5;
// Assign the value of num1 to num2
num2 = num1;

/*
Using the Arithmetic Operators

In this exercise you will write a program that uses arithmetic operators to manipulate an integer number that is provided to you. 
You do NOT have to declare number, it is already declared and will be set to various values by the automated tester.
In order to complete this exercise you will have to update the value contained within the variable  number  by using the currently contained value as an argument in the statement.
This can be done through the use of the assignment operator  =  in the following way:
E.g.     number  =  number  +  4  
Lets assume that  number  is currently holding the value 3. This means that the above statement is equivalent to  number  =  3  +  4. Thereby, through the assignment operator, the new value of  number  will be 7.
Use the arithmetic operators in the manner and order in which they are listed below. For those who feel inclined, try challenging yourself by completing all operations in one statement remembering the rules of PEMDAS.
Use the multiplication operator  *  to double  the value of the variable  number and store the result back in number .
Use the addition operator  +  to add 9  to the variable  number  and store the result back in number .
Use the subtraction operator  -  to subtract 3  from the variable number  and store the result back in number .new value. 
Use the division operator  /  to divide the variable number  by 2   and store the result back in number .
Use the subtraction operator  -  to subtract the variable named original_number  from the variable number  and store the result back in number .
Use the modulo operator  %  to find the remainder of the new value when divided by 3  and store the result back in number .
*/
// Multiply number by 2 and assign the result back to number
number *= 2;
// Add 9 to number and assign the result back to number
number += 9;
// Subtract 3 from number and assign the result back to number
number -= 3;
// Divide number by 2 and assign the result back to number
number /= 2;
// Subtract original_number from number and assign the result back to number
number -= number;
// Take the modulus 3 (%) of number and assign it back to number
number %= 3;
// The following is also a valid solution
number = ((number * 2 + 9 - 3) / 2 - number) % 3;

/***************************************************************************************************************************/

// Increment and Decrement Operators: ++ and -- - increment and decrement operators are used to increment or decrement a variable by 1 respectively. They can be used as a prefix or postfix operator.
/*
Increment operator ++
Decrement operator --

Increments or decrements its operand by 1
Can be used with integers, floating point types and pointers

Prefix   ++num - increments the variable then use the variable
Postfix  num++ - use the variable then increments the variable

Don't overuse this operator!
ALERT!!! Never use it twice for the same variable in the same statement!!
*/
#include <iostream>
using namespace std;
int main() {
  
  int counter {10};
  int result {0};
    
  // Example 1 - simple increment
  cout << "Counter : " << counter << endl;
  
  counter = counter + 1;
  cout << "Counter : " << counter << endl;

  counter++;
  cout << "Counter : " << counter << endl;

  ++counter; 
  cout << "Counter : " << counter << endl;

  // Example 2 - preincrement
  counter = 10;
  result = 0;
  
  cout << "Counter : " << counter << endl;
  
  result = ++counter; // Note the pre increment
  cout << "Counter : " << counter << endl;
  cout << "Result : " << result << endl;

  // Example 3 - post-increment
  counter = 10;
  result = 0;
  
  cout << "Counter : " << counter << endl;
  
  result = counter++; // Note the post increment
  cout << "Counter : " << counter << endl;
  cout << "Result : " << result << endl;

  // Example 4
  counter = 10;
  result = 0;

  cout << "Counter : " << counter << endl;

  result = ++counter + 10;  // Note the pre increment
      
  cout << "Counter : " << counter << endl;
  cout << "Result : " << result << endl;

  // Example 5
  counter = 10;
  result = 0;

  cout << "Counter : " << counter << endl;

  result = counter++ + 10;  // Note the post increment
        
  cout << "Counter : " << counter << endl;
  cout << "Result : " << result << endl;

  cout << endl;
  return 0;
}

/***************************************************************************************************************************/

// mixed type expressions: This is when you have an expression where the operands are of different types. For example, a plus b where a is an integer and b is a double.
/*
> C++ is very consistent with its application of an operator to operands. The operands must be of the same type.

> it's very important to understand the rules that c++ uses to ensure that the types are the same since the results of the calculation could be different depending on which operand type is changed.

> C++ will try to convert one of the operands so it matches the other. In many cases, this happens automatically. If an automatic conversion or coercion is not possible, then a compiler error will occur.

> higher versus lower types. The idea is simple. The lower types are those types that can hold smaller values and the higher types can hold larger values. So a long double is of higher type than a long and a long is of higher type than an int. The idea is that we can typically convert from a lower type to a larger type automatically since the lower types value will fit into the higher types value but the opposite may not be true. Short and character types are always converted to integers.

> A type conversion is also called a coercion since we're coercing one type to another. Sometimes this happens automatically and sometimes we do it ourselves in code. Promotion is when we convert a lower type to a higher type(used in math expressions). Demotion is when we convert a higher type to a lower type(used in assignment statements).
*/
2 * 2.5 // 2 is promoted to 2.0 and the result is 5.0

int num {0};
num = 2.5; // 2.5 is demoted to 2
cout << num << endl; // 2.5 is demoted to 2 and the result is 2 - potentially losing information. Many compilers will warn you about the possible loss of precision but not all do.

// explicit type casting
int total_amount {100};
int num_items {8};
double average_price {0.0};
average_price = total_amount / num_items; // integer division - 100 / 8 = 12.5 - 12.5 is demoted to 12 - we get the incorrect result of 12 instead of 12.5 - we lose the .5 part of the result - we lose precision - we lose information - we lose accuracy
average_price = static_cast<double>(total_amount) / num_items; // 100.0 / 8 = 12.5 - 12.5 is not demoted to 12 - we get the correct result of 12.5 - c++ promoted num_items to 8.0

/*
Ask the user to enter 3 integers
Calculate the sum of the integers then
calculate the average of the 3 integers.
Display the 3 integers entered
the sum of the 3 integers and
the average of the 3 integers.
*/
#include <iostream>
using namespace std;
int main() {
  int total {};
  int num1 {}, num2 {}, num3 {};
  const int count {3};
  cout << "Enter 3 integers separated by spaces: ";
  cin >> num1 >> num2 >> num3;
  total = num1 + num2 + num3;
  double average {0.0};
  average = total / static_cast<double>(count); // c++ promot total
  // average = (double)total/count;  Old-Style
  cout << "The 3 numbers were: "<< num1 << "," << num2 << "," << num3 << endl;
  cout << "The sum of the numbers is: " << total << endl;
  cout << "The average of the numbers is: " << average << endl;
  cout << endl;
  return 0;
}

/***************************************************************************************************************************/

// equality operators: == != - overloaded to work with multiple types such as int, double, etc. evaluates to true or false (bool)

bool result {false};
result = (100 == 50+50);
result = (num1 != num2);
cout << (num1 == num2) << endl; // 0 or 1
cout << std::boolalpha;
cout << (num1 == num2) << endl; // true or false
cout << std::noboolalpha;
cout << (num1 == num2) << endl; // 0 or 1
cout << (12.0 == 11.99999999999999) << endl; // Now to us those are not the same number. But remember, the way the computer stores floating point numbers, it stores approximations. So that might be surprising. As far as the computer is concerned, those numbers are equal because the representation that it's using to store them behind the scenes is equal. Okay. So it's important to understand that if you're dealing with applications that need this kind of precision, you know scientific application, medical applications, many many safety critical type applicationsyou, would not use these built-in doubles. We would use specific specialized libraries that really help us deal with this. So that 12.0 is not equal to 11.99999. Okay. So it's important to understand that. But the way that it stores it is in approximation. So as far as the computer is concerned, these are the same.

#include <iostream>
using namespace std;
int main() {

  bool equal_result {false};
  bool not_equal_result {false};
  
  int num1{}, num2{};
  
  cout << boolalpha; // will display true/false instead of 1/0 for booleans - this is a manipulator
  
  cout << "Enter two integers separated by a space: ";
  cin >> num1 >> num2;
  equal_result = (num1 == num2);
  not_equal_result = (num1 != num2);
  cout << "Comparision result (equals) : " << equal_result << endl;
  cout << "Comparision result (not equals) : " << not_equal_result << endl;

  char char1{}, char2{};
  cout << "Enter two characters separated by a space: ";
  cin >> char1 >> char2;
  equal_result = (char1 == char2);
  not_equal_result = (char1 != char2);
  cout << "Comparision result (equals) : " << equal_result << endl;
  cout << "Comparision result (not equals) : " << not_equal_result << endl;
  
  double double1{}, double2{};
  cout << "Enter two doubles separated by a space: ";
  cin >> double1 >> double2;
  equal_result = (double1 == double2); // if 12.0 == 11.99999999999999 then true is returned (because of the way the computer stores floating point numbers)
  not_equal_result = (double1 != double2); // if 12.0 == 11.99999999999999 then false is returned (because of the way the computer stores floating point numbers)
  cout << "Comparision result (equals) : " << equal_result << endl;
  cout << "Comparision result (not equals) : " << not_equal_result << endl;

  cout << "Enter an integer and a double separated by a space: ";
  cin >> num1 >> double1;
  equal_result = (num1 == double1); // if 10 == 10.0 then true is returned (because of promotion of int to double in the expression)
  not_equal_result = (num1 != double1); // if 10 == 9.9999999999999999999999 then false is returned (because of promotion of int to double in the expression)
  cout << "Comparision result (equals) : " << equal_result << endl;
  cout << "Comparision result (not equals) : " << not_equal_result << endl;

  cout << endl;
  return 0;
}

// relational(comparison) operators: > < >= <= evaluates to true or false (bool) / <=> (spaceship operator) (three-way comparison) c++20, evaluates to -1(less), 0(equal), 1(greater)

// relational expressions
a > b
a < b
a >= b
a <= b

#include <iostream>
using namespace std;
int main() {

  int num1{}, num2{};
  
  cout << boolalpha; // will display true/false instead of 1/0 for booleans - this is a manipulator
  cout << "Enter 2 integers separated by a space: ";
  cin >> num1 >> num2;

  cout << num1 << " > "   << num2  << " : " << (num1 > num2) << endl;
  cout << num1 << " >= " << num2  << " : " << (num1 >= num2) << endl;
  cout << num1 << " < "  << num2  << " : " << (num1 < num2) << endl;
  cout << num1 << " <= " << num2  << " : " << (num1 <= num2) << endl;
  
  const int lower {10};
  const int upper {20};
  
  cout << "\nEnter an integer that is greater than " << lower << " : " ;
  cin >> num1;
  cout << num1 << " > " << lower << " is " << (num1 > lower) << endl; // (num1 > lower) is an expression that evaluates to true or false
  
  cout << "\nEnter an integer that is less than or equal to " << upper << " : " ;
  cin >> num1;
  cout << num1 << " <= " << upper << " is " << (num1 <=  upper) << endl; // (num1 <= upper) is an expression that evaluates to true or false
  
  cout  << endl;
  return 0;
}

// The spaceship operator (<=>) is a new feature in C++20 that provides a concise way to compare two values and obtain a three-way comparison result. Here's an example of how to use it:
#include <compare>
#include <iostream>
int main() {
  int a = 10, b = 20;
  std::strong_ordering result = a <=> b;
  if (result == std::strong_ordering::less) {
      std::cout << "a is less than b\n";
  } else if (result == std::strong_ordering::equal) {
      std::cout << "a is equal to b\n";
  } else if (result == std::strong_ordering::greater) {
      std::cout << "a is greater than b\n";
  }
  return 0;
}
// In this example, we compare the values of a and b using the spaceship operator (<=>). The result of the comparison is a std::strong_ordering object that can take one of three values: std::strong_ordering::less, std::strong_ordering::equal, or std::strong_ordering::greater. We then use a simple if-else statement to print out the result of the comparison. Note that the spaceship operator can be used with any type that provides the necessary comparison functions (operator<=>, operator==, and operator<). These functions can be user-defined or provided by the standard library.

/***************************************************************************************************************************/

// logical operators: && || ! (and, or, not)

// logical expressions
num1 >= 10 && num1 <= 20 // true or false
num1 <= 10 || num1 >= 20 && num1 > 15 // true or false
is_raining || is_sunny // true or false
!is_raining && temperature > 20 // true or false

// short-circuit evaluation: C++ will stop evaluating a logical expression as soon as it knows the result.
expr1 && expr2 && expr3 // If expression 1 is false, then there is no way that the entire expression can be true since all the expressions must be true. So why bother evaluating expression 2 and expression 3 when the compiler already knows that the result will be false. This is called short circuit evaluation and is commonly used in many programming languages. Programmers take advantage of this behavior to optimize their code.
expr1 || expr2 || expr3 //  if any of the expressions is true, then the entire logical expression is true. So if expression one is true, then the compiler already knows that the entire expression is true and it won't evaluate expression two or expression three. However if expression 1 is false, then the compiler continues evaluating expression 2 since it doesn't know the result yet.

#include <iostream>
using namespace std;
int main() {
  int num {};
  const int lower{10};
  const int upper {20};
  
  cout << boolalpha;
  
  // Determine if an entered integer is between two other integers
  // assume lower < upper
  cout << "Enter an integer - the bounds are " << lower << " and " << upper << " : ";
  cin >> num;
  
  bool within_bounds {false};
  
  within_bounds = (num > lower && num < upper);
  cout << num  << " is between "<< lower <<  " and " << upper << " : " << within_bounds << endl;
  
  // Determine if an entered integer is outside two other integers
  // assume lower < upper
  cout << "\nEnter an integer - the bounds are " << lower << " and " << upper << " : ";
  cin >> num;
  
  bool outside_bounds {false};
  outside_bounds = (num < lower || num > upper);
  cout << num  << " is outside "<< lower <<  " and " << upper << " : " << outside_bounds << endl;

  // Determine if an entered integer is exactly on the boundary
 // assume lower < upper
  cout << "\nEnter an integer - the bounds are " << lower << " and " << upper << " : ";
  cin >> num;
  
  bool on_bounds {false};
  on_bounds = (num == lower || num == upper);
  cout << num  << " is on one of the bounds which are "<< lower <<  " and " << upper << " : " << on_bounds << endl;

  // Determine is you need to wear a coat based on temperature and wind speed    
  bool wear_coat {false}; 
  double temperature {};
  int wind_speed {};
  
  const int wind_speed_for_coat { 25 };       // wind over this value requires a coat
  const double temperature_for_coat {45}; // temperature below this value requires a coat
  
  // Require a coat if either wind is too high OR temperature is too low
  cout << "\nEnter the current temperature in (F) :" ;
  cin >> temperature;
  cout << "Enter windspeed in (mph): ";
  cin >> wind_speed;
  
  wear_coat = (temperature < temperature_for_coat || wind_speed > wind_speed_for_coat);
  cout << "Do you need to wear a coat using OR? " << wear_coat << endl;
  
  // Require a coat if BOTH the windspeed is too high AND temperature is too low
  wear_coat = (temperature < temperature_for_coat && wind_speed > wind_speed_for_coat);
  cout << "Do you need to wear a coat using AND? " << wear_coat << endl;
  
  cout << endl;
  return 0;
}

/***************************************************************************************************************************/

// bitwise operators: &, |, ^, ~, <<, >> (and, or, xor, not, left shift, right shift) (only for integers)

// bitwise expressions
num1 & num2 // true or false
num1 | num2 // true or false
num1 ^ num2 // true or false
~num1 // true or false
num1 << 2 // true or false
num1 >> 2 // true or false

// bitwise operators are not used often in C++ programming. They are used in low-level programming languages such as C and C++. They are used to manipulate bits in a number. For example, the bitwise AND operator (&) can be used to turn off a bit in a number. The bitwise OR operator (|) can be used to turn on a bit in a number. The bitwise XOR operator (^) can be used to toggle a bit in a number. The bitwise NOT operator (~) can be used to invert all the bits in a number. The bitwise left shift operator (<<) can be used to shift all the bits in a number to the left by a specified number of positions. The bitwise right shift operator (>>) can be used to shift all the bits in a number to the right by a specified number of positions. The bitwise operators are only used with integer types such as int, long, short, char, and unsigned int.

/***************************************************************************************************************************/

// compound assignment operators: +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>= (add, subtract, multiply, divide, modulus, bitwise and, bitwise or, bitwise xor, bitwise left shift, bitwise right shift) - The best tip I can give you when you write these operators is to think of the right-hand side as being inside parentheses and you'll always have it right.

// compound assignment expressions
num1 += num2 // num1 = num1 + num2 - increment the left-hand side by the right-hand side and then store the resulting value in the left-hand side.
num1 -= num2 // num1 = num1 - num2
num1 *= num2 // num1 = num1 * num2 - multiplies the left-hand side by the right-hand side and stores the product back in the left-hand side.
num1 /= num2 // num1 = num1 / num2
num1 %= num2 // num1 = num1 % num2
num1 &= num2 // num1 = num1 & num2
num1 |= num2 // num1 = num1 | num2
num1 ^= num2 // num1 = num1 ^ num2
num1 <<= num2 // num1 = num1 << num2
num1 >>= num2 // num1 = num1 >> num2
a *= b + c; // a = a * (b + c)
cost += items * tax; // cost = cost + (items * tax)

// compound assignment operators are used to simplify the code. They are used to increment, decrement, multiply, divide, and perform other operations on variables. They are also used to perform bitwise operations on integers. The compound assignment operators are very useful when you are writing loops and you need to increment or decrement a variable. They are also useful when you are writing mathematical expressions and you need to perform an operation on a variable and then store the result back in the variable. The compound assignment operators are also used to perform bitwise operations on integers.

/***************************************************************************************************************************/

// precedence and associativity of operators (order of operations) - C++ has well-defined operator precedence and associativity rules. 
what's associativity all about suppose you have an expression with two adjacent operators and these operators are different, We can look for operators in the precedence chart, and if one of the operators has higher precedence than the other, then that's the operator that's applied first. This is exactly what we've been doing with our math that we've learned. But suppose the two operators are the same or they're different but they have the same level of precedence. Now precedence doesn't really help us. In this case, we determine how the operators are applied by using their associativity. In the second example, we have the same operator, op1, used adjacently. If op1 associates left to right, then we apply the operator to expression1 and expression2 first. If op1 associates right to left, then we apply the operator to expression2 and expression3 first. Of course, you can always use parentheses to remove any doubt and be sure that your result is what you expect. Using parentheses is good practice with complex expressions.

expr1 op1 expr2 op2 expr3 // precedence
expr1 op3 expr2 op3 expr3 // associativity
expr1 op1 (expr2 op2 expr3) op3 expr4 // precedence and associativity

/***************************************************************************************************************************/

/*
challenge

For this program I will be using US dollars and cents.
Write a program that asks the user to enter the following:
An integer representing the number of cents 
You may assume that the number of cents entered is greater than or equal to zero
The program should then display how to provide that change to the user.
In the US:
1 dollar is 100 cents
1 quarter is 25 cents
1 dime is 10 cents
1 nickel is 5 cents, and
1 penny is 1 cent.
Here is a sample run:
Enter an amount in cents :  92
You can provide this change as follows:
dollars    : 0
quarters : 3
dimes     : 1
nickels   : 1
pennies  : 2
Feel free to use your own currency system.
Also, think of how you might solve the problem using the modulo operator.
Have fun and test your program!!
*/
#include <iostream>
using namespace std;
int main() {

  // define conversion values in cents
  const int dollar_value {100};
  const int quarter_value {25};
  const int dime_value {10};
  const int nickel_value {5};
  
  int change_amount {};
      
  // Solution 1 - not using the modulo operator
  
  cout << "Enter an amount in cents : ";
  cin >> change_amount;
  
  int balance{}, dollars{}, quarters {}, dimes{}, nickels{}, pennies{};
    
  dollars = change_amount / dollar_value;    
  balance = change_amount - (dollars * dollar_value);     
  
  quarters =  balance / quarter_value;
  balance -= quarters * quarter_value;

  dimes = balance / dime_value;
  balance -= dimes * dime_value;

  nickels = balance / nickel_value;
  balance -= nickels * nickel_value;

  pennies = balance;
  
  cout << "\nYou can provide this change as follows : " << endl;
  cout << "dollars  : " << dollars << endl;
  cout << "quarters : " << quarters << endl;
  cout << "dimes    : " << dimes << endl;
  cout << "nickels  : " << nickels << endl;
  cout << "pennies  : " << pennies << endl;

//  End of Solution 1

// Solution 2 - using the modulo operator

  cout << "----------------------------" << endl;
  cout << "Solution using the modulo operator" << endl;
  cout << "----------------------------" << endl;

  balance = dollars = quarters = dimes = nickels = pennies = 0;  // reset everthing to zero

  dollars = change_amount / dollar_value;   
  balance = change_amount % dollar_value;
  
  quarters = balance / quarter_value;
  balance %= quarter_value;
  
  dimes = balance / dime_value;
  balance %= dime_value;
  
  nickels = balance / nickel_value;
  balance %= nickel_value;
  
  pennies = balance;

  cout << "\nYou can provide this change as follows : " << endl;
  cout << "dollars  : " << dollars << endl;
  cout << "quarters : " << quarters << endl;
  cout << "dimes    : " << dimes << endl;
  cout << "nickels  : " << nickels << endl;
  cout << "pennies  : " << pennies << endl;

  cout << endl;
  return 0;
}
#include <iostream>
using namespace std;
int main() {
  int cents;
  cout << "Enter an amount in cents: ";
  cin >> cents;

  int dollars = cents / 100;
  cents %= 100;
  int quarters = cents / 25;
  cents %= 25;
  int dimes = cents / 10;
  cents %= 10;
  int nickels = cents / 5;
  cents %= 5;
  int pennies = cents;

  cout << "You can provide this change as follows:" << endl;
  cout << "dollars  : " << dollars << endl;
  cout << "quarters : " << quarters << endl;
  cout << "dimes    : " << dimes << endl;
  cout << "nickels  : " << nickels << endl;
  cout << "pennies  : " << pennies << endl;

  return 0;
}

/***************************************************************************************************************************/

//  control structures: that allow you to control the flow of execution in your program. So far you've learned how to write programs that run sequentially that is one statement followed by another and so forth. You can solve many problems using sequence. But now is when we really take advantage of the power of programming. we'll go over the selection and iteration control structures in c++. Selection control structures allow you to make decisions and execute parts of your program only when certain conditions are true or false. This is so powerful and opens up a world of programming power. So we have these three basic programming building blocks: sequence, selection and iteration. With sequence, selection and iteration, we can implement any algorithm, Let me repeat that: with sequence, selection and iteration, we can implement any algorithm.

// if statement - The if statement is the most basic selection statement. It allows you to execute a statement or a group of statements only if a particular condition is true. The syntax of the if statement is:
if (condition)
  statement;
if(num > 10) { // A block statement is a sequence of statements inside a block which is made up of opening and closing curly brackets.
  cout << "num is greater than 10" << endl;
  cout << "I'm in the if block" << endl;
}
// The condition is an expression that evaluates to true or false. If the condition is true, then the statement is executed. If the condition is false, then the statement is skipped. The statement can be a single statement or a block of statements enclosed in curly braces. The if statement is often used in conjunction with the relational operators. For example
if (score >= 60)
  cout << "You passed the exam." << endl;
// The if statement can be used without an else clause. In this case, the statement is executed only if the condition is true. If the condition is false, then the statement is skipped. The else clause is optional. If you want to execute a statement or a group of statements when the condition is false, then you can use the else clause as follows:
if (score >= 60)
  cout << "You passed the exam." << endl;
else
  cout << "You failed the exam." << endl;

//  blocks. We've actually already seen a block statement. Remember, the main function we've been using in all our programs so far, it has an open curly at the beginning and a closed curly at the end. This is a block statement and we had sequences of statements in the block statement. Block statements introduce a new level of scope. just like we declared variables in the main block, we can declare variables in any block, even in a block that's inside an if statement. Variables that we declare in a block are only visible to statements that are also in the same block. This lets us modularize our code so we have better control of who sees what, which makes writing and debugging our code easier.

int main() {
  int num {};
  const int min {10};
  const int max {100};
  
  cout << "Enter a number between " << min << " and " << max << ": ";
  cin >> num;
  
  if (num >= min) {
    cout << "\n=========== If statement 1 =============" << endl;
    cout << num << " is greater than or equal to " << min << endl;
  
    int diff {num - min};
    cout << num << " is " << diff << " greater than " << min << endl;
  }
  
  if (num <= max) {
    cout << "\n=========== If statement 2=============" << endl;
    cout << num << " is less than or equal to " << max << endl;
    
    int diff { max -num};
    cout << num << " is " << diff << " less than " << max << endl;
  }
  
  if (num >= min && num <=max) {
    cout << "\n=========== If statement 3=============" << endl;   
    cout << num << " is in range " << endl;
    cout << " This means satements 1 and 2 must also display!!" << endl;
  }
  
  if (num == min || num == max) {
    cout << "\n=========== If statement 4 =============" << endl;   
    cout << num << " is right on a boundary " << endl;
    cout << "This means all 4 statements display " << endl;

  }
  
  cout << endl;
  return 0;
}

// if-else statement - The if-else statement is similar to the if statement except that it has an else clause. The else clause is executed when the condition is false. The syntax of the if-else statement is:
if (condition)
  statement1;
else
  statement2;

if (score >= 60)
  cout << "You passed the exam." << endl;
else
  cout << "You failed the exam." << endl;

int main() {
  int num{};
  const int target {10};

  cout << "Enter a number  and I'll compare it to " << target << ": ";
  cin >> num;
  
  if (num >= target) {
    cout << "\n==================================" << endl;
    cout << num << " is greater than or equal to " << target << endl;
    int diff { num - target};
    cout << num << " is " << diff << " greater than " << target << endl;
  } else { // else clause is executed when the condition is false - catch all statement- considered as adifferent block of code than the if block of code - so we can declare variables in the else block that have the same name as variables in the if block - the variables in the else block are only visible to the else block
    cout << "\n==================================" << endl;
    cout << num << " is less than " << target << endl;
    int diff { target - num};
    cout << num << " is " << diff << " less than " << target << endl;
  }
  cout  << endl;
  return 0;
}

// if-else if-else statement - The if-else if-else statement allows you to check multiple conditions. The syntax of the if-else if-else statement is:
if (condition1)
  statement1;
else if (condition2)
  statement2;
else if (condition3)
  statement3;
else
  statement4;

int main() {
  int num{};
  const int first_threshold {10};
  const int second_threshold {20};

  cout << "Enter an integer between 1 and 100: ";
  cin >> num;
  
  if (num > first_threshold) {
    if (num > second_threshold)
      cout << num << " is greater than " << second_threshold << endl;
    else
      cout << num << " is greater than " << first_threshold << endl;
  } else {
    if (num == first_threshold)
      cout << num << " is equal to " << first_threshold << endl;
    else
      cout << num << " is less than " << first_threshold << endl;
  }
  
  cout << endl;
  return 0;
}

// we can nest if statements within other if statements. Many times the logic we need to use in order to solve problems is more complex than just an if else decision. Many times we need several layers of logic. Since an if or if else statement is a statement, then we can use it in c++ anywhere a statement is legal. So in this case, we can replace the statement part of the if statement with an entire if else statement if we want.
if (expr1) {
  if (expr2) {
    statement1;
  } else {
    statement2;
  } // Notice that we have two ifs and only one else. In computer science, this is called the dangling else problem. And every programming language has to decide how to handle it. The problem is which if does that else belong to. In c++, an else belongs to the closest if. Of course, we can use block statements to achieve any logic we want.
}
if (expr1) {
  if (expr2) {
    statement1;
  } else {
    statement2;
  }
} else {
  statement3;
} // We can have nested if statements in the else section as well.

/*
Calculate a sudent's grade on an exam given their score
and tell them if they passed the course
*/
int main() {
  
  int score {};
  cout << "Enter your score on the exam (0-100) : ";
  cin >> score;
  char letter_grade {};
  
  if (score >= 0 && score <=100) {
    if (score >= 90)
      letter_grade = 'A';
    else if (score >= 80)
      letter_grade = 'B';
    else if (score >= 70)
      letter_grade = 'C';
    else if (score >=60)
      letter_grade = 'D';
    else 
      letter_grade = 'F';
        
    cout << "Your grade is : " << letter_grade << endl;
    if (letter_grade == 'F')
      cout << "Sorry, you must repeat the class" << endl;
    else 
      cout << "Congrats!" << endl;

  } else {
    cout << "Sorry, " << score << " is not in range" << endl;
  }
  
  cout  << endl;
  return 0;
}

/* 
Shipping cost calculator
Ask the user for package dimension in inches
length, width, height - these should be integers
All dimension must be 10 inches or less or we cannot ship it
Base cost $2.50
If package volume is greater than 100 cubic inches there is a 10% surcharge
If package volume is greater than 500 cubic inches there is a 25% surcharge
*/

#include <iostream>
#include <iomanip> // input / output manipulation library - for setprecision and fixed manipulators - setprecision manipulator - sets the number of digits to display after the decimal point - fixed manipulator - displays the decimal point even if the number is an integer ....
using namespace std;
int main() {

  int length{}, width{}, height{};
  double base_cost{2.50};

  const int tier1_threshold {100};    // volume
  const int tier2_threshold{500};    // volume

  int max_dimension_length  {10};  // inches

  double tier1_surcharge {0.10};  // 10% extra
  double tier2_surcharge {0.25};  // 25% extra

  // All dimension must be 10 inches or less

  int package_volume{};
  
  cout << "Welcome to the package cost calculator" << endl;
  cout << "Enter length, width, and height of the package separated by spaces : ";
  cin >> length >> width >> height;
  
  if (length > max_dimension_length || width > max_dimension_length || height > max_dimension_length) {
    cout << "Sorry, package rejected - dimension exceeded" << endl;
  } else {
    double package_cost {};
    package_volume= length * width * height;
    package_cost = base_cost;
    
    if (package_volume > tier2_threshold) {
      package_cost += package_cost * tier2_surcharge;
      cout << " adding tier 2 surcharge" << endl;
    } else if ( package_volume > tier1_threshold) {
      package_cost += package_cost * tier1_surcharge;
      cout << " adding tier 1surcharge" << endl;
    }
    
    cout << fixed << setprecision(2); // prints dollars nicely
    cout << "The volume of your package is: " << package_volume << endl;
    cout << "Your package will cost $" << package_cost << " to ship " << endl;
  }
  cout << endl;
  return 0;
}

// switch statement - The switch statement is another way to make decisions in your code. The syntax of the switch statement is:
switch (control_expression) { // This control expression must evaluate to an integral type or an enumeration type.
  case constant-expression1:
    statement1;
    break;
  case constant-expression2: // These case statements must also evaluate to an integral or enumeration type and must be known at compile time that means they must be constants or literals.
    statement2;

  case constant-expression3:
    statement3;
    break;
  default:
    statement4;
}
// The expression is evaluated once and the result is compared with the constant expressions in the case statements. If there is a match, the statements associated with that case are executed. If there is no match, the statements associated with the default case are executed. The break statement is used to terminate the switch statement. If the break statement is omitted, the statements associated with the matching case and all subsequent cases are executed, No other conditions will be checked. The default case is optional, If it is omitted and there is no match, then nothing happens. The default case is usually the last case in the switch statement. The expression in a switch statement must be an integer or a character. The constant expressions in the case statements must be integer constants or characters. The expression and the constant expressions must have the same type.

// Best practice is to include a break statement in every case statement. If you need logic that falls through, please document the code and be very clear in the documentation that the fall through behavior is what you intended. If another programmer sees the code and needs to modify it, they'll understand this and be very careful when adding or removing new conditions or statements.

enum color {red, orange, yellow};
color favorite_color {red};
switch (favorite_color) {
  case red:
    cout << "Your favorite color is red" << endl;
    break;
  case orange:
    cout << "Your favorite color is orange" << endl;
    break;
  case yellow:
    cout << "Your favorite color is yellow" << endl;
    break;
  default: // should never execute unless we add another enumeration constant to our enumeration and forget to include a case for it.
    cout << "Your favorite color is something else" << endl;
}

// The control expression must evaluate to an integral type, the switch statement is commonly used with enumeration types. The case expressions must be known at compile time, so only constants or literals can be used, no variables. Once a match occurs, all code in the following case statements is executed until a break statement is reached. Finally, best practice is to always include break statements for each case and also provide a default case.

/* 
Ask the user what grade they expect on an exam and 
tell them what they need to score to get it.
*/
#include <iostream>
using namespace std;
int main() {
  char letter_grade {};
  cout << "Enter the letter grade you expect on the exam: ";
  cin >> letter_grade;
  switch (letter_grade) {
    case 'a':
    case 'A':
      cout << "You need a 90 or above, study hard!" << endl;
      break;
    case 'b':
    case 'B':
      cout << "You need 80-89 for a B, go study!" << endl;
      break;
    case 'c':
    case 'C':
      cout << "You need 70-79 for an average grade" << endl;
      break;
    case 'd':
    case 'D':
      cout << "Hmm, you should strive for a better grade. All you need is 60-69" << endl;
      break;
    case 'f':
    case 'F':
    {
      char confirm {};
      cout << "Are you sure (Y/N)? ";
      cin >> confirm;
      if (confirm == 'y' || confirm == 'Y') 
        cout << "OK, I guess you didn't study..." << endl;
      else if (confirm == 'n' || confirm == 'N')
        cout << "Good- go study!" << endl;
      else 
        cout << "Illegal choice" << endl;
      break;
    }
    default: // can be in any position inside switch statement
      cout << "Sorry, not a valid grade" << endl;
  }

  cout << endl; 
  return 0;
}

#include <iostream>
using namespace std;
int main() {
  enum Direction {
    left, right, up, down
  };
  Direction heading {left};
  switch (heading) {
    case left:
      cout << "Going left" << endl;
      break;
    case right:
      cout << "Going right" << endl; // I used going left in the video by mistake
      break;
    default: // you must handel all enum constants rathar than you got a compiler warning, or you can use default to handel all other cases
      cout << "OK" << endl;
  }
  cout <<  endl;
  return 0;
}

// conditional operator - The conditional operator is a shorthand way to write an if-else statement. considered as expression - The syntax of the conditional operator is:
expression1 ? expression2 : expression3;
// The expression1 is evaluated. If it is true, then expression2 is evaluated and becomes the value of the entire conditional expression. If expression1 is false, then expression3 is evaluated and becomes the value of the entire conditional expression. The conditional operator is also known as the ternary operator because it takes three operands. The conditional operator is right associative, which means that the expression is evaluated from right to left. The expression1 is evaluated first, then the expression2 or expression3 is evaluated depending on the result of expression1. The conditional operator is commonly used to assign a value to a variable based on a condition. The following example shows how to use the conditional operator to assign a value to a variable based on a condition.
int a {100}, b {200};
int score {92};
int result {};
result = (a > b) ? a : b; // result is 200
result = (a < b) ? (b-a) : (a-b); // result is 100
result = (b != 0) ? (a/b) : 0; // result is 0
cout << ((score > 90) ? "Excellent" : "Not Excellent") << endl; // prints Excellent - remeber operator precedence and associativity

#include <iostream>
using namespace std;
int main() {
  int num {};
  cout << "Enter an integer: ";
  cin >> num;
  if (num % 2 == 0) 
    cout << num << " is even" << endl;
  else    
    cout << num << " is odd" << endl;
  cout << num << " is " << ( (num %2 ==0) ? "even" : "odd"  ) << endl;

  int num1{}, num2{};
  cout << "Enter two integers separated by a space: ";
  cin >> num1 >> num2;
  if (num1 != num2) {
    cout << "Largest: " << ( (num1 > num2) ? num1 : num2 ) << endl;
    cout << "Smallest: " << ( (num1 < num2) ? num1 : num2) << endl; 
  } else {
    cout << "The numbers are the same" << endl;
  }
  
  cout  << endl;
  return 0;
}

/***************************************************************************************************************************/

// looping: Looping is also called iteration or repetition. It's the third basic building block of programming. Loops allow the execution of a statement or block of statements repeatedly. And they're made up of two sections. First, the loop condition which determines when we iterate and when we don't. Second is the loop body. That's the statement or block of statements that will be repeated.
// loopimg typical use-cases:
/*
- a specific number of times: For example, we want to do something 10 times or we ask the user how many times they wish to do something.
- for each element in a colection: For example, we want to do something for each element in a vector or for each character in a string.
- while a specific condition remains true
- until a specific condition becomes false
- until we reach the end of some input stream
- forever
- many, many more
*/
// C++ has three main looping structures: the for loop, the while loop and the do while loop. The for loop has a ranged base variant
// The for loop is typically used when you want to iterate a specific number of times. For example you want to loop 10 times or end times, where n is determined by the program. The range-based for loop makes it really easy to iterate through a range of items or through the elements of a collection. With arrays vectors and other collections, this is a great loop to use. The while loop iterates while a specific condition remains true. When the condition becomes false, we terminate the loop. In the case of the while loop, the condition is checked at the beginning of every iteration. The do while loop is similar to the while loop, except that the condition is checked after each iteration.

// for loop: The for loop is typically used when you want to iterate a specific number of times. For example you want to loop 10 times or end times, where n is determined by the program. The syntax of the for loop is:
for (initialization; condition; increment) { // initialization can be int or double 
  // loop body
}
// The initialization is executed once, before the first iteration. The condition is evaluated before every iteration. If the condition is true, the loop body is executed. If the condition is false, the loop terminates. The increment is executed after every iteration. The increment is typically used to increment a counter variable. The following example shows how to use the for loop to print the numbers 1 to 10.
for (int i {1}; i <= 10; ++i) {
  cout << i << endl;
} // i => only visible in the loop and you will get a compiler error if you try to use it outside loop

int i {};
for (i = 1; i <= 10; ++i) {
  cout << i << endl;
} // i => visible outside the loop

int scores [] {100, 95, 89, 68};
for (int i {0}; i < 4; ++i) {
  cout << scores[i] << endl;
} // always use less than the size of the array and I've been doing it that way my entire career. This helps prevent what are called off by 1 errors, which basically mean that we went over bounds and your program could crash or corrupt data.

// comma operator: The comma operator is used to separate multiple expressions in a for loop. The comma operator evaluates each expression from left to right and returns the value of the last expression. The following example shows how to use the comma operator to initialize multiple variables in a for loop.
for (int i {1}, j {5}; i <= 5; ++i, ++j) {
  cout << i << " * " << j << " = " << (i * j) endl;
}
/*
1 * 5 = 5
2 * 6 = 12
3 * 7 = 21
4 * 8 = 32
5 * 9 = 45
*/

// But since the expressions are all optional, it's possible to have all sorts of variations. You can even have a for loop with just the semicolons in the parentheses. This is by definition an endless loop. Best practice and pro tip, don't write for loops with missing expressions and complicated expressions with comma operators. The example I showed is simple and understandable but if you find that you're omitting expressions, then consider using 1 of c++ as other loops.

#include <iostream>
#include <vector>
using namespace std;
int main() {

  for (int i{1} ; i <=10 ; ++i)
    cout << i << endl;
        
  for (int i{1} ; i <=10 ; i+=2)
    cout << i << endl;

  for (int i {10}; i > 0; --i)
    cout << i << endl;
  cout << "Blastoff!" << endl; // if indented forward, will be a compiler warning but it will still work as seperated statement from loop body because of curly braces dosent exist

  for (int i{10}; i<=100; i+=10) {
    if (i % 15 == 0) 
      cout << i << endl; // 30 60 90
  }

  for (int i{1}, j{5} ; i<=5 ; ++i, ++j)
    cout << i << " + " << j << " = " << (i+j) << endl;

  for (int i = 1; i <= 100; i += 10) {
    for (int j = i; j < i + 10; ++j) {
      cout << j << " ";
    }
  }

  for ( int i{1}; i<=100; ++i) {
    cout << i;
    if (i % 10 == 0)
      cout << endl;
    else 
      cout << " ";
  }

  for ( int i{1}; i<=100; ++i) {
    cout << i << ( (i % 10 ==0) ? "\n" : " ");
  }
    
  vector<int> nums { 10,20,30,40,50};
  for (unsigned i{0}; i< nums.size(); ++i) // numbs.size expression is returning an unsigned integer, that makes sense, right, because you can't have vectors that are negatively sized. so if i is int it will be compiler warning because of comparing signed and unsigned integers "i< nums.size()". so we need to make i unsigned as well.
    cout << nums[i] << endl;
  
  cout << endl;
  return 0;
}

// For loop - Sum of Odd Integers Write code that uses a for loop to calculate the sum of the odd integers from 1 to 15, inclusive. The final result should be stored in an integer variable named sum .
int sum {};
for (int i {1}; i <= 15; i++){
  if (i % 2 > 0) {
    sum += i;
  }
}

// range-based for loop c++11: The idea with the range based for loop is to loop through a collection of elements and be able to easily access each element without having to worry about the length of the collection or incrementing or decrementing looping variables or subscripting indexes. The syntax is very simple and elegant:
for (declaration : collection) { // this variable will be bound to each element of the collection. So it should be of the same type as the collection elements.
  // loop body
}
int scores [] {100, 95, 89, 68};
for (int score : scores) {
  cout << score << endl;
}
// We actually don't have to explicitly provide the type of the variable. Instead, we can use the auto keyword this. Tells the c++ compiler to deduce the type itself. In other words, you're asking the c++ compiler to figure out the type based on the declarations.
for (auto score : scores) {
  cout << score << endl;
}
vector <double> temps {87.9, 77.9, 80.0, 72.5};
double average_temp {};
double total {};
for (auto temp : temps) {
  total += temp;
}
if (temps.size() != 0)
  average_temp = total / temps.size();
cout << average_temp << endl;
// Notice that I'm using the vector's size method which returns the number of elements in the vector. In this case, it will return 4. The range-based for loop can also use an initializer list as a collection. Let's see that one. This example also calculates the average before temperatures. Notice how we can explicitly provide the collection right in the for loop. This is sometimes handy when you know the elements of your collection ahead of time, and they won't change. The only downside is that you have to calculate the size as you go.
double average_temp {};
double total {};
int size {};
for (auto temp : {87.9, 77.9, 80.0, 72.5}) {
  total += temp;
  ++size;
}
if (size != 0)
  average_temp = total / size;
cout << average_temp << endl;

// In this last example, we can use the range-based for loop to iterate over a string which is a collection of characters. In this case the string is the literal franc, but it could be a variable.
for (auto c : "franc") {
    cout << c << endl;
}

// The range based for loop is a read only loop. You can't use it to modify the elements in the collection. If you want to modify the elements in the collection, you have to use a traditional for loop

#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;
int main() {
  
  int scores[] {10, 20, 30};
  
  for (auto  score: scores)
    cout << score << endl;

  vector<double> temperatures {87.9, 77.9, 80.0, 72.5};
  double average_temp {};
  double total {};
  
  for (auto temp: temperatures)
    total += temp;
  
  if (temperatures.size() != 0)
    average_temp = total / temperatures.size();
    
  cout << fixed << setprecision(1);
  cout << "Average temperature is " << average_temp << endl;
    
  for (auto val: {1,2,3,4,5})
    cout << val << endl;

  for (auto c: "This is a test")
    if (c != ' ')
      cout << c; // Thisisatest

  for (auto c: "This is a test")
    if (c == ' ')
      cout << "\t";
    else
      cout << c; // This     is      a      test
          
  cout <<  endl;
  return 0;
}

// Using the range-based for loop Use a range-based for loop to loop through a given vector of integers and determine how many elements in the vector are evenly divisible by either 3 or by  5. The final result should be stored in an integer variable named count . The vector of integers has been provided for you and is named vec .
int count {};
vector<int> vec {1,3,5,15,16,17,18,19,20,21,25,26,27,30,50,55,56,58,100,200,300,400,500,600,700};
for (auto i: vec){
  if (i % 3 == 0 || i % 5 == 0) {
    ++count;
  }
}


// while loop: The while loop is an example of a pre-test loop because the test is done at the beginning of the loop. So it's possible that if the test fails immediately, then the loop body will never execute.
while (expression) {
  statements;
}
int num {};
while (num < 5) {
  cout << num << endl;
  ++num; // It's important that we increment i in the body of the loop. If we don't, then the loop will never terminate since i will always be 1, which is less than or equal to 5. This is called an infinite loop, and it's not usually what we want.
}
int i {1};
while (i <= 5) {
  if (i % 2 == 0)
    cout << i << " is even" << endl;
  else
    cout << i << " is odd" << endl;
  ++i;
}
int scores [] {100, 95, 89, 68};
int i {0};
while (i < 4) {
  cout << scores[i] << endl;
  ++i;
}
// Loops are commonly used in programming to provide input validation.
int num {};
cout << "Enter an integer less than 100: ";
cin >> num;
while (num >= 100) {
  cout << "Enter an integer less than 100: ";
  cin >> num;
}
cout << "Thanks" << endl;

bool done {false};
int num {};
while (!done) {
  cout << "Enter an integer less than 100: ";
  cin >> num;
  if (num >= 100)
    cout << "Too large" << endl;
  else
    cout << "Thanks" << endl;
    done = true;
}

#include <iostream>
using namespace std;
int main() {
  
  int num {};
  cout << "Enter a positive integer - start the countdown :";
  cin >> num;
  
  while (num > 0 ) {
    cout << num << endl;
    --num;
  }
  cout << "Blastoff!" << endl;
  
  int num{};
  cout << "Enter a postive integer to count up to: ";
  cin >> num;

  int i {1};
  while (num >= i) {
    cout << i << endl;
    i++;
  }

  int number {};

  cout << "Enter an integer less than 100: ";
  cin >> number;

  while (number >= 100) {  // / !(number < 100)
    cout << "Enter an integer less than 100: ";
    cin >> number;
  }

  cout << "Thanks" << endl;  

  bool done {false};
  int number {0};

  while (!done) {
    cout << "Enter an integer between 1 and 5: ";
    cin >> number;
    if (number <=1 || number >=5)
      cout << "Out of range, try again" << endl;
    else {
      cout << "Thanks!" << endl;
      done = true;
      }
  }

  cout  << endl;
  return 0;
}

// While loop exercise: Given a vector of integers, determine how many integers are present before you see the value -99 . Note, it's possible -99  is not in the vector! If -99  is not in the vector then the result will be equal to the number of elements in the vector. The final result should be stored in an integer variable named count . Note that you the different vectors will be tested against your code. You do not need to declare the vector of integers. vec  is the name of the vector you should use.
int count {};
unsigned i {};
while (vec[i] != -99) {
  count ++;
  i++;
  if (i == vec.size()) break;
}
int count {0};
size_t index {0}; // size_t is an unsigned int. you can replace size_t with int or unsigned int and it will work fine
while (index < vec.size() && vec.at(index) != -99  ) {
  ++count;
  ++index;
}

// do while loop: The do while loop is an example of a post-test loop because the test is done at the end of the loop. So it's possible that if the test fails immediately, then the loop body will execute once.
do {
  statements;
} while (expression);
// input validation using do while loop
int num {}; // Notice how we declared it outside the loop body. Since number is used in the while loops condition expression at the bottom, it cannot be declared within the body of the loop. If you do so, you'll get a compiler error.
do {
  cout << "Enter an integer less than 100: ";
  cin >> num;
} while (num >= 100);
cout << "Thanks" << endl;

char selection {};
do {
  double width {}, height {};
  cout << "Enter the width: ";
  cin >> width;
  cout << "Enter the height: ";
  cin >> height;

  double area {width * height};
  cout << "The area is " << area << endl;

  cout << "Calculate another area (Y/N)? ";
  cin >> selection;

} while (selection == 'Y' || selection == 'y');
cout << "Goodbye" << endl;

// Simple Menu-driven Example
#include <iostream>
using namespace std;
int main() {

  char selection {};
  do {
    cout << "\n---------------------" << endl;
    cout << "1. Do this" << endl;
    cout << "2. Do that" << endl;
    cout << "3. Do something else" << endl;
    cout << "Q. Quit" << endl;
    cout << "\nEnter your selection: ";
    cin >> selection;
    
    if (selection == '1') // can made with switch case because of selection will be always literal
      cout << "You chose 1 - doing this" << endl;
    else if (selection == '2') 
      cout << "You chose 2 - doing that" << endl;
    else if (selection == '3')
      cout << "You chose 3 - doing something else" << endl;   
    else if (selection == 'Q' || selection == 'q')
      cout << "Goodbye..." << endl;
    else 
      cout << "Unknown option -- try again..." << endl;

  } while (selection != 'q' && selection != 'Q');

  cout  << endl;
  return 0;
}

// continue and break statements: The continue and break statements can be used within all of c++ loop constructs to provide more explicit control over the loopy behavior. Their behavior is really easy to understand. When a continue statement is executed in the loop, no further statements in the body of the loop or executed and control immediately goes directly to the beginning of the loop for the next iteration. So you can think of this as skip processing in the rest of this iteration and go to the beginning of the loop. In the case of the while loop and the for loop, the condition will immediately be tested again. When the brake statement is executed in the loop, no further statements in the body are executed and the loop is terminated. So controllers transfer to the statement immediately following the loop.
vector <int> vec {1, 2, -1, 3, 4, -99, 5, 6, -1, 8, 9, 10};
for (auto num : vec) {
  if (num == -99) break;
  if (num == -1) continue;
  cout << num << endl;
}

// infinite loops: An infinite loop is often called an endless loop. An infinite loop is a loop whose control expression always evaluates to true, so it iterates over and over. Usually, infinite loops are mistakes by the programmer. If you have an infinite loop, it's pretty easy to know since the program does something or does nothing over and over again. So we find and fix the problem. However, sometimes infinite loops are written as infinite loops on purpose, and programmers use break statements as strategic places to eventually break out of the loop. There are cases where this makes sense and could be justified. However, writing an infinite loop and using break statements to terminate the loop is usually bad practice and should be rewritten so the loop condition expression is descriptive of what the loop is doing. Here are a couple of examples of infinite loops that are appropriate and in fact necessary. Infinite event loops are commonly used in event-driven programs such as those you find on mobile devices and embedded systems. In these programs, the program loops forever listening for mouse clicks, mouse movements, touches and so forth and reacting to them. This continues as long as the program is running. Another example of an endless loop is an operating system. An operating system is constantly looping handling input/output, handling resources and so forth. It only shuts down when you shut down your computer.
// infinite loop
for (;;) {
  cout << "Hello" << endl;
}
while (true) {
  cout << "Hello" << endl;
}
do {
  cout << "Hello" << endl;
} while (true);
// infinite loop with break
for (;;) {
  cout << "Hello" << endl;
  if ( i < 5) break;
}
while (true) {
  cout << "Hello" << endl;
  if ( i < 5) break;
}
do {
  cout << "Hello" << endl;
  if ( i < 5) break;
} while (true);

// nested loop: Just like we nested if statements one inside the other, the same technique can be used to nest loops. We can nest loops as many levels deep as we need. I'll be using just 2 levels in the examples I'll show you that is one loop inside another. Nested loops have many uses, but they're especially useful for multi-dimensional structures, like 2D 3D arrays and 2D and 3D vectors. When we talk about nested loops, it's common to refer to the loops as the outer loop and the inner loop.
for (outer_val {1}; outer_val <= 2; ++outer_val) {
  for (inner_val {1}; inner_val <= 3; ++inner_val) {
    cout << outer_val << " " << inner_val << endl;
  }
} // You can think of this as the outer loop iterating 2 times and each time the inner loop iterates 3 times. That's why we say that the inner loop loops faster than the outer loop.
/*
1 1
1 2
1 3
2 1
2 2
2 3
*/

// Nested Loops - Multiplication Table
#include <iostream>
using namespace std;
int main() {

  for (int num1 {1}; num1 <=10 ; ++num1) {
    for (int num2 {1}; num2 <=10; ++num2) {
      cout << num1 << " * " << num2 << " = " << num1 * num2 << endl;
    }
    cout << "-----------" << endl;
  }

  cout << endl;
  return 0;
}
// Nested Loops - Histogram
#include <iostream>
#include <vector>
using namespace std;
int main() {
  
  int num_items{};
  
  cout << "How many data items do you have? ";
  cin >> num_items;
  
  vector<int> data {};
  
  for (int i{1}; i<= num_items; ++i) {
    int data_item{};
    cout << "Enter data item " << i << ": ";
    cin >> data_item;
    data.push_back(data_item);
  }
  
  cout << "\nDisplaying Histogram" << endl;
  for (auto val: data) {
    for (int i{1} ; i<=val; ++i) {
      if (i % 5 == 0)
        cout << "*"; //  every fifth dash, display an asterisk
      else
        cout << "-";
    }    
    cout << endl;
  }

  cout <<  endl;
  return 0;
}

/*
Nested Loops - Sum of the Product of all Pairs of Vector Elements
Given a vector of integers named vec  that is provided for you, find the sum of the product of all pairs of vector elements.
You should declare an integer variable named result  and store the final product in this variable.

For example, given the vector  vec  to be {1, 2 , 3} , the possible pairs are (1,2), (1,3), and (2,3) . 
So the result would be (1*2) + (1*3) + (2*3)  which is 11 .

Another example:
Given the vector vec  to be {2, 4, 6, 8} , the possible pairs are (2,4), (2,6), (2,8), (4,6), (4,8), and (6,8) .
So the result would be (2*4) + (2*6) + (2*8) + (4*6) + (4*8) + (6*8) which is 140 .

If the vector is empty or has only 1  element then the result  should be 0 .
*/
int result{};
for (size_t i=0; i< vec.size(); ++i)
  for (size_t j=i+1; j< vec.size(); ++j) 
    result = result + vec.at(i) * vec.at(j);

int result {};
if (vec.size() > 1) {
  for (unsigned i = 0; i < vec.size(); i++) {
    for (int j = i+1; j < vec.size(); j++){
      result += vec[i]*vec[j];
    }
  }
}

// Challenge
/*    
This challenge is about using a collection (list) of integers and allowing the user
to select options from a menu to perform operations on the list.

Your program should display a menu options to the user as follows:

P - Print numbers
A - Add a number
M - Display mean of the numbers
S - Display the smallest number
L - Display the largest number
Q - Quit

Enter your choice:
    
The program should only accept valid choices from the user, both upper and lowercase selections should be allowed.
If an illegal choice is made, you should display, "Unknown selection, please try again" and the menu options should be
displayed again.


If the user enters 'P' or 'p', you should display all of the elements (ints) in the list.
If the list is empty you should display "[] - the list is empty"
If the list is not empty then all the list element should be displayed inside square brackets separated by a space. 
For example, [ 1 2 3 4 5 ]
      
If the user enters 'A' or 'a' then you should prompt the user for an integer to add to the list 
which you will add to the list and then display it was added. For example, if the user enters 5
You should display, "5 added".
Duplicate list entries are OK

If the user enters 'M' or 'm'  you should calculate the mean or average of the elements in the list and display it.
If the list is empty you should display, "Unable to calculate the mean - no data"

If the user enters 'S' or 's' you should display the smallest element in the list.
For example, if the list contains [2 4 5 1],  you should display, "The smallest number is 1"
If the list is empty you should display, "Unable to determine the smallest number - list is empty"

If the user enters 'L' or 'l' you should display the largest element in the list
For example, if the list contains [2 4 5 1], you should display, "The largest number is 5"
If the list is empty you should display, "Unable to determine the largest number - list is empty"

If the user enters 'Q' or 'q' then you should display 'Goodbye" and the program should terminate.

Before you begin. Write out the steps you need to take and decide in what order they should be done.
Think about what loops you should use as well as what you will use for your selection logic.

This exercise can be challenging! It may likely take a few attempts before you complete it -- that's OK!

Finally, be sure to test your program as you go and at the end.

Hint: Use a vector!

Additional functionality if you wish to extend this program.

- search for a number in the list and if found display the number of times it occurs in the list
- clearing out the list (make it empty again) (Hint: the vector class has a .clear() method)
- don't allow duplicate entries
- come up with your own ideas!

Good luck!
*/
#include <iostream>
#include <vector>
using namespace std;
int main() {

  vector<int> numbers {};
  char selection {};
  
  do {
    // Display menu
    cout << "\nP - Print numbers" << endl;
    cout << "A - Add a number" << endl;
    cout << "M - Display mean of the numbers" << endl;
    cout << "S - Display the smallest number" << endl;
    cout << "L - Display the largest number"<< endl;
    cout << "Q - Quit" << endl;
    cout << "\nEnter your choice: ";
    cin >> selection;

    if (selection == 'P' || selection == 'p') {
      if (numbers.size() == 0)
          cout << "[] - the list is empty" << endl;
      else {
        cout << "[ ";
        for (auto num: numbers)
          cout << num << " ";
        cout << "]" << endl;
      }
    } else if (selection == 'A' || selection == 'a') {
      int num_to_add {};
      cout << "Enter an integer to add to the list: ";
      cin >> num_to_add;
      numbers.push_back(num_to_add);
      cout << num_to_add << " added" << endl;
    } else if (selection == 'M' || selection == 'm') {
        if (numbers.size() == 0)
          cout << "Unable to calculate mean - no data" << endl;
        else {
          int total {};
          for (auto num: numbers)
            total += num;
          cout << "The mean is : " << static_cast<double>(total)/numbers.size() << endl;
        }
    } else if (selection == 'S' || selection == 's') {
        if (numbers.size() == 0) 
          cout << "Unable to determine the smallest - list is empty" << endl;
        else {
          int smallest = numbers.at(0);
          for (auto num: numbers)
            if (num < smallest)
              smallest = num;
          cout << "The smallest number is: " << smallest << endl;
        }
    } else if (selection == 'L' || selection == 'l') {
        if (numbers.size() == 0)
          cout << "Unable to determine largest - list is empty"<< endl;   
        else {
          int largest = numbers.at(0);
          for (auto num: numbers)
            if (num > largest)
              largest = num;
          cout << "The largest number is: " << largest << endl;
        }
    } else if (selection == 'Q' || selection == 'q') {
      cout << "Goodbye" << endl;
    } else {
      cout << "Unknown selection, please try again" << endl;
    }
  } while (selection != 'q' && selection != 'Q');

  cout  << endl;
  return 0;
}

// What does the following code snippet display if the user enters 70  at the keyboard?
int temperature;
cout << "Enter a temperature: ";
cin >> temperature;
if (temperature < 50);
  cout << "It's cold!" << endl;
if (temperature > 50)
  cout << "It's hot!" << endl;
else
  cout << "Maybe it's raining?"; 
// Answer: It's cold! It's hot!

// What does the following code snippet display if the user enters 20  at the keyboard?
int favorite;
cout << "Enter your favorite number: ";
cin >> favorite;
if (favorite == 13)
  cout << "That my favorite number too!" << endl;
  cout << "That's amazing!" << endl;
  cout << "Great minds think alike!" << endl;
// Answer: That's amazing! Great minds think alike!

// What will the following code snippet display?
int num = 10;
while (num >= 1)
  cout << num << " ";
  num--;
// Answer: 10 10 10 10 ....... infinitly

/***************************************************************************************************************************/

// characters and strings

// In C++, a character data type is a fundamental data type that represents a single character. The character data type is denoted by the keyword "char". In C++, a character is represented by a single-byte integer value that corresponds to an ASCII code or Unicode value. For example, the character 'A' has an ASCII code of 65, and the character 'a' has an ASCII code of 97. A character data type can store any single character, including letters, digits, symbols, and whitespace. In addition to single characters, character arrays can be used to store strings of characters in C++.
char myChar = 'A';
char myString[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
cout << myString << endl; // Since myString is a character array, we can output it directly using the cout object, which treats it as a string of characters.

// the character type can hold values that represent characters. These values are basically integers that match to a character set like the ASCII character set.

// characters function: In order to use these functions, you must include cctype. The functions all expect a single character. In the case of the testing functions, they evaluate to true or false. And the conversion functions return the converted character.

// testing characters
#include <cctype> // for character testing and conversion functions
isalpha(c) // returns true if c is an alphabetic character
isalnum(c) // returns true if c is an alphanumeric character
islower(c) // returns true if c is a lowercase character
isupper(c) // returns true if c is an uppercase character
isspace(c) // returns true if c is a whitespace character
ispunct(c) // returns true if c is a punctuation character
isprint(c) // returns true if c is a printable character
isgraph(c) // returns true if c is a printable character other than a space
isdigit(c) // returns true if c is a digit character
isxdigit(c) // returns true if c is a hexadecimal digit character

// converting characters
tolower(c) // returns the lowercase version of c
toupper(c) // returns the uppercase version of c

// c-style strings: A c-style string is a null-terminated array of characters. The null character is represented by the value 0. The null character is used to indicate the end of the string. The null character is not displayed when the string is displayed. The null character is not counted when determining the length of the string. C-style strings are about as simple as it gets. They're a sequence of characters, stored contiguously in memory. They're implemented as an array of characters, so you can access individual characters using the array subscript syntax that we've already learned.

// How do you know where the sequence of characters ends. C-style strings use a sentinel valley that marks the end of the string. The null character is used, which is equivalent to the integer zero. So c-style strings are often referred to as zero or null terminated strings. We've been using c-style strings all along in this doc. We've used them mainly in our output statements as string literals. string literals are sequences of characters enclosed in double quotes. These string literals are constants, so we can't change them just like we can't change integer literals. Even though we don't explicitly provide a null character at the end of the string literal, c++ inserts one for us. That's the way the end of string is handled.

// "C++ is Fun" stored in the memory like C + +  i s  F u n \0 => Here's a real simple example that shows how c-style strings are stored in memory. In this case, we have a c-style string literal containing the sequence of characters c++ is fun. These characters are stored in a contiguous block of memory that can be accessed as an array. Notice that c++ is fun has exactly 10 characters, but the compiler allocated 11 characters for the array because it needed space for the null character at the end. Literals are great and very useful, but we more often than not need to create string variables.
char my_name [] {"Frank"}; // stores in the memory like F r a n k \0 - C-style string variable
my_name[5] = 'y'; // problem
// In this example, we're declaring an array and initializing it to Frank, using initializer list syntax as we've been doing with integers and other types. Notice that the c++ compiler will allocate six characters for this array since it needs to terminate the string with the null character. Also notice that the size of the array is fixed. So if I wanted to add a y to Frank and create Franky, I couldn't without having some potential problems since the new string would not be null terminated. You won't get a compiler error or even a warning. In fact, in this case, my name sub-5 is still within the array bounds.
char my_name [8] {"Frank"}; // stores in the memory like F r a n k \0 \0 \0 \0 
my_name[5] = 'y'; // no problem
// we are explicitly asking the compiler to allocate eight characters for the character array. And we're initializing it to Frank. In this case, it will initialize the array with F r a n k, and the rest of the space will be zeroed out with null characters. In this case, if I wanted to change the character at index 5, which is that first null character to a lowercase y, it would be just fine since the string now contains Franky and is still null terminated.
char my_name[8]; // stores in the memory like ? ? ? ? ? ? ? ? 
my_name[0] = 'Frank'; // error - array type 'char[8]' is not assignable
strcpy(my_name, "Frank"); // no error
// In this example, we ask the compiler to allocate an array of eight characters, and we don't initialize them. This could be very problematic because if you use this array as a string, all c-style string functions expect to find a null character. And here there may or may not be one. We really don't know what the data in the array is. Suppose we wanted to display the string now. How do you think this would happen, how do you think c-style strings are displayed. Well, in this case we start at the first element of the array and we iterate through the array. At every character, we see if it's the null character. If it is, we stop since we reach the end of the string. If it's not, we print the character and then we move to the next character. In this case, we don't know what's going to happen. We might see a null right away or we might not see a null for a very long time. In the meantime, I'm printing stuff to the screen. Some of the stuff may not even be displayable since some characters are control characters. You might think we can initialize c-style strings using the assignment operator, just like we have with other types, but this won't work. If we try to assign the c-style literal Frank to my name, we get a compiler error because that's not the way c-style strings work. Array names and literals evaluate to their location in memory, so we're effectively assigning one location to another which is illegal. Think of this as saying assign 10 to 12. It doesn't make sense and the compiler won't allow it. In order to assign one string to another, we need to use a function called string copy. That copies the c-style literal f r a n k to the my name array.

// There are lots of c-style functions that c++ plus brings in from the c programming language. Let's see a few of them. The cstring library contains many functions that work with c-style strings. These functions are used to copy, concatenate, compare, search, get the length of a string and many more. They all rely on one common factor that the sequence of characters they're working on is terminated with a null character. If you're using c-style strings, you must be very aware of this. For example, suppose you have a c-style string and you want to determine its length. Well, let's say we have Frank. Since no length information is stored with the string only the characters in the array, the only way to determine the length is to start counting at the first array element and then increment the longest until you see the null character. So in the case of Frank, we would look at the f, increment one, look at the r, two, the a, three the, n four, the k five. Then we see a null character, and we stop. Now we know that the length is five. But if that null character is not there, we keep going and we keep counting. So the result will very likely be incorrect, even worse if you're copying one string into another and the string you're copying isn't null terminated, you'll very likely exceed the bounds of the target string and very likely cause a program crash. This all sounds pretty ominous. But in fact, we've been programming in c and c++ plus using c-style strings for a very long time, and we've gotten pretty good at understanding these issues. But wouldn't it be great if we didn't have to worry about these issues at all.

// c-style string functions
#include <cstring> // for c-style string functions
char str[80];
strcpy(str, "these "); // copy "these" into str
strcat(str, "strings "); // concatenate "strings" to str
cout << strlen(str) << endl; // display length of str
strcmp(str, "these strings are the same"); // compare str to literal
cout << str << endl; // display str

// C++ also has another library called c standard lib that contains functions that convert strings to other types. For example, if I have a string with the digits 1 and 2, I can convert that to the integer 12. Sometimes these are really useful functions. However, all of these functions rely on the same thing. They're all working with null terminated strings. If you're using c-style strings, you have to be very aware of that.
#include <stdlib.h>
malloc()  free() // Used for dynamic memory allocation and deallocation
atoi()  atof() // Used for converting strings to numeric data types
strcpy()  strcat() // Used for string manipulation
rand()  srand() // Used for generating random numbers
qsort()  bsearch() // Used for sorting and searching arrays
exit()  abort() // Used for terminating a program

#include <iostream>
#include <cstring> // for c-style string functions
#include <cctype> // for character-based functions
using namespace std;    
int main()
{
  char first_name[20];
  char last_name[20] {};
  char full_name[50] {};
  char temp[50] {};
  
  cout << first_name; // Will likely display garbage!

  cout << "Please enter your first name: ";
  cin >> first_name;

  cout << "Please enter your last name: ";
  cin >> last_name;
  cout << "-------------------------------" << endl; 

  //  I'm talking about in this is totally dependent on that guy right there (\0). If for whatever reason those null characters or that null character is not there, you can imagine, right, we're going to keep counting until we hit one which way maybe you know a 1000 characters down the line in memory. Typically, you don't have to worry about it when you use these functions, strlen, cin, strcat, like we see down here. They handle that for you. But if you're working with strings on your own and you're processing characters and moving characters around, you've got to be aware that you need to null terminate your strings. Otherwise, you're going to run into problems.
  
  cout << "Hello, " << first_name << " your first name has " << strlen(first_name) << " characters" << endl;
  cout << "and your last name, " << last_name << " has " << strlen(last_name) << " characters" << endl;
  // strlen doesn't return an integer. It doesn't really return an unsigned integer. It returns a type called size t. And I haven't talked about that yet but I'm going to now. Size t really is an unsigned integer. It could be an unsigned long. You really don't know what it is based on your system, that's the whole point. We really should be using size t because regardless of what system you're on, this will work. You can be sure it will be unsigned though, right. Because it doesn't make sense to have negative sizes for strings or negative sizes for loop variables and things like that typically. So from this point forward, I'm going to start using size t where appropriate rather than enter unsigned. It's the more correct way of doing it.

  strcpy(full_name, first_name); // copy first_name to full_name
  strcat(full_name, " "); // concatenate full_name and a space
  strcat(full_name, last_name); // concatenate last_name to full_name
  cout << "Your full name is " << full_name << endl;

  cout << "-------------------------------" << endl;
  cout << "Enter your full name: ";
  cin >> full_name;

  cout << "Your full name is " << full_name << endl; // show name entered until space

  cout << "Enter your full name: ";
  cin.getline(full_name, 50);
  cout << "Your full name is " << full_name << endl; // show name entered until enter key is pressed to fit in 50

  cout << "-------------------------------" << endl;
  strcpy(temp, full_name);
  if(strcmp(temp, full_name) == 0)
    cout << temp << " and " << full_name << " are the same" << endl;
  else
    cout << temp << " and " << full_name << " are different" << endl;
      
  cout << "-------------------------------" << endl;

  for(size_t i{ 0 }; i < strlen(full_name); ++i) {
    if(isalpha(full_name[i])) // if character is a letter of the alphabet
      full_name[i] = toupper(full_name[i]);
  }
  cout << "Your full name is " << full_name << endl;

  cout << "-------------------------------" << endl;
  if(strcmp(temp, full_name) == 0)
    cout << temp << " and " << full_name << " are the same" << endl;
  else
    cout << temp << " and " << full_name << " are different" << endl;

  cout << "-------------------------------" << endl;
  cout << "Result of comparing " << temp << " and " <<  full_name <<  ": " << strcmp(temp, full_name) << endl; // 1 means temp is greater than full_name 
  cout << "Result of comparing " << full_name << " and " <<  temp <<  ": " << strcmp(full_name, temp) << endl; // -1 means full_name is less than temp - 0 means they are the same

  cout  << endl;
  return 0;
}

/*
Using C-style Strings
In this exercise you will create a program that determines the length of a first name and last name individually and then the length of the entire name through the use of the C-style string functions strlen, strcpy, and strcat.
Begin by declaring and initializing the C-style string variable first_name to contain "Bjarne".
Now, declare and initialize a second C-style string variable last_name to contain "Stroustrup".
You must also declare a third C-style string variable whole_name but do not initialize it yet. Remember that the variable whole_name must be large enough to contain the first and last name with no whitespaces.
Now, by using the C-style string function strlen, declare and initialize the variable first_name_length to contain the length of the first_name string and the variable last_name_length to contain the length of the last_name string.
Using the C-style string function strcpy, copy the first_name string into the whole_name string variable.
Now, by using the C-style string function strcat, concatenate the last_name string at the end of the whole_name string.
Finally, by using the C-style string function strlen, declare and initialize the variable whole_name_length to contain the length of the whole_name string.
*/
char first_name [7] {"Bjarne"};
char last_name [11] {"Stroustrup"};
char whole_name [17];

int first_name_length = strlen(first_name);
int last_name_length = strlen(last_name);

strcpy(whole_name,first_name);
strcat(whole_name,last_name);

int whole_name_length = strlen(whole_name);

// c++ string : Standard string is a class in the c++ standard template library or stl. We could do an entire course on just the scl, and that course would be very long and complex. So in this video, I'll only talk about the major elements of the c++ string class. In order to use c++ plus strings, you must include the string header file. Strings are in the standard namespace. So in order to use them without using namespace standard, you must prefix them with standard and the scope resolution operator. This is also true for the standard string methods that work with c++ strings. Like c-style strings, c++ strings are stored contiguously in memory. However, unlike c-style strings which are fixed in size, c++ strings are dynamic and can grow and shrink as needed at runtime. C++ strings work with the stream insertion and extraction operators just like most other types in c++. The c++ string class provides a rich set of methods or functions that allow us to manipulate strings easily. Chances are that if you need to do something with the string that functionality is already there for you without having to rewrite it from scratch. C++ strings also work with most of the operators that we're used to for assigning, comparing and so forth. This is a huge advantage over c-style strings since c-style strings don't work well with those operators. Even though c++ strings are preferred in most cases sometimes you need to use c-style strings. Maybe you're interfacing with a library that's been optimized for c-style strings. Well, in this use case, you can still use c++ strings and take advantage of them. And when you need to you can easily convert the c++ string into a c-style string and back again. Like vectors, c++ strings are safer since they provide methods that can bounce check and allow you to find errors in your code so you can fix them before your program goes into production.

// c++ string declaration and initialization
#include <string>
string s1; // empty string - Unlike c-style strings, c++ strings are always initialized. In this case, S1 is initialized to an empty string. No garbage and memory to have to worry about.
string s2 {"Frank"}; // Frank - Notice that frank is a c-style literal, that's okay. It will be converted to a c++ string.
string s3 {s2}; // Frank - S3 is initialized from S2, so a copy of S2 is created. S2 and S3 will both be Frank, but different Franks in different areas of memory.
string s4 {"Frank", 3}; // Fra - declaring and initializing S4 from Frank. But I'm only using the first three characters of the string Frank.
string s5 {s3, 0, 2}; // Fr - initializing S5 from S3 which is Frank. notice the 2 integers that follow the S3 and the initializer. The first integer is the starting index and the second is the length.
string s6 (10, 'X'); // XXXXXXXXXX - we can initialize the string to a specific number of a specific character. Note that this uses constructor syntax with the parentheses instead of the curlies.

// c++ string assignment
string s1;
s1 = "Frank";
string s2 {"amr"};
s2 = s1; // s2 is now Frank

// c++ string concatenation
string part1 {"Frank"};
string part2 {" amr"};
string full_name;
full_name = part1 + part2 + " wow"; // Frank amr wow
full_name = "Frank" + " amr"; // error - This is because we have two c-style literals. And you can't concatenate c-style literals. It only works for c++ strings. A combination of c++ strings and c-style strings is okay though as

// c++ string access and manipulation - like vector
string s1;
string s2 {"Frank"};
cout << s2[0]; // F
cout << s2.at(0); // F
s2[0] = 'f';
s2.at(0) = 'f';
cout << s2 << endl; // frank
cout << s2.length() << endl; // 5
cout << s2.size() << endl; // 5
cout << s2.empty() << endl; // 0 - false
s2.clear();

string s1 {"Frank"};
for (char c: s1) {
  cout << c << endl;
}
/*
F
r
a
n
k
*/

string s1 {"Frank"};
for (int c: s1) {
  cout << c << endl;
}
/*
70
114
97
110
107
0 => null terminator \0
*/

// c++ string comparison: Comparing c++ strings couldn't be any easier or more intuitive. We use the same equality and relational operators that we've been using all along. We're comparing two string objects, so they'll be compared character by character, and their character values will be compared lexically. So a capital a is less than a capital z, and a capital a is less than a lowercase a. That's because the capital letters come before the lowercase letters in the ascii table. We can't use these operators on two c-style literals, but we can use them in the following cases. If we have two c++ strings, if we have one c++ string and a c-style literal or if we have one c++ string and one c-style string.
string s1 {"Apple"};
string s2 {"Banana"};
string s3 {"Kiwi"};
string s4 {"apple"};
string s5 {"s1"};

cout << boolalpha;

cout << s1 << " == " << s5 << " : " << (s1 == s5) << endl; // Apple == s1 : 0
cout << s1 << " == " << s4 << " : " << (s1 == s4) << endl; // Apple == apple : 0
cout << s1 << " != " << s4 << " : " << (s1 != s4) << endl; // Apple != apple : 1
cout << s1 << " < " << s2 << " : " << (s1 < s2) << endl; // Apple < Banana : 1
cout << s2 << " > " << s1 << " : " << (s2 > s1) << endl; // Banana > Apple : 1
cout << s4 << " < " << s1 << " : " << (s4 < s1) << endl; // apple < Apple : 1
cout << s1 << " > " << s4 << " : " << (s1 > s4) << endl; // Apple > apple : 1
cout << s1 << " > " << s4 << " : " << (s1 > "Apple") << endl; // Apple > apple : 1 -- Apple is a c-style literal

// c++ string class methods
string s1 {"This is a test"};

s1.substr(0, 4); // This
s1.substr(5, 2); // is
s1.substr(10, 4); // test

s1.erase(0, 5); // is a test

s1.insert(0, "This"); // This is a test

s1.replace(0, 4, "That"); // That is a test

s1.find("is"); // 5
s1.find("is", 0); // 5
s1.find("is", 6); // string::npos - no position found
s1.find("apple"); // string::npos
s1.rfind("is"); // 5 - rfind searches from the right to the left instead of the left to the right like find does. So it will find the last occurrence of the string that we're searching for. If we had another is in the string, it would find that one instead of the first one. So it's the reverse of find.

s1.erase(0, 1); // his is a test - erase the first character of the string s1 which is T

s1.clear(); // clear the string s1 - empty string

s1.length(); // 14

s1 += " and this is too"; // This is a test and this is too

s1.append(" and this is too"); // This is a test and this is too and this is too

s1.insert(7, " "); // This is a test and this is too and this is too

s1.empty(); // 0 - false

s1 = "Frank";

s1.front(); // F

s1.back(); // k

s1.pop_back(); // Frank - remove the last character from the string

s1.push_back('s'); // Franks

s1.swap(s2); // swap the contents of s1 and s2

s1 = "Frank";

s1.begin(); // F

s1.end(); // k

s1.c_str(); // Frank - returns a c-style string from a c++ string object

s1.copy(s2, 3, 0); // s2 is now Fra

// input with c++ strings.
// C++ strings work great with input and output streams. As you've seen, inserting c++ string variables to an output stream like cout is pretty easy and works just like we've been doing all along. Extracting a c++ string from an input stream like cin also works the same way we expect. However, there's one issue that's also true for c-style strings. Suppose we've defined S1 as a c++ string and we extract a string from cin as usual. Now suppose I type in hello space there. When I display S1, I will only see hello. The there was not extracted. This is because the extraction operator stops when it sees whitespace. In many cases, we want to read an entire line of text up to when the user presses enter. For example, I want the string to be hello there. Suppose I asked you to enter your full name. I want to be able to read William Smith, not just William. In this case, we can use the getlined function. The getline function has a couple of variants. The first variant expects two elements inside the parentheses. The first element is the input stream. In this case, we're using cin which defaults to the keyboard. The second element is the name of the c++ string where you want the text that the user enters stored. That's it. Very easy. In the example, I'm saying getline cin S1. Now everything the user types is stored into S1. Getline stops reading when it sees the new line. It doesn't include the new line in the string it just discards it. The other variant of getline has another element in the parentheses. The first two are the same as before, the input stream and the c++ string variable name. The third is called the delimiter. This is the character that you want getline to stop reading input at. So as long as the user doesn't enter this character, everything will be stored in the string variable. Once the delimiter is seen, it's not included in the string variable and it's discarded. In the last example, I'm using a lowercase x as the delimiter. So if i type this is x, then the string stored in S1 will be this is and the x is discarded.
string s1;
cin >> s1; // hello there - only accepts up to the first space

cout << s1 << endl; // hello

getline(cin, s1); // hello there - accepts the entire line until \n
cout << s1 << endl; // hello there

getline(cin, s1, 'x'); // this is x - accepts the entire line until x
cout << s1 << endl; // this is

#include <iostream>
#include <iomanip>
#include <string> // important!
using namespace std; // or use std:: 
int main() {
  
  string s0;
  string s1 {"Apple"};
  string s2 {"Banana"};
  string s3 {"Kiwi"};
  string s4 {"apple"};
  string s5 {s1}; // Apple
  string s6 {s1, 0, 3}; // App
  string s7 (10, 'X'); // XXXXXXXXXX
  
  cout << s0 << endl; // No garbage
  cout << s0.length() << endl; // empty string
  
  // Initialization
  cout << "\nInitialization" << "\n------------------------------------------" << endl;
  cout << "s1 is initialized to: " << s1 << endl;
  cout << "s2 is initialized to: " << s2 << endl;
  cout << "s3 is initialized to: " << s3 << endl;
  cout << "s4 is initialized to: " << s4 << endl;
  cout << "s5 is initialized to: " << s5 << endl;
  cout << "s6 is initialized to: " << s6 << endl;
  cout << "s7 is initialized to: " << s7 << endl;

  // Comparison
  cout << "\nComparison" << "\n------------------------------------------" << endl;
  cout << boolalpha;
  cout << s1  << " == " << s5 << ": " << (s1 == s5) << endl;          // True    Apple == Apple
  cout << s1  << " == " << s2 << ": " << (s1 == s2) << endl;          // False   Apple != Banana
  cout << s1  << " != " << s2 << ": " << (s1 != s2) << endl;          // True    Apple != Banana
  cout << s1  << " < " << s2 << ": " << (s1 < s2) << endl;;           // True     Apple < Banana
  cout << s2  << " > " << s1 << ": " <<(s2 > s1) << endl;             // True       Banana > Apple
  cout << s4  << " < " << s5 << ": " <<(s4 < s5) << endl;             // False      apple >Apple
  cout << s1  << " == " << "Apple" << ": " <<(s1 == "Apple") << endl; // True Apple == Apple - Apple converted to be an object of type string and then compared to s1 which is also a string object and they are equal because they contain the same characters.

  // Assignment 
  cout << "\nAssignment" << "\n------------------------------------------" << endl;
  s1 = "Watermelon";
  cout << "s1 is now: " << s1 << endl;    // Watermelon
  s2 = s1;
  cout << "s2 is now: " << s2 << endl;    // Watermelon

  s3 = "Frank";
  cout << "s3 is now: " << s3 << endl;    // Frank

  s3[0] = 'C';    // Crank
  cout << "s3 change first letter to 'C': "  << s3 << endl;   //Crank
  s3.at(0) = 'P';
  cout << "s3 change first letter to 'P': "  << s3 << endl;   // Prank

  // Concatenation
  s3 = "Watermelon";
  cout << "\nConcatenation" << "\n------------------------------------------" << endl;

  s3 =  s5 + " and " + s2 + " juice";     // Apple and Banana juice - and converted automatically to c++ string
  cout << "s3 is now: " << s3 << endl;    // Apple and Banana Juice

  s3 = "nice " + " cold " + s5 + "juice";         // Compiler error

  for loop
    cout << "\nLooping" << "\n------------------------------------------" << endl;
    
    s1 = "Apple";
    for (size_t i {0}; i < s1.length(); ++i) 
      cout << s1.at(i);      //  or s1[i]    Apple
    cout << endl;
    
  // Range-based for loop
    for (char  c: s1)
      cout << c;     // Apple 
    cout << endl;
        
        
  // Substring
    cout << "\nSubstring" << "\n------------------------------------------" << endl;
    s1 = "This is a test";

    cout << s1.substr(0,4) << endl;	    // This
    cout << s1.substr(5,2) << endl;	    // is
    cout << s1.substr(10,4) << endl;   	// test


  // Erase
    cout << "\nErase" << "\n------------------------------------------" << endl;

    s1 = "This is a test";
    s1.erase(0,5);     // Erase This from s1 results in "is a test"
    cout << "s1 is now: " << s1<< endl;     // is a test

  // getline
    cout << "\ngetline" << "\n------------------------------------------" << endl;

    string full_name {};
    
    cout << "Enter your full name: ";
    getline(cin, full_name);
    
    cout << "Your full name is: " << full_name << endl;

  // Find
    cout << "\nfind" << "\n------------------------------------------" << endl;

    s1 = "The secret word is Boo";
    string word {};
    
    cout << "Enter the word to find: ";
    cin >> word;
    
    size_t position = s1.find(word);
    if (position != string::npos)
      cout << "Found " << word << " at position: " << position << endl;
    else
      cout << "Sorry, " << word <<  " not found" << endl;

  cout << endl;
  return 0;
}

/*
Using C++ Strings - Exercise 1
In this exercise you will create a program that will be used to reformat a name so that it can be read more easily.

The string variable unformatted_full_name is comprised of two substrings; first_name and last_name in that order. Each substring begins with a capital letter.

Begin by declaring and initializing the string variable first_name from the string variable unformatted_full_name remembering that when initializing from another string, the first integer within the curly brackets represents the starting index of the substring you wish to copy and the second integer represents the length of the substring.

Next, declare and initialize the string variable last_name by using the assignment operator = and the string function substr on the string variable unformatted_full_name.

Next, declare and initialize the string variable formatted_full_name. This should be done through the use of the concatenation operator + by concatenating the string variables first_name and last_name in that order, and then assigning the concatenated string to formatted_full_name using the assignment operator =.

Now the string variable formatted_full_name contains the string "StephenHawking". We see that the string is no more formatted than the original string variable unformatted_full_name and that is because the addition operator + does not add whitespace between strings when concatenating them.

Fortunately, we can use the string function insert on the string variable formatted_full_name to insert a whitespace between the substrings such that formatted_full_name will then contain the string "Stephen Hawking".
*/
string first_name {unformatted_full_name, 0, 7};
string last_name = unformatted_full_name.substr(7, 7);

string formatted_full_name = first_name + last_name;

formatted_full_name.insert(7, " ");

/*
Using C++ Strings - Exercise 2
In this exercise you will create a program that will be used in a digital library to format and sort journal entries based on the authors last name. Each entry has room to store only the last name of the author.

Begin by removing the first name "Isaac" from the string variable journal_entry_1 by using the string function erase. Do not forget to also remove the whitespace so that the string variable journal_entry_1 will then contain the string "Newton" with no whitespaces.

The journal entries should be sorted alphabetically based on the authors last name. For example, the last name "Brown" should come before the last name "Davis".

Create an if statement so that if the last name contained within journal_entry_2 is alphabetically less than the last name contained within journal_entry_1, then the string values are swapped using the string function swap.

You may use either of the comparison operators < > in the if statement but remember that following ASCII, "A" is lexicographically lower than "B".
*/
journal_entry_1.erase(0, 6);

if (journal_entry_2 < journal_entry_1) 
    journal_entry_2.swap(journal_entry_1);
    
/*THE FOLLOWING WILL ALSO WORK
if (journal_entry_1 > journal_entry_2)
    journal_entry_1.swap(journal_entry_2);
*/

// Challenge - Substitution Cipher
/*
A simple and very old method of sending secret messages is the substitution cipher.
You might have used this cipher with your friends when you were a kid.
Basically, each letter of the alphabet gets replaced by another letter of the alphabet.
For example, every 'a' get replaced with an 'X', and every 'b' gets replaced with a 'Z', etc.

Write a program thats ask a user to enter a secret message.

Encrypt this message using the substitution cipher and display the encrypted message.
Then decryped the encrypted message back to the original message.

You may use the 2 strings below for  your subsitition.
For example, to encrypt you can replace the character at position n in alphabet 
with the character at position n in key.

To decrypt you can replace the character at position n in key
with the character at position n in alphabet.

Have fun! And make the cipher stronger if you wish!
Currently the cipher only substitutes letters - you could easily add digits, puncuation, whitespace and so
forth. Also, currently the cipher always substitues a lowercase letter with an uppercase letter and vice-versa.
This could also be improved.

Remember, the less code you write the less code you have to test!
Reuse existing functionality in libraries and in the std::string class!
*/

#include <iostream>
#include <string>
using namespace std;
int main() {
  
  string alphabet {"[ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"};
  string key  {" [XZNLWEBGJHQDYVTKFUOMPCIASRxznlwebgjhqdyvtkfuompciasr"};
  
  string secret_message {};
  cout << "Enter your secret message : ";
  getline(cin, secret_message);
  
  string encrypted_message {};
  
  cout << "\nEncrypting message..." << endl;
  
  for (char c: secret_message) {
    size_t position = alphabet.find(c);
    if (position != string::npos) {
      char new_char {  key.at(position) };
      encrypted_message += new_char;
    } else {
      encrypted_message += c;
    }
  }
  
  cout << "\nEncrypted message: " << encrypted_message << endl;
  
  string decrypted_message {};
  cout << "\nDecrypting message..." << endl;
  
  for (char c: encrypted_message) {
    size_t position = key.find(c);
    if (position != string::npos) {
      char new_char { alphabet.at(position) };
      decrypted_message += new_char;
    } else {
      decrypted_message += c;
    }
  }
  
  cout << "\nDecrypted message: " << decrypted_message << endl;
  
  cout << endl;
  return 0;
}

/*
Write a C++ program that displays a Letter Pyramid from a user-provided std::string.
Prompt the user to enter a std::string and then from that string display a Letter Pyramid as follows:
It's much easier to understand the Letter Pyramid given examples.
If the user enters the string "ABC", then your program should display:
  A                                                                                                                    
 ABA                                                                                                                   
ABCBA 
If the user enters the string, "12345", then your program should display:
    1                                                                                                                  
   121                                                                                                                 
  12321                                                                                                                
 1234321                                                                                                               
123454321
If the user enters 'ABCDEFG', then your program should display:
      A                                                                                                                
     ABA                                                                                                               
    ABCBA                                                                                                              
   ABCDCBA                                                                                                             
  ABCDEDCBA                                                                                                            
 ABCDEFEDCBA                                                                                                           
ABCDEFGFEDCBA
If the user enters 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', then your program should display:
                         A
                        ABA
                       ABCBA
                      ABCDCBA
                     ABCDEDCBA
                    ABCDEFEDCBA
                   ABCDEFGFEDCBA
                  ABCDEFGHGFEDCBA
                 ABCDEFGHIHGFEDCBA
                ABCDEFGHIJIHGFEDCBA
               ABCDEFGHIJKJIHGFEDCBA
              ABCDEFGHIJKLKJIHGFEDCBA
             ABCDEFGHIJKLMLKJIHGFEDCBA
            ABCDEFGHIJKLMNMLKJIHGFEDCBA
           ABCDEFGHIJKLMNONMLKJIHGFEDCBA
          ABCDEFGHIJKLMNOPONMLKJIHGFEDCBA
         ABCDEFGHIJKLMNOPQPONMLKJIHGFEDCBA
        ABCDEFGHIJKLMNOPQRQPONMLKJIHGFEDCBA
       ABCDEFGHIJKLMNOPQRSRQPONMLKJIHGFEDCBA
      ABCDEFGHIJKLMNOPQRSTSRQPONMLKJIHGFEDCBA
     ABCDEFGHIJKLMNOPQRSTUTSRQPONMLKJIHGFEDCBA
    ABCDEFGHIJKLMNOPQRSTUVUTSRQPONMLKJIHGFEDCBA
   ABCDEFGHIJKLMNOPQRSTUVWVUTSRQPONMLKJIHGFEDCBA
  ABCDEFGHIJKLMNOPQRSTUVWXWVUTSRQPONMLKJIHGFEDCBA
 ABCDEFGHIJKLMNOPQRSTUVWXYXWVUTSRQPONMLKJIHGFEDCBA
ABCDEFGHIJKLMNOPQRSTUVWXYZYXWVUTSRQPONMLKJIHGFEDCBA
If the user enters "C++isFun!", then your program should display:
        C                                                                                                              
       C+C                                                                                                             
      C+++C                                                                                                            
     C++i++C                                                                                                           
    C++isi++C                                                                                                          
   C++isFsi++C                                                                                                         
  C++isFuFsi++C                                                                                                        
 C++isFunuFsi++C                                                                                                       
C++isFun!nuFsi++C
Think about the problem before you begin and break it down into steps.
This can be a very challenging problem to solve!
*****  Don't forget to paste your code solution when you submit.******
*****  Also, submit it so your peers can see it and possibly comment. ******
Have fun!
Questions for this assignment
Which C++ loop(s) did you use and why?
How did you handle displaying the leading spaces in each row of the pyramid?
Now that you completed the assignment, how might approach the problem differently if you had to solve it again?
*/
#include <iostream>
#include <string>
using namespace std;
int main () {
  string user_string {};
  cout << "Enter a string: ";
  getline(cin, user_string);
  cout << endl;

  for (size_t i {0}; i < user_string.length(); i++) {
    for (size_t j {0}; j < user_string.length() - i - 1; j++)
      cout << " ";
    for (size_t k {0}; k <= i; k++)
      cout << user_string.at(k);
    for (size_t l {i}; l > 0; l--)
      cout << user_string.at(l - 1);
    cout << endl;
  }
  cout << endl;
  return 0;
}
#include <iostream>
#include <string>
int main()
{
  std::string letters{};

  std::cout << "Enter a string of letters so I can create a Letter Pyramid from it: ";
  getline(std::cin, letters);

  size_t num_letters = letters.length();

  int position {0};

  // for each letter in the string
  for (char c: letters) {

    size_t num_spaces = num_letters - position;
    while (num_spaces > 0) {
      std::cout << " ";
      --num_spaces;
    }

    // Display in order up to the current character
    for (size_t j=0; j < position; j++) {
      std::cout << letters.at(j);
    }

    // Display the current 'center' character
    std::cout << c;

    // Display the remaining characters in reverse order
    for (int j=position-1; j >=0; --j) {
      // You can use this line to get rid of the size_t vs int warning if you want
      auto k = static_cast<size_t>(j);
      std::cout << letters.at(k);
    }

    std::cout << std::endl; // Don't forget the end line
    ++position;
  }

  return 0;
}

/***************************************************************************************************************************/

// Function: Functions allow us to divide our programs into modular units of executable code and call and reuse these units as we wish. Functions are very powerful abstraction mechanism.
int main () {
  // input
  statement1;
  statement2;
  statement3;

  // processing
  statement4;
  statement5;
  statement6;

  // output
  statement7;
  statement8;
  statement9;
}
// modularized version - There's a field in computer science called software engineering. Software engineering is all about designing your solutions and writing your code in a way that can be easily understood, debugged and extended. One of the fundamental principles in software engineering is abstraction. Abstraction is exactly what functions help us achieve. Notice that each of these functions executes the same statements that we were executing previously in the main function. This makes our code more modular, more readable, more maintainable, easier to debug and easier to reuse.
void input () {
  statement1;
  statement2;
  statement3;
}
void processing () {
  statement4;
  statement5;
  statement6;
}
void output () {
  statement7;
  statement8;
  statement9;
}
int main () {
  input();
  processing();
  output();
}

// A common analogy that's used when learning about functions is the boss/worker analogy. Let's assume you're the boss, and you need to get a task done. This task involves several subtasks, and your job is not to perform the individual subtasks but to coordinate the execution of those subtasks and report the synthesized results back to your own boss. So you've hired three workers that have expertise in each of those subtasks. So you assign a subtask to each worker and provide each of them whatever information they need to perform it. Since each of the workers knows exactly what to do. When they complete their subtask, they report their results back to you. This may simply be a comment that says I'm done or could be a complex report that they created and provide to you. Now that all subtasks are completed, you look at the individual results, synthesize the report and give it to your boss. Sounds like an easy job being a boss, right. Actually, no. The boss needs to know what worker to assign the specific subtask to, the order to do them in, the information to provide to each of them, so they can do their job. And the boss needs to know what he or she is getting back in order to synthesize it and report back. This is a great analogy to using functions. If you need to call functions, you write your code to the function specification, you need to understand what the function does. You need to understand what information the function needs. You need to understand what the function returns to you. You need to understand any errors that the function may produce and why. You need to understand any performance constraints and so on. What you don't need to worry about is how the function works internally unless of course you're the programmer coding the function. This is super important to understand. When we use string, vectors, math functions, complex image processing libraries. Collision, detection and games, we don't need to know how those algorithms work. This concept is called information hiding. And we'll revisit this again when we talk about object-oriented classes.

// built-in function / Math examples
#include <iostream>
#include <cmath> // required
using namespace std;
int main() {
  
  double num {};

  cout << "Enter a number (double) : ";
  cin >> num;
  
  cout << "The sqrt of " << num << " is: " << sqrt(num) << endl;
  cout << "The cubed root of " << num << " is: " << cbrt(num) << endl;
  
  cout << "The sine of " << num << " is: " << sin(num) << endl;
  cout << "The cosine of " << num << " is: " << cos(num) << endl;
  
  cout << "The ceil of " << num << " is: " << ceil(num) << endl;
  cout << "The floor of " << num << " is: " << floor(num) << endl;
  cout << "The round of " << num << " is: " << round(num) << endl;
  
  double power {};
  cout << "\nEnter a power to raise " << num << " to: ";
  cin >> power;
  cout << num << " raised to the " << power << " power is: " << pow(num, power) << endl;

  cout <<  endl;
  return 0;
}
// built-in function / Random Numbers
#include <iostream>
#include <cstdlib> // required for rand()
#include <ctime> // required for time( ) - In order to use random numbers, we really need to seed a random number generator. Now what's a random number generator? A random number generator is just a generator that creates random numbers. Computers are real bad with random numbers. We have what are called pseudorandom numbers. What that means is that the numbers themselves are random but the sequence that they're generated in is not. So in order to create more real random numbers, we want to seed that random number generator with a different value each time that way it creates different sequences of values.
using namespace std;
int main() {
    
  int random_number {};
  size_t count {10}; // number of random numbers to generate
  int min {1}; // lower bound (inclusive) 
  int max {6}; // upper bound (inclusive)
  
  // seed the random number generator
  // If you don't seed the generator you will get the same requence random numbers every run
  
  cout << "RAND_MAX on my system is: " << RAND_MAX << endl;
  srand(time(nullptr)); // seed the random number generator - time( ) returns the current time in seconds since 1970. This is a long integer. We're passing that to srand( ) to seed the random number generator. The nullptr is a null pointer. It's a special pointer that points to nothing
  
  for (size_t i{1}; i<=count; ++i)  {
    random_number = rand() % max + min;     // generate a random number [min, max]
    cout << random_number << endl;
  }

  cout  << endl;
  return 0;
}
/*
Using Functions from the cmath Library
In this exercise you will create a program that will be used as a POS (Point of Sale) system in a restaurant. The bill_total is given as well as the number_of_guests. The 5 guests will be splitting the bill evenly and so the individual_bill will be bill_total / number_of_guests. The POS will be used in three different locations, each with different guidelines for printing bills.
At location 1, individual_bill_1 always rounds down to the nearest dollar.
At location 2, individual_bill_2 always rounds to the nearest dollar.
At location 3, individual_bill_3 always rounds up to the nearest cent.
Determine what the individual_bill will be at each of the locations.
Begin by declaring and initializing individual_bill.
Now, declare and initialize individual_bill_1 by using the <cmath> function floor with individual_bill as the argument.
Next, declare and initialize individual_bill_2 by using the <cmath> function round with individual_bill as the argument.
Finally, declare and initialize individual_bill_3 by using the <cmath> function ceil with individual_bill as the argument. In order to round individual_bill_3 to the nearest cent, you must multiply the argument of the function ceil by 100 and then divide the result of the function by 100.
*/
double bill_total {102.78};
int number_of_guests {5};
double individual_bill = bill_total/number_of_guests;
int individual_bill_1 = floor(individual_bill);
int individual_bill_2 = round(individual_bill);
double individual_bill_3 = ceil(individual_bill*100)/100;
cout << "The individual bill at location 1 will be $" << individual_bill_1 << "\n" << "The individual bill at location 2 will be $" << individual_bill_2 << "\n" << "The individual bill at location 3 will be $" << individual_bill_3;

// user-defined function: Function definitions have four main parts. We'll look at the syntax of functions in the next slide. But for now, let's look at what these parts are. The function has to have a name. The name of the function follows the same rules we use for naming variables. Function names should be meaningful and provide the reader the intent of the function. For example, a function called func1 and another function called func2 may be okay when teaching functions in my slides. But what if I read some production code with function names like that. I'd have no idea what these functions are doing based on those names. Functions perform operations. So usually, you see function names as verb or verb phrases. This isn't always the case, but it's a good habit to get into. The second part of a function is the parameter list. This is the list of variables that the function expects from you when you call it. For example, if you're calling a function that adds 2 integers, then the 2 integers are in the parameter list. Sometimes functions don't need any parameters at all. Suppose I have a function that simply displays hello or a function that returns a system time to me. These functions can be called with an empty parameter list. All functions have the ability to return information to the caller of the function. In order to return information, we must specify the type of that information. So I might return a Boolean or an integer or a double or a string. Also it's possible that a function returns nothing. For example, if I need a function to just display hello, I really don't expect anything back from that function. In this case, we say that the return type is the keyword void. Finally, functions have bodies. These are statements to be executed and they're enclosed in curly braces. You've already seen an example of this in the main function. So as you can see, a function definition is pretty logical, the name of the function, what it expects, what it returns and what it does. Let's look at the syntax of a function definition.
int function_name() { // this function expects no parameters.
  statements;
  return 0;
}
int function_name(int a) { // this function expects 1 parameter. It's an integer. We call this a formal parameter. It's a variable that's only used in the function. It's not a variable that's declared in the main function. It's a variable that's declared in the function. So it's a formal parameter.
  statements;
  return 0;
}
void function_name() { // the keyword void before the function name. This tells the compiler that there is no return type.
  statements;
  return; // this is optional. If you don't have a return statement, the function will return 0 by default. If there is no return statement, it's understood that the function returns after the last statement is executed
}
int function_name(int a, std::string b) { // When the function is called, these two parameters must be provided as arguments in the same order as specified in the parameter list.
  statements;
  return 0;
}
void say_helo () { // this function doesn't return anything. It just displays hello.
  std::cout << "Hello" << std::endl;
}
int main () {
  say_hello(); // this is how you call a function. You just type the function name and then the parameters in parentheses. If there are no parameters, you just type the function name and then the parentheses.
  return 0;
}
int main () {
  for (int i{1}; i<=5; ++i) {
    say_hello();
  }
  return 0;
}
//  I'm defining 3 functions: say world, say hello and main. Execution always begins with the main function. So in this case, main calls say hello. So we execute say hello. And we display hello to the console. But then say hello calls say world and we display world.
void say_world() {
  std::cout << "World" << std::endl;
}
void say_hello() {
  std::cout << "Hello" << std::endl;
  say_world();
}
int main() {
  say_hello();
  return 0;
}
// There is one caveat about function definitions. The compiler must know the function details that is the function name, the parameters and so forth before the function is called. So look at this simple example. I'm calling say hello in main. But the compiler hasn't seen the definition of say hello yet. In this case, you'll get a compiler error telling you that say hello has not been declared in this scope.
in main () {
  say_hello(); // this will cause a compiler error because the compiler hasn't seen the definition of say hello yet.
  return 0;
}
void say_hello() {
  std::cout << "Hello" << std::endl;
}

// Function Definitions - Area of Circle and Volume of a Cylinder
#include <iostream>
using namespace std;
const double pi {3.14159};
double calc_area_circle(double radius) {
  return pi * radius * radius;
}
double calc_volume_cylinder(double radius, double height) {
  // return pi * radius * radius * height;
  return calc_area_circle(radius) * height;
}
void area_circle() {
  double radius{};
  cout << "\nEnter the radius of the circle: ";
  cin >> radius;

  cout << "The area of a circle with radius " << radius << " is " << calc_area_circle(radius) << endl;
}
void volume_cylinder() {
  double radius {};
  double height {};
  cout << "\nEnter the radius of the cylinder: ";
  cin >> radius;
  cout << "\nEnter the height of the cylinder: ";
  cin >> height;
  
  cout << "The volume of a cylinder with radius " << radius << " and height " << height << " is " << calc_volume_cylinder(radius, height) << endl;
}
int main() {
  area_circle();
  area_circle();
  volume_cylinder();
  return 0;
}

// function prototypes:  I mentioned that the c++ compiler must know all about a function before it allows that function to be called. I didn't say why though. The reason for this is that the compiler can't check to see if the number of parameters passed in and their types are correct when the function is called, unless it knows about the function being called before it's called. There are two ways we can make this happen. The first way is to make sure we define all functions before they're used. This is okay for many small programs, but it quickly becomes very difficult to do. And in the case of two functions that call one another is impossible. So rather than have to worry about the order in which we define functions, c++ allows us to create function prototypes. Function prototypes tell the compiler all it needs to know about a function, so that it can be sure that the function is being called correctly. Function prototypes are also called forward declarations since you're basically telling the compiler, hey compiler this is what this function is going to look like, make sure I use it that way. In smaller programs, all the function prototypes are generally placed near the top of a program, usually after the pound includes. As programs get larger, we split our programs up into multiple files, so we include .h or header files. And we include function prototypes in these files. We'll see that a little bit later.
int function_name (); // prototype. It tells the compiler that there is a function called function name. It takes no parameters and it returns an integer.

int function_name() { // prototype implementation or definition
  statements;
  return 0;
}
// The function prototype for this function is the first line of code you see. Notice that it looks very much like the function header. That's the part of the function definition right before the body of the function. With a function prototype, the compiler doesn't need to know what the implementation of the function is, only its header information. So in this case it knows that you'll later define a function named function name that expects no parameters and returns an integer. And if you use a function named function name, it will enforce those conditions. If you try to use it in any other way, say by calling it with an integer in the parameter list, then you'll get a compiler error. Pretty easy, right. You can have as many prototypes as you need. One per function, and it doesn't matter what order you declare them in.
int function_name(int); // prototype
int function_name(int a); // prototype

int function_name(int a) {
  statements;
  return 0;
}
// In this case, we have the same function named function name. But this time, it expects exactly one parameter. So we provide a function prototype to the compiler that has an int in the parameter list. Note that we can supply the name of the parameter if we wish, but it isn't used by the compiler. The compiler doesn't care about the name, only the type. So either of these function prototypes can be used. Best practice is to provide the parameter names for documentation purposes.
void function_name(); // prototype

void function_name() {
  statements;
  return; // optional
}
// In this example, we have a function that returns nothing when called. So the function prototype must include the void keyword, prior to the function name, just like the function definition does.
void function_name(int a, int b); // prototype
void fuction_name (int, int); // prototype
void function_name(int a, int b) {
  statements;
  return;
}
// So either one of these function prototypes is valid. In one case, we provide the parameter types and names and the other only the parameter types.

// So let's see how the compiler uses this information in the function prototype to help us write code.
void say_hello();

int main() {
  say_hello(); // this is okay because the compiler knows about say hello.
  say_hello(5); // this is not okay because the compiler doesn't know that say hello takes an integer parameter.
  cout << say_hello(); // this is not okay because the compiler doesn't know that say hello returns an integer.
  return 0;
}

vid say_hello() {
  std::cout << "Hello" << std::endl;
}

// Function Prototypes - Area of Circle and Volume of a Cylinder
#include <iostream>
using namespace std;

// Function prototypes
double calc_volume_cylinder(double radius, double height);
double calc_area_circle(double);
void area_circle();
void volume_cylinder();

const double pi = 3.14159;

int main() {
  area_circle();
  volume_cylinder();
  return 0;
}

double calc_volume_cylinder(double radius, double height) {
  // return pi *radius * radius * height;
  return calc_area_circle(radius) * height;
}

double calc_area_circle(double radius) {
  return pi * radius * radius;
}

void area_circle() {
  double radius {};
  cout << "\nEnter the radius of the circle: ";
  cin >> radius;
  cout << "The area of a circle with radius " << radius << " is " << calc_area_circle(radius) << endl;
}

void volume_cylinder() {
  double radius {};
  double height {};
  cout << "\nEnter the radius of the cylinder: ";
  cin >> radius;
  cout << "Enter the height of the cylinder: ";
  cin >> height;
  cout << "\nThe volume of a cylinder with radius " << radius << " and height " << height << " is " << calc_volume_cylinder(radius, height) << endl;
}

// function parameters and return statement

// When we call a function and pass data into that function, this data are the parameters to that function. In the function call, these data are called arguments. In the function definition, they're called parameters. We'll define the vocabulary more precisely in the next slide. As we've already seen, when we call a function, the arguments we use to call the function and the parameters that the function expects must match in number, order and type.
int add_numbers(int, int) { // prototype
  return x + y;
}
int main () {
  int result {};
  result = add_numbers(100, 200); // call
  cout << result << endl;
  return 0;
}
int add_numbers(int x, int y) { // definition
  return x + y;
}
// In this example, I didn't provide a function prototype to save space. But you should know at this point that it would be void say hello standard string. Notice that the function say hello expects one parameter, and it's a c++ string object. And it displays hello followed by whatever string is in the name object. The next three statements would normally be in main on another function. These are the function calls. The first is say hello Frank. Notice that frank is a c-style string literal, but the function expects a c++ string object. Aren't these types different. Why doesn't the compiler produce an error here. Yes, the types are different. But the compiler will try to convert one type to another if it knows how to make the function call work. In this case the, c-style string literal Frank is converted to a c++ string object. The same would happen if a function expected a double and I passed an intent to it. The int would be promoted to the double as we've already seen. Notice the last function call. In this case, I'm calling the function say hello with a single string object parameter, my dog, which is a variable name for a string object with the string buster in it.
void say_hello(std::string name) {
  cout << "Hello " << name << endl;
}
say_hello("Frank");
string my_dog {"Buster"};
say_hello(my_dog);
// how parameters are passed into functions. In c++, when you pass data into a function that data is passed by value. What this means is that the value of the data is passed in by copy. So the compiler makes a copy of the data. That means that the code in the function does not change the argument that was passed in. When we finished the function, the original data that was in the function call will be unchanged. This is good and not so good. It's good because since we're making a copy, we can't change the original argument by mistake or intentionally. It's not good because sometimes making a copy of data can be expensive both in storage needed and in time needed to actually copy that data. Also, sometimes we really do want to change the actual data being passed in. Fear not, c++ has solutions for all these use cases, and we'll learn about them soon. Let's define some vocabulary used in programming languages, that is formal versus actual parameters. Formal parameters are the parameters defined in the function's definition, in the function header. Actual parameters are the parameters that are used when the function is called that is in the function call statement. Many programmers and languages call actual parameters the arguments to a function. In c++, the actual parameters are passed by value or copied to the formal parameters.
void param_test(int formal) { // formal parameter copied from actual parameter in function call statement below in main 
  cout << formal << endl; // 50
  formal = 100; // formal parameter changed to 100 but not actual parameter in main (local copy of actual parameter)
  cout << formal << endl; // 100
}
int main() {
  int actual {50}; // actual parameter
  param_test(actual); // actual parameter passed by value to formal parameter
  cout << actual << endl; // 50 (not changed by formal parameter)
  return 0;
}

// As we've already seen, if a function is defined as returning a value of a specific type, then the function must return a value of that type using a return statement. We've already seen a few examples of this, and we've been doing it in the main function all along. If the function return type is void, then the return statement is optional. A return statement can occur anywhere in the function body, but you usually see it as the last statement of the function body. The return statement immediately terminates the function. It's possible to have multiple return statements in a function depending on the logic in your code. However, this is not a best practice. You typically want a single return statement. Remember, having multiple break statements in a loop and the potential problems you could have with readability. Well, the same is true with multiple return statements and functions. Finally, if the function returns a value, then this value becomes the result of the code that's called the function.

// Function Parmameters
#include <iostream>
#include <string>
#include <vector>

using namespace std;

void pass_by_value1(int num);
void pass_by_value2(string s);
void pass_by_value3(vector<string> v);
void print_vector(vector<string> v);

void pass_by_value1(int num) {
  num = 1000;
}

void pass_by_value2(string s) {
  s = "Changed";
}

void pass_by_value3(vector<string> v) {
  v.clear();  // delete all vector elements
}

void print_vector(vector<string> v) {
  for (auto s: v) 
    cout << s << " ";
  cout << endl;
}

int main() {
  int num {10};
  int another_num {20};
  
  cout << "num before calling pass_by_value1: " << num << endl;
  pass_by_value1(num);
  cout << "num after calling pass_by_value1: " << num << endl;
  
  cout << "\nanother_num before calling pass_by_value1: " << another_num << endl;
  pass_by_value1(another_num);
  cout << "another_num after calling pass_by_value1: " << another_num << endl;

  string name {"Frank"};
  cout << "\nname before calling pass_by_value2: " << name << endl;
  pass_by_value2(name);
  cout << "name after calling pass_by_value2: " << name << endl;

  vector<string> stooges {"Larry", "Moe", "Curly"};
  cout << "\nstooges before calling pass_by_value3: ";
  print_vector(stooges);
  pass_by_value3(stooges);
  cout << "stooges after calling pass_by_value3: ";
  print_vector(stooges);
  
  cout << endl;
  return 0;
}

/*
Functions and Prototypes - Converting Temperatures
In this exercise you will create a program that will be used to convert Fahrenheit temperatures to Celsius and Kelvin temperatures through the use of two functions.
For this program, assume that temperature will be represented as a double value.
Begin by defining the function prototypes for the functions fahrenheit_to_celsius and fahrenheit_to_kelvin which are both passed a double value and return a double value.
Now, at the bottom of the file, write the full definitions of both functions.
The function fahrenheit_to_celsius is passed a Fahrenheit temperature and returns a rounded Celsius temperature. You may use the <cmath> function round in order to round the return value. The formula to convert Fahrenheit to Celsius is (5.0/9.0)*(temperature - 32). 
The function fahrenheit_to_kelvin is passed a Fahrenheit temperature and returns a rounded Kelvin temperature. The formula to convert Fahrenheit to Kelvin is (5.0/9.0)*(temperature - 32) + 273.
Remember the rules of PEMDAS when defining the body of your functions.
Now, from the temperature_conversion function, declare and initialize the variables celsius_temperature and kelvin_temperature by calling the appropriate functions which you have just defined and passing the variable fahrenheit_temperature.
You do not need to declare or initialize fahrenheit_temperature as it is already available to you as a parameter of the temperature_conversion function.
*/
double fahrenheit_to_celsius(double);
double fahrenheit_to_kelvin(double);
void temperature_conversion(double fahrenheit_temperature) {
  double celsius_temperature = fahrenheit_to_celsius(fahrenheit_temperature);
  double kelvin_temperature = fahrenheit_to_kelvin(fahrenheit_temperature);
  cout << "The fahrenheit temperature " << fahrenheit_temperature << " degrees is equivalent to " << celsius_temperature << " degrees celsius and " << kelvin_temperature << " degrees kelvin.";
}
double fahrenheit_to_celsius(double temperature) {
  return round(((temperature - 32)*5)/9);
}
double fahrenheit_to_kelvin(double temperature) {
  return round(((temperature - 32)*5)/9 + 273);
}

// default arguments:  when we call a function, we must provide all the arguments that, that function requires, and they must be in the right order and of the right type. But sometimes when we call functions some of the argument values that we pass in tend to be the same values most of the time. For example, if we have a function that calculates the cost of an item, we can provide the function with the base cost of the item and the sales tax rate. Suppose that 98% of our customers live in a region where the tax rate is 6%, that means that we have to provide the tax rate in every function call even though it will almost always be 6%. C++ allows us to provide default values for arguments. So in the case of the sales tax, if we omit the argument from the function call, then the c++ compiler will automatically replace it with the default value of 6%. However, if we have a customer whose sales tax rate is 8%, then we can provide it explicitly and override the default value. As we'll see in the next few slides, we can add default arguments to the function prototype or the function definition but not both. But best practice is to do it in the function prototype. Default arguments must appear at the tail end of the parameter list. We can also have multiple default arguments.
// default argument values give us the ability to make our code less verbose and potentially prevent errors by using default values rather than having to supply all of the arguments to the function all the time.
double calc_cost(double base_cost, double tax_rate = 0.06, double shipping = 3.50);

int main () {
  double cost {};
  cost = calc_cost(100.0, 0.08, 4.25); // 100.0 is base cost, 0.08 is tax rate, 4.25 is shipping - no default arguments
  cout << "Cost is: " << cost << endl;
  cost = calc_cost(100.0, 0.08); // 100.0 is base cost, 0.08 is tax rate, 3.50 is shipping - default shipping
  cout << "Cost is: " << cost << endl;
  cost = calc_cost(200.0); // 200.0 is base cost, 0.06 is tax rate, 3.50 is shipping - default tax rate and shipping
  cout << "Cost is: " << cost << endl;
  return 0;
}

double calc_cost(double base_cost, double tax_rate, double shipping) {
  return base_cost += (base_cost * tax_rate) + shipping;
}

// Default Arguments
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;
double calc_cost(double base_cost = 100.0, double tax_rate = 0.06, double shipping = 3.50);
void greeting(string name,  string prefix = "Mr.", string suffix = "");
int main() {
  double cost{ 0 };
  cost = calc_cost(100.0, 0.08, 4.25);    // will use no defaults  100 + 8 + 4.25 
  
  cout << fixed << setprecision(2);
  cout << "Cost is: " << cost << endl;    // 112.25
  
  cost = calc_cost(100.0, 0.08);                  // will use default shipping  100 + 8 + 3.50 
  cout << "Cost is: " << cost << endl;    // 111.50

  cost = calc_cost(200.0);                         // will use default tax and shipping   200 + 12 + 3.50
  cout << "Cost is: " << cost << endl;    // 215.50
  
  cost = calc_cost();
  cout << "Cost is: " << cost << endl;    // 100 + 6 + 3.50
  
  greeting("Glenn Jones", "Dr.", "M.D.");
  greeting("James Rogers", "Professor", "Ph.D.");
  greeting("Frank Miller", "Dr.");
  greeting("William Smith");
  greeting("Mary Howard", "Mrs.", "Ph.D.");

  cout << endl;
  return 0;
}
double calc_cost(double base_cost, double tax_rate, double shipping) {
    return base_cost += (base_cost * tax_rate) + shipping;
}
void greeting(string name,  string prefix, string suffix) {
    cout << "Hello " << prefix + " " + name + " " + suffix << endl;
}

/*
Using Default Argument Values - Grocery List
In this exercise you will create a program that will be used to automatically print a grocery list. Most weeks the grocery list is the same and so you may begin by declaring the function prototype print_grocery_list which has the default argument values:
mangos = 13
apples = 3
oranges = 7
The function print_grocery_list has no return statement and so the return type of the function prototype should be void.
IMPORTANT: Before declaring the function prototype, read the entire exercise to determine the proper order of arguments in the function parameter list. Remember that default argument values that do not change should be placed at the tail end of the parameter list, and those which change most often should be placed at the beginning.
Once the function prototype is declared, complete the parameter list of the function definition at the bottom of the file.
Now, print this weeks grocery list by calling the function print_grocery_list from the function body of modify_grocery_list.
The next week, you decide that you would like 5 apples instead of 3. Print the new grocery list by calling the function print_grocery_list from the function body of modify_grocery_list and passing the new apples argument.
For the final week,  you are having a party and would like to serve a fruit punch so you will need 7 apples, 11 oranges, and the default number of mangos. Print the new grocery list by calling the function print_grocery_list from the function body of modify_grocery_list and passing the new apples and oranges arguments. 
*/
void print_grocery_list(int apples = 3, int oranges = 7, int mangos = 13);
void modify_grocery_list() {
  print_grocery_list();
  print_grocery_list(5);
  print_grocery_list(7, 11);
}
void print_grocery_list(int apples, int oranges, int mangos) {
  cout << apples << " apples" << "\n" << oranges << " oranges" << "\n" << mangos << " mangos" << "\n";
}

// function overloading: In c++, we can have functions with different parameter lists that have the same name. For example, I may have many ways to display information to the screen depending on what I want to display. So rather than having many functions with different names such as display char, display int, display double and so forth, we can have a single name display, and then implement a version of the function for each type of parameter. Then we just let the compiler figure out which function to use based on the function call arguments and the defined function parameters. It sounds more complicated than it is. This is a great use of abstraction since as a developer all I need to think is display and pass in whatever information I need. I don't have to keep track of dozens of different function names. In software engineering, we have a principle called polymorphism, which means many forms for the same concept. This is an example of polymorphism.
int add_numbers (int num1, int num2);
double add_numbers (double num1, double num2);
int main () {
  cout << add_numbers(10, 20) << endl;
  cout << add_numbers(10.5, 20.5) << endl;
  return 0;
}
int add_numbers (int num1, int num2) {
  return num1 + num2;
}
double add_numbers (double num1, double num2) {
  return num1 + num2;
}
// The parameter list for these functions must be different so the compiler can tell them apart. Once these functions are implemented, I can call display and pass in my data. The compiler will check the type of the argument in the function and match it to one of the available overloaded display functions. If it can't match it or if it can't convert the argument to one that matches, then we get a compiler error.
void display (int num);
void display (double num);
void display (string text);
void display (char ch);
void display (string s, string t);
void display (int num, double num2);
void display (vector <string> v);
// There is one restriction to function overloading. The return type is not considered when the compiler is trying to determine, which function to call. So here we have two overloaded functions, both called get value, and both expect no parameters. The only difference is that one returns an integer and the other a double. This will produce a compiler error since the only difference is the return type. Consider the output statement at the bottom. Which function would the compiler call? It could call either and that's the problem, it won't guess. So it'll produce a compiler error. Overloading functions is used extensively in object-oriented design, and we'll see it again when we design our own c++ object-oriented classes.
int get_value ();
double get_value ();
int main () {
  cout << get_value() << endl; // error - functions that differ only in their return type cannot be overloaded, avoid also
  return 0;
}
int get_value () {
  return 100;
}
double get_value () {
  return 123.3;
}

// Function Overloading
#include <iostream>
#include <string>
#include <vector>
using namespace std;
void print(int);
void print(double = 12.5);
void print(string);
void print(string, string);
void print(vector<string>);
void print(int num) {
  cout << "Printing int: " << num << endl;
}
void print(double num) {
  cout << "Printing double: " << num << endl;
}
void print(string s) {
  cout << "Printing string: " << s << endl;
}
void print(string s, string t) {
  cout << "Printing 2 strings: " << s << " and " << t << endl;
}
void print(vector<string> v) {
  cout << "Printing vector of strings: " ;
  for (auto s: v )
      cout << s + " ";
  cout << endl;
}
int main() {
  print(); // 12.5 i- will take void print(double = 12.5); not void print(int); because of default argument value

  print(100);    // int
  print('A');     //  character is always promoted to int should print 65 ASCII ('A')
  
  print(123.5);   // double
  print(123.3F);  // Float is promoted to double
  
  print("C-style string");  // C-style string is converted to a C++ string
  
  string s {"C++ string"};    
  print(s);       // C++ string
  
  print("C-style string", s); // First argument is converted to a C++ string
  
  vector<string> three_stooges {"Larry", "Moe", "Curly"};
  print(three_stooges);
  
  cout << endl;
  return 0;
}

/*
Overloading Functions - Calculating Area
In this exercise you will create a program that computes the area of two shapes, a square and a rectangle, by calling the overloaded function find_area.
Begin by declaring the function prototypes for the square find_area function and the rectangle find_area function.
The square find_area function is passed an integer value and returns an integer value.
The rectangle find_area function is passed two double values and returns a double value.
Remember that both function prototypes should have the same function name find_area.
Now that the function prototypes have been declared,  at the bottom of the file define both functions.
The square find_area function will be passed the argument side_length and return the area of the square. The formula for the area of a square is side_length*side_length . You may use the <cmath> function pow to compute this value if you wish.
The rectangle find_area function will be passed the arguments length and width and return the area of the rectangle. The formula for the area of a rectangle is length*width.
Now, from the function body of area_calc, declare and initialize the variables square_area and rectangle_area by calling the find_area function and passing the appropriate arguments which are listed below.
The square has a side_length of 2.
The rectangle has a length of 4.5 and a width of 2.3.
*/
#include <iostream>
#include <cmath>
using namespace std;
int find_area(int);
double find_area(double,double);
void area_calc() {
  int square_area = find_area(2);
  double rectangle_area = find_area(4.5,2.3);
  cout << "The area of the square is " << square_area << "\n" << "The area of the rectangle is " << rectangle_area;
}
int find_area(int side_length) {
  return pow(side_length,2); //return side_length*side_length will also work
}
double find_area(double length, double width) {
  return length*width;
}

// passing array to function: We can pass arrays into functions by providing the square brackets in the parameter information. So in this case, we can have a function named print array that expects an array of integers and returns nothing. The idea is that this function iterates through the array and displays the array values. Pretty handy function, right. But arrays are different in c++. Remember that an array name evaluates to the address or location and memory of the first element of the array. In other words, the beginning of the array. So what's being passed into the function is not a copy of the entire array, but only the address of the first element of the array. That means that the function has no idea how many elements are in the array. So the programmer doesn't know how many times to iterate. So when we pass arrays to functions, we also need to pass in the size of the array, so that we now know how many times to iterate. Let me show you an example. In this example, you can see that both the function prototype and the function definition have square brackets after the formal parameter name. This tells the compiler that the function expects an array of integers in this case. So far so good. Then in main, I have an array of five integers called my numbers, and it's been initialized to the integers 1 through 5. So I call the print array function and pass in the array my numbers. All good so far. Now I execute the print array function. But I have no idea how many times I need to iterate. Since the array name has no size information, I'm stuck. If the array has a sentinel value, like a c-style string, then I can iterate until I see that sentinel value. But in this case, the my numbers array has no such sentinel value. There's no way I can write this function body in a way that it will work with any array of integers. So the solution is to pass in the size of the array to the function as well. 
void print_array(int numbers [], size_t size);

int main() {
  int my_numbers [] {1,2,3,4,5};
  print_array(my_numbers, 5);
  return 0;
}

void print_array(int numbers [], size_t size) {
  for (size_t i {0}; i < size; ++i)
    cout << numbers[i] << " ";
  cout << endl;
}

// Since we're passing into the function, the location of the actual array that was declared in main that means that we can modify that actual array from within the function. This could be useful in the case of a function like zero array that we can call whenever we want to 0 out all the elements in an array. However, in the print array function, we don't want to modify the array. If we do it's probably an unintentional error. We'll see how to protect ourselves from this kind of error in the next slide, but first let's see how we could write a useful function like zero array. In this case the zero array function receives the location of the array and the size of the array. We could simply iterate through the array and set each array element to zero. Notice that when we print the array in main after we call zero array, all the array elements are now zero.
void print_array(int numbers [], size_t size);

void zero_array(int numbers [], size_t size) {
  for (size_t i {0}; i < size; ++i)
    numbers[i] = 0; // zero out the array elements in the function body
}

int main() {
  int my_numbers [] {1,2,3,4,5};
  zero_array(my_numbers, 5); // 0 0 0 0 0 0 0 0 0
  print_array(my_numbers, 5);
  return 0;
}

void print_array(int numbers [], size_t size) {
  for (size_t i {0}; i < size; ++i)
    cout << numbers[i] << " ";
  cout << endl;
}

// So let's get back to see what we can do to have the compiler help us, so we don't change an array we don't want to. We can define function parameters as const parameters. This tells the compiler that these parameters are read-only within the function body. Any attempt to modify them will result in a compiler error. So in this case notice that we included the const keyword right before the array parameter declaration. That's it. Now if I try to modify any array element as i do in the assignment statement, a compiler error will occur. Depending on your compiler, the error message will say something like error trying to assign to a read-only value. The idea of passing the location of a variable to a function instead of the value of a variable is fundamental in understanding
void print_array(const int numbers [], size_t size);

void zero_array(const int numbers [], size_t size) {
  for (size_t i {0}; i < size; ++i)
    numbers[i] = 0; // zero out the array elements in the function body
}

void print_array(const int numbers [], size_t size) {
  for (size_t i {0}; i < size; ++i)
    cout << numbers[i] << " ";
  cout << endl;
}

// Arrays and functions
#include <iostream>
using namespace std;
void print_array(const int arr[], size_t size);
void set_array(int arr[], size_t size, int value);
void print_array(const int arr[], size_t size) {  // const
  for (size_t i{0}; i < size; ++i)
    cout << arr[i] << " ";
  cout << endl;
  // arr[0] = 50000; // bug
}
// set each array element to value
void set_array(int arr[], size_t size, int value) {
  for (size_t i{0}; i < size; ++i)
    arr[i] = value;
}
int main() {
  int my_scores[] {100, 98, 90, 86, 84};
  
  print_array(my_scores, 5);
  set_array(my_scores, 5, 100);
  print_array(my_scores, 5);
  print_array(my_scores, 5);
  
  cout << endl;
  return 0;
}

/*
Passing Arrays to Functions - Print a Guest List
In this exercise you will create a program that will be used to print the guest_list to an event and then clear the guest_list when the event is over.
Begin by completing the function prototypes print_guest_list and clear_guest_list which are both passed an array of std::string and a size_t value. Ensure that the array cannot be modified within the print_guest_list function by using the keyword const in the parameter list.
Now that the function prototypes have been declared, at the bottom of the file define both functions.
Both the print_guest_list and clear_guest_list functions will be passed the array argument guest_list and the size_t argument guest_list_size which have both been provided to you.
The print_guest_list function should print the values contained within the guest_list from left to right with each element being printed on a new line.  Use a for loop to iterate through the array.
The clear_guest_list function should replace each element of the array with the string value " ", a single space.  Use a for loop to iterate through the array.
Now, from the function body of event_guest_list, make the following function calls in this order:
print_guest_list
clear_guest_list
print_guest_list
and passing the array argument guest_list and the size_t argument guest_list_size with each function call.
*/
#include <iostream>
#include <string>
#include <typeinfo>
using namespace std;
string print_guest_list(const string[], size_t);
void clear_guest_list(string[], size_t);
void event_guest_list() {
  string guest_list[] {"Larry", "Moe", "Curly"};
  size_t guest_list_size {3};
  print_guest_list(guest_list, guest_list_size);
  clear_guest_list(guest_list, guest_list_size);
  print_guest_list(guest_list, guest_list_size);
}
string print_guest_list(const string guest_list[], size_t guest_list_size) {
  for (size_t i{0}; i < guest_list_size; i++)
    cout << guest_list[i] << endl;
  return typeid(guest_list).name();
}
void clear_guest_list(string guest_list[], size_t guest_list_size) {
  for (size_t i{0}; i < guest_list_size; i++)
    guest_list[i] = " ";
}

// pass by reference: we've seen that when we pass a parameter into a function, the default is pass by value. That means a copy of the actual parameter is made. We also saw that when we pass an array into a function, we don't make a copy, instead we use the location of the array, which means we can change it from within the function. Well, sometimes we want to be able to change an actual parameter from within a function. As we saw with arrays, this is achieved by passing in the location of the actual parameter. We can do this in c++ for any variable type not just arrays by using reference parameters. Reference parameters create an alias. So now the formal parameter in the function is an alias to the actual parameter. No copy is made. When you change the formal parameter, you're changing the actual parameter. This is called pass by reference, and it's really easy to achieve in c++ by using the ampersand symbol in the parameter list.
void scale_number(int $num);
int main() {
  int my_score {1000};
  scale_number(my_score);
  cout << my_score << endl; // 100
  return 0;
}
void scale_number(int &num) {
  if (num > 0)
    num = 100;
}
// In this example, we have a function named scale number. Notice that the parameter list to the function is not an int name num, it's a reference to an int name num. That's what the ampersand does so. Now when we use num in the function body, we're referencing the actual parameter. Let's walk through this. In main, we declare an integer number and initialize it to 1000. Then we call the scale number function and pass in the actual parameter number. We now transfer control to the scale number function since the formal parameter in the scale number function is a reference parameter. This means that num is an alias for number. If we change num, we're changing number. Behind the scenes, the location of numbers being passed into the function. So the code in scale number checks to see if the number is greater than one 100. In this case, it is. It's one 1000. So we set num to 100, and the function completes. When we return to main and display number, it will display 100. Pass by reference can be super useful for several reasons. First, it allows us to change an actual parameter if we need to. Second, we don't make a copy of the parameter, which could be large and take time. But we have to be aware of potentially unwanted changes.

// Let's see how we could swap two numbers using pass by reference. In this example, we're writing a function that swaps the values of the two integers passed into it. Take a look at main. X is 10 and y is 20. X and y are first displayed, and we get 10 20, just as we expect. Then we call swap and pass in x y. Then we display x and y again. Now they're 20 and 10. We swap them. Look at the function definition and notice that both a and b are reference parameters. So when I call this function with x and y, a and b become aliases to x and y, respectively. In the body of the function, I set temp to a, then a to b, and then b to temp. And we've swapped the two values that were passed into us. What do you think would happen if we didn't use pass by reference and we used pass by value? Well, the actuals would be copied, so we would swap the copies in the function and then return. When we get back to main, the actuals haven't changed since we were working with copies.
void swap(int &a, int &b);
int main () {
  int x {10};
  int y {20};
  cout << x << " " << y << endl; // 10 20
  swap(x, y);
  cout << x << " " << y << endl; // 20 10
  return 0;
}
void swap(int &a, int &b) {
  int temp = a;
  a = b;
  b = temp;
}

// Let's talk a bit about how parameters are passed into functions. Let's see what happens when we pass in a vector object to a function. In this case, I have a function called print, and it expects a vector of integers. Notice that in this case we're using pass by value. Inside the print function, I simply use a range based for loop and display the vector elements, pretty easy. But there's one issue with this code that is we're using pass by value. So we're making a complete copy of the vector object in the function. So the formal parameter v will be a copy of the actual parameter data in this case. In order to make a copy, we need to allocate storage and copy values over. If the vector is very large, we could run it to performance and storage issues. So why don't we use pass by reference instead so we can avoid the copy.
void print (std::vector<int> v);
int main() {
  std::vector<int> data {1, 2, 3, 4, 5};
  print(data); // 1 2 3 4 5
  return 0;
}
void print (std::vector<int> v) {
  for (auto i: v)
    std::cout << i << " ";
  std::cout << std::endl;
}
// Notice that now I'm using pass by reference since I've declared the formal parameter v as a reference parameter using the ampersand. The output of this program is exactly the same as before, but we avoid the storage and copy overhead of pass by value. But there is one issue, since I'm using pass by reference, the print function could change the value of the vector. It could even erase the entire vector. This is probably not a good idea. So let's tell the compiler that this is a constant reference. So now I've added the const keyword to the parameter. Now I've told the compiler to use pass by constant reference. So if I try to make any changes to the formal parameter v in the function, I will get a compiler error. This is really the best of both worlds since we're more efficiently passing information to the function, but we're still ensuring that the function can't change the data by mistake.
void print (const std::vector<int> $v);
int main() {
  std::vector<int> data {1, 2, 3, 4, 5};
  print(data); // 1 2 3 4 5
  return 0;
}
void print (const std::vector<int> $v) {
  v.at(0) = 1000; // error: assignment of read-only location ‘v.at(0)’
  for (auto i: v)
    std::cout << i << " ";
  std::cout << std::endl;
}

// Pass-by-reference
#include <iostream>
#include <string>
#include <vector>
using namespace std;
void pass_by_ref1(int &num);
void pass_by_ref2(string &s);
void pass_by_ref3(vector<string> &v);
void print_vector(const vector<string> &v);  // const
void pass_by_ref1(int &num) {
  num = 1000;
}
void pass_by_ref2(string &s) {
  s = "Changed";
}
void pass_by_ref3(vector<string> &v) {
  v.clear();  // delete all vector elements
}
void print_vector( const vector<string> &v)  {
  for (auto s: v) 
    cout << s << " ";
  cout << endl;
}
int main() {
  int num {10};
  int another_num {20};
  
  cout << "num before calling pass_by_ref1: " << num << endl;
  pass_by_ref1(num);
  cout << "num after calling pass_by_ref1: " << num << endl;
  
  cout << "\nanother_num before calling pass_by_ref1: " << another_num << endl;
  pass_by_ref1(another_num);
  cout << "another_num after calling pass_by_ref1: " << another_num << endl;

  string name {"Frank"};
  cout << "\nname before calling pass_by_ref2: " << name << endl;
  pass_by_ref2(name);
  cout << "name after calling pass_by_ref2: " << name << endl;

  vector<string> stooges {"Larry", "Moe", "Curly"};
  cout << "\nstooges before calling pass_by_ref3: ";
  print_vector(stooges);
  pass_by_ref3(stooges);
  cout << "stooges after calling pass_by_ref3: ";
  print_vector(stooges);
  
  cout << endl;
  return 0;
}

/*
Using Pass by Reference - Print a Guest List
In this exercise you will rewrite the previous Guest List exercise only this time with the use of reference variables.
In this exercise you will create a program that will be used to print the guest list to an event and then clear the guest list when the event is over.
Begin by completing the function prototypes print_guest_list and clear_guest_list which are both passed three string reference variables. Ensure that the variables cannot be modified within the print_guest_list function by using the keyword const in the parameter list.
Now that the function prototypes have been declared, at the bottom of the file define both functions.
Both the print_guest_list and clear_guest_list functions will be passed the string arguments guest_1, guest_2, and guest_3 which have all been provided to you.
The print_guest_list function should print the guest list in the order of guest_1, guest_2 , guest_3, with each entry being printed on a new line. For testing purposes, please ensure that a newline is printed after guest_3 either through the use of endl; or the newline character "\n". 
The clear_guest_list function should replace the string values contained within guest_1, guest_2, and guest_3 with the string value " ", a single space.
Now, from the function body of event_guest_list, make the following function calls in this order:
print_guest_list
clear_guest_list
print_guest_list
passing guest_1, guest_2, and guest_3 with each function call.
*/
#include <iostream>
#include <string>
#include <typeinfo>
using namespace std;
string print_guest_list(const string&, const string&, const string&);
void clear_guest_list(string&, string&, string&);
void event_guest_list() {
  string guest_1 {"Larry"};
  string guest_2 {"Moe"};
  string guest_3 {"Curly"};
  print_guest_list(guest_1, guest_2, guest_3);
  clear_guest_list(guest_1, guest_2, guest_3);
  print_guest_list(guest_1, guest_2, guest_3);
}
string print_guest_list(const string &guest_1, const string &guest_2, const string &guest_3) {
  cout << guest_1 << "\n" << guest_2 << "\n" << guest_3 << endl;

  string test_1 = typeid(guest_1).name(), test_2 = typeid(guest_2).name(), test_3 = typeid(guest_3).name();
  return test_1 + test_2 + test_3;
}
void clear_guest_list(string &guest_1, string &guest_2, string &guest_3) {
  guest_1 = guest_2 = guest_3 = " ";
}

// scope rules: C++ uses scope rules to determine when and where an identifier can be used. It uses static or lexical scoping, which means that the scope is determined the same way you read a program. C++ has two main scopes, local scope and global scope. Local or block scope refers to the visibility of an identifier that's been declared in a block that is a set of open or closed curly braces. Function parameters also have block scope. These identifiers are visible within the block in which they're declared. I talked about this earlier in the course, but it's important to understand it in the context of functions. When a function is called, you can think of the function as being activated. And the function parameters are bound to storage. They become alive, and their lifetime is while the function is executing. Once the function completes, the function is deactivated, and these variables and parameters are no longer alive. That doesn't mean that they're somehow marked as unavailable. It simply means that the compiler doesn't recognize them any longer, and the storage they were bound to will likely be reused. That means that the values of local variables are not preserved between function calls. If we have nested blocks, then statements in the inner blocks can see identifiers declared in the outer blocks, but outer blocks cannot see variables defined in the inner blocks. However, there is one type of variable whose value is preserved between function calls. This is a static local variable. It's a variable whose lifetime is the lifetime of the program, but it's only visible to the statements in the function body. These variables can come in very handy when you need to know a previous value in a function without having to pass it in all the time. Static local variables are only initialized once. If no initializer is provided, they're set to 0. Identifiers with global scope are identifiers that are declared outside of any function or class. These identifiers are visible to all parts of the program following their declaration. Best practice with identifiers with global scope is that it's okay to use global constants, but global variables should be avoided. The nice thing about languages like c++ and other languages that use static scoping is that the scoping is lexical, so it's as you read the code. It's not something that's happening at run time on the call stack. Languages that use dynamic scoping rules are a little harder to follow in this sense.

// Scope example
#include <iostream>
using namespace std;
void local_example();
void global_example();
void static_local_example();
int num {300};    // Global variable - declared outside any class or function
void global_example() {
  cout << "\nGlobal num is: " << num << " in global_example - start" << endl;
  num *= 2;
  cout << "Global num is: " << num << " in global_example - end" << endl;
}
void local_example(int x) {
  int num {1000};     // local to local_example
  cout << "\nLocal num is: " << num << " in local_example - start" << endl;
  num=x;
  cout << "Local num is: " << num << " in local_example - end" << endl;
  // num1 in main is not within scope - so it can't be used here.
}
void static_local_example() {
  static int num {5000};      // local to static_local_example static - retains it value between calls
  cout << "\nLocal static  num is: " << num << " in static_local_example - start" << endl;
  num += 1000;
  cout << "Local static  num is: " << num << " in static_local_example - end" << endl;
}
int main() {
    
  int num {100};  // Local to main
  int num1 {500}; // Local to main
  
  cout << "Local num is : " << num << " in main" << endl;
  
  {   // creates a new level of scope
    int num {200};  // local to this inner block
    cout << "Local num is: " << num << " in inner block in main" << endl;
    cout << "Inner block in main can see out - num1 is: " << num1 << endl;
  }
  
  cout << "Local num is : " << num << " in main" << endl;

  local_example(10);
  local_example(20);
  
  global_example();
  global_example();
  
  static_local_example();
  // static_local_example();
  // static_local_example();

  cout << endl;
  return 0;
}

// How do Function Calls Work? Functions use an area in memory called the 'function call stack' or program stack. A stack is analogous to a stack of books or a stack of dishes. If you place a book on top of the stack, then you must remove that book before removing any others. This is referred to as last in first out or LIFO. Stacks also use the terms push when you put an item on top of the stack and pop when you remove an item from the top of the stack. In the case of a c++ program, these items are called stack frames or activation records. All it is, is a collection of information that represents an active function. So this is where parameters are stored, local variables, the return address and more. Each time a function is called, an activation record is created, and it's pushed onto the call stack. When the function terminates, we pop its activation record off the call stack, and now the top of the stack is the function that just called the one we just popped off. The call stack works in a very orderly manner. You can't jump into or out of the middle of the stack. You must follow the lifo rules. Also remember that the call stack is finite in size. If you activate too many functions on the call stack, then it's possible to run out of stack space. This results in a stack overflow error, which is usually an unrecoverable error and your program will terminate.

/*
memory
------

|=================================|
|                                 |
|                                 |
|                                 |
|          heap                   |
|          free stors             |
|                                 |
|                                 |
|                                 |
|                                 |
|=================================|
|                                 |
|                                 |
|             stack               |
|                                 |
|                                 |
|=================================|
|          static                 |
|          variable               |
|=================================|
|                                 |
|         code area               |
|                                 |
|=================================|
*/

// How function calls work - The call stack
#include <iostream>
using namespace std;
void func2(int &x, int y, int z) {
  x+= y + z;
}
int func1(int a, int b) {
  int result {};
  result = a + b;
  func2(result, a , b);
  return result;
}
int main() {
  int x {10};
  int y{20};
  int z{};
  z = func1(x,y);
  cout << z << endl;
  return 0;
}
/*
What typically happens when main calls func1 (or any function calls another) ?
There are other ways to acheive the same results :)
  main:
    push space for the return value
    push space for the parameters
    push the return address
    transfer control to func1 (jmp)
  func1:
    push the address of the previous activation record
    push any register values that will need to be restored before returning to the caller
    perform the code in func1
    restore the register values
    restore the previous activation record (move the stack pointer)
    store any function result
    transfer control to the return address (jmp)
  main:
    pop the parameters
    pop the return value
*/

// inline function: As we saw in the previous video, function calls have a certain amount of overhead. We need to create an activation record, push it on the stack, deal with parameters, pop off the activation record when the function terminates and deal with the return addresses and return values. Although all of this can happen very quickly and efficiently, it still happens. Sometimes we have a very simple function and the function call overhead might be greater than the time spent executing the function. In cases such as these, we can suggest to the compiler that it generate inline code. Inline code is basically inline assembly code that avoids the function call overhead. Inline code is generally faster. But if you inline a function many times, then you're duplicating function code in many places and it could lead to larger binaries. That said, compilers are so sophisticated now that they'll likely inline code even without your suggestion.
inline int add_numbers(int a, int b) { // inline function definition
  return a + b;
}
int main() {
  int result {0};
  cout << add_numbers(10,20) << endl; // inline function call
  return 0;
}

// recursive function: A recursive function is a function that calls itself. The function can call itself directly or indirectly through another function. If we end up with two or more activation records on the stack for the same function, then we have recursion. Recursion is great for certain classes of problems. Recursive problem solving is something that most programmers have a little trouble doing when they first learn. That's normal. Eventually, you'll understand that Recursive Solutions make sense in certain cases. There are many types of recursive problems that lend themselves well to a recursive solution. In mathematics, we had factorial, Fibonacci numbers fractals and many more. In searching and sorting, we have binary search and search trees, depth-first search, graphs and also many more. There are also classic problems like the towers of Hanoi that can really be hard to solve with a non-recursive solution.
// Let's see how we can calculate the factorial of a number using recursion. Here we see the definition for factorial as you would find in a math book. Factorial is defined in terms of itself. That's what recursion is all about. We have a base case. So in this case, factorial of 0 is 1 by definition. And we have the recursive case. Factorial of n or n factorial is equal to n x n - 1 factorial, see the recursion there. Let's see how we can implement this in c++. So let's look at the code starting at main. We call factorial and pass in 1/8 of the factorial function. When the factorial function returns, the value returned will be output to the console. In this case, we expect 40320. Okay, so now let's look at the factorial 'function itself. First, we need to decide what types will accept the return. The factorial function can generate massively huge numbers. So in this case, I'm using unsigned long long as the return type and the parameter type. This can hold very, very large positive integers, but we can still get an overflow even with such a big number. If you look at the code for the factorial function, it looks exactly like the mathematical definition of factorial. We check a base case. In this case, if n is equal to 0, we return 1. Remember, the return knocks you out of the function immediately. Otherwise, we return the results of calling the factorial function again with n - 1. So in this case, it would be returned n x call factorial with n - 1. There's the recursion. The base case is super important since it's what stops the recursion. Otherwise, we would request indefinitely and eventually we would run out of stack space and get a stack overflow error.
0! = 1
n! = n * (n-1)!
- Base Case: factorial(0) = 1
- Recursive Case: factorial(n) = n * factorial(n-1)

unsigned long long factorial(unsigned long long n) {
  if (n == 0)
    return 1; // base case
  return n * factorial(n-1); // Recursive Case
}
int main() {
  cout << factorial(8) << endl; // 40320
  return 0;
}
// Let's look at calculating a Fibonacci number now. Here's the definition for Fibonacci number. There to base cases. Fibonacci of 00, and Fibonacci of 1 is 1. And the recursive case is Fibonacci of n is equal to Fibonacci of N - 1 + the Fibonacci of n - 2. Again, notice the recursive definition. Fibonacci is defined in terms of itself. I think you can see how to implement this in c++. Again, I've decided to use unsigned long long since Fibonacci can also produce huge numbers. Notice in the main, I call Fibonacci. And the result I expect back is 832040. Now let's look at the Fibonacci function. Notice the handling of the bass cases. If n is less than or equal to 1, then we simply return n. So when n is 0., we return 0. And when n is 1, we return 1. That handles both base cases in one step. We could easily rewrite this condition to explicitly check n equals 0 and n equals 1, but this achieve the same result. This base cases with stops the recursion. If n is not 0 or 1, then we call Fibonacci again with both pieces of the problem definition. Eventually, recursion will stop and the result will be returned to main. Notice how much the code looks like the mathematical definition of Fibonacci. This is by design.
Fib (0) = 0
Fib (1) = 1
Fib (n) = Fib (n-1) + Fib (n-2)
- Base Case: Fib(0) = 0, Fib(1) = 1
- Recursive Case: Fib(n) = Fib(n-1) + Fib(n-2)

unsigned long long fibonacci(unsigned long long n) {
  if (n <= 1)
    return n; // base case
  return fibonacci(n-1) + fibonacci(n-2); // recursive case
}
int main() {
  cout << fibonacci(30) << endl; // 832040
  return 0;
}
// Let me give you a few thoughts on recursion. Remember, recursion is a form of iteration. So anything that can be done recursively can also be done with the iteration and vice versa. Use recursion only when it makes sense. The problem must lend itself to a recursive solution. Don't use recursion to count from 1 to 10. Remember the base cases. They are with stops the recursion and are super important. Because of the call stack, recursion can be quite resource-intensive especially if you have a very deep recursion. It's not uncommon when you're first learning recursion to recusing definitely and run out of stacks space resulting in a stack overflow error. That's perfectly fine. This is how you learn. I can't tell you how many times in my career I've seen recursive functions rewritten to iterative solutions because of resource issues. Generally, an iterative solution to a recursive define problem is less elegant and more difficult to understand in code. But sometimes we have to meet non-functional requirements and that's what it takes.

// Recursion - Factorial
#include <iostream>
using namespace std;
unsigned long long factorial(unsigned long long);
unsigned long long factorial(unsigned long long n) {
  if (n == 0)
      return 1;	             // base case
  return n * factorial(n-1); // recursive case
}
int main() {
  cout << factorial(3) << endl;       // 6
  // cout << factorial(8) << endl;     // 40320
  // cout << factorial(12) << endl;   // 479001600
  // cout << factorial(20) << endl;   // 2432902008176640000
  return 0;
}

// Recursion - Fibonacci
#include <iostream>
using namespace std;
#include <iostream>
using namespace std;
unsigned long long fibonacci(unsigned long long n);
unsigned long long fibonacci(unsigned long long n) {
  if (n <= 1)
      return n;	             // base cases
  return fibonacci(n-1) + fibonacci(n-2); // recursion
}
int main() {
  cout << fibonacci(5) << endl;   // 5
  cout << fibonacci(30) << endl;	// 832040 
  cout << fibonacci(40) << endl; // 102334155
  return 0;
}

// Challenge
/*
Recall the challenge from Section 9 below.
Your challenge for section 11 is to modularize your solution to the Section 9
challenge by refactoring your solution so that it uses uses functions.

You decide how to modularize the program.
you can use my solution which is included in this file, or modularize your solution.

Here are a few hints:
  - Create functions for each major function
  - Keep the functions small
  - Remember the Boss/Worker analogy
  - Keep the vector declaration in the main function and pass the vector object
    to any function that requires it

  DO NOT move the vector object outside main and make it a global variable.

  - You can start by defining a function that displays the menu
  - You can then define a function that reads the selection from the user and returns it in uppercase
  - Create functions for each menu option
  - Create functions that display the list of numbers, calculates the mean and so forth
    
Take it one function at a time and take your time.
If you get frustrated, take a break -- this isn't as easy as it looks the first time you do it!

Finally,  don't forget to use function prototypes!

Good luck -- I know you can do it!
*/
/*    
This challenge is about using a collection (list) of integers and allowing the user
to select options from a menu to perform operations on the list.

Your program should display a menu options to the user as follows:

P - Print numbers
A - Add a number
M - Display mean of the numbers
S - Display the smallest number
L - Display the largest number
Q - Quit

Enter your choice:
    
The program should only accept valid choices from the user, both upper and lowercase selections should be allowed.
If an illegal choice is made, you should display, "Unknown selection, please try again" and the menu options should be
displayed again.

If the user enters 'P' or 'p', you should display all of the elements (ints) in the list.
If the list is empty you should display "[] - the list is empty"
If the list is not empty then all the list element should be displayed inside square brackets separated by a space. 
For example, [ 1 2 3 4 5 ]
      
If the user enters 'A' or 'a' then you should prompt the user for an integer to add to the list 
which you will add to the list and then display it was added. For example, if the user enters 5
You should display, "5 added".
Duplicate list entries are OK

If the user enters 'M' or 'm'  you should calculate the mean or average of the elements in the list and display it.
If the list is empty you should display, "Unable to calculate the mean - no data"

If the user enters 'S' or 's' you should display the smallest element in the list.
For example, if the list contains [2 4 5 1],  you should display, "The smallest number is 1"
If the list is empty you should display, "Unable to determine the smallest number - list is empty"

If the user enters 'L' or 'l' you should display the largest element in the list
For example, if the list contains [2 4 5 1], you should display, "The largest number is 5"
If the list is empty you should display, "Unable to determine the largest number - list is empty"

If the user enters 'Q' or 'q' then you should display 'Goodbye" and the program should terminate.

Before you begin. Write out the steps you need to take and decide in what order they should be done.
Think about what loops you should use as well as what you will use for your selection logic.

This exercise can be challenging! It may likely take a few attempts before you complete it -- that's OK!

Finally, be sure to test your program as you go and at the end.

Hint: Use a vector!

Additional functionality if you wish to extend this program.

- search for a number in the list and if found display the number of times it occurs in the list
- clearing out the list (make it empty again) (Hint: the vector class has a .clear() method)
- don't allow duplicate entries
- come up with your own ideas!

Good luck!
*/

#include <iostream>
#include <vector>
#include <cctype>   // for toupper
using namespace std;
// Prototypes for displaying the menu and getting user selection
void display_menu();
char get_selection();
// Menu handling function prototypes
void handle_display(const vector<int> &v);
void handle_add(vector<int> &v);
void handle_mean(const vector<int> &v);
void handle_smallest(const vector<int> &v);
void handle_largest(const vector<int> &v);
void handle_find(const vector<int> &v);
void handle_quit();
void handle_unknown();
// Prototypes for functions that work with the list
// to display it, calculate mean, etc.
void display_list(const vector<int> &v);
double calculate_mean(const vector<int> &v);
int get_smallest(const vector<int> &v);
int get_largest(const vector<int> &v);
bool find(const vector<int> &v, int target);
int main() {
  
  vector<int> numbers;        // our list of numbers
  char selection {};
  
  do {
    display_menu();
    selection = get_selection();
    switch (selection) {
      case 'P': 
          handle_display(numbers); 
          break;
      case 'A': 
          handle_add(numbers);
          break;
      case 'M':
          handle_mean(numbers);
          break;
      case 'S':
          handle_smallest(numbers);
          break;
      case 'L':
          handle_largest(numbers);
          break;
      case 'F':
          handle_find(numbers);
          break;
      case 'Q':
          handle_quit();
          break;
      default:
          handle_unknown();
    }
  } while (selection != 'Q');
  cout << endl;
  return 0;
}
/***************************************************************
This function displays the menu to the console.
***************************************************************/
void display_menu() {
  cout << "\nP - Print numbers" << endl;
  cout << "A - Add a number" << endl;
  cout << "M - Display mean of the numbers" << endl;
  cout << "S - Display the smallest number" << endl;
  cout << "L - Display the largest number"<< endl;
  cout << "F - Find a number" << endl;
  cout << "Q - Quit" << endl;
  cout << "\nEnter your choice: ";
}
/***************************************************************
This function simply reads a character selection from
stdin and returns it as upper case.
***************************************************************/
char get_selection() {
  char selection {};
  cin >> selection;
  return toupper(selection);
}
/***************************************************************
This function is called when the user selects the display list
option from the main menu.
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
***************************************************************/
void handle_display(const vector<int> &v) {
  if (v.size() == 0)
    cout << "[] - the list is empty" << endl;
  else    
    display_list(v);
}
/***************************************************************
This function is called when the user selects add a number
to the list from the main menu
Note that the vector parameter must NOT be const since
it will be changing the list of numbers
***************************************************************/
void handle_add(vector<int> &v) {
  int num_to_add {};
  cout << "Enter an integer to add to the list: ";
  cin >> num_to_add;
  v.push_back(num_to_add);
  cout << num_to_add << " added" << endl;
}
/***************************************************************
This function is called when the user selects calculate the mean
from the main menu
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
***************************************************************/
void handle_mean(const vector<int> &v) {
  if (v.size() == 0)
    cout << "Unable to calculate mean - list is empty" << endl;
  else    
    cout << "The mean is " << calculate_mean(v) << endl;
}
/***************************************************************
This function is called when the user selects the smallest 
option from the main menu
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
***************************************************************/
void handle_smallest(const vector<int> &v) {
  if (v.size() == 0)
    cout << "Unable to determine the smallest - list is empty" << endl;
  else    
    cout << "The smallest element in the list is " << get_smallest(v) << endl;
}
/***************************************************************
This function is called when the user selects the largest 
option from the main menu
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
***************************************************************/
void handle_largest(const vector<int> &v) {
  if (v.size() == 0)
    cout << "Unable to determine the largest - list is empty" << endl;
  else    
    cout << "The largest element in the list is " << get_largest(v) << endl;
}
/***************************************************************
This function is called when the user selects the find 
option from the main menu
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
***************************************************************/
void handle_find(const vector<int> &v) {
  int target{};
  cout << "Enter the number to find: ";
  cin >> target;
  if ( find(v, target)) 
    cout << target << " was found" << endl;
  else
    cout << target << " was not found" << endl;
}
/***************************************************************
This function is called when the user selects the quit 
option from the main menu
***************************************************************/
void handle_quit() {
  cout << "Goodbye" << endl;
}
/***************************************************************
This function is called whenever the user enters a selection
and we don't know how to handle it.
It is not one of the valid options in the main menu
***************************************************************/
void handle_unknown() {
  cout << "Unknown selection - try again" << endl;
}
/***************************************************************
This function expects a list of integers as a vector
and displays all the integers in the list in square brackets
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
***************************************************************/
void display_list(const vector<int> &v) {
  cout << "[ ";
  for (auto num: v)
    cout << num << " ";
  cout << "]" << endl;
}
/***************************************************************
This function expects a list of integers as a vector
and returns the calculated mean
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
Note: the list must not be empty
***************************************************************/
double calculate_mean(const vector<int> &v) {
  int total {};
  for (auto num: v)
    total += num;
  return static_cast<double>(total)/v.size();
}
/***************************************************************
This function expects a list of integers as a vector
and returns the largest integer in the list
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
Note: the list must not be empty
***************************************************************/
int get_largest(const vector<int> &v) {
  int largest = v.at(0);
  for (auto num: v) 
    if (num > largest)
      largest = num;
  return largest;
}
/***************************************************************
This function expects a list of integers as a vector
and returns the smallest integer in the list
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
Note: the list must not be empty
***************************************************************/
int get_smallest(const vector<int> &v) {
  int smallest = v.at(0);
  for (auto num: v) 
    if (num < smallest)
      smallest = num;
  return smallest;
}
/***************************************************************
This function searches the list of integers as a vector
for the given integer target
If the target is found in the vector true is returned
If the target is not found in the vector false is returned
Note that the parameter is a const reference parameter
this function should NOT modify the list of numbers
***************************************************************/
bool find(const vector<int> &v, int target) {
  for (auto num: v)
    if (num == target)
      return true;
  return false;
}

/*
Implementing a Recursive Function - Save a Penny
In this exercise you will create a program that calculates the total_amount of money that will be accumulated if you start with a penny and double it everyday for n number of days.

E.g.

Day 1: $0.01

Day 2: $0.02

Day 3: $0.04

. . .

. . .

. . .

Day 16: $327.68

Day 17: $655.36

Day 18: $1310.72

For this program, assume that all money will be represented as a double value and so a penny will be represented as 0.01.

Begin by completing the function prototype a_penny_doubled_everyday which is passed an int and a double.

Now that the function prototype is declared, at the bottom of the file define the function.

The function should return the total_amount accumulated after n number of days. For example, if n = 18, the function should return 1310.72. The function should be able to calculate the total_amount for any number of days starting with any amount however the default amount should be a penny.

Now, from the function body of amount_accumulated, declare and initialize the variable total_amount by calling the a_penny_doubled_everyday function for n = 25 days.

Note: if you get an error such as "Oops, there was a problem on our end". This may mean that you have infinite recursion in your solution. Make sure your logic checks for a base case and doesn't recurse forever.
*/
#include <iostream>
#include <iomanip>
using namespace std;
int function_activation_count {0};
double a_penny_doubled_everyday(int, double amount = 0.01);
void amount_accumulated() {
  double total_amount = a_penny_doubled_everyday(25);
  cout <<  "If I start with a penny and doubled it every day for 25 days, I will have $" << setprecision(10) << total_amount;
}
double a_penny_doubled_everyday(int n, double amount) {
  function_activation_count++;
  if (n <= 1)
    return amount;
  return a_penny_doubled_everyday(--n, amount*2);  
}
int test_function_activation_count() {
  return function_activation_count;
}