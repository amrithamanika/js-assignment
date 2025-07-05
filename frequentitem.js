function mostFrequentItem(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null; // No items in array
  }

  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequent = null;

  for (const item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;

    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequent = item;
    }
  }

  return mostFrequent;
}

// Example 
const data = [3, 'apple', 3, 'banana', 'apple', 'apple', 3, 3];
console.log(mostFrequentItem(data)); 
