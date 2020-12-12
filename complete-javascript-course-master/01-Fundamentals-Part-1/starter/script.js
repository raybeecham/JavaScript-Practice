/**

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
const PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

// Homework JS Fund Part 1 - Values and Variables
let country = 'USA';
let continent = 'North America';
let population = '2 Million';

console.log(country);
console.log(continent);
console.log(population);

// Data types
/** In JavaScript every value is either an object or a primitive, and is only a primitive when it is not an object*/
// 7 Primitive Data Types
/**Number - all number values
 * Strings - single or double quotes
 * Boolean - true or false
 * Undefined - variable not yet defined. empty value
 * Null - Also means 'empty value'
 * Symbol (ES2015) - Value that is unique and cannot be changed
 * BigInt(ES2020) - Large integers than the Number can hold
 */
// JavaScript has dynamic typing: We do not have to manually define the data type of tha value stored in a variable. Instead, data types are determined automatically.

/**Ray Beecham
 * Data Types
 * 12/6/2020
 */

/**var javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(23);
//console.log(typeof 'Jonas');

// Dynamic typing
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// Undefined variable
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// Homework JS Fund Part 1 - Data types
let isIsland = false;
let language;
console.log(isIsland)
console.log(population);
console.log(country);
console.log(language);

/**Ray Beecham
 * Let, const and var
 * 12/6/2020
 */

// Mutate the variable
/**let age = 30;
age = 31;

// const variable (immutable)
const BIRTH_YEAR = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Shmit';
console.log(lastName);

// Homework JS Fund Part 1 - const, let, and var
language = 'English';
const EYE_COLOR = 'brown';
const BIRTH_MOM = 'Angela';

EYE_COLOR = 'Blue'
console.log(EYE_COLOR);
*/

/**Ray Beecham
 * Basic Operators
 * 12/6/2020
 */

/**
//Math operators
const NOW = 2037;
const AGE_JONAS = NOW - 1991;
const AGE_SARAH = NOW - 2018
console.log(AGE_JONAS, AGE_SARAH);

console.log(AGE_JONAS * 2, AGE_JONAS / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Raymond';
const lastName = 'Beecham';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(AGE_JONAS > AGE_SARAH); // >, <, >=, <=
console.log(AGE_SARAH >= 18);

const isFullAge = AGE_SARAH >= 18;

console.log(NOW - 1991 > NOW - 2018);

/**Ray Beecham
* Operator Precendence
* 12/6/2020
*/
/**
 // MDN Documentation left to right
const NOW = 2037;
const AGE_JONAS = NOW - 1991;
const AGE_SARAH = NOW - 2018

console.log(NOW - 1991 > NOW - 2018);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y); // 10,10

const averageAge = (AGE_JONAS + AGE_SARAH) / 2;
console.log(AGE_JONAS, AGE_SARAH, averageAge);

/**Ray Beecham
 * Coding Challenge #1
 * 12/6/2020
 */
/*
let markMass = 78;
let markHeight = 1.69
let johnMass = 95;
let johnHeight = 1.95

let BMIMark = markMass / markHeight ** 2;
let BMIJohn = johnMass / johnHeight ** 2;

let isBMIHigher = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, isBMIHigher);

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

BMIMark = markMass / markHeight ** 2;
BMIJohn = johnMass / johnHeight ** 2;
isBMIHigher = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, isBMIHigher);

// Fun Fun
let raysAge = 32 - 5;
let lizAge = 28;

let isRayOlder = raysAge > lizAge;
console.log(raysAge, lizAge, isRayOlder);

let rayFutureAge = raysAge + 15;
let lizFutureage = lizAge + 15;

isRayOlder = rayFutureAge > lizFutureage;

console.log(rayFutureAge, lizFutureage, isRayOlder);

/**Ray Beecham
 * Strings and Template Literals
 * 12/6/2020
 */
/*
 const firstName = 'Ray';
 const job = 'programmer';
 const birthYear = 1988;
 const year = 2020;

 const ray = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
 console.log(ray);

 //Template Literal
 const rayNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
 console.log(rayNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multple \n\
lines');

console.log(`String
multiple
lines`);

/**Ray Beecham
 * Taking Decisions: IF / ELSE Statements
 * 12/6/2020
 */

/*
const age = 15;

// Windows period for EMOJI!!
// If-Else Control Structure
if (age >= 18) {
    console.log(`You can start taking your drivers license test 👌`);
} else {
    const yearsLeft = 18 - age;
    console.log(`You are too young. Wait another ${yearsLeft} years to take your drivers license test 😒`);
}

let century;
const birthYear = 2012;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

/**Ray Beecham
* Coding Challenge #2
* 12/6/2020
*/
/*
let markMass = 78;
let markHeight = 1.69
let johnMass = 95;
let johnHeight = 1.95

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

let BMIMark = markMass / markHeight ** 2;
let BMIJohn = johnMass / johnHeight ** 2;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`)
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`);
}
 /**Ray Beecham
 * Type Conversion and Coercion
 * 12/6/2020
 */

