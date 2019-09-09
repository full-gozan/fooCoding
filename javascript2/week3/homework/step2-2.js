'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  let numbers = [];
  let counter = startIndex;
  do {
    numbers.push(counter)
    counter += 1;
  }
  while (stopIndex >= counter)
  console.log("the devidable numbers are :");

  numbers.map(index => {
    

         if (sayFive(index) === true && sayThree(index) === false) {
          console.log(index + " can devide by 5");}
           if (sayFive(index) === false && sayThree(index) === true) {
            console.log(index + " can devide by 3");}
            if (sayFive(index) === true && sayThree(index) === true) {
              console.log(index + " can devide by both 5 and 3");}
          
        
        
      }
    );


  }

  function sayThree(number) {
    return number % 3 === 0;
  }

  function sayFive(number) {
    return number % 5 === 0;

  }

  threeFive(10, 15, sayThree, sayFive);

  // Do not change or remove anything below this line
  module.exports = threeFive;