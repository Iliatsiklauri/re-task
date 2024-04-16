import Footer from './components/Footer';
import RouteGo from './components/RouteGo';
import SwiperBottom from './components/SwiperBottom';
import SwiperComp from './components/SwiperComp';
import SwiperSecond from './components/SwiperSecond';

export default function Home() {
  return (
    <div className="w-full  flex items-center justify-center gap-8 lg:gap-[60px] xl:gap-[70px]  bg-[#161616] flex-col">
      <div className="flex  w-full flex-col items-center justify-center gap-8 md:gap-10">
        <SwiperComp />
        <SwiperSecond text="Discover" />
        <SwiperSecond text="Second hand tickets" />
        <RouteGo />
        <SwiperBottom />
      </div>
      <Footer />
    </div>
  );
}
