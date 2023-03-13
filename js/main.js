let a, b, h;
let sumOfFactorials = 0;
do {
  a = +prompt(`Enter a non-negative "A" value:`);
  console.log("🚀 ~ file: main.js:6 ~ a:", a);
} while (isNaN(a) || a < 0);

do {
  b = +prompt(`Enter a "B" value greater than "A":`);
} while (isNaN(b) || b <= a);

do {
  h = +prompt(`Enter a positive "H" value:`);
} while (isNaN(h) || h <= 0);

for (a; a <= b; a += h) {
  let res = 1;
  for (j = 1; j <= a; j++) {
    res *= j;
  }
  sumOfFactorials += res;
}
alert(`The sum of factorials is ${sumOfFactorials}!`);
