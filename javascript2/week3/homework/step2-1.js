'use strict';

function foo(func) {
  let manufacturing= "made in Sweden" 

  console.log(func+manufacturing);
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
