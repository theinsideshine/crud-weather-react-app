import React from 'react';
import Crud from '../../components/crud/crud';
import ResponsiveAppBar from '../../components/UI/AppBar';
import { Footer } from '../../components/UI/Footer';


import '../../styles/weather.css';
import '../../index.css';
import '../../styles/adaptiveApp.css';

export const CrudScreen = () => {
  
  return (
    <div>   
          <ResponsiveAppBar/>
          <Crud/>
          <Footer/>      
    </div>
  )

};

//<ResponsiveAppBar/>