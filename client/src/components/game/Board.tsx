import { theme } from '../../styles/material-theme';
import Square, { SquareProps } from './Square';
import { Grid, Paper } from '@mui/material';
import { BoardState } from './GameState';
import React from 'react';

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};

const Board = ({ board, onClick }: BoardProps) => {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };

  return (
    <Paper sx={{ background: theme.palette.background.default }}>
      <Grid container spacing={2}>
        <Square {...createProps(0)} />
        <Square {...createProps(1)} />
        <Square {...createProps(2)} />
        <Square {...createProps(3)} />
        <Square {...createProps(4)} />
        <Square {...createProps(5)} />
        <Square {...createProps(6)} />
        <Square {...createProps(7)} />
        <Square {...createProps(8)} />
      </Grid>
    </Paper>
  );
};

export default Board;
