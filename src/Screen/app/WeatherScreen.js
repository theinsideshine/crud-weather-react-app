import React from 'react';

import Paper from '@mui/material/Paper';

import Footer from '../../components/UI/Footer';
import Header from '../../components/UI/Header';
import Weather from '../../components/weather/Weather';

import ImagePattern from '../../images/background-pattern.png';
export const WeatherScreen = () => { 

  return (
    <Paper style={{ backgroundImage: `url(${ImagePattern})`}}>
        <Header/>
        <Weather/>
        <Footer/>
    </Paper>
  )
};





 