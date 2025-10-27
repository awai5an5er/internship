import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import P1 from "../assets/1.png";
import P2 from "../assets/2.png";
import P3 from "../assets/3.png";
import P4 from "../assets/4.png";

export default function App() {
  return (
    <div className="py-6">
      <h2 className="py-4 text-[20px] font-medium text-amber-600 flex justify-center">
        Our Team
      </h2>
      <h1 className="font-extrabold text-[40px] flex justify-center">
        Unleash the Power of
      </h1>
      <span className="font-extrabold text-[40px] flex justify-center">
        the Digital Advertising
      </span>
      <div className="py-10">
        <div className="flex gap-8 justify-center ">
          <div className="bg-[#FFFAF0] rounded-2xl">
            <div className="flex">
              <div className="flex flex-col">
                <div className="px-8 py-8">
                  <p className="font-bold text-[30px]">Bessie</p>
                  <p className="font-bold text-[30px]">Cooper</p>
                </div>
                <div className="flex flex-col px-8 py-6 gap-4">
                  <p className="font-light">Mentor</p>
                  <div className="relative bg-amber-600 h-1 w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-6 right-0"
                    ></div>
                  </div>
                  <p className="font-light">Designer</p>
                  <div className="relative bg-amber-600 h-1 w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-6 right-0"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4 px-8 py-3">
                  <Twitter className="cursor-pointer" color="#E17100" />
                  <Facebook className="cursor-pointer" color="#E17100" />
                  <Instagram className="cursor-pointer" color="#E17100" />
                  <Linkedin className="cursor-pointer" color="#E17100" />
                </div>
              </div>
              <img src={P1} alt="" />
            </div>
            <div></div>
          </div>
          <div className="bg-[#FFFAF0] rounded-2xl">
            <div className="flex">
              <div className="flex flex-col">
                <div className="px-8 py-8">
                  <p className="font-bold text-[30px]">Bessie</p>
                  <p className="font-bold text-[30px]">Cooper</p>
                </div>
                <div className="flex flex-col px-8 py-6 gap-4">
                  <p className="font-light">Mentor</p>
                  <div className="relative bg-amber-600 h-1 w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-6 right-0"
                    ></div>
                  </div>
                  <p className="font-light">Designer</p>
                  <div className="relative bg-amber-600 h-1 w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-6 right-0"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4 px-8 py-3">
                  <Twitter className="cursor-pointer" color="#E17100" />
                  <Facebook className="cursor-pointer" color="#E17100" />
                  <Instagram className="cursor-pointer" color="#E17100" />
                  <Linkedin className="cursor-pointer" color="#E17100" />
                </div>
              </div>
              <img src={P2} alt="" />
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex gap-8 justify-center py-8 ">
          <div className="bg-[#FFFAF0] rounded-2xl">
            <div className="flex">
              <div className="flex flex-col">
                <div className="px-8 py-8">
                  <p className="font-bold text-[30px]">Bessie</p>
                  <p className="font-bold text-[30px]">Cooper</p>
                </div>
                <div className="flex flex-col px-8 py-6 gap-4">
                  <p className="font-light">Mentor</p>
                  <div className="relative bg-amber-600 h-1 w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-6 right-0"
                    ></div>
                  </div>
                  <p className="font-light">Designer</p>
                  <div className="relative bg-amber-600 h-1 w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-6 right-0"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4 px-8 py-3">
                  <Twitter className="cursor-pointer" color="#E17100" />
                  <Facebook className="cursor-pointer" color="#E17100" />
                  <Instagram className="cursor-pointer" color="#E17100" />
                  <Linkedin className="cursor-pointer" color="#E17100" />
                </div>
              </div>
              <img src={P3} alt="" />
            </div>
            <div></div>
          </div>
          <div className="bg-[#FFFAF0] rounded-2xl">
            <div className="flex">
              <div className="flex flex-col">
                <div className="px-8 py-8">
                  <p className="font-bold text-[30px]">Bessie</p>
                  <p className="font-bold text-[30px]">Cooper</p>
                </div>
                <div className="flex flex-col px-8 py-6 gap-4">
                  <p className="font-light">Mentor</p>
                  <div className="relative bg-amber-600 h-1 w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-6 right-0"
                    ></div>
                  </div>
                  <p className="font-light">Designer</p>
                  <div className="relative bg-amber-600 h-1 w-35">
                    <div
                      className="absolute flex
                    bg-white h-1 w-6 right-0"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-4 px-8 py-3">
                  <Twitter className="cursor-pointer" color="#E17100" />
                  <Facebook className="cursor-pointer" color="#E17100" />
                  <Instagram className="cursor-pointer" color="#E17100" />
                  <Linkedin className="cursor-pointer" color="#E17100" />
                </div>
              </div>
              <img src={P4} alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
