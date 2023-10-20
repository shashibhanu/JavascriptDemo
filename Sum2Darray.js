let twoDimArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let totalSum = twoDimArray.reduce((acc1, row) => acc1 + row.reduce((acc2, num) => acc2 + num, 0), 0);

console.log("Sum of the two-dimensional array:", totalSum); // Output: Sum of the two-dimensional array: 45