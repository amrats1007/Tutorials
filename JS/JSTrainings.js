/* Udemy-Jonas.Schmedtmann-The.Complete.JavaScript.Course */
/**********************************************************/

// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/
const massMark1 = 95;
const heightMark1 = 1.88;
const massJohn1 = 85;
const heightJohn1 = 1.76;
const BMIMark1 = massMark1 / heightMark1 ** 2;
const BMIJohn1 = massJohn1 / (heightJohn1 * heightJohn1);
const markHigherBMI1 = BMIMark1 > BMIJohn1;
console.log(BMIMark1, BMIJohn1, markHigherBMI1);

// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/
const massMark2 = 78;
const heightMark2 = 1.69;
const massJohn2 = 92;
const heightJohn2 = 1.95;
const BMIMark2 = massMark2 / heightMark2 ** 2;
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
console.log(BMIMark2, BMIJohn2);
if (BMIMark2 > BMIJohn2) {
  console.log(`Mark's BMI (${BMIMark2}) is higher than John's (${BMIJohn2})!`);
} else {
  console.log(`John's BMI (${BMIJohn2}) is higher than Marks's (${BMIMark2})!`);
}

// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/
const scoreDolphins1 = (96 + 108 + 89) / 3;
const scoreKoalas1 = (88 + 91 + 110) / 3;
console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas1 > scoreDolphins1) {
  console.log("Koalas win the trophy 🏆");
} else {
  console.log("Both win the trophy!");
}
// BONUS 1-2
const scoreDolphins2 = (97 + 112 + 80) / 3;
const scoreKoalas2 = (109 + 95 + 50) / 3;
console.log(scoreDolphins2, scoreKoalas2);
if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas2 > scoreDolphins2 && scoreKoalas2 >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins2 === scoreKoalas2 && scoreDolphins2 >= 100 && scoreKoalas2 >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}

// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'
TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
*/
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Coding Challenge #5
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/
const calcAverage = (a, b, c) => (a + b + c) / 3;
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111); // prove that calcAverage() and checkWinner() are standalone function
// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Coding Challenge #6
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
TEST DATA: 125, 555 and 44
HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
GOOD LUCK 😀
*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}; // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// Coding Challenge #7
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/
const mark01 = {
  fullName: "Mark01 Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john02 = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark01.calcBMI();
john02.calcBMI();
console.log(mark01.bmi, john02.bmi);
if (mark01.bmi > john02.bmi) {
  console.log(`${mark01.fullName}'s BMI (${mark01.bmi}) is higher than ${john02.fullName}'s BMI (${john02.bmi})`);
} else if (john02.bmi > mark01.bmi) {
  console.log(`${john02.fullName}'s BMI (${john02.bmi}) is higher than ${mark01.fullName}'s BMI (${mark01.bmi})`);
}

// Coding Challenge #8
/*
Let's improve Steven's tip calculator even more, this time using loops!
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
	4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
	4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
	4.3. Call the function with the 'totals' array
GOOD LUCK 😀
*/
const calcTip01 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills01 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips01 = [];
const totals01 = [];
for (let i = 0; i < bills01.length; i++) {
  const tip = calcTip01(bills01[i]); // const
  tips01.push(tip);
  totals01.push(tip + bills01[i]);
}
console.log(bills01, tips01, totals01);
const calcAverage09 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage09([2, 3, 7]));
console.log(calcAverage09(totals01));
console.log(calcAverage09(tips01));

// PROBLEM SOLVING
/*
PROBLEM 1:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error." const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
1) Understanding the problem
- What is temp amplitude? Answer: difference between the highest and lowest temp
- How to compute max and min temperatures?
- What's a sensor error? And what do?
2) Breaking up into sub-problems
- How to ignore errors?
- Find max value in temp array
- Find min value in temp array
- Subtract min from max (amplitude) and return it
*/
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/*
PROBLEM 2:
Function should now receive 2 arrays of temps
1) Understanding the problem
- With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
2) Breaking up into sub-problems
- Merge 2 arrays
*/
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX
    value: Number(prompt("Degrees celsius:")),
  };

  // B) FIND - console
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  debugger; // B) FIND - debugger is a keyword that tells the browser to pause the execution of the code and to open the debugger tool
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Coding Challenge #9
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*
1) Understanding the problem
- Array transformed to string, separated by ...
- What is the X days? Answer: index + 1
2) Breaking up into sub-problems
- Transform array into string
- Transform each element to string with ºC
- Strings needs to contain day (index + 1)
- Add ... between elements and start and end of string
- Log string to console
*/
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/* JavaScript.info */
/*******************/

