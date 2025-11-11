import Logo from "../assets/25.png";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      // When scrolled past navbar, make it sticky
      const nav = document.getElementById("navbar");
      if (nav) {
        const navTop = nav.offsetTop;
        setIsSticky(window.scrollY >= navTop);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div>
      <nav
        id="navbar"
        className={`transition-all duration-500 ${
          isSticky
            ? `fixed top-0 left-0 w-full bg-[#00152C] shadow-lg z-50 ${
                scrollDirection === "up" ? "translate-y-0" : "-translate-y-full"
              }`
            : "relative bg-transparent"
        }`}
      >
        <ul className="flex justify-end gap-25">
          <li className="py-8 relative">
            <input
              className="border-4 border-[#CA9200] outline-none rounded-2xl py-2 px-5  "
              type="text"
            />
            <p className="absolute top-10 right-3">
              <Search color="#CA9200" />
            </p>
          </li>
          <li className="text-[#CA9200] py-8 text-2xl font-bold  relative">
            <a
              className="before:bg-[#CA9200] before:absolute before:bottom-12 before:w-0 before:h-2 hover:before:w-full before:transition-all hover:before:duration-500"
              href=""
            >
              HOME
            </a>
          </li>
          <li className="text-[#CA9200] py-8 text-2xl font-bold relative">
            <a
              className="before:bg-[#CA9200] before:absolute before:bottom-12 before:w-0 before:h-2 hover:before:w-full before:transition-all hover:before:duration-500"
              href=""
            >
              SERVICES
            </a>
          </li>
          <li className="text-[#CA9200] py-8 text-2xl font-bold relative">
            <a
              className="before:bg-[#CA9200] before:absolute before:bottom-12 before:w-0 before:h-2 hover:before:w-full before:transition-all hover:before:duration-500"
              href=""
            >
              PROJECTS
            </a>
          </li>
          <li className="text-[#CA9200] py-8 text-2xl font-bold relative">
            <a
              className="before:bg-[#CA9200] before:absolute before:bottom-12 before:w-0 before:h-2 hover:before:w-full before:transition-all hover:before:duration-500"
              href=""
            >
              TEAM
            </a>
          </li>
          <li className="text-[#CA9200] py-8 text-2xl font-bold cursor-pointer relative">
            <a
              className="before:bg-[#CA9200] before:absolute before:bottom-12 before:w-0 before:h-2 hover:before:w-full before:transition-all hover:before:duration-500"
              href=""
            >
              ABOUT US
            </a>
          </li>
          <li>
            <img className="size-30" src={Logo} alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
