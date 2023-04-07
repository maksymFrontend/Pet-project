

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { actionRequestWeather } from '../../actions/weather'



/*

if(sessionStorage.getItem('latitude')){

    navigator.geolocation.getCurrentPosition(async function(position) {

        sessionStorage.setItem('latitude', position.coords.latitude)
        sessionStorage.setItem('longitude', position.coords.longitude)



        sessionStorage.setItem('data', JSON.stringify(await w(position.coords.latitude, position.coords.longitude)))

        
    } );




    

}
*/





const Weather = ({requestDataWeather, dataWeather, coordinates}) =>{


    

    useEffect(() => requestDataWeather(), [coordinates])
    


    let data = dataWeather



    console.log(data?.cod === 429)

    let city = data?.name || ''
    let temp = Math.round(data?.main?.temp - 273,15 || 0)
    const d = new Date();
    
    let humidity = Math.round(data?.main?.humidity || 0)
    let wind = Math.round(data?.wind?.speed || 0)
    let feelslike = Math.round(data?.main?.feels_like - 273,15 || 0)


    
    let code = (data?.weather || [])[0]?.icon || ''



    return(

        <div className="weatherBlock">
            { (data?.cod === 429) || (data?.cod === 401) ?

            <div className='error'>Погода тимчасово не працює</div>
            :
            <>
                <div className="weatherCity">
                    {city}
                </div>
                <div className="weatherTempBlock">
                    <div className="weatherTemp">
                        {temp}°C
                    </div>
                    <div className='weatherIcon'>

                        <img src={`http://openweathermap.org/img/wn/${code}@2x.png`} className="iconWeather"/>
                    </div>
                </div>

                <div className="weatherInfoMore">
                    Відчувається як: {feelslike}°C<br/>
                    Вологість: {humidity}%<br/>
                    Вітер: {wind} км/год
                </div>
            </>
}

        </div>
    )
}



export const CWeather = connect(state=>(
                        {
                            dataWeather:state?.weather?.data,
                            coordinates: 0
                        }),
                        {
                            requestDataWeather:actionRequestWeather
                        })(Weather)