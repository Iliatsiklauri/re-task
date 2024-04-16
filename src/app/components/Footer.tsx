import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className="w-full">
      <div className="w-full bg-[#222] flex items-center  justify-between  py-[38px] lg:y-[35px] px-[15px] flex-col">
        <div className="md:w-[80%]  w-full flex justify-center md:justify-between items-center h-full ">
          <div className="items-start justify-center gap-10 hidden md:flex">
            <Image alt="Qrcode" src={'/footer/QR Code.svg'} width={92} height={92} />
            <h2 className="text-white text-[16px] font-[500] leading-[25px] w-[180px]">
              Try our mobile app for instant access to a world of events at your
              fingertips.
            </h2>
          </div>

          <div className="flex md:justify-center items-start  md:gap-[30px] w-full md:w-auto justify-between lg:gap-10 ">
            <div className="flex flex-col items-start justify-between gap-[17px] ">
              <p className="underline text-[#8D8D8D] text-xs font-medium">About Us</p>
              <p className="underline text-[#8D8D8D] text-xs font-medium">
                Terms and Privacy
              </p>
              <p className="underline text-[#8D8D8D] text-xs font-medium">F&Q</p>
              <p className="underline text-[#8D8D8D] text-xs font-medium">
                Ticket Refund
              </p>
            </div>
            <div className="flex flex-col items-start justify-between  gap-6">
              <div className="flex flex-col items-start justify-center gap-[15px] lg:gap-[17px] ">
                <p className="text-[#8D8D8D] text-xs font-medium">
                  Contacts: +995 555 567 891
                </p>
                <p className="text-[#8D8D8D] text-xs font-medium">
                  Address: Pekini Ave, 15, Tbilisi
                </p>
              </div>
              <div className="flex gap-2 ">
                <div className="w-8 h-8 flex items-center justify-center bg-forlogo rounded-full cursor-pointer">
                  <div className="relative w-2 h-3 flex-shrink-0">
                    <Image alt="facebook" src={'/footer/Vector.png'} fill />
                  </div>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-forlogo rounded-full cursor-pointer">
                  <div className="relative w-3 h-3 flex-shrink-0">
                    <Image alt="facebook" src={'/footer/Vector (1).png'} fill />
                  </div>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-forlogo rounded-full cursor-pointer">
                  <div className="relative w-[14px] h-3 flex-shrink-0">
                    <Image alt="facebook" src={'/footer/Vector (2).png'} fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-black w-full flex items-center justify-center py-[10px]">
        <p className="text-white text-[10px]">2023 All rights reserved</p>
      </div>
    </div>
  );
}
