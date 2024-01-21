import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

import { useScrollPosition } from "../hooks/useScrollPosition";
import { pageLinks } from "../libs/data";
import { useState } from "react";

function NavBar() {
  // Show navbar only when user is scrolling down and hide it when the user starts to
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  const scrollPosition = useScrollPosition();

  const [isOpen, setIsOpen] = useState(false);

  // const isSmall = window.matchMedia
  //   ? window.matchMedia("screen and (max-width: 640px)")
  //   : screen.width <= 480;

  const handleClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={classNames(
          scrollPosition > 30 ? "shadow-lg bg-slate-100/90 " : "bg-transparent",
          "sticky top-0 z-20 w-full start-0 bg-white transition-all duration-300 ease-in-out"
        )}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex order-2 md:order-1 items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-900">
              Ai onion
            </span>
          </Link>
          {isOpen ? (
            <IoClose
              onClick={handleClose}
              size={45}
              className="block md:hidden hover:text-slate-950 text-slate-900"
            />
          ) : (
            <IoMenu
              onClick={handleClose}
              size={45}
              className="block md:hidden hover:text-slate-950 text-slate-900"
            />
          )}

          <div
            className="hidden w-full md:block md:w-auto order-2"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col  md:flex-row md:space-x-8 rtl:space-x-reverse ">
              {pageLinks.map((link) => (
                <li key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      " capitalize text-xl block " +
                      (isActive ? "text-red-800" : "text-black")
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* mobile nav */}
      {isOpen && (
        <div className="flex w-2/5 md:hidden fixed top-24 left-5 z-20 rounded-md start-0 transition-all duration-300 bg-orange-950/70 ease-in-out">
          <ul className="font-medium flex flex-col  gap-5 w-full rtl:space-x-reverse ">
            {pageLinks.map((link) => (
              <li key={link.id} className="bg-red-950 w- text-left mx-auto">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    " capitalize text-xl block " +
                    (isActive ? "text-red-800" : "text-black")
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
