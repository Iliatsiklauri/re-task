import Image from 'next/image';

export default function RouteGo() {
  return (
    <div className="md:w-[80%]  py w-full  px-[15px]">
      <div className="py-5 md:py-[27px] roudned-[20px] lg:py-[25px] w-full bg-[#222] rounded-[20px] flex justify-between items-center px-[5%] md:px-[3%]  md:gap-0 relative ">
        <div className="absolute left-[10%] md:left-[20%] h-full">
          <div className="relative h-full w-[110px] md:w-[135px]">
            <Image alt="bgTicket" src={'/Group 131.png'} fill />
          </div>
        </div>
        <div className="relative h-[17px] md:h-[33px] w-[69px] md:w-[134px]">
          <Image fill src={'/Logo.png'} alt="logo" />
        </div>
        <h2 className="text-white text-[12px] md:text-[16px] font-medium text-center w-[40%] md:w-[60%]">
          Can’t go to the event? Resell your ticket right now!
        </h2>
        <div className="py-2 md:py-[10px] px-[25px] bg-brown rounded-[60px]">
          <p className="text-[#FFC700] text-[12px] font-medium cursor-pointer">Resell</p>
        </div>
      </div>
    </div>
  );
}
