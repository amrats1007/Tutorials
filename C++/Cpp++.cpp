// Compiler Optimalizations

/*
1. Dead code elimination

>>> This process helps improve the overall performance and efficiency of the compiled program by reducing the executable's size, improving runtime performance, and eliminating unnecessary computations.

>>> In C++, dead code elimination is typically performed by modern optimizing compilers.

>>> Dead code elimination typically occurs during the optimization phase of compilation.

>>> The following are some common techniques used for dead code elimination in C++ compilers: Static Analysis, Usage Analysis, Reachability Analysis, Conditional Branch Analysis, Constant Propagation, Unused Variable Elimination, Function Inlining, Optimistic Assumptions and Whole Program Optimization.

>>> Here's a general overview of how dead code elimination works in a C++ compiler: Parsing and Control Flow Analysis, Liveness Analysis, Marking Dead Code, and Removal of Dead Code.

>>> It's important to note that dead code elimination is a complex process, and different compilers may implement their own strategies or variations of the techniques mentioned above. Additionally, the level of optimization performed by a compiler can be controlled through compiler flags and optimization settings.

>>> Additionally, dead code elimination can be influenced by compiler settings and optimization levels. Higher optimization levels, such as [-O2] or [-O3], may enable more aggressive dead code elimination techniques.
*/

/*
2. Constant folding

> In C++, constant folding can be performed by the compiler when it can determine that the values involved in an expression are known at compile-time and will not change during program execution. The compiler analyzes the code and replaces the expression with its evaluated result, effectively replacing the computation with a constant value.

> When the compiler encounters constant expressions, such as mathematical operations involving literals or known variables, it can perform the calculations and substitute the result directly into the code. This eliminates the need to perform the computations at runtime, reducing the execution time and potentially improving the overall performance of the program.

> Constant folding can also handle more complex expressions, such as those involving variables and constants. However, the compiler can only perform constant folding if it can determine that the involved variables are constants or have constant values at compile time. If the variable values cannot be determined at compile time, the folding cannot be applied.

> By performing constant folding, the compiler eliminates unnecessary runtime computations and reduces the program's memory and CPU requirements, leading to more efficient code execution.
*/

// example 1
  int result = 5 + 7;
  // During compilation, the compiler can determine that both operands of the addition operator are constants. Therefore, it can perform the addition at compile-time and replace the expression with the result:
  int result = 12;

// example 2
  int result = 2 + 3 * 4; 
  // During compilation, the compiler can apply constant folding to simplify the expression 2 + 3 * 4 to 14. The resulting assembly code would then assign the value 14 directly to the result variable, avoiding the need to perform the arithmetic operations at runtime.

// example 3
  #include <iostream>
  int main() {
    const int a = 5;
    const int b = 10;
    const int result = a + b; // Constant expression: 5 + 10
    std::cout << "Result: " << result << std::endl;
    return 0;
  }
  // In this code, the expression a + b is a constant expression because both a and b are declared as const int and have known values at compile-time. During the compilation process, the compiler will evaluate a + b and replace the result with the computed value 15. As a result, the compiled code will be equivalent to:
  #include <iostream>
  int main() {
    const int a = 5;
    const int b = 10;
    const int result = 15; // The expression is folded to its computed value
    std::cout << "Result: " << result << std::endl;
    return 0;
  }

/*
3. Loop unrolling

> Manual Loop Unrolling: it involves rewriting the loop body multiple times, each iteration handling multiple loop iterations.

> Automatic Loop Unrolling: Modern C++ compilers can automatically apply loop unrolling optimizations based on the optimization level specified during compilation. The specific behavior and effectiveness of automatic loop unrolling may vary across different compilers. To enable loop unrolling with popular compilers like GCC or Clang, you can use compiler-specific flags such as (-funroll-loops) for GCC or Clang. For example: [g++ -O2 -funroll-loops myfile.cpp -o myfile] The (-O2) flag specifies the optimization level, and (-funroll-loops) requests loop unrolling.

> Loop unrolling can be beneficial for performance-critical code that contains loops with a small number of iterations. By unrolling the loop, we can reduce the number of loop control instructions and improve the efficiency of the loop body. However, it's important to note that the benefits of loop unrolling can vary depending on the specific computation and the compiler's optimization capabilities.
*/

// example 1
  #include <iostream>
  // Original loop
  void originalLoop() {
    for (int i = 0; i < 10; i++) {
        std::cout << "Iteration: " << i << std::endl;
    }
  }
  // Unrolled loop
  void unrolledLoop() {
    for (int i = 0; i < 10; i += 2) {
      std::cout << "Iteration: " << i << std::endl;
      std::cout << "Iteration: " << (i + 1) << std::endl;
    }
  }
  int main() {
    std::cout << "Original Loop:" << std::endl;
    originalLoop();
    std::cout << std::endl;
    std::cout << "Unrolled Loop:" << std::endl;
    unrolledLoop();
    return 0;
  }
  // In the above example, the original loop iterates 10 times, whereas the unrolled loop performs two iterations at a time, reducing the number of loop control instructions.

// example 2
  #include <iostream>
  // Original loop
  void originalLoop() {
    int sum = 0;
    for (int i = 0; i < 10; i++) {
      sum += i;
    }
    std::cout << "Sum (original loop): " << sum << std::endl;
  }
  // Unrolled loop
  void unrolledLoop() {
    int sum = 0;
    for (int i = 0; i < 10; i += 2) {
      sum += i + (i + 1);
    }
    std::cout << "Sum (unrolled loop): " << sum << std::endl;
  }
  int main() {
    std::cout << "Original Loop:" << std::endl;
    originalLoop();
    std::cout << std::endl;
    std::cout << "Unrolled Loop:" << std::endl;
    unrolledLoop();
    return 0;
  }
  // By unrolling the loop, we reduce the overhead of loop control instructions and improve the efficiency of the summation operation. Keep in mind that the benefits of loop unrolling can vary depending on the specific computation and the compiler's optimization capabilities.

