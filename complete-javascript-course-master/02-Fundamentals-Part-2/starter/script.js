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