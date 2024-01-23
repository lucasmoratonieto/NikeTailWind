import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="padding-x py-8 z-20 w-full sticky top-0 bg-white">
      <nav className=" flex justify-between  max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="relative pb-5"
          />
        </a>

        {/* Este es el Nav bar pero en pantallas grandes */}
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Este es el Nav Bar escondido que aparece cuando clickas hamburguesa */}

        <div
          className={`${
            menuVisible
              ? "shadow-2xl shadow-orange-200 drop-shadow-sm ring-1 ring-slate-900/5 p-5 rounded-lg  z-20 bg-white absolute ml-[75%] hidden  max-lg:block top-3 right-11"
              : ""
          }`}
        >
          <div className="flex justify-end mb-6 z-20 ">
            <button onClick={toggleMenu}>
              <img
                src={hamburger}
                alt="Hamburger"
                width={25}
                height={25}
                className=" hidden  max-lg:block "
              />
            </button>
          </div>

          {/* Este es el Nav Bar escondido que aparece cuando clickas hamburguesa */}
          <ul
            className={`flex flex-col justify-end gap-5 min-w-[5.45rem]
          
          ${menuVisible ? "" : "hidden"}`}
          >
            {navLinks.map((item) => (
              <li key={item.label} className="text-right">
                <a
                  href={item.href}
                  className=" fonrt-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
