import { LoaderPinwheel } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { MoveDown } from "lucide-react";

export default function App() {
  return (
    <div className="bg-[#CA9200] px-15 py-20 flex items-center justify-center h-screen">
      <h1 className=" text-[#00152c] text-9xl flex-wrap text-image text-[200px] font-extrabold ">
        WE HAVE THE SOLUTION
      </h1>
      <div className="flex gap-3 size-50 absolute -bottom-25 right-40">
        <LoaderPinwheel
          className="rotate-180 infinite animate-spin"
          color="#00152C"
        />

        <LoaderPinwheel
          className="rotate-180 infinite animate-spin"
          color="#00152C"
        />
        <LoaderPinwheel
          className="rotate-180 infinite animate-spin"
          color="#00152C"
        />
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        direction={"vertical"}
        pagination={{
          clickable: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        className="mySwiper h-full w-40 [&_.swiper-pagination]:hidden"
      >
        <SwiperSlide>
          <p>
            <MoveDown size={100} color="#00152C" />
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <MoveDown size={100} color="#00152C" />
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <MoveDown size={100} color="#00152C" />
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <MoveDown size={100} color="#00152C" />
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <MoveDown size={100} color="#00152C" />
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>
            <MoveDown size={100} color="#00152C" />
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
