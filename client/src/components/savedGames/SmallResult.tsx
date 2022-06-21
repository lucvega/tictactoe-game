import { Box, Chip } from '@mui/material';
import { Value } from '../game/GameState';
import React from 'react';

type SmallResultProps = {
  winner: Value;
};

const SmallResult = ({ winner }: SmallResultProps) => {
  return (
    <Box textAlign='center' marginY={2}>
      {winner === null ? (
        <Chip
          variant='filled'
          size='small'
          color='warning'
          label={`Draw Game`}
        />
      ) : (
        <Chip
          variant='filled'
          size='small'
          color={winner === 'X' ? 'secondary' : 'primary'}
          label={`Winner ${winner}`}
        />
      )}
    </Box>
  );
};

export default SmallResult;
