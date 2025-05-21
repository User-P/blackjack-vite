import { getCardValue } from "./get-card-value";

export const accumulatePoints = (card, turn, pointsPlayers, pointsHTML) => {
  pointsPlayers[turn] += getCardValue(card);
  pointsHTML[turn].innerHTML = pointsPlayers[turn];
  return pointsPlayers[turn];
};
