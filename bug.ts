function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, "20"); // Type Error. This will throw an error because we are passing a string as an argument instead of a number.
console.log(result); // This line will not be reached due to error.