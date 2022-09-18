import React from 'react';

import Image from '../assets/pic23.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Welcome</span>  to Travely
          
          </h1>
          <p className='max-w-[480px] mb-8'>
            see the world and be happy with us 
          </p>
        </div>
        <div className='hidden mr-10 flex-1 bg-blend-color-burn lg:flex justify-end items-end'>
          <img className='w-full h-[100%]' src={Image} alt='' />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
