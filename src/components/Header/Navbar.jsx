import { NavLink } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function Navbar() {
  return (
    <nav className="">
      <div className="shadow-lg">
        <div className="max-w-[90%] mx-auto">
          <NavLink to="/" className="text-xl">
            <img
              className="w-52 h-[10vh]"
              src="/siteLogo/navLogo.svg"
              alt="manipal university"
            />
          </NavLink>
        </div>
      </div>
      <BottomNav />
    </nav>
  );
}