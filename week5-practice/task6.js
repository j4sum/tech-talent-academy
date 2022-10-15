const myAge = 43;
//stores my age
let earlyYears = 2;
//first two years of dog years is different to the other remaining years
earlyYears *= 10.5; //same as: earlyYears = earlyYears * 10.5;
let laterYears = myAge - 2;
laterYears *= 4; //same as: laterYears = laterYears * 4;
//multiply the remaining years by 4
console.log(earlyYears, laterYears);
let myAgeInDogYears = earlyYears + laterYears;
//add early and later years to new variable
let myName = 'Phill'.toLowerCase();
//Change my name to lowercase
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);