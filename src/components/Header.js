/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Disclosure } from '@headlessui/react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/xing.png';

const Header = memo(({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  // 로그아웃
  const handleLogout = async () => {
    await axios
      .post('http://localhost:3002/user/logout', null, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data) {
          setLoggedIn(false);
          return navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const check = async () => {
      await axios
        .get('http://localhost:3002/user/check', { withCredentials: true })
        .then((res) => {
          setLoggedIn(res.data);
        });
    };
    check();
  }, []);

  return (
    <Disclosure>
      {({ open }) => (
        <header className='w-full flex flex-col sm:flex-row px-6 lg:px-40 py-4 sm:py-3 fixed z-30 border-b rounded-b-lg border-neutral-300 drop-shadow-sm bg-neutral-50'>
          <div className='w-full flex justify-between sm:items-center sm:justify-between'>
            <Link to='/'>
              <img src={Logo} alt='logo' className='h-8 w-8 sm:h-9 sm:w-9' />
            </Link>
            <div className='hidden sm:block'>
              {loggedIn ? (
                <>
                  <Link
                    to='/cart'
                    className='text-neutral-900 text-base font-medium px-4 py-4 rounded-md hover:opacity-50'>
                    장바구니
                  </Link>
                  <Link
                    to='#'
                    className='text-neutral-900 text-base font-medium px-4 py-4 rounded-md hover:opacity-50'>
                    마이페이지
                  </Link>
                  <Link
                    className='text-neutral-900 text-base font-medium px-4 py-4 rounded-md hover:opacity-50'
                    onClick={handleLogout}>
                    로그아웃
                  </Link>
                </>
              ) : (
                <Link
                  to='/login'
                  className='text-neutral-900 text-base font-medium px-4 py-4 rounded-md hover:opacity-50'>
                  로그인
                </Link>
              )}
            </div>
            <Disclosure.Button
              className='flex sm:hidden  items-center'
              as='div'>
              {open ? (
                <XMarkIcon className='block h-7 w-7' aria-hidden='true' />
              ) : (
                <Bars4Icon className='block h-7 w-7' aria-hidden='true' />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel
            className='sm:hidden flex flex-col mt-4 pt-3.5 -mb-2 text-center border-t border-neutral-300'
            as='div'>
            {loggedIn ? (
              <>
                <Link
                  to='/cart'
                  className='w-full px-3 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-70'>
                  <Disclosure.Button
                    as='div'
                    className=' text-neutral-900 text-base font-medium'>
                    장바구니
                  </Disclosure.Button>
                </Link>
                <Link
                  to='#'
                  className='w-full px-3 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-70'>
                  <Disclosure.Button
                    as='div'
                    className=' text-neutral-900 text-base font-medium'>
                    마이페이지
                  </Disclosure.Button>
                </Link>
                <Disclosure.Button
                  as='div'
                  className='text-neutral-900 rounded-lg text-base font-medium px-3 py-2 hover:bg-gray-200 hover:bg-opacity-70'
                  onClick={handleLogout}>
                  로그아웃
                </Disclosure.Button>
              </>
            ) : (
              <Link
                to='/login'
                className='w-full px-3 py-2 rounded-lg hover:bg-gray-200 hover:bg-opacity-70'>
                <Disclosure.Button
                  as='div'
                  className='text-neutral-900 text-base font-medium'>
                  로그인
                </Disclosure.Button>
              </Link>
            )}
          </Disclosure.Panel>
        </header>
      )}
    </Disclosure>
  );
});

export default Header;
