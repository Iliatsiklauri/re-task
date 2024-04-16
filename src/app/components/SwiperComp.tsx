'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { NavigationOptions } from 'swiper/types';
import SwiperHeader from './SwiperHeader';

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
    <div className="w-full px-[15px]  md:w-[80%]  flex flex-col lg:gap-8 gap-4">
      <SwiperHeader
        next={navigationNextRef}
        prev={navigationPrevRef}
        text={`Recommended`}
        star={true}
      />
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
