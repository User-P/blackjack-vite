export const takeCard = (deck) => {
  if (deck.length === 0) {
    alert("No more cards in the deck");
    return null;
  }
  return deck.pop();
};