/**************************************************************************************************************************************/

/*
macro

In C++, a macro is a fragment of code that is given a name and can be reused throughout the code. Macros are defined using the #define preprocessor directive and are expanded by the preprocessor. When the preprocessor encounters a macro in the code, it replaces the macro with its corresponding value or expression, which can be a simple constant, a complex expression, or even a function call. Macros can be used to simplify repetitive or complex code, improve code readability, or create code that is specific to a particular platform or environment. However, improper use of macros can lead to code that is difficult to read, understand, and maintain.
*/

// example
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
/*
In this example, we define two macros using the #define directive. The first macro defines the constant value of pi as 3.14159. The second macro defines a function-like macro called SQUARE that takes a parameter x and computes the square of it using the expression ((x) * (x)). In the main function, we declare a variable radius and initialize it to 5.0. We then compute the area of a circle with radius using the formula PI * radius^2, where PI is substituted with its value of 3.14159 and SQUARE(radius) is substituted with its expression of radius * radius.
*/

/**************************************************************************************************************************************/

// Preprocessor Tasks

/*
1. Macro substitution

is a process in C++ preprocessor where the preprocessor replaces all occurrences of a macro in the code with its corresponding value or expression defined by the programmer. When a macro is defined using the #define directive, the preprocessor assigns it a name and a value. Later, when the macro is used in the code, the preprocessor replaces the macro name with its corresponding value or expression before the actual compilation of the code begins. This is known as macro substitution.
*/

// example
#define MAX(a, b) ((a) > (b) ? (a) : (b))
int x = 10, y = 20;
int max_value = MAX(x, y);
int x = 10, y = 20;
int max_value = ((x) > (y) ? (x) : (y));
/*
This macro defines a function-like macro that takes two parameters a and b, and returns the maximum of the two values. The macro expands to an expression using the ternary operator. The preprocessor replaces the macro MAX(x, y) with its corresponding expression ((x) > (y) ? (x) : (y))
*/

/*
2. Conditional compilation

> it is a feature of the C++ preprocessor that allows the compilation of different sections of code based on a set of predefined conditions. Conditional compilation directives, such as #if, #ifdef, #ifndef, #else, and #endif, are used to define these conditions. The preprocessor evaluates these directives and determines which sections of code should be compiled based on the result of the evaluation.

> Thus, conditional compilation allows us to create code that is tailored to specific requirements or environments, making the code more flexible and efficient. #ifndef is a preprocessor directive that checks if a macro has not been defined. If the macro has not been defined, the code block between #ifndef and #endif is included in the compiled code. In the example provided, #ifndef DEBUG_MODE is used to check if the DEBUG_MODE macro has not been defined. If the macro has not been defined, the code block that outputs the sum of x and y is included in the compiled code. If the macro has been defined, the code block that includes additional debugging information is included instead. Note that #ifndef is often used in conjunction with #define and #ifdef to create conditional compilation statements. In this example, we use #define to define the DEBUG_MODE macro and #ifdef and #endif to create a conditional block of code that is only included in the compiled code when DEBUG_MODE is defined or not.
*/

// example 1
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
/*
let's say we have a program that can be compiled in debug or release mode. In debug mode, we want to include additional code for debugging purposes, while in release mode, we want to optimize the code for performance. In this example, we define a macro named DEBUG_MODE that is set to 1 for debug mode, and undefined for release mode. We use the #ifdef directive to check if the macro is defined and include additional code for debugging purposes if it is. We also use the #ifndef directive to check if the macro is not defined and include code for release mode if it is not. When we compile the code in debug mode, the preprocessor defines the DEBUG_MODE macro with the value 1 and includes the additional debugging code. When we compile the code in release mode, the preprocessor does not define the DEBUG_MODE macro, and excludes the additional debugging code, while including the optimized code.
*/

// example 2
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
/*
In this example, we define a macro named OS_NAME that is used to store the name of the operating system on which the code is running. We use conditional compilation to determine the value of this macro based on the operating system. We check for the presence of predefined macros that indicate the operating system being used, such as __unix__, _WIN32, and __APPLE__. If one of these macros is defined, the corresponding value is assigned to OS_NAME. If none of these macros are defined, the value "Unknown" is assigned to OS_NAME. When we run the program, it prints the message "This code is running on <OS_NAME> operating system." where <OS_NAME> is the name of the operating system on which the code is running. The value of OS_NAME will depend on the operating system being used. This example demonstrates how conditional compilation can be used to create code that is specific to a particular platform or environment. By using different preprocessor directives for different operating systems, we can create code that is optimized for the specific requirements of each platform.
*/
  
// example 3
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
/*
In this example, we define a macro named PLATFORM_NAME that is used to store the name of the operating system on which the code is compiled. The macro is defined using conditional compilation directives, which check whether the _WIN32 macro is defined or not. The Microsoft Visual C++ compiler on Windows platforms predefines the _WIN32 macro. If this macro is defined, the preprocessor expands the #ifdef directive and defines the PLATFORM_NAME macro with the value "Windows". Otherwise, the preprocessor expands the #else directive and defines the PLATFORM_NAME macro with the value "Unknown".
*/

/**************************************************************************************************************************************/

