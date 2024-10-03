// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".
function mostFrequentChar(str) {
  const wordArr = str.split("");
  const charObj = {};
  let largestCountedChar = "";
  for (let i = 0; i <= wordArr.length; i++) {
    if (!Object.keys(charObj).includes(wordArr[i])) {
      charObj[wordArr[i]] = 1;
    } else {
      charObj[wordArr[i]]++;
      largestCountedChar = wordArr[i];
    }
  }

  return largestCountedChar;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"
