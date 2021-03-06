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
/*
var markMass = 80;
var markHeight = 1.8;
var johnMass = 70;
var johnHeight = 1.85;

var markBMI = markMass/markHeight**2;
var johnBMI = johnMass/johnHeight**2;

console.log(markBMI, johnBMI);

var markJohnBMI = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + markJohnBMI)
*/

/*
 * If-Else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
	console.log(firstName + ' is married.');
} else {
	console.log(firstName + ' is single!')
}

var isMarried = true;
if(isMarried){
	console.log(firstName + ' is married.');
} else {
	console.log(firstName + ' is single!')
}

var markMass = 80;
var markHeight = 1.8;
var johnMass = 70;
var johnHeight = 1.85;

var markBMI = markMass / markHeight ** 2;
var johnBMI = johnMass / johnHeight ** 2;

// console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
	console.log("Mark's BMI is higher than John's.")
} else {
	console.log("John's BMI is higher than Mark's.")
}

// var markJohnBMI = markBMI > johnBMI;
// console.log("Is Mark's BMI higher than John's? " + markJohnBMI)
*/

/*
 * Boolean logic
 */
/*
var firstName = 'John';
var age = 16;

if(age<13){
	console.log(firstName + ' is a boy.')
} else if(age>=13 && age<20) {               
	// between 13 and 20
	console.log(firstName + ' is a teenager.')
} else if(age>=20 && age<30){
	console.log(firstName + ' is a young man.')
} else {
	console.log(firstName + ' is a man.')
}

*/

/*
 * Ternary Operator and Switch Statements
 */
/* 
var firstName = "John";
var age = 19;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age>=18 ? 'Beer' : 'Juice';

console.log(firstName + ' drinks ' + drink);

// Switch Statement
var job ='teacher';
switch (job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' drives kids to school.');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites.');
		break;
	default:
		console.log(firstName + ' does something that I don\'t know. :\)')
}

switch (true) {
	case (age<13):
		console.log(firstName + ' is a boy.');
		break;
	case (age >= 13 && age < 20) :
		console.log(firstName + ' is a teenager.');
		break;
	case (age >= 20 && age < 30) :
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log(firstName + ' is a man.');
}
 */

/*
 * Truthy and Falsy Values Equality Operators
 */
/* 
var height;
height = 23;
if(height || height === 0){
	console.log('Defined: '+ height);
} else {
	console.log('Not Defined: ' + height);
}

//   Equality Operators
if (height == '23') {
	console.log('The == operator does type coercion.');
}
*/

/* 
 * Coding Challenge - 2
 */
/* 
var johnsTeam = [89,120,103],
	mikesTeam = [116,94,123],
	marysTeam = [97,134,105];

function average(ar) {
	var av = 0;
	ar.forEach(e => {
		av+=e;
	});
	return (av/ar.length);

}

var johnsAverage = average(johnsTeam),
	mikesAverage = average(mikesTeam),
	marysAverage = average(marysTeam);

if(johnsAverage>mikesAverage){
	if (johnsAverage>marysAverage) {
		return ("John\'s team won!");
	} else if (johnsAverage<marysAverage) {
		return ("Mary\'s team won!");
	} else {
		return ("Winning draw between John's team and Mary's team.");
	}
} else if (mikesAverage>johnsAverage) {
	if(mikesAverage>marysAverage){
		return ("Mike\'s team won!");
	} else if (mikesAverage<marysAverage) {
		return ("Mary\'s team won!");
	} else {
		return ("Winning draw between Mike's team and Mary's team.");
	}
} else {
	if(mikesAverage<marysAverage){
		return ("Mary\'s team won!");
	} else if (mikesAverage>marysAverage) {
		return ("Winning draw between Mike's team and John's team.");
	} else {
		return ("Draw between John's team, Mike's team, and Mary's team.");
	}
}
// Test Cases of if-else: https://codepen.io/ZechariahRaman/pen/YgWOEd?editors=0010

*/

/*
 * Functions
 */
/* 
function calculateAge(birthYear) {
	return (2018-birthYear);
}

console.log(calculateAge(1990));
console.log(calculateAge(1948));
console.log(calculateAge(1969));

function retirement(birthYear, firstName) {
	var age = calculateAge(birthYear);
	var retires = 65 - age;
	if(retires>0){
		console.log(firstName + " retires in " + retires + " years.");
	} else if (retires == 0) {
		console.log(firstName + " retires in 2018.");
	} else {
		console.log(firstName + " has been retired for " + (retires*(-1)) + " years.")
	}
}

retirement(1990,'John');
retirement(1948,'Mike');
retirement(1969,'Jane');
retirement(1953,'Mary');
 */
/* 
 * Function Statements and Expressions
 */

// Function Expression
/* var whatDoYouDo = function (job, firstName) {
	switch (job) {
		case 'teacher':
			return (firstName + " teaches kids how to code.");
		case 'driver':
			return (firstName + " drives a cab.");
		case 'designer':
			return (firstName + " designs beautiful websites.");
		default:
			return (firstName + " does work that I don't know. :)")
	}
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Miked')); */

/* 
 * Arrarys
 */
/* 
//  Initialize Arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

console.log(names);
console.log(names.length);

// Mutate Array
names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John','Smith',1990,'teacher',false];

john.push('blue');
john.unshift('Mr.');

console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

console.log(john.indexOf('designer') === -1 ?'John isn\'t a designer': 'John\'s a designer');
 */

/* 
 * Coding Challenge - 3
 */

var bills = [124, 48, 268], tips=[], totalBills = [];

function calculateTip(bill) {
	if (bill<50) {
		return (bill*0.2);
	} else if (bill>=50&&bill<200) {
		return (bill*0.15);
	} else {
		return (bill*0.1);
	}
}

bills.forEach((e,i)=> {
	tips[i] = calculateTip(e);
	totalBills[i] = e + tips[i];
});

console.log(bills);
console.log(tips);
console.log(totalBills);