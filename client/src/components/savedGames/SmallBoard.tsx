import { BoardState, Value } from '../game/GameState';
import { theme } from '../../styles/material-theme';
import { Grid, Paper } from '@mui/material';
import SmallSquare from './SmallSquare';
import SmallResult from './SmallResult';
import React from 'react';

type SmallBoardProps = {
  board: BoardState;
  winner: Value;
};

const SmallBoard = ({ board, winner }: SmallBoardProps) => {
  const game = JSON.parse(board.toString());

  return (
    <Paper sx={{ background: theme.palette.background.default }}>
      <SmallResult winner={winner} />

      <Grid container spacing={2}>
        <SmallSquare value={game[0]} />
        <SmallSquare value={game[1]} />
        <SmallSquare value={game[2]} />
        <SmallSquare value={game[3]} />
        <SmallSquare value={game[4]} />
        <SmallSquare value={game[5]} />
        <SmallSquare value={game[6]} />
        <SmallSquare value={game[7]} />
        <SmallSquare value={game[8]} />
      </Grid>
    </Paper>
  );
};

export default SmallBoard;
