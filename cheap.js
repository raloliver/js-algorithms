export const cheapest = (list, initialPosition) => {
  let cheap = initialPosition;

  for (
    let currentPosition = initialPosition;
    currentPosition < list.length;
    currentPosition++
  ) {
    if (list[currentPosition].price < list[cheap].price) {
      cheap = currentPosition;
    }
  }

  return cheap;
};
