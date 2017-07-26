// Perfect Square?

// A perfect square is a number made by squaring a whole number.
// Write a function that finds out whether or not a number is a perfect square. Return true if it is a perfect square and false if it is not.

function perfectSqrt(num) {
  var squareRoot = Math.sqrt(num);
  if (/\W/.test(squareRoot) === false) {
    return true;
  } else {
    return false;
  }
}

console.log(perfectSqrt(80)); // false
console.log(perfectSqrt(16)); // true