console.log("" + 1 + 0); // "10" (1)
console.log("" - 1 + 0); // -1 (2)
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // "  -9  5" (3)
console.log("  -9  " - 5); // -14 (4)
console.log(null + 1); // 1 (5)
console.log(undefined + 1); // NaN (6)
console.log(" \t \n" - 2); // -2 (7)
// (1) The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
// (2) The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
// (3) The addition with a string appends the number 5 to the string.
// (4) The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
// (5) null becomes 0 after the numeric conversion.
// (6) undefined becomes NaN after the numeric conversion.
// (7) Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

console.log(5 > 4); // → true
console.log("apple" > "pineapple"); // → false
console.log("2" > "12"); // → true
console.log(undefined == null); // → true
console.log(undefined === null); // → false
console.log(null == "\n0\n"); // → false
console.log(null === +"\n0\n"); // → false
// (1) Obviously, true.
// (2) Dictionary comparison, hence false. "a" is smaller than "p".
// (3) Again, dictionary comparison, first char "2" is greater than the first char "1".
// (4) Values null and undefined equal each other only.
// (5) Strict equality is strict. Different types from both sides lead to false.
// (6) Similar to (4), null only equals undefined.
// (7) Strict equality of different types.

alert(alert(1) || 2 || alert(3)); // The answer: first 1, then 2.
/*
The call to alert does not return a value. Or, in other words, it returns undefined.
The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3).
*/

alert(alert(1) && alert(2));
/*
The answer: 1, and then undefined.
alert( alert(1) && alert(2) );
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).
Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. And && looks for a falsy value and returns it, so it’s done.
*/

alert(null || (2 && 3) || 4);
/*
The answer: 3.
alert( null || 2 && 3 || 4 );
The precedence of AND && is higher than ||, so it executes first.
The result of 2 && 3 = 3, so the expression becomes:
null || 3 || 4
Now the result is the first truthy value: 3.
*/

// Write an if condition to check that age is between 14 and 90 inclusively. “Inclusively” means that age can reach the edges 14 or 90.
if (age >= 14 && age <= 90)
  if (!(age >= 14 && age <= 90))
    if (age < 14 || age > 90)
      if (-1 || 0)
        // Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: the first one using NOT !, the second one – without it.
        // Which of these alerts are going to execute? What will the results of the expressions be inside if(...)?
        alert("first"); // Runs.The result of -1 || 0 = -1, truthy
if (-1 && 0) alert("second"); // Doesn't run. -1 && 0 = 0, falsy
if (null || (-1 && 1)) alert("third"); // Executes. Operator && has a higher precedence than || so -1 && 1 executes first, giving us the chain: null || -1 && 1  ->  null || 1  ->  1

// Write the code which asks for a login with prompt. If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”. The password is checked as follows: If it equals “TheMaster”, then show “Welcome!” Another string – show “Wrong password”, For an empty string or cancelled input, show “Canceled” The schema: Please use nested if blocks. Mind the overall readability of the code. Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.
let userName = prompt("Who's there?", "");
if (userName === "Admin") {
  let pass = prompt("Password?", "");
  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}

// From 1 to 4
let i77 = 0;
while (++i77 < 5) alert(i77);
// The first value is i = 1, because ++i first increments i and then returns the new value. So the first comparison is 1 < 5 and the alert shows 1. Then follow 2, 3, 4… – the values show up one after another. The comparison always uses the incremented value, because ++ is before the variable. Finally, i = 4 is incremented to 5, the comparison while(5 < 5) fails, and the loop stops. So 5 is not shown.

// From 1 to 5
let i73 = 0;
while (i73++ < 5) alert(i73);
// The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5). But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1. Then follow 2, 3, 4… Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence, the comparison is actually while(4 < 5) – true, and the control goes on to alert. The value i = 5 is the last one, because on the next step while(5 < 5) is false.

// from 0 to 4 in both cases.
for (let i = 0; i < 5; ++i) alert(i);
for (let i = 0; i < 5; i++) alert(i);
// That can be easily deducted from the algorithm of for: Execute once i = 0 before everything (begin). Check the condition i < 5 If true – execute the loop body alert(i), and then i++ The increment i++ is separated from the condition check (2). That’s just another statement. The value returned by the increment is not used here, so there’s no difference between i++ and ++i.

