import { BoardState, Value } from '../game/GameState';
import { Box, Button, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import API from '../../services/api-service';
import { urls } from '../../config/urls';
import Loading from '../common/loading';
import { useSnackbar } from 'notistack';

type SaveBtnProps = {
  game: BoardState;
  winner: Value;
  gameStep: number;
};

const SaveBtn = ({ game, winner, gameStep }: SaveBtnProps) => {
  const [gameSaved, setGameSaved] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (game.every((element) => element === null)) {
      setGameSaved(false);
    }
  }, [game]);

  const saveGame = async () => {
    setLoading(true);
    API.post(urls.saveGame, {
      savedGame: JSON.stringify(game),
      winner: winner,
    })
      .then(() => {
        setLoading(false);
        setGameSaved(true);
        enqueueSnackbar('Game Saved Successfully', {
          variant: 'success',
        });
      })
      .catch(() => {
        enqueueSnackbar('Oops, something went wrong', {
          variant: 'error',
        });
      });
  };

  return (
    <Box textAlign='center'>
      <Tooltip title='Save Game' arrow>
        <Button
          variant='contained'
          size='large'
          onClick={saveGame}
          disabled={(winner === null && gameStep < 9) || loading || gameSaved}
        >
          <Loading showLoading={loading} />
          <SaveIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default SaveBtn;
