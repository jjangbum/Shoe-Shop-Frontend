import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = memo(() => {
  return (
    <>
      <Header />
      <div className='h-screen w-full flex justify-center bg-gradient-to-b from-neutral-50 via-neutral-100 to-blue-200'>
        <div className='h-auto w-10/12 md:w-10/12 xl:w-8/12 2xl:w-7/12 block md:flex md:flex-row justify-center drop-shadow-lg'>
          <div className='h-auto w-11/12 sm:w-1/2 md:w-1/2 flex flex-col justify-center md:ml-14 lg:ml-28 xl:ml-10 mt-32 md:mt-0'>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-snug md:leading-snug lg:leading-snug'>
              세상의
            </p>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 leading-snug md:leading-snug lg:leading-snug'>
              모든 신발
            </p>
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 leading-snug md:leading-snug lg:leading-snug mb-6 md:mb-10'>
              SHOE-SHOP.
            </p>
            <Link
              to='/item'
              className='bg-neutral-800 text-neutral-50 text-lg lg:text-xl font-semibold w-7/12 sm:w-2/3 md:w-2/3 lg:w-1/2 max-w-[180px] px-4 py-4 rounded-lg flex flex-row items-center justify-center hover:opacity-90'>
              구매하러 가기!
            </Link>
          </div>
          <div className='h-auto w-full md:w-1/2 flex items-center justify-center md:justify-start mt-10 md:mt-0'>
            <img
              src={
                'https://cdn3d.iconscout.com/3d/premium/thumb/shoes-for-sale-6632021-5504118.png'
              }
              alt='shopping'
              className='h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 xl:h-auto xl:w-auto animate-bounce-slow'
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default Home;
