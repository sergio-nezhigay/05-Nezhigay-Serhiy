const a = +prompt(`Enter a non-negative "A" value:`);
const b = +prompt(`Enter a "B" value greater than "A":`);
const h = +prompt(`Enter a positive "H" value:`);

let sumOfFactorials = 0;

if (b <= a) {
  alert(`"B" should be greater than "A"!`);
} else if (h <= 0 || a < 0 || b < 0) {
  alert(`"A" should be non-negative, "B" and "H" should be positive!`);
} else {
  for (let i = a; i <= b; i += h) {
    let res = 1;
    for (j = 1; j <= i; j++) {
      res *= j;
    }
    sumOfFactorials += res;
  }
  alert(`The sum of factorials is ${sumOfFactorials}!`);
}
