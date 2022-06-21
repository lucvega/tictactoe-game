import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SavedGames from './components/savedGames/SavedGames';
import reportWebVitals from './reportWebVitals';
import { theme } from './styles/material-theme';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import Game from './components/game/Game';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Routes>
          <Route path='/' element={<Game />}></Route>
          <Route path='/savedGames' element={<SavedGames />}></Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </SnackbarProvider>
    </ThemeProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
