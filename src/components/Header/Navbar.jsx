/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import BottomNav from "./BottomNav";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [text, setText] = useState("");
  const fullText = "Send your papers on 17thaiccs@manipal.edu";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentText += fullText[currentIndex];
      setText(currentText);
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <nav className="sticky top-0 z-40 bg-white pb-5">
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
      <h1 className="text-center my-5 font-semibold text-xl">
        Organised by China Study Centre, Department of Geopolitics and
        International Relations
      </h1>
      <div className="bg-black text-white font-semibold p-2">
        <div className="flex max-w-7xl items-center mx-auto tems-center justify-center">
          {text}
          {/* <h1 className="bg-red-500 rounded text-white font-semibold w-56 p-2 text-center">What's New</h1> */}
        </div>
      </div>
      <BottomNav />
    </nav>
  );
}
