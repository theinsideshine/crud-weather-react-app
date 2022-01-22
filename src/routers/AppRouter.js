import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import WeatherScreen from '../Screen/app/WeatherScreen';
import AuthRouter from '../routers/AuthRouter';
import auth from '../components/auth/LocalStorage';
import { login } from '../action/auth';



const AppRouter = () => {

   
    const dispatch = useDispatch();
    
    const [ checking, setCheking ] = useState (true);
    const [ isLoggedIn, setIsLoggedIn ] = useState (false);

    useEffect ( () => {
     
        
        console.log('paso por ApprRouter');
        if ( auth.getUid() === null ) {
            console.log('No hay usuario logeado.');
            setIsLoggedIn(false);
        }else {
           dispatch ( login( auth.getUid(), auth.getName(), auth.getToken()) );
           setIsLoggedIn(true);
        }
        setCheking(false);
           
       },[dispatch,setCheking])

       if ( checking ) {
            return ( 
                <h1>Espere....</h1>
            )

       }
     
  return (
            <Router>
                <div>
                    <Switch>
                        <Route
                            path="/auth"
                            component={ AuthRouter }
                        />

                        <Route
                            exact
                            path="/"
                            component={ WeatherScreen }
                        />
    |                   
                        <Redirect to ="/auth/login" />          

                    </Switch>

                </div>
      
           </Router>
        )
};

export default AppRouter;