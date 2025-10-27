import Card1 from "../assets/1_card.png";
import Card2 from "../assets/2_card.png";
import Card3 from "../assets/3_card.png";
import { CalendarDays } from "lucide-react";
import { User } from "lucide-react";

export default function App() {
  return (
    <div className=" py-10 bg-[#FFFAF0] ">
      <h2 className="py-4 text-[20px] font-medium text-amber-600 flex justify-center">
        Our Blogs
      </h2>
      <h1 className="font-extrabold text-[40px] flex justify-center">
        Boost Your Business
      </h1>
      <span className="font-extrabold text-[40px] flex justify-center">
        with Digital most
      </span>
      <span className="font-extrabold text-[40px] flex justify-center">
        Marketing
      </span>
      <div className="flex justify-evenly py-10 bg-[#FFFAF0]">
        <div className="bg-white rounded-bl-3xl rounded-br-3xl">
          <img src={Card1} alt="" />
          <div className="flex py-10 px-3">
            <p className="flex px-4">
              <CalendarDays color="#cf6a17" />
              <span className="px-2">October 19, 2022</span>
            </p>
            <p className="flex px-4">
              <User color="#cf6a17" />
              <span className="px-2"> Mesbah</span>
            </p>
          </div>
          <h1 className="font-bold text-2xl px-10">
            Inspire meets brands with
          </h1>
          <span className="font-bold text-2xl px-10 ">digital technology</span>
          <p className="px-10 py-10 text-[20px]">
            <a className=" text-amber-600 hover:font-bold" href="">
              Read more→
            </a>
          </p>
        </div>
        <div className="bg-white rounded-bl-3xl rounded-br-3xl">
          <img src={Card2} alt="" />
          <div className="flex py-10 px-3">
            <p className="flex px-4">
              <CalendarDays color="#cf6a17" />
              <span className="px-2">October 19, 2022</span>
            </p>
            <p className="flex px-4">
              <User color="#cf6a17" />
              <span className="px-2"> Mesbah</span>
            </p>
          </div>
          <h1 className="font-bold text-2xl px-10">
            Inspire meets brands with
          </h1>
          <span className="font-bold text-2xl px-10 ">digital technology</span>
          <p className="px-10 py-10 text-[20px]">
            <a className=" text-amber-600 hover:font-bold" href="">
              Read more→
            </a>
          </p>
        </div>
        <div className="bg-white rounded-bl-3xl rounded-br-3xl">
          <img src={Card3} alt="" />
          <div className="flex py-10 px-3">
            <p className="flex px-4">
              <CalendarDays color="#cf6a17" />
              <span className="px-2">October 19, 2022</span>
            </p>
            <p className="flex px-4">
              <User color="#cf6a17" />
              <span className="px-2"> Mesbah</span>
            </p>
          </div>
          <h1 className="font-bold text-2xl px-10">
            Inspire meets brands with
          </h1>
          <span className="font-bold text-2xl px-10 ">digital technology</span>
          <p className="px-10 py-10 text-[20px]">
            <a className=" text-amber-600 hover:font-bold" href="">
              Read more→
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
