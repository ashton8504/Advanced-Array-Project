// Return an array containing all the odd indices in the array
function oddIndices(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      array.push(arr[i]);
    }
  }
  return array;
}

// Return an array containing all the odd indices starting from the end
function oddReverse(arr) {
  let array = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      array.push(arr[i]);
    }
  }
  return array;
}

// Return an array containing all indices that are powers of 2
function secondPower(arr) {
  let array = [];
  for (let i = 1; i < arr.length; i *= 2) {
    array.push(arr[i]);
  }
  return array;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  let array = [];
  for (let i = 1; i < arr.length; i *= n) {
    array.push(arr[i]);
  }
  return array;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  const halfLength = Math.ceil(arr.length / 2);
  return arr.slice(0, halfLength);
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  const halfLength = Math.floor(arr.length / 2);
  return arr.slice(halfLength + (arr.length % 2));
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
