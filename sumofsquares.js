function sumOfSquares(arr) {
  if (!Array.isArray(arr)) {
    return null; // Not a valid array
  }

  let sum = 0;
  for (const num of arr) {
    if (typeof num === 'number') {
      sum += num * num;  // square and add
    } else {
      console.warn(`Skipping non-number element: ${num}`);
    }
  }
  return sum;
}

// Example 
const numbers = [1, 2, 3, 4];
console.log(sumOfSquares(numbers)); 
