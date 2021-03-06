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
import { CrudScreen }  from '../Screen/app/CrudScreen';

import { login } from '../action/auth';
import { ver } from '../version';

export const AppRouter = () => {
   
    const dispatch = useDispatch();    
    const [ checking, setCheking ] = useState (true);
    const { uid } = useSelector( state => state.auth)

    useEffect ( () => {
     
        console.log(ver);
        //!!uid si u string es nulo 

        if (!!uid){
            console.log('Esta logeado');
            
        }else {
            if ( localStorage.getItem('token') === null ){
                console.log('No esta logeado');
            }else {

                // You have to modify the back to support re-authentication so you can log in.
              dispatch (login ( localStorage.getItem('uid') ,
              localStorage.getItem('name'),
              localStorage.getItem('token')));  
            }
            
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

<PrivateRoute
                            exact
                            isAuthenticated={ !!uid }
                            path="/crud"
                            component={ CrudScreen }
                        />
    |                   
                        <Redirect to ="/auth/login" />          

                    </Switch>
                </div>       
           </Router>
        )
}

