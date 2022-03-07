import React, { useState, useEffect } from 'react';

import { Box, Grid, makeStyles } from '@material-ui/core';

import { Typography } from '@material-ui/core';
import  TextField  from '@mui/material/TextField';
import LocationCity from '@mui/icons-material/LocationCity';

import WeatherIcon from './WeatherIcon';

//import BackImage from './assets/background-pattern.png'



const useStyles = makeStyles({
    
  tempContainer:{
      
      paddingTop: '35px',
     color: '#FFFFFF' 
    
  },
  text:{
      color: '#FFFFFF',        
  }
});



const Weather = (props) => {


    const classes = useStyles();

        
    const api_key =  '29046abedc6759780d339d28d50c93a2';
    const url_base= 'https://api.openweathermap.org/data/2.5/'; 

    const [city, setCity] = useState("");              // Ciudad a buscar.
    const [findCity, setFindCity] =  useState(false);  // Busqueda valida en city.      
    const [weather, setweather] = useState({});   // Datos del clima
    const [error, setError] = useState(true);        // Datos del clima validos    

     
             
       useEffect(() => {

            const ApiCall = async () => {
        
                if (findCity){
            
                const url = `${url_base}weather?q=${city}&units=metric&APPID=${api_key}`;
        
                const response = await fetch(url);
                const data = await response.json();
        
                
            
        
                // Detecta si hubo resultados correctos en la consulta
              
                if(response.status === 200) {
                    setweather(data); // Importante_Primero cargar la data para que no randeriza antes de cambiar a false error y no encuentre data.
                    setError(false);
                    
                } else {
                    setError(true); 
                }
                setFindCity(false);
                
            }
        }

    ApiCall();
    //console.log(weather);
    //console.log(error);
    
      },[findCity, city]);                            
        
     
      return (
           <>
            
    
            <Grid container >
                <Grid item xs={1} sm={3}>            
                </Grid>
    
                <Grid item xs={10} sm={6}>
                        <Box 
                             sx={{      
                                marginTop: 150,          
                                height: 500,  
                                background: 'linear-gradient(180deg,#4D5DFB,#08C8F6)',
                                borderRadius: 10,
                            
                            }}>
                                <br></br>
                             <Typography 
                                className={classes.text}
                                variant='h4'
                                align='center'>
                                 Ahora en
                             </Typography>
    
                             <Box>
                                 <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                                     <LocationCity sx={{ mr: 1, my: 0.5, color: 'white'}}/>
                                     <TextField                       
                                        id="standard-basic"
                                        variant="standard"
                                        label="Ingrese la ciudad"
                                        value={city}                   
                                        onChange={(e) => setCity(e.target.value)}
                                        onKeyDown={(e) =>{
                                            if(e.key === 'Enter'){                           
                                                setFindCity(true); // Hay una busqueda valida.
                                                e.preventDefault()
                                            }
                                        }}
                                      />
                                  </Box>                                                                                
                             </Box>

                              {error ? (  < >
                                              
                                           </>
                              ):(
                                <>
                             <br></br>
                             <Typography 
                                className={classes.text}
                                variant='h5'
                                align='center'>
                                 Lluvia moderada
                             </Typography>
                             <br></br>
                             <br></br>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                        <WeatherIcon  code={1000} isDay={1}
                                                      color={{fill: '#fff'}}>
                                         </WeatherIcon>                                     
                                </Grid>
    
                                <Grid item xs={6} >
                                    <Typography 
                                             className={classes.tempContainer}
                                             variant='h2'
                                             align='center'>                                    
                                   {weather.main.temp}  <sup style={{ fontSize: '35px'}}>°C</sup>
                                    </Typography>                                      
                                </Grid>
                                
    
                                <Grid item xs={12} className={classes.tempContainer}>
                                <br></br>
                                <br></br>  
                                    <Typography className='properties__value'
                                                variant='h5'
                                                align='center'>                                     
                                            
                                            {weather.wind.speed}<span>m/s</span>  {weather.main.pressure}<span>mm Hg</span> {weather.clouds.all}<span>%</span>
                                    </Typography>                                  
                                </Grid>
    
                            </Grid> 
                            <br></br>
                            <br></br> 
                             </> )}              
                        </Box>                
                </Grid>
    
                <Grid item xs={1} sm={3}>  
                                
                </Grid> 
    
                
            </Grid>
            
            
    
            
            
    
            
    
        </>);
};


export default Weather;






