'use strict';
/**Ray Beecham
* Activating Strict Mode
* 12/11/2020
*/

/*
// activate strict mode for the whole script
// avoids accidental errors
// forbids certain things and shows certain errors



let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // Missing an s
if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio';
// const private = 534;
//const if = 23;

/**Ray Beecham
* Functions
* 12/11/2020
*/

/*
function logger() {
    console.log('My name is Ray');
}
// calling / running/ invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/**Ray Beecham
* Function Declarations vs Expressions
* 12/13/2020
*/

/*
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1988);

// Function Expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1988)
console.log(age1, age2);

/**Ray Beecham
* Arrow Functions
* 12/13/2020
*/

/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1988)
//console.log(age3);

const yearsUntilRetirement = (firstName) => {
    const age = 2020 - prompt("When were you born?");
    firstName = prompt("and what is your name?")
    const retirement = 70 - Number(age);
    
    // return retirement;
    if (age <= 70) {
    return `${firstName} retires in ${retirement} years if he/she retires at age 70.` 
    } else {
        console.log(`${firstName} you are past the age of retirement (70) old fart!`);
    }
}

console.log(yearsUntilRetirement());

/**Ray Beecham
* Functions calling other functions
* 12/13/2020
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4
}

function fruitProcessor(apples, oranges) {
    const applepPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applepPieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2,3));

/**Ray Beecham
* Reviewing Functions
* 12/13/2020
*/

/*
// calculate the age of the person
const calcAge = function (birthYear) {
    return 2020 - birthYear;
}


// store birth year and name and retirement age
const yearsUntilRetirement = function (firstName) {
    const age = calcAge(prompt("When were you born?"))
    firstName = prompt("What is your name?")
    const retirement = 70 - Number(age);
    
    // return retirement
    if (age <= 70 && age >= 0) {
    return `${firstName} retires in ${retirement} years if he/she retires at age 70.` 
    } else if (age < 0) {
        console.log(`You age cannot be below 0.`);
    }else{
        console.log(`${firstName} you are past the age of retirement (70) you old fart!`);
    }
}
console.log(yearsUntilRetirement());

/**Ray Beecham
* Coding Challenge #1
* 12/13/2020
*/

/*
const calcAverage = (score1, score2, score3) =>  (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44,23,71)
const scoreKoalas = calcAverage(65,54,49)
console.log(scoreDolphins, scoreKoalas);

const checkWinnner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Win the trophy (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas Win the trophy (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinnner(scoreDolphins, scoreKoalas)

// Average Paycheck Calculator

const calcAvgPaycheck = (paycheck1, paycheck2) => (paycheck1 + paycheck2) / 2;

const rayPayCheck = calcAvgPaycheck(4020, 1748);
const lizPayCheck = calcAvgPaycheck(4000, 1748);


const checkPaycheck = function(avgRay, avgLiz) {
    if (avgRay > avgLiz) {
        console.log(`Ray has a higher pay ${avgRay} vs ${avgLiz}`);
    } else if (avgLiz > avgRay) {
        console.log(`Liz has a higher pay ${avgLiz} vs ${avgRay}`);
    } else {
        console.log(`Y'all make the same pay!`);
    }
}
checkPaycheck(rayPayCheck, lizPayCheck)
checkPaycheck(2000, 1800)

/**Ray Beecham
* Arrays
* 12/13/2020
*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// Literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020)

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// Arrays can be mutated from const
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Ray'
const ray = [firstName, 'B', 2037-1998, 'programmer', friends];
console.log(ray);
console.log(ray.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
console.log(age1,age2, age3, age4);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
const age = [age1, age2, age3, age4]
console.log(age);

/**Ray Beecham
* Basic Array Operations (Methods)
* 12/13/2020
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay')
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Larry'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Larry'));
console.log(friends.includes('23'));

if (friends.includes('Steven')) {
    console.log('You have a friend named Steven');
}

/**Ray Beecham
* Coding Challenge #2
* 12/13/2020
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals);

// Paycheck Challenge

const calcPaycheckTax = (paycheck) => paycheck * 0.1947

const rayPayCheck = [2417];
const lizPayCheck = [1822];

const rayTax = [calcPaycheckTax(rayPayCheck[0])];
const lizTax = [calcPaycheckTax(lizPayCheck[0])];
const rayTotalPayChecks = [rayPayCheck[0] - rayTax [0]];
const lizTotalPayChecks = [lizPayCheck[0] - lizTax[0]];

console.log(rayPayCheck, lizPayCheck, Math.round(rayTotalPayChecks), Math.round(lizTotalPayChecks));







//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;