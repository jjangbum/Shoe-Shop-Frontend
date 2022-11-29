import React, { memo, Fragment, useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import Footer from '../components/Footer';
import OrderModal from '../components/OrderModal';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Cart = memo(() => {
  const [items, setItems] = useState([]);
  const [modalState, setModalState] = useState(false);
  const sizeArr = [
    '230mm',
    '240mm',
    '250mm',
    '260mm',
    '270mm',
    '280mm',
    '290mm',
  ];
  const itemSum = items.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.price),
    0
  );
  const shipping = itemSum <= 50000 && itemSum > 0 ? 3000 : 0;
  const totalPrice = itemSum + shipping;
  // 주문하기
  const handleOrder = async () => {
    setModalState(!modalState);
    await axios
      .post('http://localhost:3002/order', items)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  // 장바구니 삭제
  const handleRemove = async (id) => {
    await axios
      .delete(`localhost:3002/cart/${id}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const getItems = async () => {
      await axios
        .get('http://localhost:3002/cart', { withCredentials: true })
        .then((res) => {
          setItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getItems();
  }, []);

  return (
    <>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <div className='h-auto w-5/6 sm:w-3/4 xl:w-4/5 mt-28'>
          <div className='drop-shadow-sm'>
            <p className='text-3xl font-semibold text-neutral-900'>장바구니</p>
          </div>
          <div className='flex flex-col xl:flex-row h-full w-full justify-evenly items-center xl:items-start'>
            <ul className='h-full w-full sm:w-4/5 xl:w-7/12 mt-10 mb-10 xl:mb-0'>
              {items.map((item) => (
                <li
                  key={item.index}
                  className='flex border-t border-t-neutral-200 py-8 px-4'>
                  <div className='h-32 w-32 min-h-[8rem] min-w-[8rem] min-h-32 min-w-32 bg-stone-100 rounded-md drop-shadow-md'>
                    <img
                      src={item.img}
                      alt='img'
                      className='h-32 w-32 min-h-[8rem] min-w-[8rem]'
                    />
                  </div>
                  <div className='h-auto w-full flex flex-col justify-between pl-10'>
                    <div className='flex justify-end -mt-1 mb-1'>
                      <button className='-m-2 p-2 text-gray-400 hover:text-gray-500'>
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                          onClick={() => {
                            handleRemove(item.index);
                          }}>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                    <div className='flex flex-col justify-start items-left w-auto pt-1'>
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
                    <div>
                      <Menu as='div' className='relative inline-block'>
                        <div>
                          <Menu.Button className='inline-flex w-full justify-center py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none z-0'>
                            250mm
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
                              {sizeArr.map((item, index) => (
                                <Menu.Item key={index}>
                                  {({ active }) => (
                                    <button
                                      className={classNames(
                                        active
                                          ? 'bg-gray-100 text-gray-900'
                                          : 'text-gray-700',
                                        'block w-full px-5 py-2 text-center text-sm'
                                      )}>
                                      {item}
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='h-96 w-full sm:w-3/4 xl:w-1/4 bg-teal-700 bg-opacity-5 xl:ml-20 rounded-md flex flex-col justify-evenly p-8 shadow-md'>
              <p className='text-xl font-semibold text-neutral-900 drop-shadow-md'>
                주문 정보
              </p>
              <div className='mt-4 pb-1.5 border-b border-neutral-400 flex justify-between text-neutral-600'>
                <span className=''>상품 합계</span>
                <span>{itemSum.toLocaleString()} 원</span>
              </div>
              <div className='mt-2 pb-1.5 border-b border-neutral-400 flex justify-between text-neutral-600'>
                <span>배송비</span>
                <span>{shipping.toLocaleString()} 원</span>
              </div>
              <div className='mt-2 pb-1.5 border-b border-neutral-400 flex justify-between font-semibold text-neutral-900'>
                <span>총 합계</span>
                <span>{totalPrice.toLocaleString()} 원</span>
              </div>
              <div className='mt-5'>
                <button
                  className='w-full bg-teal-700 text-neutral-50 font-semibold text-lg rounded-lg hover:opacity-90 py-2'
                  onClick={handleOrder}>
                  주문하기
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {modalState && <OrderModal />}
    </>
  );
});

export default Cart;
