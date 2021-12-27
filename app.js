import { products } from "./products.js";

let cheap = 0;

for (let current = 0; current < products.length; current++) {
  if (products[current].price < products[cheap].price) {
    cheap = current;
  }
}

console.log(cheap);
