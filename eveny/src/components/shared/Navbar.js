import React from "react";
import avatar1 from "./assets/avatar1.jpg"
import evenylogo from "./assets/evenylogo.png"
import searchicon from "./assets/searchicon.png"
import { useState } from "react";

export function Navbar() {

  // handle menu

  const [showMenu, setShowMenu] = useState(false);

  const handleAvatarClick = () => {
    setShowMenu(!showMenu);
  };

  // handle placeholder

  const [placeholder, setPlaceholder] = useState("    Cerca evento");

  const handleFocusPlaceholder = () => {
    setPlaceholder('');
  };

  const handleBlurPlaceholder = () => {
    setPlaceholder("    Cerca evento");
  };

  // handle search icon

  const [showSearchIcon, setShowSearchIcon] = useState(true)

  const handleFocusSearchIcon = () => {
    setShowSearchIcon(false)
  }

  const handleBlurSearchIcon = () => {
    setShowSearchIcon(true)
  }
  
  

  return (

    <nav className="NavContainer p-4 h-48 BGcolor w-full">
      
      {/* Container Logo + User */}      
      <div className="NavTop mx-auto  mb-4 flex justify-between">
        <div className="NavLogo w-12 h-12 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover noDrag noSelect" src={evenylogo} alt="LogoEveny" />
        </div>
        
        <div className="NavAvatar w-12 h-12 rounded-full overflow-hidden noSelect"  onClick={handleAvatarClick}>
          <img className="w-full h-full object-cover noDrag noSelect" src={avatar1} alt="UserAvatar" />
        </div>

        {showMenu && (
          <div className="NavMenu noSelect absolute top-[70px] right-2 rounded-lg h-20 w-20 bg-neutral-100 bg-opacity-80 shadow-lg">
            <ul className="flex flex-col h-20 justify-around text-center text-xs text-slate-600">
              <li className="hover:bg-neutral-200 bg-opacity-80 rounded-lg py-1"><a href="https://www.w3schools.com">Preferenze</a></li>
              <li className="hover:bg-neutral-200 bg-opacity-80 rounded-lg py-1"><a href="https://www.w3schools.com">Profilo</a></li>
              <li className="hover:bg-neutral-200 bg-opacity-80 rounded-lg py-1"><a href="https://www.w3schools.com">Logout</a></li>
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
      <div className="NavSearch mx-auto flex justify-center items-center">
        <div className="NavSearch">
          {showSearchIcon && <img className="searchicon noDrag" src={searchicon} alt=""/>}
          <input 
          className="w-64 h-9 rounded-full py-2 px-4 text-white outline-none focus:outline-pink-600 focus:outline-2 placeholder-gray-500 SearchBG" 
          type="text" 
          placeholder={placeholder}
          onBlur={() => {handleBlurPlaceholder(); handleBlurSearchIcon()}} 
          onFocus={() => {handleFocusPlaceholder(); handleFocusSearchIcon()}}
          />
        </div>
      </div>

    </nav>

  );
};