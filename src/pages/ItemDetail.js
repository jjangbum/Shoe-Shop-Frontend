/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import CartModal from '../components/CartModal';

const ItemDetail = memo(() => {
  const [modalState, setModalState] = useState(false);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      await axios
        .get(`http://localhost:3002/item/${id}`, { withCredentials: true })
        .then((res) => {
          setItem(res.data);
        })
        .catch((err) => {});
    };
    getItem();
  }, []);

  // 장바구니에 담기
  const handleModal = async () => {
    await axios
      .post('http://localhost:3002/cart', item, { withCredentials: true })
      .then(() => {
        setModalState(!modalState);
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className='h-screen w-full flex justify-center'>
        <div className='h-auto w-3/4 lg:w-4/5 flex flex-col md:flex-row justify-evenly md:justify-evenly md:mt-8'>
          <div className='h-auto xl:w-5/12 flex items-center justify-center'>
            <div className='h-[320px] w-[320px] md:h-auto md:w-auto lg:h-[480px] lg:w-[480px] 2xl:h-[500px] 2xl:w-[500px] max-h-[500px] max-w-[500px] xl:-ml-8 md:mr-8 bg-stone-100 rounded-md flex justify-center drop-shadow-md'>
              <img src={item.img} alt='img' />
            </div>
          </div>
          <div className='h-auto xl:w-5/12 flex flex-col justify-center 2xl:px-8'>
            <div className='font-bold text-base xl:text-lg text-neutral-800 underline md:border-t md:pt-16 border-neutral-300'>
              {item.brand}
            </div>
            <div className='text-base xl:text-lg text-neutral-500'>
              {item.type}
            </div>
            <p className='font-medium text-lg xl:text-xl text-neutral-900'>
              {item.name}
            </p>
            <div className='flex justify-between mt-10'>
              <span className='text-base xl:text-lg text-neutral-500 align-middle'>
                가격
              </span>
              <span className='font-bold text-xl xl:text-2xl text-neutral-900 pr-1'>
                {Number(item.price).toLocaleString()}원
              </span>
            </div>
            <div className='flex flex-col xl:flex-row justify-center items-center mt-10 md:border-b md:pb-16 border-neutral-300'>
              <button className='w-full bg-teal-700 text-neutral-100 font-semibold text-base xl:text-lg max-w-[280px] py-2.5 sm:py-3.5 rounded-lg mx-1 mb-2 xl:mb-0 hover:opacity-90 shadow-md'>
                구매하기
              </button>
              <button
                className='w-full bg-neutral-800 text-neutral-100 font-semibold text-base xl:text-lg max-w-[280px] py-2.5 sm:py-3.5 rounded-lg mx-1 hover:opacity-90 shadow-md'
                onClick={handleModal}>
                장바구니에 담기
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalState && <CartModal handleModal={handleModal} />}
    </>
  );
});

export default ItemDetail;
