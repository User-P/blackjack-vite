import { determineWinner } from ".";
import { accumulatePoints } from "./accumulate-points";
import { createCard } from "./create-card";
import { takeCard } from "./take-card";

export const dealerPlay = (
  minimumPoints,
  deck,
  pointsPlayers,
  pointsHTML,
  divCardsPlayers
) => {
  let dealerPointsValue = 0;
  do {
    const card = takeCard(deck);
    dealerPointsValue = accumulatePoints(
      card,
      pointsPlayers.length - 1,
      pointsPlayers,
      pointsHTML
    );
    createCard(card, pointsPlayers.length - 1, divCardsPlayers);
  } while (dealerPointsValue < minimumPoints && minimumPoints <= 21);
  determineWinner(pointsPlayers);
};
