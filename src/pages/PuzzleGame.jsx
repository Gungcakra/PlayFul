// src/components/PuzzleGame.jsx
import React, { useState, useEffect } from "react";
import "../assets/css/PuzzleGame.css";

const PuzzleGame = () => {
  const gridSize = 3; // 3x3 grid
  const tileCount = gridSize * gridSize - 1;
  const [tiles, setTiles] = useState([]);
  const [emptyTileIndex, setEmptyTileIndex] = useState(tileCount);
  const [draggingTileIndex, setDraggingTileIndex] = useState(null);
  const imageURL = "https://i.pinimg.com/474x/41/3d/e6/413de6a733faa845a6d16b91289594bc.jpg"; // Change this to your desired image URL
  const shuffleMoves = 10; // Number of moves to shuffle the tiles

  useEffect(() => {
    setTiles(shuffle(generateTiles()));
  }, []);

  const generateTiles = () => {
    const tiles = [...Array(tileCount).keys()].map((n) => n + 1);
    tiles.push(null);
    return tiles;
  };

  const shuffle = (tiles) => {
    let shuffledTiles = tiles.slice();
    let currentEmptyIndex = tileCount;
    let previousIndex = -1;
    for (let i = 0; i < shuffleMoves; i++) {
      const movableTiles = getMovableTiles(currentEmptyIndex);
      const filteredMovableTiles = movableTiles.filter((index) => index !== previousIndex);
      const nextIndex = filteredMovableTiles[Math.floor(Math.random() * filteredMovableTiles.length)];
      shuffledTiles[currentEmptyIndex] = shuffledTiles[nextIndex];
      shuffledTiles[nextIndex] = null;
      previousIndex = currentEmptyIndex;
      currentEmptyIndex = nextIndex;
    }
    setEmptyTileIndex(currentEmptyIndex);
    return shuffledTiles;
  };

  const getMovableTiles = (emptyIndex) => {
    const emptyRow = Math.floor(emptyIndex / gridSize);
    const emptyCol = emptyIndex % gridSize;
    const moves = [];

    if (emptyRow > 0) moves.push(emptyIndex - gridSize); // Move up
    if (emptyRow < gridSize - 1) moves.push(emptyIndex + gridSize); // Move down
    if (emptyCol > 0) moves.push(emptyIndex - 1); // Move left
    if (emptyCol < gridSize - 1) moves.push(emptyIndex + 1); // Move right

    return moves;
  };

  const canMoveTile = (index) => {
    return getMovableTiles(emptyTileIndex).includes(index);
  };

  const handleTouchStart = (index) => (event) => {
    event.preventDefault();
    setDraggingTileIndex(index);
  };

  const handleTouchEnd = (event) => {
    event.preventDefault();
    if (draggingTileIndex !== null && canMoveTile(draggingTileIndex)) {
      const newTiles = tiles.slice();
      newTiles[emptyTileIndex] = newTiles[draggingTileIndex];
      newTiles[draggingTileIndex] = null;
      setTiles(newTiles);
      setEmptyTileIndex(draggingTileIndex);
      setDraggingTileIndex(null);
    }
  };

  const handleTouchMove = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (index) => (event) => {
    event.dataTransfer.setData("tileIndex", index);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const tileIndex = parseInt(event.dataTransfer.getData("tileIndex"), 10);
    if (canMoveTile(tileIndex)) {
      const newTiles = tiles.slice();
      newTiles[emptyTileIndex] = newTiles[tileIndex];
      newTiles[tileIndex] = null;
      setTiles(newTiles);
      setEmptyTileIndex(tileIndex);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const isSolved = () => {
    for (let i = 0; i < tileCount; i++) {
      if (tiles[i] !== i + 1) return false;
    }
    return true;
  };

  return (
    <div className="puzzle-container">
      <h2 className="text-center mb-4">Image Sliding Puzzle</h2>
      <div
        className="puzzle-grid"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`puzzle-tile ${tile === null ? "empty-tile" : ""}`}
            draggable={tile !== null}
            onDragStart={handleDragStart(index)}
            onTouchStart={handleTouchStart(index)}
            style={{
              backgroundImage: tile !== null ? `url(${imageURL})` : "none",
              backgroundSize: `${gridSize * 100}%`,
              backgroundPosition: tile !== null
                ? `${(tile - 1) % gridSize * (100 / (gridSize - 1))}% ${Math.floor((tile - 1) / gridSize) * (100 / (gridSize - 1))}%`
                : "none",
            }}
          >
            {tile === null && <div className="tile-number"></div>}
          </div>
        ))}
      </div>
      {isSolved() && (
        <div className="alert alert-success mt-3 text-center">
          🎉 You solved it! Great job! 🎉
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
