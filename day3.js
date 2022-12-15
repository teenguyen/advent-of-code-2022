const input = require("./inputs/day3");

const alphaValues = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

const inputSplit = input.split("\n");
let result = inputSplit.reduce((acc, curr) => {
  const size = curr.length / 2;
  let bag1 = [...new Set(curr.substring(0, size))];
  let bag2 = [...new Set(curr.substring(size, curr.length))];

  acc += alphaValues.indexOf(bag1.filter(x => bag2.includes(x))) + 1;
  return acc;
}, 0);

console.log(result);

let acc = 0;
for (let i = 0; i < inputSplit.length; i+=3) {
  let bag1 = [...new Set(inputSplit[i])];
  let bag2 = [...new Set(inputSplit[i + 1])];
  let bag3 = [...new Set(inputSplit[i + 2])];

  acc += alphaValues.indexOf(bag1.filter(x => bag2.includes(x) && bag3.includes(x))) + 1;
}
console.log(acc)