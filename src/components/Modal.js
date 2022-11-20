import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ handleModal }) => {
  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <h3
                  className='text-lg font-medium leading-6 text-gray-900'
                  id='modal-title'>
                  상품이 장바구니에 담겼습니다!
                </h3>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-end sm:px-6'>
              <Link to='/cart'>
                <button
                  type='button'
                  className='inline-flex w-full justify-center rounded-md border border-transparent bg-teal-700 px-4 py-2 text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto sm:text-sm hover:opacity-90'>
                  장바구니로 이동하기
                </button>
              </Link>
              <button
                type='button'
                className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-neutral-700 shadow-sm hover:bg-gray-100 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
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
