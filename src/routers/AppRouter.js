import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,    
    Redirect,
  } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
  
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { WeatherScreen }  from '../Screen/app/WeatherScreen';

import auth from '../components/auth/LocalStorage';
import { login } from '../action/auth';

export const AppRouter = () => {
   
    const dispatch = useDispatch();    
    const [ checking, setCheking ] = useState (true);
    const [ isLoggedIn, setIsLoggedIn ] = useState (false);
    const { uid } = useSelector( state => state.auth)

    useEffect ( () => {
     
        if (!!uid){
            console.log('esta logeado');
            dispatch (login ( auth.getUid, auth.getName,  auth.getToken));
        }else {
            console.log('No esta logeado');
        }
            setCheking(false);
    },[uid,dispatch])  

       if ( checking ) {
            return ( 
                <h1>Espere....</h1>
            )

       }
     
  return (
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            isAuthenticated={ !!uid }
                            path="/auth"                            
                            component={ AuthRouter }
                        />

                        <PrivateRoute
                            exact
                            isAuthenticated={ !!uid }
                            path="/"
                            component={ WeatherScreen }
                        />
    |                   
                        <Redirect to ="/auth/login" />          

                    </Switch>
                </div>       
           </Router>
        )
}

