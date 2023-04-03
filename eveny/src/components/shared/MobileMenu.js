import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookmark,
  faSearch,
  faCirclePlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const navigate = useNavigate();
  const linkAddHandler = () => {
    navigate("/addevent");
  };
  const linkSearchHandler = () => {
    navigate("/search");
  };

  const backHomeHandler = () => {
    navigate("/events");
  };
  return (
    <div className="containerMenu flex justify-center  w-full  bg-white">
      <div className="menu flex justify-around w-[100%] h-12 BGcolor">
        <button onClick={backHomeHandler}>
          <FontAwesomeIcon icon={faHouse} className="text-2xl" inverse />
        </button>
        <button onClick={linkSearchHandler}>
          <FontAwesomeIcon icon={faSearch} className="text-2xl" inverse />
        </button>
        <button className="text-3xl" onClick={linkAddHandler}>
          <FontAwesomeIcon icon={faCirclePlus} className="text-4xl" inverse />
        </button>
        <button>
          <FontAwesomeIcon icon={faBookmark} className="text-2xl" inverse />
        </button>
        <button>
          <FontAwesomeIcon icon={faBell} className="text-2xl" inverse />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
