import React from 'react';
import Button from './Button';
import Image from 'next/image';

type PropType = {
  text: string;
  prev: React.MutableRefObject<null>;
  next: React.MutableRefObject<null>;
  star?: boolean;
};

export default function SwiperHeader({ text, next, prev, star }: PropType) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-2 xl:gap-4 items-center justify-center">
        {star ? (
          <div className="w-[14px] h-[14px] lg:w-7 lg:h-7 relative">
            <Image alt="star" src={'/star.png'} fill />
          </div>
        ) : null}
        <div>
          <h2 className="text-white sm:text-[16px] xl:text-lg font-medium">{text}</h2>
        </div>
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
  );
}
