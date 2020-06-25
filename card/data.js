const Data = (function () {
  const cards = Array.from(Array(9), (_, i) => i + 1);
  const colors = ["#6F98A8", "#72C3DC", "#2F454E", "#BFBFBF"];

  return {
    cards,
    colors,
  };
})();
