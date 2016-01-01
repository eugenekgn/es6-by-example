///**
// * Created by Eugene on 12/30/15.
// */
//(function () {
//  'use strict';
//
//  console.log('*** functions ***\n');
//
//  console.log('-count to 10');
//  // new function syntax
//  let fibonacci = (num) => {
//    if (num < 0) {
//      return -1;
//    } else if (num === 0) {
//      return 1;
//    } else {
//      return num * fibonacci(num - 1);
//    }
//  };
//
//  // Math example
//  let add = (x, y) => x + y;
//  let devide = (x, y) => x / y;
//  let multiple = (x, y) => x * y;
//  let power = (x, y) => Math.pow(x, y);
//
//  console.log(fibonacci(5));
//  console.log(add(20, 5));
//  console.log(devide(100, 4));
//  console.log(multiple(5, 5));
//  console.log(power(5, 2));
//})();