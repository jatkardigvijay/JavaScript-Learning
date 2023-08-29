/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.14;

let myFirstJob = 'coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let country = "India";
let continent = "Asia";
let population = "1400";
console.log(country);
console.log(continent);
console.log(population);
*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
//Mathematical or Arithmatic operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log('age jonas = ' + ageJonas, 'age sarah = ' + ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 to the power 3, means 2 * 2 * 2 i.e. 8

//string concatenate
const firstName = 'Digvijay';
const lastName = 'Jatkar';
console.log(firstName + ' ' + lastName);

//assignment operator
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x -1 = 100
x--; // x = x - 1 = 99
console.log(x);

//comparision operator
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//operator precedence
console.log(now - 1991 > now - 2018);
let x1, y1;
x1 = y1 = 25 - 10 - 5; // x = y = 10
console.log(x1, y1);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Video 16 coding challenge:
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn);
console.log(markHigherBMI);
*/

//17 String and Template Literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const currentYear = 2037

//this below way is tedious to main the code and all
const jonas = "I'm" + firstName + ', a ' + (currentYear - birthYear) + ' old ' + job + '!';
console.log(jonas);

//so we use the below String template way to make it easy
const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job} `;
console.log(jonasNew);

//multilines before (we use \n\ to make a new line which again reduces readability)
console.log('My name is Digvijay \n\
Jatkar\n\
and I am a programmer');

//multiline now (using backticks)
console.log(`My name is
Digvijay
Jatkar`);
*/

//18 Taking decisions - if else statements
/*
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Sara can start driving ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young. Wait for another ${yearsLeft} years`);
}

const birthYear = 1994;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

//19 coding challenge
/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn);
console.log(markHigherBMI);

if (bmiMark > bmiJohn) {
    console.log(`Mark's bmi ${bmiMark} is higher than John's bmi ${bmiJohn}`);
} else {
    console.log(`Johns's bmi ${bmiJohn} is higher than Marks's bmi ${bmiMark}`);
}
*/

// 20 type conversion and coercion
console.log('type conversion:')
const birthYear = '1991';
console.log(Number(1991), birthYear); //1991 "1991"
console.log(Number(1991) + 18); // 2009
console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);
console.log('type coercion:');
console.log('I am ' + 23 + ' years old'); //coercion happens automatically
console.log('I am ' + '23' + ' years old');
console.log('23' / '2');