import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import Logo from "../assets/footer-logo.svg";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";

export default function App() {
  return (
    <div className="bg-[#0E191E] text-white py-4">
      <div className="flex justify-evenly">
        <div className="flex flex-col gap-4 px-8 py-6">
          <img className="size-30" src={Logo} alt="" />
          <p>Financial planners help people to gain knowledge about</p>
          <p className="font-bold">Follow Us</p>
          <div className="flex gap-10 py-6">
            <Twitter className="cursor-pointer" color="#E17100" />
            <Facebook className="cursor-pointer" color="#E17100" />
            <Instagram className="cursor-pointer" color="#E17100" />
            <Linkedin className="cursor-pointer" color="#E17100" />
          </div>
        </div>
        <div className="px-3 py-18 flex flex-col gap-4">
          <p className="font-bold">Quick Links</p>
          <p>About Us </p>
          <p>Service</p>
          <p>Contact Us</p>
          <p>Blog Post</p>
          <p>Team Members</p>
        </div>
        <div className="px-6 py-18 flex flex-col gap-10 w-[350px] flex-wrap">
          <p className="font-bold">Contact</p>
          <p className="flex gap-2">
            <MapPin color="#E17100" />
            Address <span className="font-bold">66 Gulberg, Lahore</span>
          </p>
          <p className="flex gap-2">
            <Phone color="#E17100" />
            Phone Number <span className="font-bold">99 999 999 99</span>
          </p>
          <p className="flex gap-2">
            <Mail color="#E17100" />
            Email <span className="font-bold">abcd@sobtech.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-10 px-5 py-18">
          <p className="font-bold ">Newsletter</p>
          <p>Sdipiscing elit. Sed sit amet rcus nunc her it goes</p>
          <div className="relative flex border-2 border-white rounded-2xl ">
            <input className="h-[70px] outline-none px-2 w-[80%]" type="text" />
            <Send
              className="absolute top-5 right-1 w-[20%] cursor-pointer"
              color="#E17100"
            />
          </div>
        </div>
      </div>
      <div className="bg-white h-0.5 opacity-10  w-full flex justify-center"></div>
      <div className="flex justify-between px-8 py-6 font-extralight">
        <p>© Yoursitename 2024 | All Rights Reserved</p>
        <div className="flex gap-3">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
