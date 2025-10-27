import Pic1 from "../assets/img1.svg";
import Pic2 from "../assets/img2.svg";
import Pic3 from "../assets/img3.svg";

export default function App() {
  return (
    <div className="flex flex-row -my-0.5 h-170 bg-yellow-50 mx-20">
      <div className="py-30">
        <img
          className="py-5 px-10 transition-transform duration-300 hover:rotate-6 cursor-pointer"
          src={Pic1}
          alt=""
        />
        <h2 className="py-5 px-10 text-3xl font-bold">Prestige Management</h2>
        <p className="py-5 px-10 text-2xl">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-10 text-2xl text-amber-600 hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
      <div className="py-30">
        <img
          className="py-5 px-6 transition-transform duration-300 hover:rotate-6 cursor-pointer"
          src={Pic2}
          alt=""
        />
        <h2 className="py-5 px-6 text-3xl font-bold">Prestige Management</h2>
        <p className="py-5 px-6 text-2xl">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-6 text-2xl text-amber-600 hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
      <div className="py-30">
        <img
          className="py-5 px-6 transition-transform duration-300 hover:rotate-6 cursor-pointer"
          src={Pic3}
          alt=""
        />
        <h2 className="py-5 px-6 text-3xl font-bold">Prestige Management</h2>
        <p className="py-5 px-6 text-2xl">
          Real estate is a lucrative ind involves the is a buying selling and
          reproperties. It is a good encompasses residential
        </p>
        <a
          className="py-5 px-6 text-2xl text-amber-600 hover:font-bold"
          href=""
        >
          More about→
        </a>
      </div>
    </div>
  );
}
