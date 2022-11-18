import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Shopping from '../assets/shopping-basket.png';

const Home = memo(() => {
  return (
    <>
      <Header></Header>
      <div className='h-screen w-4/5 block md:flex md:flex-row md:justify-center'>
        <div className='h-auto w-11/12 sm:w-1/2 md:w-2/5 flex flex-col justify-center md:ml-20 mt-36 md:mt-0'>
          <p className='text-3xl lg:text-4xl font-bold text-slate-800 leading-snug md:leading-normal lg:leading-normal'>
            세상의
          </p>
          <p className='text-3xl lg:text-4xl font-bold text-slate-800 leading-snug md:leading-normal lg:leading-normal'>
            모든 신발.
          </p>
          <p className='text-4xl lg:text-5xl font-bold text-teal-700 leading-snug md:leading-normal lg:leading-normal mb-6 md:mb-10'>
            SHOE SHOP.
          </p>
          <Link
            to='/item'
            className='bg-slate-800 text-white text-lg lg:text-xl font-semibold w-2/3 max-w-sm px-4 py-4 rounded-lg flex flex-row items-center justify-center'>
            구경하러 가기!
          </Link>
        </div>
        <div className='h-auto w-full md:w-1/2 flex items-center justify-center mt-6 sm:mt-0'>
          <img
            src={Shopping}
            alt='shopping'
            className='h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-88 lg:w-88 xl:h-auto xl:w-auto animate-bounce-slow'
          />
        </div>
      </div>
    </>
  );
});

export default Home;
