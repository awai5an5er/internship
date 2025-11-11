import Img from "../assets/img2.avif";
import P1 from "../assets/P1.jpg";
import P2 from "../assets/P2.jpg";
import P3 from "../assets/P3.jpg";

export default function App() {
  return (
    <div>
      <div className="flex justify-around px-10 py-20">
        <div className="px-10 py-20 flex flex-col gap-5">
          <h1 className="font-bold text-3xl">lorem</h1>
          <p className="text-2xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            optio, animi soluta quidem est id? Hic reprehenderit, fugit quae
            dolor quia quisquam. Delectus asperiores beatae saepe minus laborum
            doloremque eveniet!
          </p>
        </div>
        <img className=" border-[#CA9200] " src={Img} alt="" />
      </div>
    </div>
  );
}
