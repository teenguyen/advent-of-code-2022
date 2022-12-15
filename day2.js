const input = require("./inputs/day2");

const rpsMap = {
  A: {
    X: "draw",
    Y: "win",
    Z: "lose"
  },
  B: {
    X: "lose",
    Y: "draw",
    Z: "win"
  },
  C: {
    X: "win",
    Y: "lose",
    Z: "draw"
  }
};

const outcomeValues = {
  lose: 0,
  draw: 3,
  win: 6
};

let inputSplit = input.split(`\n`);
let result = inputSplit.reduce((acc, curr) => {
  let split = curr.split(" ");

  const game = rpsMap[split[0]][split[1]];
  acc += outcomeValues[game];

  // add value of my pick
  acc += Object.keys(rpsMap.A).indexOf(split[1]) + 1;

  return acc;
}, 0);

console.log(result);

const outcomesMap = {
  X: "lose",
  Y: "draw",
  Z: "win"
};

let result2 = inputSplit.reduce((acc, curr) => {
  let split = curr.split(" ");

  // add value of the game
  acc += outcomeValues[outcomesMap[split[1]]];

  // add value of my pick
  acc +=
    // get the index of X/Y/Z + 1
    Object.keys(rpsMap.A).indexOf(
      // find the X/Y/Z we need
      Object.keys(rpsMap[split[0]]).find(
        x => rpsMap[split[0]][x] === outcomesMap[split[1]]
      )
    ) + 1;

  return acc;
}, 0);

console.log(result2);
