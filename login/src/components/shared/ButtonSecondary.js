import React from "react";

const ButtonSecondary = (props) => {
  return (
    <button  className="inline-flex items-center rounded-lg border border-gray-300
     bg-sky-900 px-4 py-2 text-center text-sm font-bold text-white hover:bg-[#FF0066]
      hover:text-white">{props.label}</button>
  );
};

export default ButtonSecondary;