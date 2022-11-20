import React, { memo, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Items = memo(() => {
  const itemArr = [
    {
      index: 1,
      name: '나이키 덩크 로우 SP 바시티 로열 (2022)',
      price: 179000,
      brand: '나이키/NIKE',
      num: 'CU1726-100',
      type: '덩크',
      img: 'https://img.soldout.co.kr/items/2022/11/07/6cf7c767-3b8c-4b47-9592-e7511384c2cb.png/soldout/resize/564x564/optimize',
    },
    {
      index: 2,
      name: '나이키 덩크 로우 레트로 화이트 블랙',
      price: 144000,
      brand: '나이키/NIKE',
      num: 'DD1391-100',
      type: '덩크',
      img: 'https://img.soldout.co.kr/items/2022/11/04/a8844295-e714-4fb6-92eb-9fa7b613e94e.png/soldout/resize/564x564/optimize',
    },
    {
      index: 3,
      name: '나이키 덩크 로우 레트로 화이트 뉴트럴 그레이',
      price: 120000,
      brand: '나이키/NIKE',
      num: 'DJ6188-003',
      type: '덩크',
      img: 'https://img.soldout.co.kr/items/2022/10/26/e107f271-b41c-4556-93dd-172fb5cca5bd.png/soldout/resize/564x564/optimize',
    },
    {
      index: 4,
      name: '나이키 덩크 로우 넥스트 네이처 라일락 (W)',
      price: 158000,
      brand: '나이키/NIKE',
      num: 'DN1431-103',
      type: '덩크',
      img: 'https://img.soldout.co.kr/items/2022/07/11/ad4c50e2-c7b3-49cb-b78c-866a8efb0385.png/soldout/resize/564x564/optimize',
    },
    {
      index: 5,
      name: '나이키 덩크 하이 레트로 유니버시티 골드 블랙',
      price: 160000,
      brand: '나이키/NIKE',
      num: 'DD1399-700',
      type: '덩크',
      img: 'https://img.soldout.co.kr/items/2022/07/08/972abad4-8bb6-41f3-b9c9-f7d95d611b8c.png/soldout/resize/564x564/optimize',
    },
    {
      index: 6,
      name: '나이키 덩크 로우 오프화이트 로트 18',
      price: 505000,
      brand: '나이키/NIKE',
      num: 'DJ0950-122',
      type: '덩크',
      img: 'https://img.soldout.co.kr/items/2022/11/02/d15b9a83-a4b0-4f2f-9a71-9d2b829caa40.png/soldout/resize/564x564/optimize',
    },
    {
      index: 7,
      name: '나이키 LD 와플 사카이 프라그먼트 라이트 스모크 그레이',
      price: 573500,
      brand: '나이키/NIKE',
      num: 'DH2684-001',
      type: '사카이',
      img: 'https://img.soldout.co.kr/items/2022/11/02/b22b13f8-2897-423e-b5cf-de0e173d7cc6.png/soldout/resize/564x564/optimize',
    },
    {
      index: 8,
      name: '나이키 줌 코르테즈 SP 사카이 화이트 앤 유니버시티 레드',
      price: 244000,
      brand: '나이키/NIKE',
      num: 'DQ0581-100',
      type: '사카이',
      img: 'https://img.soldout.co.kr/items/2022/07/13/d9bb52dd-01d2-4b0f-a63d-a8944cecaa2d.png/soldout/resize/564x564/optimize',
    },
    {
      index: 9,
      name: '나이키 베이퍼와플 사카이 블랙 앤 검',
      price: 395000,
      brand: '나이키/NIKE',
      num: 'DD1875-001',
      type: '사카이',
      img: 'https://img.soldout.co.kr/items/2022/02/03/badf8ee0-542f-410e-9173-e7beeb4e2adc.png/soldout/resize/564x564/optimize',
    },
    {
      index: 10,
      name: '나이키 블레이저 로우 사카이 화이트 페이턴트 레더',
      price: 125000,
      brand: '나이키/NIKE',
      num: 'DM6443-100',
      type: '사카이',
      img: 'https://img.soldout.co.kr/items/2022/03/18/68e50bb3-fef3-4957-9152-de194d6ced16.png/soldout/resize/564x564/optimize',
    },
    {
      index: 11,
      name: '나이키 베이퍼와플 사카이 로열 푸크시아',
      price: 950000,
      brand: '나이키/NIKE',
      num: 'CV1363-100',
      type: '사카이',
      img: 'https://img.soldout.co.kr/items/2020/10/15/ac779f76-146f-4169-afae-3b3d8de87d51.png/soldout/resize/564x564/optimize',
    },
    {
      index: 12,
      name: '나이키 블레이저 로우 사카이 클래식 그린',
      price: 180000,
      brand: '나이키/NIKE',
      num: 'DD1877-001',
      type: '사카이',
      img: 'https://img.soldout.co.kr/items/2021/05/20/c218efbf-5b77-4739-a6ed-ad0d927945e1.png/soldout/resize/564x564/optimize',
    },
    {
      index: 13,
      name: '에어 조던 1 레트로 하이 OG 다크 모카',
      price: 472000,
      brand: '조던/JORDAN',
      num: '555088-105',
      type: '조던1',
      img: 'https://img.soldout.co.kr/items/2022/11/04/cfcee9f0-d6b2-444d-a345-6bf8edd32b47.png/soldout/resize/564x564/optimize',
    },
    {
      index: 14,
      name: '에어 조던 1 로우 OG 자이언 윌리엄슨 플랙스 앤 오일 그린',
      price: 194500,
      brand: '조던/JORDAN',
      num: 'DZ7292-200',
      type: '조던1',
      img: 'https://img.soldout.co.kr/items/2022/10/27/c4a8f078-e564-4222-b5d8-431d62bcc9fa.png/soldout/resize/564x564/optimize',
    },
    {
      index: 15,
      name: '에어 조던 1 레트로 로우 OG SP 트래비스 스캇 세일 앤 리저록',
      price: 1345000,
      brand: '조던/JORDAN',
      num: 'DM7866-162',
      type: '조던1',
      img: 'https://img.soldout.co.kr/items/2022/11/07/88090f1e-2e9c-4f9f-94ff-46f0cc03bd1b.png/soldout/resize/564x564/optimize',
    },
    {
      index: 16,
      name: '에어 조던 7 레트로 트로피 룸 트루 레드 앤 옵시디언',
      price: 274000,
      brand: '조던/JORDAN',
      num: 'DM1195-474',
      type: '조던1',
      img: 'https://img.soldout.co.kr/items/2022/11/07/c3e1eaa4-3b68-4f19-b46c-83cf105662f6.png/soldout/resize/564x564/optimize',
    },
    {
      index: 17,
      name: '에어 조던 1 로우 골프 이스트사이드 골프 미드나잇 네이비',
      price: 162000,
      brand: '조던/JORDAN',
      num: 'DV1759-448',
      type: '조던1',
      img: 'https://img.soldout.co.kr/items/2022/10/22/a4a4cf04-5ef8-4f7d-b12a-5512e113dd9b.png/soldout/resize/564x564/optimize',
    },
    {
      index: 18,
      name: '에어 조던 1 로우 SE 쉐르파 플리스 (W)',
      price: 130000,
      brand: '조던/JORDAN',
      num: 'DO0750-002',
      type: '조던1',
      img: 'https://img.soldout.co.kr/items/2022/02/08/3dfcfd0d-1bb2-455b-b98c-e7bb5efb6ba0.png/soldout/resize/564x564/optimize',
    },
    {
      index: 19,
      name: '뉴발란스 992 그레이 (D Standard)',
      price: 515000,
      brand: '뉴발란스/NEW Balance',
      num: 'M992GR',
      type: '뉴발란스',
      img: 'https://img.soldout.co.kr/items/2022/10/17/938130a1-6ad9-4fd3-8e2c-b94468ae0ff6.png/soldout/resize/564x564/optimize',
    },
    {
      index: 20,
      name: '뉴발란스 991 MIUK 네이비 (D 스탠다드)',
      price: 295000,
      brand: '뉴발란스/NEW Balance',
      num: 'M991NV',
      type: '뉴발란스',
      img: 'https://img.soldout.co.kr/items/2020/11/03/69c2ddbf-00a3-440d-8734-6e308f3d7815.png/soldout/resize/564x564/optimize',
    },
  ];

  return (
    <>
      <Header />
      <div className='h-full w-full flex justify-center'>
        <div className='h-full w-3/4 flex flex-col justify-center'>
          <div className='font-bold text-4xl sm:text-5xl mt-32 text-center mb-10'>
            SHOP
          </div>
          <div className='flex justify-end mb-1'>
            <Menu as='div' className='relative inline-block z-10'>
              <div>
                <Menu.Button className='inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none'>
                  최근 인기순
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
                          )}>
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
                          )}>
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
                          )}>
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
            {itemArr.map((item) => (
              <Link to={`/item/${item.index}`} key={item.index}>
                <li className='h-auto w-auto rounded-md drop-shadow-md hover:bg-gray-200 hover:drop-shadow-none hover:bg-opacity-60 p-4'>
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
