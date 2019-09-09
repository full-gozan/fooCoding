'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  let result =""
for (let count = 1; count <= num; count++) {
    result += str;
}

  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  let result = '';
  let count=1;
while (count <= num) {
  result+=str
  count++

}
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
let count=1;
do {
  result+=str;
count++
} while (count<=num) 

  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
