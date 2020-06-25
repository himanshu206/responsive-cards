const generateCardUI = (value, color) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute(
    "style",
    `background-color:${color}; border-left: 2rem solid ${color}`
  );

  const content = document.createTextNode(value);
  card.appendChild(content);

  return card;
};
