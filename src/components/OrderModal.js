import React from 'react';
import { Link } from 'react-router-dom';

const Modal = () => {
  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-8 pt-5 pb-4 sm:p-6 sm:pb-6'>
              <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                <h3
                  className='text-base sm:text-lg font-medium leading-6 text-gray-900'
                  id='modal-title'>
                  상품 주문이 완료되었습니다!
                </h3>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-end sm:px-6'>
              <Link to='/item'>
                <button
                  type='button'
                  className='inline-flex w-full justify-center rounded-md border border-transparent bg-teal-700 px-4 py-2 text-sm sm:text-base font-medium text-white shadow-sm sm:ml-3 sm:w-auto  hover:opacity-90'>
                  확인
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
