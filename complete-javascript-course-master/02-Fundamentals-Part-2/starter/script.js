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
