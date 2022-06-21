import { Button, Grid, Typography } from '@mui/material';
import { Value } from './GameState';
import React from 'react';

export type SquareProps = {
  value: Value;
  onClick: () => void;
};

const Square = (props: SquareProps) => {
  return (
    <Grid item xs={4}>
      <Button
        variant='outlined'
        fullWidth
        onClick={props.onClick}
        sx={{ height: 100 }}
      >
        <Typography
          variant='h2'
          fontWeight='bold'
          color={props.value === 'X' ? 'secondary' : 'primary'}
        >
          {props.value}
        </Typography>
      </Button>
    </Grid>
  );
};

export default Square;
