import Pic from "../assets/about.jpg"
import Phone from"../assets/phone.png"

export default function App(){
    return(
        <div id="22" className="flex py-10"> 
            <div className="flex py-20 px-15 w-[40%] justify-center relative">
                <img className="h-[90%]" src={Pic} alt="" />
                <img className="absolute top-40 -right-10 h-[60%] " src={Phone} alt="" />
            </div>
            <div className="flex flex-col px-20 py-25 w-[60%] gap-4">
                <h1 className="text-5xl font-bold">Developing Trust in Finance</h1>
                <p className="text-[20px]">Enhancing financial trust through accountability, professionalism, and dependable solutions tailored to client needs.</p>
                <p className="opacity-50 text-gray-500"><hr /></p>
                <div className="flex gap-50">
                    <div><h1 className="text-[80px] text-[#104042] font-bold italic">16+</h1><p className="text-2xl">Earning Honors</p></div>
                    <div><h1 className="text-[80px] text-[#104042] font-bold italic">22+</h1><p className="text-2xl">Clients</p></div>
                </div>
                <p className="opacity-50 text-gray-500 py-5"><hr /></p>
                <button
                    className="relative z-30 overflow-hidden h-[60px]  bg-[#AFFF1D] w-50 font-medium rounded-4xl  cursor-pointer
                    text-black transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#104042] before:transition-all before:duration-300 hover:text-white
                    hover:before:w-full before:z-10">
                    <span className="relative z-30 font-bold">ABOUT US</span>
                </button>
            </div>
        </div>
    )
}