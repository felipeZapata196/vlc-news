import React, {useEffect, useState} from "react"
import axios from "axios";
export const Weather = () => {
    const baseURL = 'http://api.weatherapi.com/v1/forecast.json?key=fdb429da9783409da8292701220906&q=Madrid&days=3&aqi=no&alerts=no'
    const [current, setCurrent] = React.useState('null')
    const [forecast, setForecast] = React.useState([])
   
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          console.log(response.data.forecast.forecastday)
          console.log(response.data.forecast.forecastday)
          setForecast(response.data.forecast.forecastday)
          setCurrent(response.data.current.condition)
        
        });
      }, []);

    return (
        <div style={{width: '40%'}}>
            <div className="modulo10" >
                <div style={{display:'flex', height:'40%'}}>
                <img alt="" src={current.icon} ></img>
               <div style={{display: 'inlineBlock'}}>
                <h2>Valencia</h2>
               <h3>{current.text}</h3>
               </div>
                
              
                
                </div>
                <div style={card}>
                    <div style={child}>
                        <div style={day}>
                            <h5>Monday</h5>
                            <p>{current.text}</p>
                            <img alt="" src={current.icon} ></img>
                            <p>28º</p>
                           

                        </div>
                        {forecast.map((item)=>
                        <>
                        <div style={day}>
                            <h5>Monday</h5>
                            <p>{item.day.condition.text}</p>
                            <img alt="" src={item.day.condition.icon} ></img>
                            <p>{item.day.maxtemp_c}</p>

                        </div>

                    
                        </>
                        )}
                 
                 </div>
                
                </div>
                
                

            </div>
           
          </div>
          
  
    );
  }
  const card ={
    display: 'flex',
    height:'50%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
  const child ={
      display:'flex',
      width:'95%',
      justifyContent:'center'

  }
  const day ={
      width:'25%',
      display: 'inlineBlock',
      textAlign:'center',
      margin: '5px',
      borderRadius: 5,
     


  }