import React, { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import CartModal from '../components/CartModal';

const ItemDetail = memo(() => {
  const [modalState, setModalState] = useState(false);
  const [item, setItem] = useState();
  const [items, setItems] = useState([
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
  ]);
  // 장바구니에 담기
  const handleModal = () => {
    setModalState(!modalState);
  };
  const { id } = useParams();
  const i = items[id - 1];

  useEffect(() => {
    const getItems = async () => {
      await axios
        .get(`http://localhost:3002/item/${id}`)
        .then((res) => {
          setItem(res.data);
        })
        .catch((err) => {});
    };
    getItems();
  }, []);
  return (
    <>
      <div className='h-screen w-full flex justify-center'>
        <div className='h-auto w-3/4 lg:w-4/5 flex flex-col md:flex-row justify-evenly md:justify-evenly md:mt-8'>
          <div className='h-auto xl:w-5/12 flex items-center justify-center'>
            <div className='h-[320px] w-[320px] md:h-auto md:w-auto lg:h-[480px] lg:w-[480px] 2xl:h-[500px] 2xl:w-[500px] max-h-[500px] max-w-[500px] xl:-ml-8 md:mr-8 bg-stone-100 rounded-md flex justify-center drop-shadow-md'>
              <img src={i.img} alt='img' />
            </div>
          </div>
          <div className='h-auto xl:w-5/12 flex flex-col justify-center 2xl:px-8'>
            <div className='font-bold text-base xl:text-lg text-neutral-800 underline md:border-t md:pt-16 border-neutral-300'>
              {i.brand}
            </div>
            <div className='text-base xl:text-lg text-neutral-500'>
              {i.type}
            </div>
            <p className='font-medium text-lg xl:text-xl text-neutral-900'>
              {i.name}
            </p>
            <div className='flex justify-between mt-10'>
              <span className='text-base xl:text-lg text-neutral-500 align-middle'>
                가격
              </span>
              <span className='font-bold text-xl xl:text-2xl text-neutral-900 pr-1'>
                {i.price.toLocaleString()}원
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
