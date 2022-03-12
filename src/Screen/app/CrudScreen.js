import React from 'react';

import Paper from '@mui/material/Paper';

import Crud from '../../components/crud/crud';
import Footer from '../../components/UI/Footer';
import Header from '../../components/UI/Header';

import ImagePattern from '../../images/background-pattern.png';

export const CrudScreen = () => {
  
  return (
    <Paper style={{ backgroundImage: `url(${ImagePattern})`}}
    >  
          <Header/>
          <Crud/>
          <Footer/>      
    </Paper>
  )

};

//<Crud/>