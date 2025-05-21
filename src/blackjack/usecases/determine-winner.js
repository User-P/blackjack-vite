export const determineWinner = (pointsPlayers) => {
  const [minimumPoints, dealerPointsValue] = pointsPlayers;

  setTimeout(() => {
    if (dealerPointsValue === minimumPoints) {
      alert("It's a tie!");
    } else if (minimumPoints > 21) {
      alert("Dealer wins!");
    } else if (dealerPointsValue > 21) {
      alert("You win!");
    } else {
      alert("Dealer wins!");
    }
  }, 100);
};
