import { Box } from '@mui/material';
import Player from './Player';
import React from 'react';

export type TurnPlayerProps = {
  xIsNext: boolean;
};

const TurnPlayer = (props: TurnPlayerProps) => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      margin='16px auto'
      width='45%'
    >
      <Player xIsNext={props.xIsNext} label='X' color='secondary' />
      <Player xIsNext={!props.xIsNext} label='O' color='primary' />
    </Box>
  );
};

export default TurnPlayer;
