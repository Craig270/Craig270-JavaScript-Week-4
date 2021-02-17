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
  alert(`Time is up!! It as been 3 second!`);
}

const holden = () => setTimeout(timerUp, 3000);
holden();
