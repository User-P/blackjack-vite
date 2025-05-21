import {
  accumulatePoints,
  createCard,
  createDeck,
  dealerPlay,
  takeCard,
} from "./usecases";

const blackjackGameModule = (() => {
  "use strict";
  let deck = [];
  const suits = ["C", "D", "H", "S"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const btnNewGame = document.getElementById("btnNewGame"),
    btnTakeCard = document.getElementById("btnTakeCard"),
    btnStop = document.getElementById("btnStop");

  let pointsPlayers = [];

  const divCardsPlayers = document.querySelectorAll(".divCards"),
    pointsHTML = document.querySelectorAll("small");

  const initializeGame = (players = 2) => {
    deck = createDeck(suits, values);
    pointsPlayers = [];
    for (let i = 0; i < players; i++) {
      pointsPlayers.push(0);
    }
    pointsHTML.forEach((element) => (element.innerHTML = 0));
    divCardsPlayers.forEach((element) => (element.innerHTML = ""));
    btnTakeCard.disabled = false;
    btnStop.disabled = false;
  };

  btnTakeCard.addEventListener("click", () => {
    const card = takeCard(deck);
    if (card) {
      const playerPointsValue = accumulatePoints(
        card,
        0,
        pointsPlayers,
        pointsHTML
      );
      createCard(card, 0, divCardsPlayers);
      if (playerPointsValue > 21) {
        btnTakeCard.disabled = true;
        btnStop.disabled = true;
        dealerPlay(
          playerPointsValue,
          deck,
          pointsPlayers,
          pointsHTML,
          divCardsPlayers
        );
      } else if (playerPointsValue === 21) {
        btnTakeCard.disabled = true;
        btnStop.disabled = true;
        dealerPlay(
          playerPointsValue,
          deck,
          pointsPlayers,
          pointsHTML,
          divCardsPlayers
        );
      }
    }
  });

  btnNewGame.addEventListener("click", () => {
    initializeGame();
  });

  btnStop.addEventListener("click", () => {
    btnTakeCard.disabled = true;
    btnStop.disabled = true;
    dealerPlay(
      pointsPlayers[0],
      deck,
      pointsPlayers,
      pointsHTML,
      divCardsPlayers
    );
  });

  return {
    newGame: initializeGame,
  };
})();
