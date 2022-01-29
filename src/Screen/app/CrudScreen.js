import { Grid } from '@material-ui/core';
import React from 'react';
import Crud from '../../components/crud/crud';
import ResponsiveAppBar from '../../components/UI/AppBar';


import '../../styles/weather.css';
import '../../index.css';
import '../../styles/adaptiveApp.css';

export const CrudScreen = () => {
  
  return (
    <div  > 
     
              <ResponsiveAppBar/>
          
           
                <Crud/>
        
      
      
    </div>
  )

};

//<ResponsiveAppBar/>