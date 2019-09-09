'use strict';

function multiplyAll(arr) {
  // eslint-disable-next-line
  let product = 1;

  for(let mainIndex=0; mainIndex < arr.length; mainIndex++){
    for (let subIndex=0; subIndex < arr[mainIndex].length; subIndex++){
      product = product * arr[mainIndex][subIndex];
    }
  }

  return product;
}

const result = multiplyAll([[1, 2], [3, 4], [5, 6]]);
console.log(result); // 720

