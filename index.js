"use strict";

// 1. a function that takes firstName and lastName and returns ‘fistName lastName’
function nameMaker(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}

nameMaker("Craig", "Neff");

// 2. same function as above as an arrow function
const arrowNameMaker = (firstName, lastName) => `${firstName} ${lastName}`;

const name12 = arrowNameMaker("Craig", "Neff");
console.log(name12);

// 3a. Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’

function timerUp() {
  alert(`Time is up!! It has been 3 second!`);
}
() => setTimeout(timerUp, 3000);

// 3b. an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position.

const askAreWeThereYet = () => alert(`Are we there yet?`);

function keepAsking() {
  setInterval(askAreWeThereYet, 2000);
}

keepAsking();
//Wanted to try writing an arrow function as the function parameter in setInterval. SO COOL!
function answerSon() {
  setInterval(() => {
    alert(`No`);
  }, 3000);
}

answerSon();

// 4a. New function named processSplicedValue that takes 3 parameters (array, the index of the element to be spliced from the array, and a callback function). Inside function, use the first two parameters to splice an element from array.Inside the function, call the callback function and pass the spliced value into it.Outside of the function, create an array of strings, call processSplicedValue, and pass in the array you just created, an index number, and console.log into it.

const processSplicedValueList = [
  "Batman",
  "SuperMan",
  "Ironman",
  "War Machine",
  "Black Widow",
  "SpiderMan",
];
function bestHero(me) {
  console.log(`The best hero is ${me}`);
}

function processSplicedValue(array, spliceInd, functionProcess) {
  var hero = processSplicedValueList.splice(spliceInd, 1);
  functionProcess(hero);
}

console.log(9 + 9);
// processSplicedValue called with console.log.
processSplicedValue(processSplicedValueList, 5, console.log);

// processSplicedValue called with an alert.
processSplicedValue(processSplicedValueList, 4, alert);

// pass in an anonymous arrow function that alerts the spliced value.
processSplicedValue(processSplicedValueList, 0, (x) => alert(x));

//pass in a custom function of your choice that you should create and name.
console.log(processSplicedValueList);
processSplicedValue(processSplicedValueList, 0, bestHero);
