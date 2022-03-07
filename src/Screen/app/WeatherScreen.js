import React from 'react';


import { Footer } from '../../components/UI/Footer';
import Header from '../../components/UI/Header';
import Weather from '../../components/weather/Weather';
import Paper from '@mui/material/Paper';
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
//keyofevergreen.github.io/SimpleWeather/




 