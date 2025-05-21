import { shuffle } from "underscore";

export const createDeck = (suits, values) => {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push(value + suit);
    }
  }
  return shuffle(deck);
};
