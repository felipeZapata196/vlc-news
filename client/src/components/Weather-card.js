import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);


const WeatherCard = () => {
  

 
  return (
    <>
      <div className="m-4">
        <div className="sm">
          <p className="text-2xl font-semibold tracking-wide dark:text-white">
          
          </p>
          <p className="tracking-wide text-gray-500 dark:text-gray-400">
           
            
          </p>
        </div>
        <div className="my-8 flex flex-row justify-between text-5xl tracking-wide lg:my-4 lg:text-6xl">
          <span className="mt-6 font-light text-gray-500 dark:text-white md:mt-10">
           
            <span className="mt-1 flex flex-col text-base font-normal tracking-wide text-gray-500 dark:text-gray-400">
            
            </span>{' '}
          </span>
          <div className="mt-4 text-8xl text-indigo-700 dark:text-white sm:text-9xl">
           
          </div>
        </div>
        <div className="mt-1 text-indigo-700 dark:text-gray-400">
          <span className="wi wi-strong-wind text-xl"></span>
          <span className="ml-1 mr-2 tracking-wide text-gray-500 dark:text-white">
          
          </span>
          <span className="wi wi-humidity text-xl"></span>
          <span className="ml-1 tracking-wide text-gray-500 dark:text-white">

          </span>
        </div>
        <div className="mt-10 mb-4 text-center text-2xl tracking-wide text-gray-500 dark:text-white">
        
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
