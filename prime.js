function isFirstElementPrime(arr) {
 
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log("Invalid or empty array.");
    return false;
  }

  const num = arr[0];

 
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    console.log("First element is not a valid integer.");
    return false;
  }

  // Prime number check
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
console.log(isFirstElementPrime([7, 10, 15]));
