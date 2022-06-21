import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6f33ff',
    },
    secondary: {
      main: '#33ceff',
    },
    text: {
      primary: '#fff',
      secondary: '#ffffffb3',
    },
  },
});

theme.components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        padding: 24,
        marginTop: 24,
        borderRadius: 10,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        minWidth: 40,
        height: 40,
        borderRadius: 25,
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
  },
  MuiSkeleton: {
    defaultProps: {
      animation: 'wave',
    },
    styleOverrides: {
      root: {
        transform: 'scale(1)',
        borderRadius: 10,
      },
    },
  },
};
