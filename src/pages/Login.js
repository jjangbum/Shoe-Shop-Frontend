import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/xing.png';

const Login = memo(() => {
  return (
    <div className='h-screen w-full flex justify-center'>
      <div className='h-full w-2/3 sm:w-3/4 flex flex-col justify-center items-center'>
        <div className='flex flex-row items-center justify-start mb-12 sm:mb-16 w-full max-w-sm'>
          <img
            src={Logo}
            alt='logo'
            className=' h-10 w-10 sm:h-12 sm:w-12 mr-3'
          />
        </div>
        <form className='w-full max-w-sm' action='/user/login' method='post'>
          <div className='mb-2 sm:mb-4'>
            <label
              htmlFor='id'
              className='block text-base sm:text-lg font-medium leading-6 text-slate-900'>
              아이디
            </label>
            <input
              id='id'
              className='mt-2 appearance-none text-slate-800 bg-white rounded-md block w-full px-3 h-10 shadow-sm text-base sm:text-lg focus:outline-none placeholder:text-slate-400 focus:ring-blue-500 focus:ring-2 ring-1 ring-slate-200'
              type='text'
            />
          </div>
          <div className='mb-12 sm:mb-16'>
            <label
              htmlFor='pw'
              className='block text-base sm:text-lg font-medium leading-6 text-slate-800'>
              비밀번호
            </label>
            <input
              id='pw'
              className='mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm text-base sm:text-lg focus:outline-none placeholder:text-slate-400 focus:ring-blue-500 focus:ring-2 ring-1 ring-slate-200'
              type='password'
            />
          </div>
          <button className='w-full bg-slate-700 text-white text-base sm:text-lg font-semibold py-3 px-20 mb-8 rounded-lg'>
            로그인
          </button>
          <div className='flex flex-row justify-center mb-2'>
            <p className='text-slate-600 text-sm sm:text-base font-medium'>
              아직 회원이 아니신가요?
            </p>
            <Link
              to='/join'
              className='text-sm sm:text-base text-slate-700 font-medium underline pl-3'>
              회원가입
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
});

export default Login;
