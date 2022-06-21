import { Container, Paper, alpha, CardMedia, Box, Slide } from '@mui/material';
import logo from '../../images/tic-tac-toe-logo.png';
import { theme } from '../../styles/material-theme';
import { useGameState } from './GameState';
import TurnPlayer from './TurnPlayer';
import Result from './Result';
import Footer from './Footer';
import Board from './Board';
import React from 'react';

const Game = () => {
  const { gameState, current, xIsNext, winner, resetGame, handleClick } =
    useGameState();

  return (
    <Slide direction='right' in>
      <Container maxWidth='sm'>
        <Paper
          sx={{
            background: alpha(theme.palette.background.paper, 0.5),
          }}
        >
          <Box maxWidth={130} margin='0 auto'>
            <CardMedia component='img' height='100%' image={logo} alt='logo' />
          </Box>

          {gameState.step === 9 || winner === 'X' || winner === 'O' ? (
            <Result winner={winner} gameStep={gameState.step} />
          ) : (
            <TurnPlayer xIsNext={xIsNext} />
          )}

          <Board board={current} onClick={handleClick} />

          <Footer
            game={current}
            winner={winner}
            gameStep={gameState.step}
            onClick={resetGame}
          />
        </Paper>
      </Container>
    </Slide>
  );
};

export default Game;
