import React from "react";
import avatar1 from "../assets/avatar1.jpg";
import evenylogo from "../assets/evenylogo.png";
import searchicon from "../assets/searchicon.png";
import { useState } from "react";

export function Navbar() {
  // handle menu

  const [showMenu, setShowMenu] = useState(false);

  const handleAvatarClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="NavContainer p-4 h-48 BGcolor w-full">
      {/* Container Logo + User */}
      <div className="NavTop mx-auto  mb-2 flex justify-between">
        {/* Logo */}
        <div className="flex flex-col ">
          <div className="NavLogo w-12 h-12 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover noDrag noSelect"
              src={evenylogo}
              alt="LogoEveny"
            />
          </div>
          <h4 className="text-center font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#6C21A7] to-[#DB2777]">
            Eveny
          </h4>
        </div>

        {/* Avatar */}

        <div
          className="NavAvatar w-12 h-12 rounded-full overflow-hidden noSelect"
          onClick={handleAvatarClick}
          onBlur={handleAvatarClick}
        >
          <img
            className="w-full h-full object-cover noDrag noSelect"
            src={avatar1}
            alt="UserAvatar"
          />
        </div>

        {showMenu && (
          <div className="NavMenu noSelect absolute z-50 top-[70px] right-2 rounded-lg h-20 w-20 bg-neutral-100 bg-opacity-80 shadow-lg">
            <ul className="flex flex-col h-20 justify-around text-center text-xs text-slate-600">
              <li className="hover:bg-neutral-200 bg-opacity-80 rounded-lg py-1">
                <a href="https://www.w3schools.com">Preferenze</a>
              </li>
              <li className="hover:bg-neutral-200 bg-opacity-80 rounded-lg py-1">
                <a href="https://www.w3schools.com">Profilo</a>
              </li>
              <li className="hover:bg-neutral-200 bg-opacity-80 rounded-lg py-1">
                <a href="https://www.w3schools.com">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* SearchBar Title */}
      <div className="NavSearchTitle  mx-auto mb-2  flex justify-center items-center">
        <div>
          <h3 className="text-white text-lg noSelect">Cerca un evento!</h3>
        </div>
      </div>

      {/* SearchBar Text Input */}
      <div className="relative flex justify-center">
        <div className="absolute inset-y-0 mr-52 flex items-center pointer-events-none">
          <img className="searchicon noDrag" src={searchicon} alt="" />
        </div>

        <input
          type="text"
          className="searchInput w-64 h-9 rounded-full  pl-10 py-2 px-4 text-white outline-none focus:outline-[#9333EA] focus:outline-2 placeholder-gray-500 placeholder-opacity-75 SearchBG"
          placeholder="Cerca Evento"
        />
      </div>
    </nav>
  );
}