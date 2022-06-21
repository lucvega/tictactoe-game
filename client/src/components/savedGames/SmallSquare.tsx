import { Button, Grid, Typography } from '@mui/material';
import { Value } from '../game/GameState';
import React from 'react';

export type SmallSquareProps = {
  value: Value;
};

const SmallSquare = ({ value }: SmallSquareProps) => {
  return (
    <Grid item xs={4}>
      <Button variant='outlined' fullWidth sx={{ height: 40 }}>
        <Typography
          variant='h5'
          fontWeight='bold'
          color={value === 'X' ? 'secondary' : 'primary'}
        >
          {value}
        </Typography>
      </Button>
    </Grid>
  );
};

export default SmallSquare;
