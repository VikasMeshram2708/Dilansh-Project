import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function BottomNav() {
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
    },
  ];
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("paht", pathname);
  }, []);
  return (
    <section className="grid gap-2 sm:grid-cols-6 grid-cols-2 items-center max-w-[90%] mx-auto mt-5">
      {navLinks?.map((item) => {
        return (
          <li
            key={item?.id}
            className={`sm:text-[1.2rem] font-semibold tracking-wider border-2 rounded-md border-yellow-500 p-2 text-center ${
              pathname === item?.redirectUrl && "bgYellow"
            } list-none text-black`}
          >
            <NavLink to={item?.redirectUrl}>{item?.title}</NavLink>
          </li>
        );
      })}
      {/* User Container */}
      <div>
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
      </div>
    </section>
  );
}
