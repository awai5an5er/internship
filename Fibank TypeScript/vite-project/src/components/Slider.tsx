import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import I1 from "../assets/icon1.png"
import I2 from "../assets/icon2.png"
import I3 from "../assets/icon3.png"
import I4 from "../assets/icon4.png"
import I5 from "../assets/icon5.png"

export default function App(){
    return(
    <div className="py-5 justify-evenly flex">
        <p className="w-[40%] py-17 px-10 font-medium text-[25px]">Join 82+ <span className="font-light">companies who’ve reached</span></p>
       <div className="w-[60%] px-4 py-15">
         <Swiper
        slidesPerView={4}
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
          <img className="px-6 opacity-50" src={I1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={I2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={I3} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img className="px-6 opacity-50" src={I4} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img className="px-6 opacity-50" src={I5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={I1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={I2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="px-6 opacity-50" src={I3} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img className="px-6 opacity-50" src={I4} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img className="px-6 opacity-50" src={I5} alt="" />
        </SwiperSlide>
        
      </Swiper>
       </div>
    </div>
)
}