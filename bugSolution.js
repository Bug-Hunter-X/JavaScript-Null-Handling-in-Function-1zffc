function foo(a, b) {
  a = a === null ? 0 : a; // Handle null values
  b = b === null ? 0 : b; // Handle null values
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(10, null)); // Output: 10
console.log(foo(5, 10));   // Output: 15