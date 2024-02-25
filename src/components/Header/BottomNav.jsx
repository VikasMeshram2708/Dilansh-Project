import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function BottomNav() {
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navLinks = [
    {
      id: 1,
      title: "Home",
      redirectUrl: "/",
    },
    {
      id: 2,
      title: "About",
      redirectUrl: "/about",
    },
    {
      id: 3,
      title: "Program List",
      redirectUrl: "/program-list",
    },
    {
      id: 4,
      title: "Gallery",
      redirectUrl: "/gallery",
    },
    {
      id: 5,
      title: "Contact Us",
      redirectUrl: "/contact-us",
    }
  ];
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("paht", pathname);
  }, []);
  return (
    <section className="grid gap-2 sm:grid-cols-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center max-w-[90%] mx-auto mt-5">
      <li
        className={`sm:text-[1.2rem] font-semibold tracking-wider border-2 rounded-md border-yellow-500 p-2 text-center ${pathname === "/" && "bgYellow"
          } list-none text-black`}
      >
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        onMouseLeave={() => {
          setToggle(false)
        }}
        onClick={() => {
          setToggle((prev) => !prev)
        }}
        className={`sm:text-[1.2rem] relative cursor-pointer font-semibold tracking-wider border-2 rounded-md border-yellow-500 p-2 text-center ${pathname === "/about" && "bgYellow"
          } list-none text-black`}
      >
        About
        {
          toggle &&
          <div className="bg-white w-64 cursor-pointer shadow-black shadow-lg font-semibold p-3 z-40 absolute top-12 left-3">
            <li className="hover:bg-gray-100 pb-2 shadow mb-5">
              <Link to="https://www.manipal.edu/mu.html" target="_blank">
                About Manipal
              </Link>
            </li>
            <li className="hover:bg-gray-100 pb-2 shadow">
              <Link to="https://www.manipal.edu/gir.html" target="_blank">
                About MA DGIR
              </Link>
            </li>
          </div>
        }
      </li>
      <li
        className={`sm:text-[1.2rem] font-semibold tracking-wider border-2 rounded-md border-yellow-500 p-2 text-center ${pathname === "/program-list" && "bgYellow"
          } list-none text-black`}
      >
        <NavLink to="/program-list">Program List</NavLink>
      </li>
      <li
        className={`sm:text-[1.2rem] font-semibold tracking-wider border-2 rounded-md border-yellow-500 p-2 text-center ${pathname === "/gallery" && "bgYellow"
          } list-none text-black`}
      >
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li
        className={`sm:text-[1.2rem] font-semibold tracking-wider border-2 rounded-md border-yellow-500 p-2 text-center ${pathname === "/contact-us" && "bgYellow"
          } list-none text-black`}
      >
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      <button type="button" className="bg-red-500 py-3 font-semibold sm:text-[1.2rem] rounded-md animate-pulse text-white">Admission Open</button>
      {/* User Container */}
      {/* <div>
        {loggedIn && (
          <details className="dropdown">
            <summary className="m-1 btn sm:text-[.95rem]">
              <span>
                <img src="/users/kimya.jpeg" className="rounded-full h-10" alt="Kim Jong Un" />
              </span>
              Dilansh
            </summary>
            <ul className="p-2 shadow-lg shadow-black/40 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a>Profile</a>
              </li>
              <li>
                <button
                  onClick={() => setLoggedIn((prev) => !prev)}
                  type="button"
                  className="bgRed hover:bg-[#FF2400]/80 px-4 py-2 text-white font-semibold"
                >
                  Logout
                </button>
              </li>
            </ul>
          </details>
        )}

        {!loggedIn && (
          <div>
            <button
              onClick={() => setLoggedIn((prev) => !prev)}
              type="button"
              className="px-4 py-2 bg-accent sm:text-[1.2rem] font-semibold rounded-md"
            >
              Sign In
            </button>
          </div>
        )}
      </div> */}
    </section>
  );
}
