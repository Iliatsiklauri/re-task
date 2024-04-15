'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavigationOptions } from 'swiper/types';
import Image from 'next/image';
import Button from './Button';

const arr = [
  {
    lg: '/Rectangle 5303.png',
    sm: '/Rectangle 5302.png',
    mob: '/Rectangle 5321.png',
  },
  {
    lg: '/Rectangle 5303.png',
    sm: '/Rectangle 5302.png',
    mob: '/Rectangle 5321.png',
  },
  {
    lg: '/Rectangle 5303.png',
    sm: '/Rectangle 5302.png',
    mob: '/Rectangle 5321.png',
  },
  {
    lg: '/Rectangle 5303.png',
    sm: '/Rectangle 5302.png',
    mob: '/Rectangle 5321.png',
  },
  {
    lg: '/Rectangle 5303.png',
    sm: '/Rectangle 5302.png',
    mob: '/Rectangle 5321.png',
  },
  {
    lg: '/Rectangle 5303.png',
    sm: '/Rectangle 5302.png',
    mob: '/Rectangle 5321.png',
  },
];

export default function SwiperSecond({ text }: { text: string }) {
  const prev = useRef(null);
  const next = useRef(null);
  return (
    <div className="w-full px-[15px] md:w-[80%] flex flex-col md:gap-8 gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 xl:gap-4 items-center justify-center">
          <h2 className="text-white sm:text-[16px] xl:text-lg font-medium">{text}</h2>
          <Button />
        </div>
        <nav className="flex items-center justify-center gap-2 lg:gap-3 ">
          <div
            ref={prev}
            className="flex bg-brown h-[30px] w-[30px] rounded-[30px] cursor-pointer items-center justify-center"
          >
            <Image
              src={'/angle-right.png'}
              alt="arrow"
              width={18}
              height={18}
              className="rotate-180"
            />
          </div>
          <div
            ref={next}
            className="bg-brown h-[30px] w-[30px] rounded-[30px] cursor-pointer  flex items-center justify-center"
          >
            <Image
              src={'/angle-right.png'}
              alt="arrow"
              width={18}
              height={18}
              className=""
            />
          </div>
        </nav>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prev.current,
          nextEl: next.current,
        }}
        onInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = prev.current;
          navigation.nextEl = next.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          600: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="w-full h-[230px] sm:h-[275px] lg:h-[258px] "
      >
        {arr.map((el, key) => (
          <SwiperSlide key={key} className="bg-[#222] rounded-[15px]">
            <div className="h-full flex flex-col justify-between items-start">
              <div className="relative  w-full lg:h-[60%] h-[70%] ">
                <Image
                  alt="background"
                  src={`${el.lg}`}
                  fill
                  className="hidden lg:block"
                />
                <Image
                  alt="background"
                  src={`${el.sm}`}
                  fill
                  className="hidden sm:block lg:hidden"
                />
                <Image alt="background" src={`${el.mob}`} fill className="sm:hidden" />
                <div className="absolute text-[10px] bg-[#FFC700] text-black font-medium  bottom-0 right-0   px-[15px] rounded-[30px] py-[5px] m-[15px] cursor-pointer">
                  from 150 GEL
                </div>
              </div>
              <div className="flex flex-col items-start  justify-center px-[10px] py-[12px] sm:px-[15px] sm:py-[15px]  sm:gap-1">
                <h2 className="text-[14px] font-medium text-white ">Monkey Summer</h2>
                <h2 className="text-[#8D8D8D] font-300 text-xs">Factory Tbilisi</h2>
                <h2 className="text-[#FFC700] text-xs">Monday, 22:00</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
