const puzzle = document.getElementById("puzzle");
let tiles = [];

function createTiles() {
  puzzle.innerHTML = '';
  tiles = [];

  for (let i = 1; i <= 15; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = i;
    tile.addEventListener("click", () => moveTile(i));
    tiles.push(tile);
  }

  const empty = document.createElement("div");
  empty.classList.add("tile", "empty");
  tiles.push(empty);

  tiles.forEach(tile => puzzle.appendChild(tile));
  shuffleTiles()
}

function moveTile(index) {
  const tileIndex = tiles.findIndex(t => t.textContent == index);
  const emptyIndex = tiles.findIndex(t => t.classList.contains("empty"));

  const validMoves = [
    emptyIndex - 1,
    emptyIndex + 1,
    emptyIndex - 4,
    emptyIndex + 4
  ];

  if (validMoves.includes(tileIndex) &&
      !(tileIndex % 4 === 3 && emptyIndex % 4 === 0) &&
      !(tileIndex % 4 === 0 && emptyIndex % 4 === 3)) {
    [tiles[tileIndex], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[tileIndex]];
    render();
  }
}

function render() {
  puzzle.innerHTML = '';
  tiles.forEach(tile => puzzle.appendChild(tile));
}

function shuffleTiles() {
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
  }
  render();
}

createTiles();