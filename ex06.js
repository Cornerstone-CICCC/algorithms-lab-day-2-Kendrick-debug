// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  const urlObj = new URL(url);
  const params = urlObj.searchParams;
  const result = {};

  // Iterate through the parameters and add them to the result object
  for (const [key, value] of params) {
    result[key] = value;
  }

  return result;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
