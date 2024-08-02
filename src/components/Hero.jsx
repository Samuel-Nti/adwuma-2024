import React from 'react';
import back from '../assets/images/back.jpg'


const Hero = ({
    title = 'ADWUMA FOR ALL',
    subtitle = 'Find the job that fits your skill set',
  }) =>  {
  return (
    <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${back})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
      <h1 className='text-30xl font-extrabold text-white sm:text-8xl md:text-7xl'>
            {title}
          </h1>
          <p className='my-4 text-xl text-white'>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
