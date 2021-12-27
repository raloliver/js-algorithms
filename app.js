const prices = [25, 15, 30, 50, 45, 20];

let cheap = 0;

for (let current = 0; current < prices.length; current++) {
  if (prices[current] < prices[cheap]) {
    cheap = current;
  }
}

console.log(cheap);
