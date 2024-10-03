// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
function arrayDifference(arr1, arr2) {
  return arr1.filter((dif) => !arr2.includes(dif));
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]
