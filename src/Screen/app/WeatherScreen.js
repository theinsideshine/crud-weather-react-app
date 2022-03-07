import React from 'react';

import SearchPage from '../../components/weather/SearchPage';
import { Footer } from '../../components/UI/Footer';
import Header from '../../components/UI/Header';

import '../../styles/weather.css';
import '../../index.css';
import '../../styles/adaptiveApp.css';



export const WeatherScreen = () => { 

  return (
    <div >
      <Header/>
      <SearchPage/>
      <Footer/>
    </div>
  )
};
//keyofevergreen.github.io/SimpleWeather/




 