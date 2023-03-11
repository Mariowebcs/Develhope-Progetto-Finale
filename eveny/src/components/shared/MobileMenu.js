import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBookmark, faCalendarDays, faCirclePlus, faHouse } from '@fortawesome/free-solid-svg-icons'

export function MobileMenu() {
    return(
        <div className="containerMenu flex justify-center h-16">
            <div className="menu flex justify-around w-56 h-12 BGcolor rounded-full ">
                <button><FontAwesomeIcon icon={faHouse} inverse/></button>
                <button><FontAwesomeIcon icon={faCalendarDays} inverse/></button>
                <button className="text-3xl"><FontAwesomeIcon icon={faCirclePlus} inverse/></button>
                <button><FontAwesomeIcon icon={faBookmark} inverse/></button>
                <button><FontAwesomeIcon icon={faBell} inverse/></button>
            </div>
        </div>
    )
}