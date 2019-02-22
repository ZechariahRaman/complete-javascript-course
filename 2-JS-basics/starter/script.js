/*
 * Variables
 */
/*
var firstName = 'John';
var lastName = 'Smith';
var age = 28;
var fullAge = true;
var job;

console.log(firstName);
console.log(fullAge);
console.log(job);

job = 'teacher';
console.log(job);
*/

/*
 * Mutation
 */
/*var firstName = 'John';
var age = 28;
var job, isMarried;

//console.log(firstName + ' ' + age);

job = 'teacher';
isMarried = false;

// Type coercion
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
age = 'twenty-eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName =  prompt('What is his last name?');

console.log(firstName + ' ' + lastName);*/

/*
 * Basic Operations
 */
/*var year, johnYearOfBirth, markYearOfBirth;
thisYear = 2018;
var johnAge = 28;
var markAge = 33;

// Math Operators
johnYearOfBirth = thisYear - johnAge;
markYearOfBirth = thisYear - markAge;

console.log(johnYearOfBirth);
console.log(markYearOfBirth);

console.log(thisYear*2)
console.log(thisYear/10)

// Logical Operators
var johnOlder = johnAge < markAge;
console.log(johnOlder)

// Typeof
console.log(typeof(johnOlder));
console.log(typeof johnAge);
console.log(typeof 'Mark is older.');
var x;
console.log(typeof(x));*/

/*
 * Operator Precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var johnAge = now - yearJohn;
var markAge = 33;
var average = (johnAge + markAge) / 2;

console.log(average);

// Multiple assignments
var x, y;
x = y = (4 + 7) * 6 - 3 // 11 * 6 - 3 = 66 - 3 = 63
console.log(x,y);

x *= 2; // x = x + 2
console.log(x);

x++ // x = x + 1
console.log(x);

*/


/*
 * Coding Challenge - 1
 */

var markMass = 80;
var markHeight = 1.8;
var johnMass = 70;
var johnHeight = 1.85;

var markBMI = markMass/markHeight**2;
var johnBMI = johnMass/johnHeight**2;

console.log(markBMI, johnBMI);

var markJohnBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + markJohnBMI)

