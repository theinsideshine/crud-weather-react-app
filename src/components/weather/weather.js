import React, { useState, useEffect } from 'react';

import { Box, Grid, makeStyles } from '@material-ui/core';

import { Typography } from '@material-ui/core';
import  TextField  from '@mui/material/TextField';
import LocationCity from '@mui/icons-material/LocationCity';

import WeatherIcon from './WeatherIcon';
import { arrayIcon } from './iconsArrays';

const useStyles = makeStyles((theme) =>({})); 

const Weather = (props) => {

    const classes = useStyles();
        
    const api_key =  '29046abedc6759780d339d28d50c93a2';
    const url_base= 'https://api.openweathermap.org/data/2.5/'; 

    const [city, setCity] = useState("");             // Ciudad a buscar.
    const [findCity, setFindCity] =  useState(false); // Busqueda valida en city.      
    const [weather, setweather] = useState({});       // Datos del clima
    const [error, setError] = useState(true);         // Datos del clima validos  
    const [ icon, setIcon ] = useState(1087);         // Iconos del clima, por defecto carga sol/nubo/rayo
    const [ iconDay, setIconDay ] = useState(0);      // Condicion de dia para iconos del clima 0 = noche

    // Convierte el icono de la api en el icono svg
        function convertIcon ( icon ) {
            arrayIcon.forEach(object =>{
                if(object.iconName === icon){
                    setIcon(object.icon);
                    setIconDay(object.iconDay);
                }
            });
        }
                  
       useEffect(() => {

            const ApiCall = async () => {
        
                if (findCity){
            
                const url = `${url_base}weather?q=${city}&units=metric&lang=sp&APPID=${api_key}`;
        
                const response = await fetch(url);
                const data = await response.json();                          
        
                // Detecta si hubo resultados correctos en la consulta
              
                if(response.status === 200) {
                    setweather(data); // Importante_Primero cargar la data para que no randeriza antes de cambiar a false error y no encuentre data.
                    convertIcon(data.weather[0].icon);                   
                    setError(false);    
                } else {
                    setError(true); 
                }
                
                setFindCity(false);  
                             
            }
        }

    ApiCall();  
    
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
                                borderRadius: 15,
                            
                            }}>
                                <br></br>
                             <Typography 
                                color='textPrimary'
                                variant='h3'
                                align='center'>
                                 Ahora en
                             </Typography>
    
                             <Box>
                                 <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                                     <LocationCity sx={{ mr: 1, my: 0.5}}/>
                                     <TextField                                             
                                        autoComplete='off'                   
                                        id='standard-basic'
                                        variant='standard'
                                        label='Ingrese la ciudad'
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
                                color='textPrimary'
                                className={classes.text}
                                variant='h5'
                                align='center'>
                                 {weather.weather[0].description}
                             </Typography>
                             <br></br>
                             <br></br>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>

                                         <WeatherIcon  code={icon} isDay={iconDay}
                                                      color={{fill: '#000'}}>
                                         </WeatherIcon>                                 
                                </Grid>
    
                                <Grid item xs={6} >
                                    <Typography 
                                             color='textPrimary'
                                             variant='h2'
                                             align='center'>                                    
                                   {weather.main.temp}  <sup style={{ fontSize: '35px'}}>°C</sup>
                                    </Typography>                                      
                                </Grid>
                                
    
                                <Grid item xs={12} className={classes.tempContainer}>
                                <br></br>
                                <br></br>  
                                    <Typography color='textPrimary'
                                                variant='h5'
                                                align='center'>                                     
                                            
                                            {weather.wind.speed}  <sub>    <span> m/s</span>  </sub> {weather.main.pressure} <sub>   <span>mmHg</span>   </sub>
                                            {weather.clouds.all}  <sub>    <span>%</span>     </sub> 
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

