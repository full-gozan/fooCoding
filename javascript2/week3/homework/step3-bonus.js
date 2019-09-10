'use strict';

let values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const fliterArray = () => {
let temparr =[];
temparr=[...new Set(arr)]
 return temparr
  }
  return fliterArray()
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);



// Do not change or remove anything below this line
module.exports = makeUnique;