import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: "#010A0A",
      dark: "#071212"
    },
    secondary: {
      main: "#00FBF4",  
    },
    background: { default: '#010A0A' },
    text: {
      primary: "#fff",
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '64px',
      fontWeight: 700,
      '@media (min-width:0)': { fontSize: '28px' },
      '@media (min-width:500px)': { fontSize: '38px' },
      '@media (min-width:600px)': { fontSize: '48px' },
      '@media (min-width:900px)': { fontSize: '64px' },

    },
    h2: {
      fontSize: '40px',
      fontWeight: 600,
      '@media (max-width:991px)': { fontSize:'32px' },
      '@media (max-width:767px)': { fontSize:'28px' }
    },
    h3: {
      fontSize: '32px',
      fontWeight: 700,
    },
    h4: {
      fontSize: '28px',
      fontWeight: 700
    },
    button: {
      fontSize: '13px'
    },
    body1: {
      fontSize: '17px'
    },
    body2: {
      fontSize: '14px',
      fontWeight: 600,
      '@media (max-width:991px)': { fontSize: '13px' }
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 600,
      '@media (max-width:991px)': { fontSize: '12px' }
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 400
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 991,
      lg: 1280,
      xl: 1440,
    }
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          // I insert maxWidth here because appBar must have fullWidth
          maxWidth: '1024px',
          width: '100%',
          margin: 'auto',
          minHeight: 48,
          '@media (min-width:600px)': { //I must define like this to override default style
            minHeight: 48,
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: '153px',
          maxWidth: '153px',
          marginLeft: '12px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: ({ theme }) => ({
          height: '21px',
          padding: '5px 15px',
          fontSize: '13px',
          '&::placeholder': {
            color: theme.palette.secondary.main,  // Ensure theme is accessed correctly
            fontSize: '13px',
            fontWeight: 500,
          },
        }),
      },
    },
    MuiDrawer:{
      styleOverrides: {
        paper :({theme}) => ({
           backgroundColor: theme.palette.primary.main,
              display: 'flex', 
              flexDirection: 'row-reverse', 
              alignItems: 'flex-start'
        })
      }
    },
    MuiCard: {
      styleOverrides: {
        root:({theme})=> ({
          maxWidth: '300px',
          backgroundColor: theme.palette.primary.main,
          border: 'solid 1px #fff',
        })
      }
    },
  },
});
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);


