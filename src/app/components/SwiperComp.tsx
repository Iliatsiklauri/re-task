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

export default function SwiperComp() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="w-full px-[15px] lg:px-[47px] xl:px-[10%]  flex flex-col ld:gap-8 gap-4 ">
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
        <nav className="flex items-center justify-center gap-3">
          <div ref={navigationPrevRef} className="btn flex items-center justify-center">
            <Image
              src={'/angle-right.png'}
              alt="arrow"
              width={18}
              height={18}
              className="rotate-180"
            />
          </div>
          <div ref={navigationNextRef} className="btn flex items-center justify-center">
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
        <SwiperSlide className="relative">
          <Image
            alt="background"
            src={'/Rectangle 5305.png'}
            fill
            className="z-0 rounded-[15px]"
          />
          <div className="z-20 text-lg text-white absolute flex items-start justify-end flex-col w-full h-full  p-[15px]  gap-3 item rounded-[15px]">
            <div className="flex flex-col items-start justify-between">
              <p className="text-[14px]">Concert</p>
              <p className="text-lg font-medium">Monkey Summer</p>
              <p className="text-[12px]">Factory Tbilisi, Monday 22:00</p>
            </div>
            <div className="flex gap-2 items-center justify-center ">
              <div className="flex items-center justify-center gap-[10px] px-5  sec1 text-[10px] ">
                <Image alt="music" src={'/Group 152.png'} width={10} height={10} />
                Music
              </div>
              <div className="sec1  px-5 text-[10px]  font-medium">
                TBILISI CONCERT HALL
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            alt="background"
            src={'/Rectangle 5304.png'}
            fill
            className="z-0 rounded-[15px]"
          />
          <div className="z-20 text-lg text-white absolute flex items-start justify-end flex-col w-full h-full  p-[15px]  gap-3 item rounded-[15px]">
            <div className="flex flex-col items-start justify-between">
              <p className="text-[14px]">Concert</p>
              <p className="text-lg font-medium">Monkey Summer</p>
              <p className="text-[12px]">Factory Tbilisi, Monday 22:00</p>
            </div>
            <div className="flex gap-2 items-center justify-center ">
              <div className="flex items-center justify-center gap-[10px] px-5  sec1 text-[10px] ">
                <Image alt="music" src={'/Group 152.png'} width={10} height={10} />
                Music
              </div>
              <div className="sec1  px-5 text-[10px]  font-medium">
                TBILISI CONCERT HALL
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            alt="background"
            src={'/Rectangle 5305.png'}
            fill
            className="z-0 rounded-[15px]"
          />
          <div className="z-20 text-lg text-white absolute flex items-start justify-end flex-col w-full h-full  p-[15px]  gap-3 item rounded-[15px]">
            <div className="flex flex-col items-start justify-between">
              <p className="text-[14px]">Concert</p>
              <p className="text-lg font-medium">Monkey Summer</p>
              <p className="text-[12px]">Factory Tbilisi, Monday 22:00</p>
            </div>
            <div className="flex gap-2 items-center justify-center ">
              <div className="flex items-center justify-center gap-[10px] px-5  sec1 text-[10px] ">
                <Image alt="music" src={'/Group 152.png'} width={10} height={10} />
                Music
              </div>
              <div className="sec1  px-5 text-[10px]  font-medium">
                TBILISI CONCERT HALL
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            alt="background"
            src={'/Rectangle 5304.png'}
            fill
            className="z-0 rounded-[15px]"
          />
          <div className="z-20 text-lg text-white absolute flex items-start justify-end flex-col w-full h-full  p-[15px]  gap-3 item rounded-[15px]">
            <div className="flex flex-col items-start justify-between">
              <p className="text-[14px]">Concert</p>
              <p className="text-lg font-medium">Monkey Summer</p>
              <p className="text-[12px]">Factory Tbilisi, Monday 22:00</p>
            </div>
            <div className="flex gap-2 items-center justify-center ">
              <div className="flex items-center justify-center gap-[10px] px-5  sec1 text-[10px] ">
                <Image alt="music" src={'/Group 152.png'} width={10} height={10} />
                Music
              </div>
              <div className="sec1  px-5 text-[10px]  font-medium">
                TBILISI CONCERT HALL
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            alt="background"
            src={'/Rectangle 5305.png'}
            fill
            className="z-0 rounded-[15px]"
          />
          <div className="z-20 text-lg text-white absolute flex items-start justify-end flex-col w-full h-full  p-[15px]  gap-3 item rounded-[15px]">
            <div className="flex flex-col items-start justify-between">
              <p className="text-[14px]">Concert</p>
              <p className="text-lg font-medium">Monkey Summer</p>
              <p className="text-[12px]">Factory Tbilisi, Monday 22:00</p>
            </div>
            <div className="flex gap-2 items-center justify-center ">
              <div className="flex items-center justify-center gap-[10px] px-5  sec1 text-[10px] ">
                <Image alt="music" src={'/Group 152.png'} width={10} height={10} />
                Music
              </div>
              <div className="sec1  px-5 text-[10px]  font-medium">
                TBILISI CONCERT HALL
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
