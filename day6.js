const input = require("./inputs/day6");

for (let i = 0; i < input.length - 4; i++) {
  if ([...new Set(input.substring(i, i + 4))].length === 4) {
    console.log(i + 4);
    break;
  }
}

for (let i = 0; i < input.length - 14; i++) {
  if ([...new Set(input.substring(i, i + 14))].length === 14) {
    console.log(i + 14);
    break;
  }
}
