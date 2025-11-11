import Logo from "../assets/fibank logo.svg";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const navItems = [
  { label: "Home", path: "/" },
  { label: "Service", path: "/services" },
  { label: "Contact", path: "/contact" },
  { label: "About Us", path: "/about" },
];


  return (
    <nav className="flex bg-white justify-around sticky top-0 z-40">
      <div>
        <img className="py-8 px-8" src={Logo} alt="Logo" />
      </div>

      <ul className="flex justify-center py-10 px-55 gap-8 text-[20px] relative">
  {navItems.map((item, index) => (
    <li
      key={index}
      className="hover:text-[#C4FD5E] transition-all duration-200 relative"
    >
      <Link
        to={item.path}
        className="before:bg-black before:absolute before:bottom-1 before:left-0 before:w-0 before:h-0.5 hover:before:w-full transition-all before:duration-500"
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>


      <div className="flex py-5 px-4 gap-3">
        <button className="relative bg-white hover:bg-[#AFFF1D] hover:transition-all hover:border-[#AFFF1D] duration-200 border-2 border-black w-18 h-18 rounded-full cursor-pointer">
          <div className="absolute top-5 left-4">
            <ShoppingCart className="size-8" />
          </div>
        </button>

        <button
          onClick={onLoginClick}
          className="relative z-30 overflow-hidden bg-[#AFFF1D] w-50 font-medium rounded-4xl cursor-pointer text-black transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#104042] before:transition-all before:duration-300 hover:text-white hover:before:w-full before:z-10"
        >
          <span className="relative z-30 font-bold">SIGNUP/LOGIN</span>
        </button>
      </div>
    </nav>
  );
}
