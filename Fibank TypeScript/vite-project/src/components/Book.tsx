import Star from "../assets/star.png";

export default function App(){
    return(
        <div className="flex justify-center relative">
            <div className="flex absolute -bottom-25 justify-between bg-[#AEFF1C] px-10 py-20 w-[1200px] rounded-4xl">
                <h1 className="text-5xl font-bold">Book a Meeting</h1>
                <img className="rotate-180 infinite animate-spin" src={Star} alt="" />
            </div>
        </div>
    )
}