import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';



import { AppRouter } from './routers/AppRouter';

export default function App() {
  return(
        <Provider store={ store }>
              <AppRouter />
          </Provider>
       )
  }
