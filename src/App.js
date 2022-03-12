import * as React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';



const  theme = createTheme ({
      palette: {
            primary: {
                  main: '#000000'
            },
            text:{
                  primary: "#000000"
                } 
            
      },
      typography: {
            fontFamily: ['"Roboto"', 'sans-serif'].join(',')
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
