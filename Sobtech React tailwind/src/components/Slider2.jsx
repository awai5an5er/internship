import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Bg from "../assets/video-thumb.png";
import Person from "../assets/download.png";
import Comma from "../assets/comma.svg";

export default function App() {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className="relative h-screen bg-cover bg-center"
    >
      <div className="absolute bottom-0 left-60 max-w-[900px] max-h-[300px] flex ">
        <Swiper
          slidesPerView={1}
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
            <div className="relative flex">
              <div className="bg-[#F7F7F7] flex flex-col rounded-bl-2xl rounded-tl-2xl">
                <p className="px-8 py-6 text-[20px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque maxime praesentium quia rem fuga deserunt sit ullam.
                  Atque iusto fugiat amet? Accusantium enim natus, id hic porro
                  aliquid cum labore?
                </p>
                <p className="px-8 py-6 font-bold text-[20px]">
                  Ronald Richards
                </p>
                <p className="px-8 text-[20px]">Web Designer</p>
                <div className="left-138 bottom-45 relative bg-white w-24 h-24 rounded-full">
                  <img
                    className="absolute right-4 top-4 size-15"
                    src={Comma}
                    alt=""
                  />
                </div>
              </div>
              <img src={Person} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex">
              <div className="bg-[#F7F7F7] flex flex-col rounded-bl-2xl rounded-tl-2xl">
                <p className="px-8 py-6 text-[20px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque maxime praesentium quia rem fuga deserunt sit ullam.
                  Atque iusto fugiat amet? Accusantium enim natus, id hic porro
                  aliquid cum labore?
                </p>
                <p className="px-8 py-6 font-bold text-[20px]">
                  Ronald Richards
                </p>
                <p className="px-8 text-[20px]">Web Designer</p>
                <div className="left-138 bottom-45 relative bg-white w-24 h-24 rounded-full">
                  <img
                    className="absolute right-4 top-4 size-15"
                    src={Comma}
                    alt=""
                  />
                </div>
              </div>
              <img src={Person} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex">
              <div className="bg-[#F7F7F7] flex flex-col rounded-bl-2xl rounded-tl-2xl">
                <p className="px-8 py-6 text-[20px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque maxime praesentium quia rem fuga deserunt sit ullam.
                  Atque iusto fugiat amet? Accusantium enim natus, id hic porro
                  aliquid cum labore?
                </p>
                <p className="px-8 py-6 font-bold text-[20px]">
                  Ronald Richards
                </p>
                <p className="px-8 text-[20px]">Web Designer</p>
                <div className="left-138 bottom-45 relative bg-white w-24 h-24 rounded-full">
                  <img
                    className="absolute right-4 top-4 size-15"
                    src={Comma}
                    alt=""
                  />
                </div>
              </div>
              <img src={Person} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
