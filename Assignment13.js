const arr = prompt("Enter an array of numbers separated by commas: ").split(",").map(Number);

const sum = arr.reduce((acc, curr) => acc + curr, 0);
const avg = sum / arr.length;

console.log("Sum of all elements in the array: " + sum);
console.log("Average of all elements in the array: " + avg);