/*
// type conversion
const inputYear = '1991';
const convertedNumber = Number(inputYear);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(convertedNumber + 18);
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n); // 10

 /**Ray Beecham
* Truthy and Falsy Values
* 12/6/2020
*/
/*
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ray'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log("Don't spend it all! ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('Yay! Height is undefined');
} else {
    console.log('Height is Undefined');
}

 /**Ray Beecham
* Equality Operators
* 12/11/2020
*/

/*
const age = '18';
if (age === 18) {
    console.log(`You just became an adult :p (strict equality)`);
} else {
    console.log(`You are still a kid`);
}
if (age == 18) {
    console.log(`You just became an adult :p(loose equality)`)};


   const favorite = Number(prompt("What's your favorite number?"));
   console.log(`Your favorite number is ${favorite}`);

   if (favorite === 23) { // 23 === 23
       console.log("Cool! 23 is an amazing number!");
   } else if (favorite === 7) {
       console.log('7 is also a cool number');
   } else if (favorite === 9) {
       console.log('9 is also a cool number');
   }
   
   else {
       console.log('Number is not 23 or 7');
   }

   if (favorite !== 23) {
       console.log('Why not 23?');
   }

/**Ray Beecham
* Logical Operators
* 12/11/2020
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone ele should drive...');
// }

const isTired = false; // c
console.log(hasDriversLicense && hasGoodVision && isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone ele should drive...');
}

/**Ray Beecham
* Coding Challenge #3
* 12/11/2020
*/

/*

let dolphinScoreAverage = (96 + 108 +89) / 3;
let koalasScoreAverage = (88 + 91 +110) / 3;
console.log(dolphinScoreAverage, koalasScoreAverage);

if (dolphinScoreAverage === koalasScoreAverage) {
    console.log("The score is a draw");
} else if (dolphinScoreAverage > koalasScoreAverage) {
    console.log("Dolphins Win!🏆");
} else if (koalasScoreAverage > dolphinScoreAverage) {
    console.log("Koalas Win!🏆");
}

dolphinScoreAverage = (97 + 112 + 101) / 3;
koalasScoreAverage = (109 + 95 + 123) / 3;
console.log(dolphinScoreAverage, koalasScoreAverage);

if (dolphinScoreAverage === koalasScoreAverage) {
    console.log("The score is a draw");
} else if (dolphinScoreAverage > koalasScoreAverage) {
    console.log("Dolphins Win!🏆");
} else if (koalasScoreAverage > dolphinScoreAverage) {
    console.log("Koalas Win!🏆");
}

dolphinScoreAverage = (97 + 112 + 101) / 3;
koalasScoreAverage = (109 + 95 + 106) / 3;
console.log(dolphinScoreAverage, koalasScoreAverage);

if (dolphinScoreAverage === koalasScoreAverage && dolphinScoreAverage >= 100 && koalasScoreAverage >= 100) {
    console.log("Both win the trophy");
} else if (dolphinScoreAverage > koalasScoreAverage && koalasScoreAverage >= 100) {
    console.log("Dolphins Win!🏆");
} else if (koalasScoreAverage > dolphinScoreAverage && dolphinScoreAverage >= 100) {
    console.log("Koalas Win!🏆");
} else {
    console.log("No one wins the trophy");
}

/**Ray Beecham
* The switch statement
* 12/11/2020
*/

/*
const day = prompt("What day is it?");

switch (day) {
    case 'monday':
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Taco Tuesday! Get tacos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Practice my coding woot');
        break;
    case 'friday':
        console.log('HW');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
    console.log('Not a valid day!');
        break;
}

if (day === 'monday') {
    console.log(`Plan my course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`Taco Tuesday! get tacos!`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Practice my coding yeet`);
} else if (day === 'friday') {
    console.log(`HW`);
} else if (day === 'satuday' || day === 'sunday') {
    console.log(`Enjoy the weekend!!!`);
} else {
    console.log(`Not a valid day!`);
}

/**Ray Beecham
* Statements and Expressions
* 12/11/2020
*/

/*
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = `23 is bigger`;
}

const me = 'Ray';
console.log(`I'm ${2037 - 1988} years old ${me}`);

/**Ray Beecham
* The conditional operator
* 12/11/2020
*/

/*
const age = prompt(`How old are you?`);
// age >= 18 ? console.log(`you like to drink wine😂`) : console.log(`you like to drink water🎖`);

const drink = age >= 18 ? `wine` : `water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `wine`;
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

/**Ray Beecham
* Coding Challenge #4
* 12/11/2020
*/


const bill = prompt('What was the cost of the dinner?')

const tip = bill <= 300 && bill >= 50 && bill > 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${parseFloat(bill) + tip}`);
//