/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
*/
let num11;
do {
  num11 = prompt("Enter a number greater than 100?", 0);
} while (num11 <= 100 && num11);

/*
Output prime numbers
An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
Write the code which outputs prime numbers in the interval from 2 to n.
For n = 10 the result will be 2,3,5,7.
P.S. The code should work for any n, not be hard-tuned for any fixed value.
There are many algorithms for this task.
Let’s use a nested loop:
For each i in the interval {
	check if I have a divisor from 1..i
	if yes => the value is not a prime
	if no => the value is a prime, show it
}
*/
// The code using a label:
let nu = 10;
nextPrime: for (let i = 2; i <= nu; i++) {
  // for each i...
  for (let j = 2; j < i; j++) {
    // look for a divisor.
    if (i % j === 0) continue nextPrime; // not a prime, go next i
  }
  alert(i); // a prime
} // There’s a lot of space to optimize it. For instance, we could look for the divisors from 2 to square root of i. But anyway, if we want to be really efficient for large intervals, we need to change the approach and rely on advanced maths and complex algorithms like Quadratic sieve, General number field sieve etc.
// The code using tow func:
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i); // a prime
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
} // The second variant is easier to understand, isn’t it? Instead of the code piece we see a name of the action (isPrime). Sometimes people refer to such code as self-describing. So, functions can be created even if we don’t intend to reuse them. They structure the code and make it readable.

// Write the code using if..else which would correspond to the following switch:
let browser;
switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;
  default:
    alert("We hope that this page looks ok!");
} // To precisely match the functionality of switch, the if must use a strict comparison '==='. For given strings though, a simple '==' works too.
if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
} // Please note: the construct browser === 'Chrome' || browser === 'Firefox' … is split into multiple lines for better readability. But the switch construct is still cleaner and more descriptive.

// Rewrite the code below using a single switch statement:
let ae = +prompt("a?", "");
if (ae === 0) {
  alert(0);
}
if (ae === 1) {
  alert(1);
}
if (ae === 2 || ae === 3) {
  alert("2,3");
} // The first two checks turn into two case. The third check is split into two cases:
let ap = +prompt("a?", "");
switch (ap) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
} // Please note: the break at the bottom is not required. But we put it to make the code future-proof. In the future, there is a chance that we’d want to add one more case, for example case 4. And if we forget to add a break before it, at the end of case 3, there will be an error. So that’s a kind of self-insurance.

// difference! In both cases, return confirm('Did parent allow you?') executes exactly when the if condition is falsy.
function checkAge71(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}
function checkAge72(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}

// Using a question mark operator ? - Using OR ||
function checkAge73(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
function checkAge74(age) {
  return age > 18 || confirm("Did parents allow you?");
}

// Write a function min(a,b) which returns the least of two numbers a and b.
function min1(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
function min2(a, b) {
  return a < b ? a : b;
}

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(xn, nx) {
  let result = xn;
  for (let i = 1; i < nx; i++) {
    result *= xn;
  }
  return result;
}
let xn = prompt("x?", "");
let nx = prompt("n?", "");
if (nx < 1) {
  alert(`Power ${nx} is not supported, use a positive integer`);
} else {
  alert(pow(xn, nx));
}

// What’s wrong with the code style below?
function pow22(x, n) {
  // <- no space between arguments
  // <- figure bracket on a separate line
  let result = 1; // <- no spaces before or after =
  for (let i = 0; i < n; i++) {
    result *= x;
  } // <- no spaces
  // the contents of { ... } should be on a new line
  return result;
}
let x92 = prompt("x?", ""),
  n92 = prompt("n?", ""); // <-- technically possible,
// but better make it 2 lines, also there's no spaces and missing ;
if (n92 <= 0) {
  // <- no spaces inside (n <= 0), and should be extra line above it
  // <- figure bracket on a separate line
  // below - long lines can be split into multiple lines for improved readability
  alert(`Power ${n92} is not supported, please enter an integer number greater than zero`);
} // <- could write it on a single line like "} else {"
else {
  alert(pow22(x92, n92)); // no spaces and missing ;
}
// The fixed variant:
function pow33(x93, n93) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x93;
  }

  return result;
}

let x93 = prompt("x?", "");
let n93 = prompt("n?", "");

