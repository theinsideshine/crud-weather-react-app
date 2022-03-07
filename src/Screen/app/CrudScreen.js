import React from 'react';

import Crud from '../../components/crud/crud';
import { Footer } from '../../components/UI/Footer';
import Header from '../../components/UI/Header';



export const CrudScreen = () => {
  
  return (
    <div>   
          <Header/>
          <Crud/>
          <Footer/>      
    </div>
  )

};

