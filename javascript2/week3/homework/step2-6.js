'use strict';

let arr2d = [[1, 2], [3, 4], [5, 6]];
let arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
const flatedArray2D= arr2d.flat(2)  ;
console.log(flatedArray2D);
}

function flattenArray3d(arr) {
  const flatedArray3D =arr3d.flat(Infinity)  ;
  console.log(flatedArray3D);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
