import Basic from "../assets/basic.png";
import Consult from "../assets/consult.png";
import Premium from "../assets/premium.png";
import { Check } from "lucide-react";

export default function App() {
  return (
    <div className="py-20 bg-[#00152C]">
      <h2 className="py-4 text-[20px] font-medium flex justify-center">
        Our Pricing
      </h2>
      <h1 className="font-extrabold text-[40px] flex justify-center">
        Drive Growth Through Digital
      </h1>
      <span className="font-extrabold text-[40px] flex justify-center">
        the and Marketing
      </span>
      <div className="flex flex-row py-10 justify-evenly ">
        <div className="px-5 py-5 flex flex-col bg-[#CA9200] text-[#00152C]  w-auto">
          <div className="flex justify-around gap-15">
            <p className="text-[30px] font-bold">Basic</p>
            <p className="text-[30px] font-bold">
              $29 <span className="font-extralight text-[15]">/month</span>
            </p>
          </div>
          <img
            className="flex py-8 px-14 h-60 justify-center"
            src={Basic}
            alt=""
          />
          <hr className="px-2" />
          <div className="py-6 px-3 font-medium">
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Your Startup
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Knew About Fonts
            </p>
          </div>
          <button
            className="w-full relative z-30 overflow-hidden border-2 border-[#00152C] px-20 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    text-[#00152C] transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-[#00152C] before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                   
                    hover:text-white"
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
        <div className="px-5 py-5 flex flex-col bg-[#CA9200] text-[#00152C] w-auto">
          <div className="flex justify-around gap-15">
            <p className="text-[30px] font-bold">Consult</p>
            <p className="text-[30px] font-bold">
              $29 <span className="font-extralight text-[15]">/month</span>
            </p>
          </div>
          <img
            className="flex py-8 px-20 h-60 justify-center"
            src={Consult}
            alt=""
          />
          <hr className="px-2" />
          <div className="py-6 px-3 font-medium">
            <p className="flex gap-4 py-2 ">
              <Check color="#00152C" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Your Startup
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Knew About Fonts
            </p>
          </div>
          <button
            className="w-full relative z-30 overflow-hidden border-2 border-[#00152C] px-20 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    text-[#00152C] transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-[#00152C] before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    
                    hover:text-white"
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
        <div className="px-5 py-5 flex flex-col bg-[#CA9200] text-[#00152C]  w-auto">
          <div className="flex justify-around gap-15">
            <p className="text-[30px] font-bold">Premium</p>
            <p className="text-[30px] font-bold">
              $29 <span className="font-extralight text-[15]">/month</span>
            </p>
          </div>
          <img
            className="flex py-8 px-20 h-60 justify-center"
            src={Premium}
            alt=""
          />
          <hr className="px-2" />
          <div className="py-6 px-3 font-medium">
            <p className="flex gap-4 py-2 ">
              <Check color="#00152C" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Your Startup
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2">
              <Check color="#00152C" /> Knew About Fonts
            </p>
          </div>
          <button
            className="w-full relative z-30 overflow-hidden border-2 border-[#00152C] px-20 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    text-[#00152C] transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-[#00152C] before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    
                    hover:text-white"
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
