import Service from "../assets/service1.svg"
import Service2 from "../assets/service2.svg"
import Service3 from "../assets/service3.svg"
import Service4 from "../assets/service4.svg"

export default function App(){

    return(
        <div id="21" className="bg-[#E4F0F0]">
            <div className="flex px-15 py-20 justify-between">
                <h1 className="font-bold text-[50px]">Our Services</h1>
                <button
                    className="relative z-30 overflow-hidden  bg-[#AFFF1D] w-50 font-medium rounded-4xl cursor-pointer 
                    text-black transition-all duration-300 h-[70px]
                    before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#104042] before:transition-all before:duration-300 hover:text-white
                    hover:before:w-full before:z-10"
        >
          <span className="relative z-30 font-bold">ALL SERVICES</span>
        </button>
            </div>
        <div className="flex justify-around gap-10 px-15 py-20">
            <div className="flex flex-col gap-10">
                <div className="bg-[#FFFFFF] flex rounded-3xl px-3 py-4 ">
                    <div className="w-[20%]  relative"><img className="bg-[#C4FD5E] hover:invert hover:bg-[#104042] transition-all duration-300 cursor-pointer absolute top-20 left-2 w-20 h-20 rounded-full px-5" src={Service} alt="" /></div>
                    <div className="flex flex-col gap-10 w-[80%]">
                        <h1 className="text-[30px] font-bold">Financial Consulting</h1>
                        <p className="text-[20px]">Life insurance offers lump sums or payments to help beneficiaries cover debts and expenses.</p>
                        <a className="text-[20px] hover:text-[#104042] hover:text-[22px] transition-all duration-300" href="">View More Details →</a>
                    </div>
                    

                </div>
                <div className="bg-[#FFFFFF] flex rounded-3xl px-3 py-4">
                    <div className="w-[20%]  relative"><img className="bg-[#C4FD5E] hover:invert hover:bg-[#104042] transition-all duration-300 cursor-pointer absolute top-20 left-3 w-20 h-20 rounded-full px-5" src={Service2} alt="" /></div>
                    <div className="flex flex-col gap-10 w-[80%]">
                        <h1 className="text-[30px] font-bold">Market Analysis</h1>
                        <p className="text-[20px]">Life insurance offers lump sums or payments to help beneficiaries cover debts and expenses.</p>
                        <a className="text-[20px] hover:text-[#104042] hover:text-[22px] transition-all duration-300" href="">View More Details →</a>
                    </div>
                    

                </div>
                
            </div>
            <div className="flex flex-col gap-10">
                <div className="bg-[#FFFFFF] flex rounded-3xl px-3 py-4 ">
                    <div className="w-[20%]  relative"><img className="bg-[#C4FD5E] hover:invert hover:bg-[#104042] transition-all duration-300 cursor-pointer absolute top-20 left-2 w-20 h-20 rounded-full px-5" src={Service3} alt="" /></div>
                    <div className="flex flex-col gap-10 w-[80%]">
                        <h1 className="text-[30px] font-bold">Business Advisory</h1>
                        <p className="text-[20px]">Life insurance offers lump sums or payments to help beneficiaries cover debts and expenses.</p>
                        <a className="text-[20px] hover:text-[#104042] hover:text-[22px] transition-all duration-300" href="">View More Details →</a>
                    </div>
                    

                </div>
                <div className="bg-[#FFFFFF] flex rounded-3xl px-3 py-4">
                    <div className="w-[20%]  relative"><img className="bg-[#C4FD5E] hover:invert hover:bg-[#104042] transition-all duration-300 cursor-pointer absolute top-20 left-3 w-20 h-20 rounded-full px-5" src={Service4} alt="" /></div>
                    <div className="flex flex-col gap-10 w-[80%]">
                        <h1 className="text-[30px] font-bold">Financial Sheild</h1>
                        <p className="text-[20px]">Life insurance offers lump sums or payments to help beneficiaries cover debts and expenses.</p>
                        <a className="text-[20px] hover:text-[#104042] hover:text-[22px] transition-all duration-300" href="">View More Details →</a>
                    </div>
                    

                </div>
                
            </div>
            

        </div>
        </div>
    )
}