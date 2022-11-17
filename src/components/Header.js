import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/xing.png';
import Menu from '../assets/menu.png';

const Header = memo(() => {
  const loggedIn = false;

  return (
    <header className='flex items-center justify-between w-full px-4 py-4 sm:px-6 fixed z-10 border-b border-slate-200 shadow-sm'>
      <div className='flex flex-row items-center'>
        <Link to='/'>
          <img src={Logo} alt='logo' className=' h-7 w-7 sm:h-8 sm:w-8' />
        </Link>
        <p className='px-4 text-slate-400 hidden sm:block sm:text-xl'>|</p>
        <div className='flex flex-row items-center'></div>
      </div>
      <div className='block sm:hidden'>
        <img src={Menu} alt='logo' className=' h-6 w-6' />
      </div>
      <div className='hidden sm:block'>
        {!loggedIn ? (
          <Link
            to='/login'
            className='text-slate-900 text-md font-semibold px-3 py-3 rounded-md hover:bg-slate-100'>
            로그인
          </Link>
        ) : (
          <Link
            to='/cart'
            className='text-slate-900 text-md font-semibold px-3 py-3 rounded-md hover:bg-slate-100'>
            장바구니
          </Link>
        )}
      </div>
    </header>
  );
});

export default Header;
