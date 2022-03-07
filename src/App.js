import * as React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';


const  theme = createTheme ({
      palette: {
            primary: {
                  main: '#000000'
            },
            text:{
                  primary: "#000000"
                } 
            
      },
      root: {
            backgroundColor: green
      }
})


export default function App() {
  return(
      <ThemeProvider theme={theme}>
        <Provider store={ store }>               
                    <AppRouter />                      
        </Provider>
      </ThemeProvider> 
       )
  }
