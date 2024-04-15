import SwiperComp from './components/SwiperComp';
import SwiperSecond from './components/SwiperSecond';

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center gap-10  bg-[#161616] flex-col">
      <SwiperComp />
      <SwiperSecond text="Discover" />
      <SwiperSecond text="Second hand tickets" />
    </div>
  );
}
