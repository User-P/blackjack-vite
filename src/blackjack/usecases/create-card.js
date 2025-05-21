export const createCard = (card, turn, divCardsPlayers) => {
  const imgCard = document.createElement("img");
  imgCard.src = `assets/cards/${card}.png`;
  imgCard.classList.add("custom-card");
  divCardsPlayers[turn].append(imgCard);
};
