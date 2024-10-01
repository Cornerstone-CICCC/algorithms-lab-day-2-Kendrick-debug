// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = function (str) {
  const wordsArr = str.split(" ");
  const newWords = [];
  wordsArr.forEach((word) => {
    const uppercaseletter = word[0].toUpperCase();
    const remaining = word.substring(1);
    const combine = `${uppercaseletter}${remaining}`;
    newWords.push(combine);
  });
  const sentence = newWords.join(" ");
  return sentence;
};

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
