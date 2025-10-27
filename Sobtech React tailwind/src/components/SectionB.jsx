import Pic1 from "../assets/img-4.png";
import Check from "../assets/checkmark.png";

export default function App() {
  return (
    <div className="flex flex-row my-20 justify-around">
      <div className="mx-20">
        <img className="bg-yellow-50" src={Pic1} alt="" />
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-amber-600 text-2xl">Know About Us</h2>
        <h1 className="font-bold text-5xl">
          The Future of Mobile Software Unleash Your Mobile
        </h1>

        <span className="flex flex-col gap-4">
          <p className="text-lg leading-relaxed max-w-2xl">
            Et purus duis sollicitudin dign habitant. Egestas nulla quis
            venenatis cras sed eu massa eu faucibus Urna fusce Et purus duis
            sollicitudin dignissim habitant. Egestas nulla quis venenatis
          </p>
          <span className="flex">
            <img className="w-5 h-5" src={Check} alt="" />
            <p className="px-3 font-bold">
              Et purus duis sollicitudin dignissim habitant
            </p>
          </span>
          <span className="flex">
            <img className="w-5 h-5" src={Check} alt="" />
            <p className="px-3 font-bold">
              venenatis cras sed eu massa eu faucibus uis
            </p>
          </span>
        </span>
      </div>
    </div>
  );
}
