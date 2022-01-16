import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import '../../styles/CitySearch.css'
import Weather from './weather';


const CitySearch = (props) => {

        
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
    console.log(weather);
    console.log(error);
    // eslint-disable-next-line
      },[findCity]);

        let component;                      
    
    
      if(error) {
        component = <div >
                        no hay resultados
                    </div>
      } else {
        component =<div  key={Weather.id}>
                         
                        <h2> Temperatura: {weather.main.temp} </h2>
                        <h2> Humedad: {weather.main.humidity} </h2> 
                        <h2> Presion: {weather.main.pressure} </h2>   
                        <h2> Lluvias: {weather.clouds.all} %</h2>    
                        <h2> Viento: {weather.wind.speed} </h2>  
                               
                    </div> 
      }
    

      


       return (
        <div className='search'>

            <h1>El clima en</h1>

            <TextField                             
                 style={{fontSize: 35, fontWeight: 600, display: 'block'}}  
                              
                 id="standard-basic"
                 variant="standard"
               
                    value={city}                   
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={(e) =>{
                        if(e.key === 'Enter'){                           
                            setFindCity(true); // Hay una busqueda valida.
                            e.preventDefault()
                         }
                    }}

            />
        
            <div className="col m6 s12">
                        {component}
            </div>

                      

        </div>
    );
};


export default CitySearch;

/*
<Input
                type='text'
                minWidth='100'
                inputStyle={{fontSize: 35, fontWeight: 600, display: 'block'}}
                value={inputValue}
                onChange={function(event) {
                    setInput(event.target.value) 
                  }}

                   { error ? <div sx={{ display: { xs: 'none', md: 'block' }}}>
                                              no hay resultados
                                         </div>
                                        : 
                                        <div sx={{ display: { xs: 'none', md: 'block' }}}>
                                            {weatherData.temp}
                                        </div>  
                                }
                         
               
            />*/