// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

const findMissingNumber = function (arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i + 1) {
      continue;
    } else {
      answer = i + 1;
    }
    break;
  }
  return answer;
};
console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3
