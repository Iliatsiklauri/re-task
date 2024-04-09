'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Button from './Button';
import { NavigationOptions } from 'swiper/types';

const arr = [
  '/Rectangle 5304.png',
  '/Rectangle 5305.png',
  '/Rectangle 5304.png',
  '/Rectangle 5305.png',
  '/Rectangle 5304.png',
  '/Rectangle 5305.png',
];

export default function SwiperComp() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="w-full px-[15px] lg:px-[47px] xl:px-[10%]  flex flex-col lg:gap-8 gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 xl:gap-4 items-center justify-center">
          <div className="flex items-center justify-center gap-1 xl:gap-2">
            <div className="w-[14px] h-[14px] lg:w-7 lg:h-7 relative">
              <Image alt="star" src={'/star.png'} fill />
            </div>
            <h2 className="text-white sm:text-[16px] xl:text-lg font-medium">
              Recommended
            </h2>
          </div>
          <Button />
        </div>
        <nav className="flex items-center justify-center gap-2 lg:gap-3 ">
          <div
            ref={navigationPrevRef}
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
            ref={navigationNextRef}
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
        slidesPerView={3}
        modules={[Navigation]}
        spaceBetween={30}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = navigationPrevRef.current;
          navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 2.5,
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
        className="w-full  flex relative lg:h-[270px] h-[255px]"
      >
        {arr.map((el, key) => (
          <SwiperSlide className="relative" key={key}>
            <Image alt="background" src={`${el}`} fill className="z-0 rounded-[15px]" />
            <div className="z-20 text-lg text-white absolute flex items-start justify-end flex-col w-full h-full gap-1 p-[15px]   item rounded-[15px]">
              <div className="absolute text-[10px] bg-[#FFC700] text-black font-medium  top-0 right-0 m-[15px]  px-[15px] rounded-[30px]">
                from 150 GEL
              </div>
              <div className="flex flex-col items-start justify-between">
                <p className="text-[14px]">Concert</p>
                <p className="text-lg font-medium ">Monkey Summer</p>
                <p className="text-[12px]">Factory Tbilisi, Monday 22:00</p>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <div className="flex items-center justify-center gap-[10px] px-5 bg-lightest md:bg-lightBrown rounded-[30px] text-[10px]">
                  <Image alt="music" src={'/Group 152.png'} width={10} height={10} />
                  Music
                </div>
                <div className="bg-lightest md:bg-lightBrown rounded-[30px]  px-5 text-[10px]  font-medium">
                  TBILISI CONCERT HALL
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
