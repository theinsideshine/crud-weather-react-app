import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";

import WeatherScreen from '../Screen/app/WeatherScreen';
import AuthRouter from '../routers/AuthRouter';

const AppRouter = () => {
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