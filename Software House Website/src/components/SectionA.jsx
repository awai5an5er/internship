import { useState } from "react";
import Pic1 from "../assets/img1.svg";
import Pic2 from "../assets/img2.svg";
import Pic3 from "../assets/img3.svg";

export default function App() {
  const [isHover, setHover] = useState(false);
  return (
    <div className="flex flex-row -my-0.5 bg-[#CA9200] mx-15">
      <div className="py-10 overflow-auto">
        <div
          onMouseOver={
            (e) => setHover(true)
            //   (e.target.parentElement.children[1].style.opacity = "1")
          }
          onMouseOut={
            (e) => setHover(false)
            //   (e.target.parentElement.children[1].style.opacity = "0")
          }
          className="relative"
        >
          <img
            className={`py-5 px-10  duration-500 transition-all hover:rotate-6 cursor-pointer ${
              isHover ? "size-40" : "size-20"
            } `}
            src={Pic1}
            alt=""
          />
          <div
            className={`bg-[#00152C] absolute top-0 left-70 duration-300 transition-all cursor-pointer px-3 py-3 rounded-2xl ${
              isHover ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="text-[#CA9200]">
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Planning
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Brainstorming
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Collaborating
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Innovating
              </li>
            </ul>
          </div>
        </div>
        <h2 className="py-5 px-10 text-5xl font-bold text-[#00152C]">
          Project Management
        </h2>
        <p className="py-5 px-10 text-2xl text-[#00152C]">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-10 text-2xl text-[#00152C] font-medium hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
      <div className="py-10 overflow-auto">
        <div
          onMouseOver={
            (e) => setHover(true)
            //   (e.target.parentElement.children[1].style.opacity = "1")
          }
          onMouseOut={
            (e) => setHover(false)
            //   (e.target.parentElement.children[1].style.opacity = "0")
          }
          className="relative"
        >
          <img
            className={`py-5 px-10  duration-500 transition-all hover:rotate-6 cursor-pointer ${
              isHover ? "size-40" : "size-20"
            } `}
            src={Pic2}
            alt=""
          />
          <div
            className={`bg-[#00152C] absolute top-0 left-70 duration-300 transition-all cursor-pointer px-3 py-3 rounded-2xl ${
              isHover ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="text-[#CA9200]">
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Planning
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Brainstorming
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Collaborating
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Innovating
              </li>
            </ul>
          </div>
        </div>
        <h2 className="py-5 px-10 text-5xl font-bold text-[#00152C]">
          Project Management
        </h2>
        <p className="py-5 px-10 text-2xl text-[#00152C]">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-10 text-2xl text-[#00152C] font-medium hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
      <div className="py-10 overflow-auto">
        <div
          onMouseOver={
            (e) => setHover(true)
            //   (e.target.parentElement.children[1].style.opacity = "1")
          }
          onMouseOut={
            (e) => setHover(false)
            //   (e.target.parentElement.children[1].style.opacity = "0")
          }
          className="relative"
        >
          <img
            className={`py-5 px-10  duration-500 transition-all hover:rotate-6 cursor-pointer ${
              isHover ? "size-40" : "size-20"
            } `}
            src={Pic3}
            alt=""
          />
          <div
            className={`bg-[#00152C] absolute top-0 left-70 duration-300 transition-all cursor-pointer px-3 py-3 rounded-2xl ${
              isHover ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="text-[#CA9200]">
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Planning
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Brainstorming
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Collaborating
              </li>
              <li className="cursor-pointer hover:text-2xl duration-150 transition-all">
                Innovating
              </li>
            </ul>
          </div>
        </div>
        <h2 className="py-5 px-10 text-5xl font-bold text-[#00152C]">
          Project Management
        </h2>
        <p className="py-5 px-10 text-2xl text-[#00152C]">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-10 text-2xl text-[#00152C] font-medium hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
    </div>
  );
}
