// theme.js
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color
    },
    secondary: {
      main: '#ff4081', // Secondary color
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Custom font
    h1: {
      fontSize: '3rem',
    },
  },
  shape: {
    borderRadius: 8, // Default border radius
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none', // Removes the shadow globally
          '--Paper-shadow': 'none',
          '--AppBar-color': '#3f51b5',
          'backgroundColor': 'rgb(241, 244, 249)',
        },
      },
    },
    MuiBox:{
        styleOverrides: {
            root: {
              // Default Box styles
              '&#custom-box-id': {
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                'z-index': '-1',
                height: '738px',
                'border-bottom-left-radius': '32px',
                'border-bottom-right-radius': '32px',
                background: 'url(data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 50 60"><text x="0"y="25"fill="%23E6E8EE"font-size="60px">.</text></svg>) 0px 0px / 35px 35px rgb(241, 244, 249)',
              },
            },
          },
    },
  },
});

export default theme;
