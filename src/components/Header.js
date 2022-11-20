import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/xing.png';
import Menu from '../assets/menu.png';

const Header = memo(({ loggedIn, setLoggedIn }) => {
  // 로그아웃
  const handleLogout = async () => {
    await axios
      .post('localhost:3002/logout')
      .then((res) => {
        console.log(res);
        setLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header className='flex items-center justify-between w-full px-6 lg:px-40 py-4 fixed z-10 border-b border-neutral-300 drop-shadow-sm bg-neutral-50'>
      <div className='flex flex-row items-center'>
        <Link to='/'>
          <img src={Logo} alt='logo' className=' h-7 w-7 sm:h-8 sm:w-8' />
        </Link>
        <p className='px-4 text-neutral-400 hidden sm:block sm:text-xl'>|</p>
        <div className='flex flex-row items-center'></div>
      </div>
      <div className='block sm:hidden'>
        <img src={Menu} alt='logo' className=' h-6 w-6' />
      </div>
      <div className='hidden sm:block'>
        {loggedIn ? (
          <>
            <Link
              to='/cart'
              className='text-neutral-900 text-base font-medium px-4 py-2 rounded-md hover:opacity-50'>
              장바구니
            </Link>
            <Link
              className='text-neutral-900 text-base font-medium px-4 py-2 rounded-md hover:opacity-50'
              onClick={handleLogout}>
              로그아웃
            </Link>
          </>
        ) : (
          <Link
            to='/login'
            className='text-neutral-900 text-base font-medium px-4 py-2 rounded-md hover:opacity-50'>
            로그인
          </Link>
        )}
      </div>
    </header>
  );
});

export default Header;
