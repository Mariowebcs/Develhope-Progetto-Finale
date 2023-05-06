import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCirclePlus,
  faHouse,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = useNavigate();

  const handleIconClick = (page) => {
    setCurrentPage(page);
    switch (page) {
      case "home":
        navigate("/events");
        break;
      case "search":
        navigate("/search");
        break;
      case "addevent":
        navigate("/addevent");
        break;
      default:
        navigate("/events");
    };
  };

  return (
      <div className="absolute bottom-0 flex justify-around w-full h-12 border-solid border-t p-1
        bg-white md:w-[480px]">
        <button onClick={() => handleIconClick("home")}>
          <FontAwesomeIcon icon={faHouse}
          className={currentPage === "home" ? "text-2xl text-sky-900" : "text-2xl text-sky-900 opacity-50"} inverse />
        </button>
        <button onClick={() => handleIconClick("search")}>
          <FontAwesomeIcon icon={faSearch}
          className={currentPage === "search" ? "text-2xl text-sky-900" : "text-2xl text-sky-900 opacity-50"} inverse />
        </button>
        <button onClick={() => handleIconClick("addevent")}>
          <FontAwesomeIcon icon={faCirclePlus}
          className={currentPage === "addevent" ? "text-3xl text-sky-900" : "text-3xl text-sky-900 opacity-50"} inverse />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} className="text-2xl text-sky-900 opacity-50" inverse />
        </button>
        <button>
          <FontAwesomeIcon icon={faBell} className="text-2xl text-sky-900  opacity-50" inverse />
        </button>
      </div>
  );
};

export default MobileMenu;
