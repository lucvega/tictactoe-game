import { Box, Chip, Typography } from '@mui/material';
import React from 'react';

export type PlayerProps = {
  xIsNext: boolean;
  color: 'primary' | 'secondary';
  label: 'X' | 'O';
};

const Player = ({ xIsNext, color, label }: PlayerProps) => {
  return (
    <Box textAlign='center' width={100}>
      <Chip
        variant={xIsNext ? 'filled' : 'outlined'}
        color={color}
        label={label}
      />
      {xIsNext && (
        <Typography variant='body2' marginTop={1}>
          Your Turn
        </Typography>
      )}
    </Box>
  );
};

export default Player;
