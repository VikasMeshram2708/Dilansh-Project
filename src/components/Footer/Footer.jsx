import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-4 border-red-500">
      <div className="max-w-[90%] mt-5 mx-auto">
        <NavLink to="/">
          <img
            className="w-52 h-[10vh]"
            src="/siteLogo/navLogo.svg"
            alt="manipal university"
          />
        </NavLink>
        <h1 className="font-semibold text-xl">
          Organised by China Study Centre, Department of Geopolitics and
          International Relations
        </h1>
        <div className="flex sm:gap-3 gap-5 mt-10">
          <h1 className="sm:text-[1.3rem] mb-5 font-semibold">Follow Us</h1>
          <NavLink to="https://www.facebook.com/girmanipal/" target="_blank">
            <FaFacebook size={35} />
          </NavLink>
          <NavLink to="https://twitter.com/girmanipal" target="_blank">
            <FaSquareXTwitter size={35} />
          </NavLink>
          <NavLink to="https://www.instagram.com/girmanipal/" target="_blank">
            <FaInstagramSquare size={35} />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/school/manipalacademyofhighereducation/"
            target="_blank"
          >
            <FaLinkedin size={35} />
          </NavLink>
          <NavLink to="https://www.youtube.com/@GIRmanipal" target="_blank">
            <FaYoutube size={35} />
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
