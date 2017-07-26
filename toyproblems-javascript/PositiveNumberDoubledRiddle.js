// Positive Number Doubled Riddle

// Create a function that solves this riddle: "If the last digit of this positive number becomes the first digit, the resulting number is exactly twice as large. My number is the smallest number with this property. What is my number?"

function riddleSolver() {

}

riddleSolver();

// THE FOLLOWING FUNCTION WOULD WORK; HOWEVER, IT WOULD TAKE WAY TO LONG TO GET THE ANSWER, SINCE THE ANSWER IS 18 DIGITS LONG.
// function riddleSolver() {
//   var solved = false;
//   var answer;
//
//   for (i = 11; solved === false; i++) {
//     var str = i.toString();
//
//     if (parseFloat(str[str.length-1]) >= parseFloat(str[0])) {
//       var newNum = parseFloat(str.slice(str.length-1) + str.slice(0, -1));
//       console.log("" + newNum + " " + (i*2) + "");
//       if (newNum === i * 2) {
//         answer = newNum;
//         solved = true;
//       }
//     }
//   }
//
//   return answer;
// }
