'use client';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavigationOptions } from 'swiper/types';
import SwiperHeader from './SwiperHeader';
import Image from 'next/image';

const data = [
  '/Rectangle 5284.png',
  '/Rectangle 5284 (1).png',
  '/Rectangle 5284.png',
  '/Rectangle 5284 (1).png',
  '/Rectangle 5284.png',
  '/Rectangle 5284 (1).png',
  '/Rectangle 5284.png',
  '/Rectangle 5284 (1).png',
  '/Rectangle 5284.png',
  '/Rectangle 5284 (1).png',
  '/Rectangle 5284.png',
  '/Rectangle 5284 (1).png',
];

export default function SwiperBottom() {
  const prev = useRef(null);
  const next = useRef(null);
  return (
    <div className="w-full bg-[#222] flex items-center justify-center px-[15px] py-8 lg:pt-5 xl:py-5">
      <div className="w-full  md:w-[80%] flex flex-col lg:gap-8 gap-4  items-center justify-center">
        <SwiperHeader next={next} prev={prev} text="Our partners" />
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 3,
            },
            450: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1.75,
              spaceBetween: 10,
            },
          }}
          className="w-full h-[197px] md:h-[201px] "
        >
          {data.map((el, key) => (
            <SwiperSlide key={key} className="">
              <div className="flex flex-col  h-full  bg-[#161616] rounded-[15px]">
                <div className="h-[60%] lg:h-[70%]  relative">
                  <Image fill alt="bg" src={`${el}`} />
                </div>
                <div className="px-[10px]  py-[14px] flex flex-col items-start justify-center gap-[1px]">
                  <h2 className="text-xs font-semibold text-white">BLACK SEA ARENA</h2>
                  <div className="flex items-end  gap-[5px] ">
                    <div className="w-[18px] h-[18px] relative">
                      <Image alt="star" src={'/star.png'} fill />
                    </div>
                    <p className="text-[10px] uppercase text-white text-center  flex gap-1 ">
                      5.0
                      <span className="text-[#8A8B8C]"> (130)</span>
                    </p>
                  </div>

                  <h2 className="text-[10px] underline text-[#FFC700]">
                    Watch all events (3)
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
