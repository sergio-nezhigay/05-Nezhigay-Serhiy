const a = +prompt(`Enter, please, your "A" value (should not be negative)...`);
const b = +prompt(
  `Enter, please, your "B" value ("B" should be greater than "A")...`
);
const h = +prompt(
  `Enter, please, your 'H' value ("H" should be greater than 0)...`
);

let sumOfFactorials = 0;

if (b > a) {
  if (h > 0 && a >= 0 && b > 0) {
    for (let i = a; i <= b; i += h) {
      let res = 1;
      for (j = 1; j <= i; j++) {
        res *= j;
      }
      sumOfFactorials += res;
    }
    alert(`Sum of factorial as to task is ${sumOfFactorials} ! Hooray!`);
  } else
    alert(
      `B and H should be greater than 0, A should not be negative! Please, try one more time... :(`
    );
} else alert(`"B" should be greater than "A"! :(`);
