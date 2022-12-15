const input = require("./inputs/day4");

const inputSplit = input.split("\n");
const result = inputSplit.reduce(
  (acc, curr) => {
    const pair = curr.split(",");
    let range1 = pair[0].split("-").map(x => parseInt(x));
    let range2 = pair[1].split("-").map(x => parseInt(x));

    if (
      (range1[0] >= range2[0] && range1[1] <= range2[1]) ||
      (range2[0] >= range1[0] && range2[1] <= range1[1])
    ) {
      acc.total++;
    }

    if (
      (range1[0] >= range2[0] && range1[0] <= range2[1]) ||
      (range1[1] >= range2[0] && range1[1] <= range2[1]) ||
      (range2[1] >= range1[0] && range2[1] <= range1[1]) ||
      (range2[1] >= range1[0] && range2[1] <= range1[1])
    ) {
      acc.partial++;
    }
    return acc;
  },
  { total: 0, partial: 0 }
);

console.log(result.total);
console.log(result.partial);
