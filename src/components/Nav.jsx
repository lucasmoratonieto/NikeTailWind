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
    <header className="padding-x py-8 absolute z-10 w-full">
      {/* Este es el Nav bar pero en pantallas grandes */}

      <nav className=" flex justify-between  max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
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
              ? "shadow-2xl shadow-orange-200 drop-shadow-sm ring-1 ring-slate-900/5 p-5 rounded-lg "
              : ""
          }`}
        >
          <div className="flex justify-end mb-6">
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
            className={`flex flex-col justify-end gap-5
          
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

// ----------------------------------ChatGTP código, he arreglado algunas cosas, pongo explicaciones

// import React, { useState } from "react";
// import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";
// import { navLinks } from "../constants";

// const Nav = () => {
//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <header className="padding-x py-8 absolute z-10 w-full">
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img src={headerLogo} alt="Logo" width={130} height={29} />
//         </a>

//         {/* Visible en pantallas grandes */}
//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-montserrat leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Menú oculto */}
//         <ul
//           className={`flex-1 justify-center items-center gap-16 ${
//             menuVisible ? "" : "hidden"
//           }`}
//         >
//           {navLinks.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-montserrat leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Botón del menú hamburguesa */}
//         <div>
//           <button onClick={toggleMenu}>
//             <img
//               src={hamburger}
//               alt="Hamburger"
//               width={25}
//               height={25}
//               className="hidden max-lg:block"
//             />
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;
