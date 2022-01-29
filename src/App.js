import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

//import SignIn from './components/auth/SignIn';
//import SignUp from './components/auth/SignUp';
//import Crud from './components/crud/crud';
//import Weather from './components/weather/weather'

import { AppRouter } from './routers/AppRouter';

export default function App() {
  return(
        <Provider store={ store }>
              <AppRouter />
          </Provider>
       )
  }
