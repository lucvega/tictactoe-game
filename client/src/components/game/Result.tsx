import { Box, Chip } from '@mui/material';
import { Value } from './GameState';
import React from 'react';

export type ResultProps = {
  winner: Value;
  gameStep: number;
};

const Result = ({ winner, gameStep }: ResultProps) => {
  return (
    <Box textAlign='center' marginY={'34px'}>
      {gameStep === 9 && winner === null ? (
        <Chip variant='filled' color='warning' label={`Draw Game`} />
      ) : (
        <Chip
          variant='filled'
          color={winner === 'X' ? 'secondary' : 'primary'}
          label={`You Win ${winner}`}
        />
      )}
    </Box>
  );
};

export default Result;
