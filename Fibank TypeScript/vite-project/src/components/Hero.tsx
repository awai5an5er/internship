import P1 from "../assets/hero-img.jpg";
import Person1 from "../assets/p1.jpg"
import Person2 from "../assets/p2.jpg"
import Person3 from "../assets/p3.jpg"
import {Star} from "lucide-react"
import Play from "../assets/playicon.svg"
import C1 from "../assets/card1.png"
import C2 from "../assets/card2.png"


export default function App(){

    return (
        <div className="flex py-10">
            <div className="px-4 gap-10 flex flex-col flex-wrap">
                <h1 className="font-bold text-[70px] overflow-auto">Top Financial Planning</h1>
                <p className="text-2xl overflow-auto">Customized strategies to maximize wealth, reduce risks, and align finances with your life goals.</p>
                <div className="border-2 border-black rounded-3xl flex h-[90px] w-[600px]">
                    <input placeholder="Enter your mail" className="outline-none w-[80%] px-5" type="text" />
                    <button className="w-[20%] text-[20px] px-3 font-medium text-black hover:text-white bg-[#AEFF1C] hover:bg-[#1F523E] duration-150 transition-all rounded-br-3xl rounded-tr-3xl cursor-pointer">
                        Contact us
                    </button>

                </div>
                <div className="flex relative">
                    <div>
                        <img className="absolute left-1 border-4 border-white rounded-full" src={Person1} alt="" />
                        <img className="absolute left-20 border-4 border-white rounded-full" src=   {Person2} alt="" />
                        <img className="rounded-full border-4 border-white absolute left-38" src={Person3} alt="" />
                    </div>
                    <div className="flex absolute right-70 ">
                        <Star color="#C4FD5E"/>
                        <Star color="#C4FD5E"/>
                        <Star color="#C4FD5E"/>
                        <Star color="#C4FD5E"/>
                        <Star color="#C4FD5E"/>
                    </div>
                    <p className="absolute text-[30px] right-30 top-10 font-medium">13k rating
<span className="font-light px-2">(4.7 Rating)</span></p>
                </div>
                <div className="flex relative ">
                    <button
          className="relative z-30 overflow-hidden h-[60px]  bg-[#AFFF1D] w-50 font-medium rounded-4xl cursor-pointer top-30
                    text-black transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#104042] before:transition-all before:duration-300 hover:text-white
                    hover:before:w-full before:z-10"
        >
          <span className="relative z-30 font-bold ">BOOK A MEETING</span>
        </button>
        <button className="flex align-middle border-2 border-black hover:bg-[#AFFF1D] bottom-0 h-[60px] w-[210px] rounded-4xl px-3 absolute top-30 left-55 cursor-pointer font-bold">
        <p className="relative">
            <p className="py-4 px-3">WATCH VIDEO </p><img className="bg-[#AFFF1D] rounded-4xl border-6 border-[#AFFF1D] size-10 absolute px-1 top-2 left-35" src={Play} alt="" />
        </p>
        </button>
                </div>
            </div>
            <div className="relative">
                <img className=" px-2" src={P1} alt="" />
                <img className="absolute top-10 right-10" src={C1} alt="" />
                <img className="absolute bottom-10 -left-30 float" src={C2} alt="" />




            </div>
        </div>
    )
}