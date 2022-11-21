import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ handleModal }) => {
  return (
    <div
      className='relative z-50'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity'></div>
      <div className='fixed inset-0 z-50 overflow-y-auto'>
        <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-8 pt-5 pb-4 sm:p-6 sm:pb-6'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <p
                  className='text-base sm:text-lg font-medium leading-6 text-gray-900'
                  id='modal-title'>
                  상품을 장바구니에 담았습니다!
                </p>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-end sm:px-6'>
              <Link to='/cart'>
                <button
                  type='button'
                  className='inline-flex w-full justify-center rounded-md border border-transparent bg-teal-700 px-4 py-2 text-sm sm:text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto hover:opacity-90'>
                  장바구니로 이동
                </button>
              </Link>
              <button
                type='button'
                className='mt/cart-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm sm:text-base font-medium text-neutral-700 shadow-sm hover:bg-gray-100 sm:mt-0 sm:ml-3 sm:w-auto'
                onClick={handleModal}>
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
