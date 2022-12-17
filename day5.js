const input = require("./inputs/day5");

const inputSplit = input.split("\n\n");
let stacksStr = inputSplit[0].split("\n").reverse();

let stacksArr = [];
for (let i = 1; i < stacksStr[0].length; i += 4) {
  let stack = "";

  for (let j = 1; j < stacksStr.length - 1; j++) {
    stack = stack.concat(stacksStr[j].charAt(i));
  }
  stacksArr.push(stack.trim());
}

let result = [...stacksArr];
const moves = inputSplit[1].split("\n");
moves.map(curr => {
  const split = curr.split(" ");
  const count = parseInt(split[1]);
  const from = split[3] - 1;
  const to = split[5] - 1;

  const idx = result[from].length - count;
  const removed = result[from].substring(0, idx);
  const added = result[to].concat(
    [...result[from].substring(idx, result[from].length)].reverse().join("")
  );
  result[from] = removed;
  result[to] = added;
});

result = result.reduce(
  (acc, curr) => acc.concat(curr.charAt(curr.length - 1)),
  ""
);

console.log(result);

let result2 = [...stacksArr];
moves.map(curr => {
  const split = curr.split(" ");
  const count = parseInt(split[1]);
  const from = split[3] - 1;
  const to = split[5] - 1;

  const idx = result2[from].length - count;
  const removed = result2[from].substring(0, idx);
  const added = result2[to].concat(
    result2[from].substring(idx, result2[from].length)
  );
  result2[from] = removed;
  result2[to] = added;
});

result2 = result2.reduce(
  (acc, curr) => acc.concat(curr.charAt(curr.length - 1)),
  ""
);

console.log(result2);
