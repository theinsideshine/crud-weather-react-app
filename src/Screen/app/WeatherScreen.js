import React from 'react';

import SearchPage from '../../components/weather/SearchPage';
import ResponsiveAppBar from '../../components/UI/AppBar';
import { Footer } from '../../components/UI/Footer';

import '../../styles/weather.css';
import '../../index.css';
import '../../styles/adaptiveApp.css';



export const WeatherScreen = () => { 

  return (
    <div >
      <ResponsiveAppBar/>
      <SearchPage/>
      <Footer/>
    </div>
  )
};
//keyofevergreen.github.io/SimpleWeather/




 