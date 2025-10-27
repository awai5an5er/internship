import Basic from "../assets/basic.png";
import Consult from "../assets/consult.png";
import Premium from "../assets/premium.png";
import Check from "../assets/checkmark.png";

export default function App() {
  return (
    <div className="py-20 bg-[#F7F7F7]">
      <h2 className="py-4 text-[20px] font-medium text-amber-600 flex justify-center">
        Our Pricing
      </h2>
      <h1 className="font-extrabold text-[40px] flex justify-center">
        Drive Growth Through Digital
      </h1>
      <span className="font-extrabold text-[40px] flex justify-center">
        the and Marketing
      </span>
      <div className="flex flex-row py-10 justify-evenly">
        <div className="px-5 py-5 flex flex-col bg-white rounded-2xl w-auto">
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
          <div className="py-6 px-3">
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Your Startup
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Knew About Fonts
            </p>
          </div>
          <button
            className="w-full relative z-30 overflow-hidden border-2 border-amber-600 px-20 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    text-amber-600 transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-amber-500 before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    after:absolute after:top-0 after:left-0 after:w-full after:bg-amber-600 after:h-0 after:transition-all after:duration-500 after:delay-200
                    hover:after:h-full after:z-20
                    hover:text-white"
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
        <div className="px-5 py-5 flex flex-col bg-white rounded-2xl w-auto">
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
          <div className="py-6 px-3">
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Your Startup
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Knew About Fonts
            </p>
          </div>
          <button
            className="
                    relative overflow-hidden border-2 border-amber-600 bg-amber-600 text-white 
                    px-5 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    transition-all duration-300 hover:text-black hover:bg-white

                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full 
                    before:bg-amber-500 before:transition-all before:duration-300 before:z-10 
                    hover:before:h-full

                    after:absolute after:top-0 after:left-0 after:w-full after:h-0 
                    after:bg-white after:transition-all after:duration-500 after:delay-200 after:z-20
                    hover:after:h-full
                  "
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
        <div className="px-5 py-5 flex flex-col bg-white rounded-2xl w-auto">
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
          <div className="py-6 px-3">
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Mistakes To Avoid
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Your Startup
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Knew About Fonts
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Your Startup{" "}
            </p>
            <p className="flex gap-4 py-2">
              <img className="w-5 h-5" src={Check} alt="" /> Knew About Fonts
            </p>
          </div>
          <button
            className="w-full relative z-30 overflow-hidden border-2 border-amber-600 px-20 py-3 my-5 font-medium rounded-4xl cursor-pointer 
                    text-amber-600 transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-amber-500 before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    after:absolute after:top-0 after:left-0 after:w-full after:bg-amber-600 after:h-0 after:transition-all after:duration-500 after:delay-200
                    hover:after:h-full after:z-20
                    hover:text-white"
          >
            <span className="relative z-30">Start now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