if (n93 <= 0) {
  alert(`Power ${n93} is not supported,
		please enter an integer number greater than zero`);
} else {
  alert(pow33(x93, n93));
}

// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. Should work like that:
let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
alert(isEmpty(schedule)); // false
// solution - Just loop over the object and return false immediately if there’s at least one property.
function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

// Sum object properties
// We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above. If salaries is empty, then the result must be 0.
// solution
let salaries01 = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum01 = 0;
for (let key in salaries01) {
  sum01 += salaries01[key];
}
alert(sum01); // 390

// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. For instance:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
multiplyNumeric(menu);
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place. P.S. Use typeof to check for a number here.
// solution
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

// Answer: an error
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user1 = makeUser();
alert(user1.ref.name); // Error: Cannot read property 'name' of undefined
// That’s because rules that set this do not look at object definition. Only the moment of call matters. Here the value of this inside makeUser() is undefined, because it is called as a function, not as a method with “dot” syntax. The value of this is one for the whole function, code blocks and object literals do not affect it. So ref: this actually takes current this of the function. We can rewrite the function and return the same this with undefined value:
function makeUser() {
  return this; // this time there's no object literal
}
alert(makeUser().name); // Error: Cannot read property 'name' of undefined
// As you can see the result of alert( makeUser().name ) is the same as the result of alert( user.ref.name ) from the previous example. Here’s the opposite case:
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}
let user2 = makeUser();
alert(user2.ref().name); // John - Now it works, because user.ref() is a method. And the value of this is set to the object before dot ..

// Create a calculator
/*
Create an object calculator with three methods:
read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/
let calculator01 = {
  // ... your code ...
};
calculator01.read();
alert(calculator01.sum());
alert(calculator01.mul());
// solution
let calculator02 = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};
calculator02.read();
alert(calculator02.sum());
alert(calculator02.mul());

// Chaining
// There’s a ladder object that allows to go up and down:
let ladder01 = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
  },
};
// Now, if we need to make several calls in sequence, can do it like this:
ladder01.up();
ladder01.up();
ladder01.down();
ladder01.showStep(); // 1
ladder01.down();
ladder01.showStep(); // 0
// Modify the code of up, down and showStep to make the calls chainable, like this:
ladder01.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such approach is widely used across JavaScript libraries.
// solution
// The solution is to return the object itself from every call.
let ladder02 = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};
ladder02.up().up().down().showStep().down().showStep(); // shows 1 then 0
// We also can write a single call per line. For long chains it’s more readable:
ladder02
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0

// Two functions – one object
// Is it possible to create functions A and B so that new A() == new B()?
function A() {}
function B() {}
let a09 = new A();
let b09 = new B();
alert(a09 == b09); // true
// solution: Yes, it’s possible. If a function returns an object then new returns it instead of this. So they can, for instance, return the same externally defined object obj:
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
alert(new A() == new B()); // true

// Create new Calculator
// Create a constructor function Calculator that creates objects with 3 methods:
/*
read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/
let calculator06 = new Calculator();
calculator06.read();
alert("Sum=" + calculator06.sum());
alert("Mul=" + calculator06.mul());
// solution
function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Create new Accumulator
// Create a constructor function Accumulator(startingValue). Object that it creates should: Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue. The read() method should use prompt to read a new number and add it to value. In other words, the value property is the sum of all user-entered values with the initial value startingValue.
// Here’s the demo of the code:
let accumulator07 = new Accumulator(1); // initial value 1
accumulator07.read(); // adds the user-entered value
accumulator07.read(); // adds the user-entered value
alert(accumulator07.value); // shows the sum of these values
// solution
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}
let accumulator = new Accumulator(1);
accumulator06.read();
accumulator.read();
alert(accumulator.value);

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

/*
code challenge

قم بكتابة دالة تستقبل قيمة نصية، تقوم الدالة بالتحقق هل القيمة النصية تمثل عملية رياضية أم لا ثم قم بإرجاع النتيجة من نوع منطقى
*/
function math_expr(expr) {
  let isMathOper = false;
  let stringSplit = expr.split("");
  if (stringSplit[1] === "+" || stringSplit[1] === "-" || stringSplit[1] === "/" || stringSplit[1] === "*") {
    if (+stringSplit[0] && +stringSplit[2]) {
      isMathOper = true;
    }
  }
  return isMathOper;
}
math_expr("5+3");
