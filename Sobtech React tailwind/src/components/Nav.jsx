import Logo from "../assets/sobtech logo.svg";
export default function App() {
  return (
    <div>
      <nav className="flex flex-row sticky top-0  z-50">
        <ul className="flex flex-row  px-40 ">
          <li className="px-4">
            <img className="py-7" src={Logo} alt="" />
          </li>
          <li className="px-4 py-10 font-medium relative">
            <a
              className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-12 before:transition-all hover:before:duration-500"
              href=""
            >
              Home
            </a>
          </li>
          <li className="px-4 py-10 font-medium">
            <a
              className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-17 before:transition-all hover:before:duration-500"
              href=""
            >
              About us
            </a>
          </li>
          <li className="px-4 py-10 font-medium">
            <a
              className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-15 before:transition-all hover:before:duration-500"
              href=""
            >
              Services
            </a>
          </li>
          <li className="px-4 py-10 font-medium">
            <a
              className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-15 before:transition-all hover:before:duration-500"
              href=""
            >
              Projects
            </a>
          </li>
          <li className="px-4 py-10 font-medium">
            <a
              className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-11 before:transition-all hover:before:duration-500"
              href=""
            >
              Blogs
            </a>
          </li>
          <li className="px-4 py-10 font-medium">
            <a
              className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-12 before:transition-all hover:before:duration-500"
              href=""
            >
              Pages
            </a>
          </li>
          <li className="px-4 py-10 font-medium">
            <a
              className="before:bg-amber-600 before:absolute before:bottom-10 before:w-0 before:h-0.5 hover:before:w-15 before:transition-all hover:before:duration-500"
              href=""
            >
              Contact
            </a>
          </li>
          <div className="mx-4">
            <ul className="flex gap-5">
              <li>
                <button
                  className="relative z-30 overflow-hidden border-2 border-amber-600 px-4 py-5 my-5 font-medium rounded-4xl cursor-pointer 
                    text-amber-600 transition-all duration-300
                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full before:bg-amber-500 before:transition-all before:duration-300
                    hover:before:h-full before:z-10
                    after:absolute after:top-0 after:left-0 after:w-full after:bg-amber-600 after:h-0 after:transition-all after:duration-500 after:delay-200
                    hover:after:h-full after:z-20
                    hover:text-white"
                >
                  <span className="relative z-30">Login</span>
                </button>
              </li>
              <li>
                <button
                  className="
                    relative overflow-hidden border-2 border-amber-600 bg-amber-600 text-white 
                    px-5 py-5 my-5 font-medium rounded-4xl cursor-pointer 
                    transition-all duration-300 hover:text-black hover:bg-white

                    before:absolute before:top-0 before:left-0 before:h-0 before:w-full 
                    before:bg-amber-500 before:transition-all before:duration-300 before:z-10 
                    hover:before:h-full

                    after:absolute after:top-0 after:left-0 after:w-full after:h-0 
                    after:bg-white after:transition-all after:duration-500 after:delay-200 after:z-20
                    hover:after:h-full
                  "
                >
                  <span className="relative z-30">Sign Up</span>
                </button>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </div>
  );
}
