import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Right from "../assets/arrow-right.svg";
import Left from "../assets/arrow-left.svg";
import P1 from "../assets/project-1.png";
import P2 from "../assets/project-2.png";
import P3 from "../assets/project-3.png";
import P4 from "../assets/project-4.png";

export default function App() {
  return (
    <div className="bg-[#0E191E] text-white px-15 py-10 gap-50">
      <div className="flex gap-50 py-5">
        <div>
          <h2 className="py-4 text-[20px] font-medium text-amber-600 flex ">
            Recent Projects
          </h2>
          <h1 className="font-extrabold text-[40px] flex ">
            Reach New Heights with
          </h1>
          <span className="font-extrabold text-[40px] flex ">
            Digital Marketing
          </span>
        </div>
        <div className="flex gap-5">
          <img
            className="w-[60px] hover:w-[100px] hover:transition-all duration-300 cursor-pointer"
            src={Left}
            alt=""
          />

          <img
            className="w-[60px] hover:w-[100px] hover:transition-all duration-300 cursor-pointer"
            src={Right}
            alt=""
          />
        </div>
      </div>
      <div className="relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="" src={P1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="absolute right-6" src={P2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="absolute right-12" src={P3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="absolute right-17" src={P4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="absolute right-20" src={P1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="absolute right-6" src={P2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="absolute right-12" src={P3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="absolute right-17" src={P4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
