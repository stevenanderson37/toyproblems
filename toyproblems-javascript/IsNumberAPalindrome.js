// Is number a palindrome?

// Write a function which for given number returns true if number is palindrome or false if it is not. The number can either be given in a string or as a number.

function testNumber(num) {
  var numString = num;
  if (typeof numString === 'number') {
    numString = num.toString();
  }

  var reversedNum = numString.split('').reverse().join('');

  if (numString === reversedNum) {
    return true;
  } else {
    return false;
  }
}

console.log(testNumber(6532)); // Should return false
console.log(testNumber(50505)); // Should return true
console.log(testNumber("123421")); // Should return false
console.log(testNumber("12345678987654321")); // Should return true
console.log(testNumber(0)); // Should return true
