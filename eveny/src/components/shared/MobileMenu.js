import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBookmark,
  faCalendarDays,
  faCirclePlus,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileMenu() {
  return (
    <div className="containerMenu flex justify-center h-16 w-[90%] sticky bottom-0 bg-white">
      <div className="menu flex justify-around w-[95%] h-12 BGcolor rounded-full md:w-[480px] ">
        <button>
          <FontAwesomeIcon icon={faHouse} className="text-2xl" inverse />
        </button>
        <button>
          <FontAwesomeIcon icon={faCalendarDays} className="text-2xl" inverse />
        </button>
        <button className="text-3xl">
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="text-4xl bg-[#ff0066] rounded-full p-4 relative bottom-[0.7rem]"
            inverse
          />
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
}
