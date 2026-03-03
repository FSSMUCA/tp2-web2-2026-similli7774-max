const paires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

console.log("| Paire 1 | Paire 2 | == | === |");
console.log("|---------|---------|----|----|");

paires.forEach(([val1, val2]) => {
  const loose = val1 == val2;
  const strict = val1 === val2;
  console.log(`| ${JSON.stringify(val1)} | ${JSON.stringify(val2)} | ${loose} | ${strict} |`);
});