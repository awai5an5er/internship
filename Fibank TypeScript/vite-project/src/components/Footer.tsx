import Logo from "../assets/logo2.svg"
import {Instagram} from "lucide-react"
import {Facebook} from "lucide-react"
import {Twitter} from "lucide-react"
import {Youtube} from "lucide-react"


export default function App(){
    return(
        <div id="23" className="">
            <div className="flex justify-between py-20 bg-[#104042]">
            <div className="flex flex-col gap-20 px-20 py-15">
                <img className="w-[25%]" src={Logo} alt="" />
                <p className="text-white text-[20px] overflow-auto">Choose us for reliable, detail-oriented cleaning that meets all your cleanliness needs.</p>
                <div className="flex gap-20">
                    <a className="text-white text-[20px] font-medium hover:text-[#AEFF1C] transition-all duration-300" href="">About us</a>
                    <a className="text-white text-[20px] font-medium hover:text-[#AEFF1C] transition-all duration-300" href="">Contact us</a>
                </div>
            </div>
            <div className="flex flex-col gap-10 px-20 py-15">
                <h1 className="text-5xl font-bold text-white">Our Social Handles</h1>
                <div className="flex py-10 gap-10">
                <div className="rounded-full border-2 hover:bg-white border-white px-3 py-3"><Facebook className=" size-13 hover:invert cursor-pointer" color="#ffffff" /></div>
                 <div className="rounded-full border-2 hover:bg-white border-white px-3 py-3"><Instagram className=" size-13 hover:invert cursor-pointer" color="#ffffff" /></div>
                 <div className="rounded-full border-2 hover:bg-white border-white px-3 py-3"><Twitter className=" size-13 hover:invert cursor-pointer" color="#ffffff" /></div>
                 <div className="rounded-full border-2 hover:bg-white border-white px-3 py-3"><Youtube className=" size-13 hover:invert cursor-pointer" color="#ffffff" /></div>
                </div>
            </div>
           
        </div>
        <p className="text-white px-15 opacity-10"><hr /></p>
         <div className="flex justify-between bg-[#104042] px-20 py-10">
                <p className="text-white text-[20px] font-medium hover:text-[#AEFF1C] transition-all duration-300 cursor-pointer">@ Powered by Fibank</p>
                <div className="flex gap-10">
                    <p className="text-white text-[20px] hover:text-[#AEFF1C] transition-all duration-300 cursor-pointer">Terms & Conditions</p><p className="text-white text-[20px] hover:text-[#AEFF1C] transition-all duration-300 cursor-pointer">Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}