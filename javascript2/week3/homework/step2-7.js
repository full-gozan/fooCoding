'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
 
console.log(x);
/* const variable can not be changed, in this example we passed by value 
 Changing the argument inside the function doesn’t affect the variable passed
  from outside the function, the output will be x=9
 */
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  val.z=10;
  return val;
}

f2(y);


console.log(y);

/* in this example we passed by reference (object), so it's possible to change content of the object 
which assigned to const variable
that means we can access X value and reassign it to another value
 */
