import React from "react";
import facebookImage from "../2021_Facebook_icon.svg.png"
import googleImage from "../Google__G__Logo.svg.png"

export const ButtonLinkIcon = ({ icon }) => {
    return (
        <button className="border-2 border-slate-300 rounded-2xl w-4/5 pl-10 pr-10 flex justify-center items-center gap-2"
        type="button">
            {icon === "Facebook" && <img width={25} src={facebookImage} />}
            {icon === "Google" && <img width={25} src={googleImage} />}
            {icon}
            </button>
    )
}