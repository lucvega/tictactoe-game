import {
  Container,
  Paper,
  alpha,
  CardMedia,
  Box,
  Button,
  Slide,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { BoardState, Value } from '../game/GameState';
import logo from '../../images/tic-tac-toe-logo.png';
import { theme } from '../../styles/material-theme';
import React, { useEffect, useState } from 'react';
import API from '../../services/api-service';
import { urls } from '../../config/urls';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import SmallBoard from './SmallBoard';

interface SavedGameData {
  data: SavedGame[];
}

interface SavedGame {
  id: number;
  savedGame: BoardState;
  winner: Value;
}

const SavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    API.get<SavedGame[], SavedGameData>(urls.getSavedGames)
      .then((response) => {
        setLoading(false);
        setSavedGames(response.data);
      })
      .catch(() => {
        setLoading(false);
        enqueueSnackbar('Oops, something went wrong', {
          variant: 'error',
        });
      });
  }, [enqueueSnackbar]);

  return (
    <Slide direction='left' in>
      <Container maxWidth='lg'>
        <Paper
          sx={{
            background: alpha(theme.palette.background.paper, 0.5),
          }}
        >
          <Link to='/'>
            <Button size='large' variant='outlined'>
              <ArrowBackIosNewIcon />
            </Button>
          </Link>
          <Box maxWidth={130} margin='0 auto'>
            <CardMedia component='img' height='100%' image={logo} alt='logo' />
          </Box>

          <Box maxHeight={'60vh'} overflow={'auto'}>
            {loading ? (
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <Skeleton variant='rectangular' width={350} height={270} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Skeleton variant='rectangular' width={350} height={270} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Skeleton variant='rectangular' width={350} height={270} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Skeleton variant='rectangular' width={350} height={270} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Skeleton variant='rectangular' width={350} height={270} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Skeleton variant='rectangular' width={350} height={270} />
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {savedGames.length === 0 ? (
                  <Grid item xs={12}>
                    <Box p={5} display='block' textAlign='center'>
                      <Typography paddingY={3}>No Games Saved</Typography>
                      <Link
                        to='/'
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Button variant='contained' size='large'>
                          Go To Play
                        </Button>
                      </Link>
                    </Box>
                  </Grid>
                ) : null}

                {savedGames.map((game, i) => (
                  <Grid item xs={12} md={4}>
                    <SmallBoard board={game.savedGame} winner={game.winner} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Paper>
      </Container>
    </Slide>
  );
};

export default SavedGames;
