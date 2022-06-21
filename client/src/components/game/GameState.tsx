import { useEffect, useState } from 'react';

export type Value = 'X' | 'O' | null;

export type BoardState = Value[];

const createBoardState = () => Array<Value>(9).fill(null);

export type GameState = {
  history: BoardState[];
  step: number;
};

const calculateWinner = (boardState: BoardState) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      return boardState[a];
    }
  }
  return null;
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    history: [createBoardState()],
    step: 0,
  });

  const current = gameState.history[gameState.step];
  const winner = calculateWinner(current);
  const xIsNext = gameState.step % 2 === 0;

  useEffect(() => {
    const game = localStorage.getItem('gameState');
    if (game) {
      const gameParsed = JSON.parse(game);
      setGameState({
        history: gameParsed.history,
        step: gameParsed.step,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [gameState]);

  const handleClick = (square: number) => {
    const history = gameState.history.slice(0, gameState.step + 1);
    const boardState = history[history.length - 1];
    if (calculateWinner(boardState) || boardState[square]) {
      return;
    }
    const newBoardState = boardState.slice();
    newBoardState[square] = gameState.step % 2 === 0 ? 'X' : 'O';
    history.push(newBoardState);
    setGameState({
      history: history,
      step: history.length - 1,
    });
  };

  const resetGame = () => {
    setGameState({
      history: [createBoardState()],
      step: 0,
    });
    localStorage.setItem(
      'gameState',
      JSON.stringify({ history: [createBoardState()], step: 0 })
    );
  };

  return {
    gameState,
    current,
    xIsNext,
    winner,
    resetGame,
    handleClick,
  };
}
