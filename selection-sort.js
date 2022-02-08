import { products } from "./products.js";
import { cheapest } from "./cheap.js";

for (
  let currentPosition = 0;
  currentPosition < products.length;
  currentPosition++
) {
  let currentCheapest = cheapest(products, currentPosition);
  let currentItem = products[currentPosition];
  let cheapestItem = products[currentCheapest];

  //access position and change values
  products[currentPosition] = cheapestItem;
  products[currentCheapest] = currentItem;
}

console.table(products);
