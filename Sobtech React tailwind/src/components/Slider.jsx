import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";
import Logo3 from "../assets/logo3.svg";

import "./../index.css";

export default function App() {
  return (
    <div>
      <Swiper
        slidesPerView={7}
        spaceBetween={25}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={Logo3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
