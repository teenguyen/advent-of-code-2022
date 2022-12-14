const input = require('./inputs/day1');

let result = input.split("\n\n");
result = result.reduce((acc, cur) => {
  let current = cur.split("\n");
  let total = current.reduce((totalAcc, totalCurr) => totalAcc += parseInt(totalCurr), 0)
  acc.push(total)
  return acc;
}, [])

result = result.sort((a, b) => parseInt(b) - parseInt(a));
console.log(result[0]);
console.log(parseInt(result[0]) + parseInt(result[1]) + parseInt(result[2]))