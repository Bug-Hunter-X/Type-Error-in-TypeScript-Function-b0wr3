function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result1 = add(10, 20); // Correct usage
console.log(result1); // Output: 30

let num1 = 10;
let num2 = "20";

if (isNumber(num2)) {
  let result2 = add(num1, num2); //type guard used here
  console.log(result2); // Output: 30
} else {
  console.log("Invalid input: num2 is not a number");
}

//Type assertion
let result3 = add(num1, parseInt(num2 as string));
console.log(result3); // Output: 30