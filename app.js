(function (d, cards, colors) {
  let appElement, appCardsSection, shuffleBtn, sortBtn;

  const attachEventListeners = () => {
    shuffleBtn.addEventListener("click", shuffleCards);
    sortBtn.addEventListener("click", sortCards);
  };

  const generateCardListUI = (cards) => {
    clearCardListUI();

    cards.forEach((card, index) => {
      const cardUI = Card.generateUI(card, colors[index % colors.length]);
      appCardsSection.appendChild(cardUI);
    });
  };

  const clearCardListUI = () => {
    while (appCardsSection.firstChild) {
      appCardsSection.removeChild(appCardsSection.firstChild);
    }
  };

  const shuffleCards = () => {
    const shuffledArray = cards.sort(() => Math.random() - 0.5);
    generateCardListUI(shuffledArray);
  };

  const sortCards = () => {
    const sortedArray = cards.sort();
    generateCardListUI(sortedArray);
  };

  const init = () => {
    generateCardListUI(cards);
  };

  d.addEventListener("DOMContentLoaded", () => {
    appElement = d.getElementById("app");
    appCardsSection = d.getElementById("content-cards-section");
    shuffleBtn = d.getElementById("shuffle-btn");
    sortBtn = d.getElementById("sort-btn");

    attachEventListeners();
    init();
  });
})(document, Data.cards, Data.colors, Card);
