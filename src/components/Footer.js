import React from 'react';

const Footer = () => {
  return (
    <footer className='flex justify-center flex-col mt-32 border-t border-neutral-300 py-10 mb-5'>
      <p className='text-base text-gray-800 font-semibold pb-3'>(주) 슈샵</p>
      <div className='text-sm text-gray-600'>
        <span className='pr-5'>주식회사 슈샵 (SHOE-SHOP)</span>
        <span className='pr-5'>대표 : 김보겸</span>
        <span>사업자등록번호 : 73-080-70750</span>
        <br />
        <span className='pr-5'>
          오피스: 서울특별시 성동구 이산로 1길 7 1층 슈샵 오피스 (전화번호:
          070-5117-5441)
        </span>
        <span>
          검수센터: 서울특별시 성동구 이산로 1길 7 지하 2층 슈샵 검수센터
        </span>
        <br />
      </div>
    </footer>
  );
};

export default Footer;
