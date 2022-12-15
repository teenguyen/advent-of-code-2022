const input = require("./inputs/day1");

let result = input.split("\n\n");
result = result.reduce((acc, cur) => {
  let current = cur.split("\n");
  let total = current.reduce(
    (totalAcc, totalCurr) => (totalAcc += parseInt(totalCurr)),
    0
  );
  acc.push(parseInt(total));
  return acc;
}, []);

result = result.sort((a, b) => b - a);
console.log(result[0]);
console.log(result[0] + result[1] + result[2]);
