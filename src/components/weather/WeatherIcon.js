import React from 'react';
//import '../../styles/CurrentForecast.css';
import day from './day-sprites.svg';
import night from './night-sprites.svg';


const WeatherIcon = ({color, code, isDay, ...props}) => {
    const hrefToIcon = `${isDay ? day : night}#${code}`;

    return (
            <svg {...props} style={color} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <use href={hrefToIcon}></use>
            </svg>
    )

}

export default WeatherIcon;