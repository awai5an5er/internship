import Person from "../assets/person.png";

export default function App() {
  return (
    <div>
      <div className="flex flex-col text-center">
        <h1 className=" text-7xl font-light">Revolutionize Your Mobile </h1>
        <span className="font-extrabold text-7xl">with State Software</span>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="absolute bg-amber-600 rounded-full w-[500px] h-[500px] -z-10"></div>

        <img src={Person} alt="Person" className="w-[400px] relative z-10" />
      </div>
    </div>
  );
}
