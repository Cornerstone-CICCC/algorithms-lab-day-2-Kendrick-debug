// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
  const consonantList = "bcdfghjklmnpqrstvwxyz";
  let countedConsonantsNumbers = 0;
  const chartArr = str.split("");
  for (let i = 0; i <= chartArr.length; i++) {
    if (consonantList.includes(chartArr[i])) {
      countedConsonantsNumbers++;
    } else {
      continue;
    }
  }
  return countedConsonantsNumbers;
}

console.log(countConsonants("hello world")); // Expected output: 7
