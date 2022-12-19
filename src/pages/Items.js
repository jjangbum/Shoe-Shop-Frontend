import React, { memo, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Footer from '../components/Footer';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Items = memo(() => {
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState('최근 인기순');
  useEffect(() => {
    const getItems = async () => {
      await axios
        .get('http://localhost:3002/item')
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {});
    };
    getItems();
  }, []);

  const handleSort = (e) => {
    switch (e.target.value) {
      case 'popular':
        setItems(items.sort((a, b) => a.index - b.index));
        setSort('최근 인기순');
        break;
      case 'low':
        setItems(items.sort((a, b) => a.price - b.price));
        setSort('판매가 낮은순');
        break;
      case 'high':
        setItems(items.sort((a, b) => b.price - a.price));
        setSort('판매가 높은순');
        break;
      default:
    }
  };

  return (
    <>
      <div className='h-full w-full flex justify-center'>
        <div className='h-full w-3/4 flex flex-col justify-center'>
          <div className='text-neutral-800 font-bold text-4xl sm:text-5xl mt-32 text-center mb-10 drop-shadow-sm'>
            SHOP
          </div>
          <div className='flex justify-end mb-1'>
            <Menu as='div' className='relative inline-block z-10'>
              <div>
                <Menu.Button className='inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none'>
                  {sort}
                  <ChevronDownIcon
                    className='-mr-2 ml-1 h-5 w-5'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'>
                <Menu.Items className='absolute right-0 mt-2 w-32 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block w-full px-5 py-2 text-center text-sm'
                          )}
                          type='button'
                          value='popular'
                          onClick={handleSort}>
                          최근 인기순
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block w-full px-5 py-2 text-center text-sm'
                          )}
                          type='button'
                          value='low'
                          onClick={handleSort}>
                          판매가 낮은순
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block w-full px-5 py-2 text-center text-sm'
                          )}
                          type='button'
                          value='high'
                          onClick={handleSort}>
                          판매가 높은순
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <ul className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8'>
            {items.map((item) => (
              <Link to={`/item/${item.index}`} key={item.index}>
                <li className='h-auto w-auto rounded-md drop-shadow-md hover:drop-shadow-none hover:bg-gray-200 hover:bg-opacity-60 hover:shadow-md p-4'>
                  <div className='flex justify-center bg-stone-100 rounded-md mb-3'>
                    <img src={item.img} alt='img' className='h-52 w-52 p-1' />
                  </div>
                  <div className='flex flex-col justify-center items-start w-auto px-0.5'>
                    <p className='text-sm font-semibold text-neutral-900 mb-1'>
                      {item.brand}
                    </p>
                    <p className='text-neutral-500 text-sm font-medium w-full mb-1'>
                      {item.name}
                    </p>
                    <p className='text-base text-gray-900 font-semibold'>
                      {item.price.toLocaleString()}원
                    </p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
          <Footer />
        </div>
      </div>
    </>
  );
});

export default Items;
