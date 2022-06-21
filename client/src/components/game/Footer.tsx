import ViewGamesBtn from '../buttons/ViewGamesBtn';
import { BoardState, Value } from './GameState';
import ResetBtn from '../buttons/ResetBtn';
import SaveBtn from '../buttons/SaveBtn';
import { Grid } from '@mui/material';
import React from 'react';

type FooterProps = {
  game: BoardState;
  winner: Value;
  gameStep: number;
  onClick: () => void;
};

const Footer = ({ onClick, winner, gameStep, game }: FooterProps) => {
  return (
    <Grid container marginTop={2}>
      <Grid item xs={4}>
        <ViewGamesBtn />
      </Grid>
      <Grid item xs={4}>
        <ResetBtn onClick={onClick} />
      </Grid>
      <Grid item xs={4}>
        <SaveBtn game={game} winner={winner} gameStep={gameStep} />
      </Grid>
    </Grid>
  );
};

export default Footer;
